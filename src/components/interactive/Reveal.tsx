'use client';

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './Reveal.module.css';

/**
 * Reveal — first-entry viewport reveal primitive (design-system §6.8.4,
 * component-inventory §4.10, ADR-001).
 *
 * Fade + ≤20px rise, 250–350ms `--ease-out`, fires once on any intersection,
 * unobserves after firing.
 *
 * Safety contracts (binding, qa-checklist §2.10):
 * - No-JS: the server HTML renders fully visible — the pre-reveal class is
 *   applied by this script (layout effect, before paint), never server-side.
 * - CLS: `transform`/`opacity` only; flow position and dimensions are
 *   identical pre/post reveal.
 * - Reduced motion: renders the final state instantly (no pre-reveal).
 */

type RevealState = 'idle' | 'hidden' | 'shown';

// useLayoutEffect warns during SSR; use the isomorphic variant.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms (max 2 siblings × 90ms per the budget). */
  delay?: number;
  /** Element to render (default 'div'). */
  as?: ElementType;
  className?: string;
  /** Standard HTML attributes forwarded to the rendered element. */
  'aria-label'?: string;
  id?: string;
}

export function Reveal({
  children,
  delay = 0,
  as,
  className,
  ...rest
}: RevealProps) {
  const Tag: ElementType = as ?? 'div';
  const ref = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const [state, setState] = useState<RevealState>('idle');

  useIsomorphicLayoutEffect(() => {
    if (reduced) {
      // Guarantee visibility at final state (covers mid-session toggles).
      setState('idle');
      return;
    }

    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      return; // stay idle = fully visible
    }

    // Pre-reveal class applied by this script only — never the server HTML.
    setState('hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          setState('shown');
        }
      },
      // Any intersection counts. A percentage threshold starves elements taller
      // than the viewport — a 20% threshold can never be satisfied by a block
      // five viewports tall, which would hide its content permanently. The
      // negative bottom margin keeps the reveal from firing on the very first
      // pixel instead.
      { threshold: 0, rootMargin: '0px 0px -80px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  const stateClass = state === 'idle' ? undefined : styles[state];
  const combined = [className, stateClass].filter(Boolean).join(' ');

  return (
    <Tag
      ref={ref}
      className={combined}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
