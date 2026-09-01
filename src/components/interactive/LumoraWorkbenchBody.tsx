'use client';

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type RefObject,
} from 'react';
import {
  LUMORA_DEMO_STEPS,
  LUMORA_DEMO_STEP_ORDER,
  type LumoraDemoStepId,
} from '@/content/lumora-demo';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { type StickyStageChildrenApi } from './StickyStage';
import { LumoraPhaseVisual } from './LumoraPhaseVisual';
import styles from './LumoraStage.module.css';

/**
 * LumoraWorkbenchBody — the cinematic intelligence workbench frame shared by
 * both ADR-001 H4 presentation modes (component-inventory §4.15).
 *
 * Extracted verbatim from the former LumoraStage body; state ownership stays
 * with StickyStage (§4.12) — this component is the frame/body as a function
 * of the phase state. Frame is fixed between phases; only state content
 * transitions (§6.8.5 state continuity). Consumers:
 * - Homepage Scene 03 (LumoraStage, scroll-linked sticky reveal).
 * - `/products/lumora` deep-dive exhibit (LumoraDemoExplore, tap-only).
 *
 * Copy authority: docs/website/copy.md §4 — every string below is registered
 * and rendered verbatim (string parity enforced by qa-checklist §2.8).
 */

// useLayoutEffect warns during SSR; use the isomorphic variant.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/** Phase-change cross-fade: 320ms = --duration-scene (tokens.css, §6.8.2 scene-transition budget). */
const PHASE_SWAP_DURATION_MS = 320;
const PHASE_SWAP_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function LumoraWorkbenchBody({
  phase,
  phaseIndex,
  phaseCount,
  selectPhase,
}: StickyStageChildrenApi) {
  const reduced = usePrefersReducedMotion();
  const current = LUMORA_DEMO_STEPS[phase];
  const stepKeys = LUMORA_DEMO_STEP_ORDER;

  // Phase-change cross-fades (§6.8.2 scene transitions: transform/opacity
  // only, 320ms). Staggered regions animate in as the phase state lands;
  // Web Animations API is skipped entirely under reduced motion (§6.8.8).
  const hudRef = usePhaseSwap<HTMLDivElement>(phase, 50, !reduced);
  const centerRef = usePhaseSwap<HTMLDivElement>(phase, 0, !reduced);
  const sourcesRef = usePhaseSwap<HTMLUListElement>(phase, 100, !reduced);
  const diagnosticsRef = usePhaseSwap<HTMLDivElement>(phase, 150, !reduced);
  const statusRef = usePhaseSwap<HTMLDivElement>(phase, 200, !reduced);

  const handleNext = () =>
    selectPhase(stepKeys[(phaseIndex + 1) % phaseCount]);
  const handlePrev = () =>
    selectPhase(stepKeys[(phaseIndex - 1 + phaseCount) % phaseCount]);

  return (
    <div className={styles.workbench} role="region" aria-label="Lumora Intelligence Cycle Demonstration">
      {/* Top Window Chrome with Step Progression Tabs */}
      <div className={styles.windowChrome}>
        <div className={styles.windowBrand}>
          <div className={styles.windowDots} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <div className={styles.windowTitle}>
            <span className={styles.titleIcon}>◈</span>
            <span>lumora_os // academic_intelligence_loop</span>
          </div>
        </div>

        <div className={styles.stepTabs} role="tablist" aria-label="Academic Intelligence Progression">
          {stepKeys.map((key) => {
            const item = LUMORA_DEMO_STEPS[key];
            const isSelected = phase === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`${styles.tabBtn} ${isSelected ? styles.tabBtnActive : ''}`}
                onClick={() => selectPhase(key)}
              >
                <span className={styles.tabNum}>{item.stepNum}</span>
                <span>{item.tabLabel.replace(/^\d+\.\s*/, '')}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Workbench Body */}
      <div className={styles.workbenchBody}>
        {/* Column 1: Academic Sources Hierarchy */}
        <aside className={styles.sourcesPanel} aria-label="Academic Sources and Inputs">
          <div className={styles.panelHeader}>
            <span>Academic Context</span>
            <span className={styles.panelBadge}>Resolved</span>
          </div>
          <ul ref={sourcesRef} className={styles.sourcesList}>
            {current.sourceContext.map((item) => (
              <li key={item.title} className={item.active ? styles.sourceItemActive : styles.sourceItem}>
                <div className={styles.sourceDetails}>
                  <span className={styles.sourceTitle}>{item.title}</span>
                  <span className={styles.sourceSubtitle}>{item.subtitle}</span>
                </div>
                <span className={styles.sourceTag}>{item.tag}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Column 2: Center Demonstration Stage */}
        <main className={styles.canvasArea} aria-label="Intelligence Demonstration Stage">
          {/* Viewport Top HUD */}
          <div ref={hudRef} className={styles.canvasHud}>
            <span className={styles.hudBadge}>{current.centerGraphic.statusBadge}</span>
            <span className={styles.hudInfo}>{current.centerGraphic.stageSubtitle}</span>
          </div>

          {/* Central Graphic Area — phase state (fixed frame, changing state) */}
          <div ref={centerRef} className={styles.canvasCenter}>
            <div className={styles.canvasGrid} aria-hidden="true" />
            <LumoraPhaseVisual phase={phase} />

            {/* Explanation Caption */}
            <div className={styles.explanationArea}>
              <div className={styles.explanationBadge}>{current.badge}</div>
              <h3 className={styles.explanationTitle}>{current.headline}</h3>
              <p className={styles.explanationText}>{current.narrative}</p>
            </div>
          </div>

          {/* Viewport Bottom Status Bar with Step Navigation Controls */}
          <div className={styles.canvasFooter}>
            <div ref={statusRef} className={styles.statusInfo}>
              <span className={styles.engineTag}>{current.bottomStatus.engineState}</span>
              <span className={styles.privacyTag}>{current.bottomStatus.privacy}</span>
            </div>
            <div className={styles.stepControls}>
              <button
                type="button"
                onClick={handlePrev}
                className={styles.controlBtn}
                aria-label="Previous Step"
              >
                ←
              </button>
              <span className={styles.stepIndicator} aria-live="polite">
                {phaseIndex + 1} / {phaseCount}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className={styles.controlBtnPrimary}
                aria-label="Next Step"
              >
                Next Step →
              </button>
            </div>
          </div>
        </main>

        {/* Column 3: Grounded Diagnostics Inspector */}
        <aside className={styles.diagnosticsPanel} aria-label="Academic Diagnostics">
          <div className={styles.panelHeader}>
            <span>Diagnostics</span>
            <span className={styles.panelBadge}>Grounded</span>
          </div>
          <div ref={diagnosticsRef} className={styles.diagnosticsList}>
            {current.diagnostics.map((diag) => (
              <div key={diag.label} className={styles.diagItem}>
                <span className={styles.diagLabel}>{diag.label}</span>
                <span className={styles.diagValue}>{diag.value}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

/**
 * Phase-swap cross-fade hook: on a phase change (never on mount), the target
 * element fades + rises via the Web Animations API — transform/opacity only,
 * fill 'backwards' so staggered regions stay at the first keyframe during
 * their delay. Skipped under reduced motion and when WAAPI is unavailable;
 * skipped on the mount pass so server HTML paints statically (§6.8.5/§6.8.8).
 */
function usePhaseSwap<T extends HTMLElement>(
  dep: LumoraDemoStepId,
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
