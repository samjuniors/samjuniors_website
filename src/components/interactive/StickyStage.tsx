'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from 'react';
import {
  LUMORA_DEMO_STEP_ORDER,
  type LumoraDemoStepId,
} from '@/content/lumora-demo';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './StickyStage.module.css';

/**
 * StickyStage — the Lumora signature-scene mechanism (design-system §6.8.5,
 * component-inventory §4.12, ADR-001 H4/H5).
 *
 * Two modes over the shared content/state model:
 * - 'scroll' (homepage): the workbench frame is wrapped in a sticky stage;
 *   phase sentinels inside the tall container drive an IntersectionObserver
 *   state machine; native scrolling stays 100% authoritative (observed,
 *   never captured); explicit tap controls always override and re-sync the
 *   viewport to the matching sentinel.
 * - 'explore' (/products/lumora, reduced motion): tap-only phase switching,
 *   normal document flow, no sticky, no scroll linkage.
 *
 * Safety contracts (binding, qa-checklist §2.10):
 * - No-JS: the sticky geometry is applied only after this script mounts
 *   (data-scroll-active) — server HTML keeps normal flow, first phase,
 *   controls in the DOM.
 * - Reduced motion: JS never activates scroll linkage, and the CSS media
 *   query collapses the geometry as a second defense line.
 * - Zero scroll-jacking: no scroll listeners at all; observation only.
 */

export interface StickyStageChildrenApi {
  /** Active phase id (from LUMORA_DEMO_STEP_ORDER). */
  phase: LumoraDemoStepId;
  /** Zero-based index of the active phase. */
  phaseIndex: number;
  /** Phase count (tabs/indicator render). */
  phaseCount: number;
  /** Explicit tap override — sets the phase and re-syncs the viewport. */
  selectPhase: (id: LumoraDemoStepId) => void;
}

export interface StickyStageProps {
  mode?: 'scroll' | 'explore';
  /** Phase order (defaults to LUMORA_DEMO_STEP_ORDER from the content layer). */
  phaseOrder?: readonly LumoraDemoStepId[];
  /**
   * The workbench frame as a function of the phase state (the existing
   * LumoraStage body re-composed — component-inventory §4.12).
   */
  children: (api: StickyStageChildrenApi) => ReactNode;
}

/** Viewport line (fraction of innerHeight) that marks the active phase. */
const PHASE_TRIGGER_LINE = 0.4;

const subscribeNoop = () => () => undefined;

/** Hydration-aware JS-mounted signal: false on the server and during the hydration render, true once the client store is read. */
function useIsClient(): boolean {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
}

export function StickyStage({ mode = 'scroll', phaseOrder, children }: StickyStageProps) {
  const order: readonly LumoraDemoStepId[] = phaseOrder ?? LUMORA_DEMO_STEP_ORDER;
  const phaseCount = order.length;

  const reduced = usePrefersReducedMotion();
  const scrollLinked = mode === 'scroll' && !reduced;

  const [phaseIndex, setPhaseIndex] = useState(0);
  // Tap-override signal: { idx, nonce } — a new object per explicit selection
  // so the re-sync effect below runs even when the same phase is re-picked.
  const [tapTarget, setTapTarget] = useState<{ idx: number; nonce: number } | null>(null);
  const phaseIndexRef = useRef(0);

  // JS-mounted signal (hydration-aware): sticky geometry applies only once
  // the client store is read — server HTML / no-JS keeps normal flow.
  const mounted = useIsClient();

  const sentinelRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Keep the machine's notion of the current phase in sync with state
  // (covers scroll-driven and tap-driven changes alike). Refs are owned by
  // effects and event flow, never by render.
  useEffect(() => {
    phaseIndexRef.current = phaseIndex;
  }, [phaseIndex]);

  // IntersectionObserver state machine over the phase sentinels.
  useEffect(() => {
    if (!mounted || !scrollLinked) return;
    // jsdom/old-environment robustness: without IO the scene simply stays
    // tap-driven (state and controls remain fully functional).
    if (typeof IntersectionObserver === 'undefined') return;
    const sentinels = sentinelRefs.current.filter(
      (el): el is HTMLDivElement => el !== null,
    );
    if (sentinels.length !== phaseCount) return;

    // The active phase is the sentinel covering the trigger line. Computed
    // from fresh geometry on every (browser-batched) IO callback — no scroll
    // listeners, no rAF loops, zero scroll capture.
    const lineAt = () => window.innerHeight * PHASE_TRIGGER_LINE;

    const applyFromGeometry = () => {
      const line = lineAt();
      let active = -1;
      for (let i = 0; i < sentinels.length; i++) {
        const rect = sentinels[i].getBoundingClientRect();
        if (rect.top <= line && rect.bottom >= line) {
          active = i;
          break;
        }
      }
      if (active >= 0 && active !== phaseIndexRef.current) {
        phaseIndexRef.current = active;
        setPhaseIndex(active);
      }
    };

    // Dense thresholds → callbacks fire as sentinels sweep the root band.
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const observer = new IntersectionObserver(
      (entries) => {
        // Only act when a sentinel actually intersects the observed band;
        // entries alone don't carry full geometry, so re-derive from rects.
        if (entries.some((entry) => entry.isIntersecting)) {
          applyFromGeometry();
        }
      },
      { rootMargin: '0px 0px -55% 0px', threshold: thresholds },
    );
    sentinels.forEach((el) => observer.observe(el));

    // Establish the correct phase for the current scroll position once.
    applyFromGeometry();

    return () => observer.disconnect();
  }, [mounted, scrollLinked, phaseCount]);

  // Explicit tap override, part 1 (always present, always enabled — ADR-001
  // H5): the selection itself is pure state; the viewport re-sync below is
  // the effect so state and viewport never disagree.
  const selectPhase = useCallback(
    (id: LumoraDemoStepId) => {
      const idx = order.indexOf(id);
      if (idx < 0) return;
      setPhaseIndex(idx);
      setTapTarget((prev) => ({ idx, nonce: (prev?.nonce ?? 0) + 1 }));
    },
    [order],
  );

  // Explicit tap override, part 2: re-sync the viewport to the matching
  // sentinel (scroll-linked mode only; explore mode is pure state).
  useEffect(() => {
    if (!tapTarget || !mounted || !scrollLinked) return;
    const sentinel = sentinelRefs.current[tapTarget.idx];
    if (sentinel && typeof sentinel.scrollIntoView === 'function') {
      sentinel.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'center',
      });
    }
  }, [tapTarget, mounted, scrollLinked, reduced]);

  const phase = order[phaseIndex];

  return (
    <div
      className={styles.root}
      data-scroll-active={mounted && scrollLinked ? 'true' : 'false'}
      style={{ '--phase-count': phaseCount } as CSSProperties}
    >
      <div className={styles.tallContainer}>
        <div className={styles.stickyFrame}>
          {children({ phase, phaseIndex, phaseCount, selectPhase })}
        </div>
        {order.map((id, i) => (
          <div
            key={id}
            ref={(el) => {
              sentinelRefs.current[i] = el;
            }}
            className={styles.sentinel}
            data-phase-index={i}
            style={{
              top: `calc(${i} * 100% / ${phaseCount})`,
              height: `calc(100% / ${phaseCount})`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
