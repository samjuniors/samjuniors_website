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
  LUMORA_WORKFLOW_STEP_ORDER,
  type LumoraWorkflowStepId,
} from '@/content/lumora-workflow';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import styles from './StickyStage.module.css';

/**
 * StickyStage — scroll-phase stage mechanism for the Lumora workflow walkthrough.
 *
 * Two modes over the shared content/state model:
 * - 'scroll': the stage body is wrapped in a sticky frame; phase sentinels
 *   inside the tall container drive an IntersectionObserver state machine;
 *   native scrolling stays 100% authoritative (observed, never captured);
 *   explicit tap controls always override and re-sync the viewport to the
 *   matching sentinel.
 * - 'explore' (reduced motion): tap-only phase switching, normal document
 *   flow, no sticky, no scroll linkage.
 *
 * Safety contracts (binding):
 * - No-JS: the sticky geometry is applied only after this script mounts
 *   (data-scroll-active) — server HTML keeps normal flow, first phase,
 *   controls in the DOM.
 * - Reduced motion: JS never activates scroll linkage, and the CSS media
 *   query collapses the geometry as a second defense line.
 * - Zero scroll-jacking: no scroll listeners at all; observation only.
 */

export interface StickyStageChildrenApi {
  /** Active phase id (from LUMORA_WORKFLOW_STEP_ORDER). */
  phase: LumoraWorkflowStepId;
  /** Zero-based index of the active phase. */
  phaseIndex: number;
  /** Phase count (tabs/indicator render). */
  phaseCount: number;
  /** Explicit tap override — sets the phase and re-syncs the viewport. */
  selectPhase: (id: LumoraWorkflowStepId) => void;
}

export interface StickyStageProps {
  mode?: 'scroll' | 'explore';
  /** Phase order (defaults to LUMORA_WORKFLOW_STEP_ORDER from the content layer). */
  phaseOrder?: readonly LumoraWorkflowStepId[];
  /** The stage body as a function of the phase state. */
  children: (api: StickyStageChildrenApi) => ReactNode;
}

/** Viewport line (fraction of innerHeight) that marks the active phase. */
const PHASE_TRIGGER_LINE = 0.4;

/**
 * Phase pacing weights (design-system §6.8.5): with four phases the stable
 * (fully pinned) windows follow a deliberate accelerando→payoff curve —
 *   phase 1 = 0.5 × reference (brisk setup: the stage arrival already
 *             previews the frame, so the first phase needs no full window),
 *   phases 2–3 = 1.0 × reference (the argument),
 *   phase 4 = 1.25 × reference (the payoff — the longest stable window).
 * Entry/arrival travel and exit/departure travel are compensated separately
 * (see the pacing-geometry effect). Sum of weights = 3.75.
 */
const PHASE_PACING_WEIGHTS = [0.5, 1, 1, 1.25] as const;
const PACING_WEIGHT_SUM = 3.75;

/** Minimum stable window before falling back to equal bands (tiny viewports). */
const MIN_STABLE_WINDOW_PX = 240;

const subscribeNoop = () => () => undefined;

/** Hydration-aware JS-mounted signal: false on the server and during the hydration render, true once the client store is read. */
function useIsClient(): boolean {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
}

/**
 * Sentinel geometry for phase i: rebalanced pixel bands when the pacing
 * measurement has landed (script-only, scroll-linked mode), equal viewport
 * fractions otherwise (server HTML / no-JS / fallback — the unchanged
 * contract). Pure function: no render-scope accumulation.
 */
function sentinelStyle(
  i: number,
  phaseCount: number,
  bands: number[] | null,
): CSSProperties {
  if (bands && bands.length === phaseCount) {
    const top = bands.slice(0, i).reduce((a, b) => a + b, 0);
    return { top: `${top}px`, height: `${bands[i]}px` };
  }
  return {
    top: `calc(${i} * 100% / ${phaseCount})`,
    height: `calc(100% / ${phaseCount})`,
  };
}

export function StickyStage({ mode = 'scroll', phaseOrder, children }: StickyStageProps) {
  const order: readonly LumoraWorkflowStepId[] = phaseOrder ?? LUMORA_WORKFLOW_STEP_ORDER;
  const phaseCount = order.length;

  const reduced = usePrefersReducedMotion();
  const scrollLinked = mode === 'scroll' && !reduced;

  const [phaseIndex, setPhaseIndex] = useState(0);
  // Tap-override signal: { idx, nonce } — a new object per explicit selection
  // so the re-sync effect below runs even when the same phase is re-picked.
  const [tapTarget, setTapTarget] = useState<{ idx: number; nonce: number } | null>(null);
  const phaseIndexRef = useRef(0);

  // Rebalanced band geometry (px heights per phase) or null = equal bands.
  // Applied only by script in scroll-linked mode — the server HTML / no-JS /
  // fallback composition keeps the equal-fraction geometry.
  const [bands, setBands] = useState<number[] | null>(null);

  const tallRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

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

  // Phase pacing geometry (design-system §6.8.5): measure the real stage
  // geometry and rebalance the sentinel bands so every phase gets an
  // intentional STABLE (fully pinned) window — eliminating the accidental
  // imbalance where the pre-pin arrival travel inflated phase 1's window and
  // the frame-departure travel truncated phase 4. The total container height
  // (phases × 100vh) is never changed — only the band boundaries inside it.
  // Recomputed on viewport/frame resize; a resize listener observes layout,
  // not scroll (§6.8.8 still holds: zero scroll capture).
  useEffect(() => {
    if (!mounted || !scrollLinked) return;
    if (phaseCount !== 4) return; // pacing weights are defined for 4 phases
    const tall = tallRef.current;
    const frame = frameRef.current;
    if (!tall || !frame) return;

    const measureBands = () => {
      const vh = window.innerHeight;
      const containerH = tall.getBoundingClientRect().height;
      // getComputedStyle resolves the sticky `top` clamp to its used px value.
      const pinTop = parseFloat(getComputedStyle(frame).top) || 0;
      const frameH = frame.getBoundingClientRect().height;
      const triggerLine = vh * PHASE_TRIGGER_LINE;

      // Travel during which a phase is active but the frame is not yet (or
      // no longer) pinned — credited to the adjacent scene transition,
      // not to a phase's reading time.
      const entryComp = Math.max(0, Math.min(triggerLine - pinTop, containerH / 2));
      const exitComp = Math.max(
        0,
        Math.min(pinTop + frameH - triggerLine, containerH / 2),
      );

      const reference = (containerH - entryComp - exitComp) / PACING_WEIGHT_SUM;
      if (reference < MIN_STABLE_WINDOW_PX) {
        setBands(null); // tiny viewport: equal bands remain honest
        return;
      }

      const next: number[] = PHASE_PACING_WEIGHTS.map((w, i) =>
        (i === 0 ? entryComp : i === phaseCount - 1 ? exitComp : 0) + w * reference,
      );
      // Absorb rounding drift into the final band; guard degenerate values.
      next[phaseCount - 1] = containerH - next.slice(0, -1).reduce((a, b) => a + b, 0);
      if (next.some((h) => h <= 0)) {
        setBands(null);
        return;
      }
      setBands((prev) =>
        prev &&
        prev.length === next.length &&
        prev.every((h, i) => Math.abs(h - next[i]) < 1)
          ? prev
          : next,
      );
    };

    measureBands();

    let raf = 0;
    const scheduleMeasure = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measureBands);
    };
    window.addEventListener('resize', scheduleMeasure);
    const ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(scheduleMeasure)
        : null;
    ro?.observe(frame);
    return () => {
      window.removeEventListener('resize', scheduleMeasure);
      ro?.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [mounted, scrollLinked, phaseCount]);

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

    // Establish the correct phase for the current scroll position once
    // (re-run when the pacing bands land/change so the derived state matches
    // the rebalanced geometry immediately).
    applyFromGeometry();

    return () => observer.disconnect();
  }, [mounted, scrollLinked, phaseCount, bands]);

  // Explicit tap override, part 1 (always present, always enabled): the
  // selection itself is pure state; the viewport re-sync below is the effect
  // so state and viewport never disagree.
  const selectPhase = useCallback(
    (id: LumoraWorkflowStepId) => {
      const idx = order.indexOf(id);
      if (idx < 0) return;
      setPhaseIndex(idx);
      setTapTarget((prev) => ({ idx, nonce: (prev?.nonce ?? 0) + 1 }));
    },
    [order],
  );

  // Explicit tap override, part 2: re-sync the viewport to the matching
  // sentinel (scroll-linked mode only; explore mode is pure state).
  //
  // The scroll target is derived from PHASE_TRIGGER_LINE — the same line the
  // observer above uses to decide the active phase — rather than from
  // scrollIntoView({ block: 'center' }). Centring a band is not equivalent:
  // for a band taller than the viewport the browser aligns an edge instead,
  // which can leave the trigger line inside a *neighbouring* band, so the
  // observer immediately overrode the tap and the control appeared to jump
  // back a step. Landing the line a measured distance inside the target band
  // makes the tap and the state machine agree.
  useEffect(() => {
    if (!tapTarget || !mounted || !scrollLinked) return;
    const sentinel = sentinelRefs.current[tapTarget.idx];
    if (!sentinel || typeof window.scrollTo !== 'function') return;

    const rect = sentinel.getBoundingClientRect();
    const line = window.innerHeight * PHASE_TRIGGER_LINE;
    // delta ∈ [rect.top - line, rect.bottom - line] keeps the line inside the
    // band; bias into the band so there is reading room before the next one.
    const into = Math.min(rect.height / 2, window.innerHeight * 0.25);
    const delta = rect.top - line + into;

    window.scrollTo({
      top: Math.max(0, window.scrollY + delta),
      behavior: reduced ? 'auto' : 'smooth',
    });
  }, [tapTarget, mounted, scrollLinked, reduced]);

  const phase = order[phaseIndex];

  return (
    <div
      className={styles.root}
      data-scroll-active={mounted && scrollLinked ? 'true' : 'false'}
      style={{ '--phase-count': phaseCount } as CSSProperties}
    >
      <div ref={tallRef} className={styles.tallContainer}>
        <div ref={frameRef} className={styles.stickyFrame}>
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
            style={sentinelStyle(i, phaseCount, bands)}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
