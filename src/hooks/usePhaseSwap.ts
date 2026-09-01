'use client';

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type RefObject,
} from 'react';

/**
 * Phase-swap cross-fade hook: on a phase change (never on mount), the target
 * element fades + rises via the Web Animations API — transform/opacity only,
 * fill 'backwards' so staggered regions stay at the first keyframe during
 * their delay. Skipped under reduced motion (via `enabled`) and when WAAPI is
 * unavailable; skipped on the mount pass so server HTML paints statically.
 */

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const PHASE_SWAP_DURATION_MS = 320;
const PHASE_SWAP_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function usePhaseSwap<T extends HTMLElement>(
  dep: string,
  delayMs: number,
  enabled: boolean,
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const firstRun = useRef(true);

  useIsomorphicLayoutEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const el = ref.current;
    if (!el || !enabled) return;
    if (typeof el.animate !== 'function') return;

    el.animate(
      [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      {
        duration: PHASE_SWAP_DURATION_MS,
        delay: delayMs,
        easing: PHASE_SWAP_EASING,
        fill: 'backwards',
      },
    );
  }, [dep, delayMs, enabled]);

  return ref;
}
