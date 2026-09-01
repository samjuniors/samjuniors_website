'use client';

import {
  LUMORA_WORKFLOW_STEPS,
  LUMORA_WORKFLOW_STEP_ORDER,
} from '@/content/lumora-workflow';
import { usePhaseSwap } from '@/hooks/usePhaseSwap';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { StickyStageChildrenApi } from './StickyStage';
import styles from './LumoraWorkflowBody.module.css';

/**
 * LumoraWorkflowBody — the editorial walkthrough of Lumora's real assessment
 * workflow, rendered inside StickyStage (scroll-linked or explore mode).
 *
 * This is deliberately an explanation surface in the SamJuniors visual
 * environment — not a reconstruction of Lumora's product interface. Real
 * product interface evidence belongs in the evidence surface
 * (LumoraEvidence), which uses actual captures of the product.
 */
export function LumoraWorkflowBody({
  phase,
  phaseIndex,
  phaseCount,
  selectPhase,
}: StickyStageChildrenApi) {
  const reduced = usePrefersReducedMotion();
  const animate = !reduced;
  const step = LUMORA_WORKFLOW_STEPS[phase];

  const mainRef = usePhaseSwap<HTMLDivElement>(phase, 0, animate);
  const detailRef = usePhaseSwap<HTMLDivElement>(phase, 90, animate);
  const footRef = usePhaseSwap<HTMLDivElement>(phase, 150, animate);

  const goTo = (offset: number) => {
    const next = phaseIndex + offset;
    if (next < 0 || next >= phaseCount) return;
    selectPhase(LUMORA_WORKFLOW_STEP_ORDER[next]);
  };

  return (
    <div className={styles.frame}>
      <div className={styles.stepRow} role="group" aria-label="Lumora workflow steps">
        {LUMORA_WORKFLOW_STEP_ORDER.map((id) => {
          const item = LUMORA_WORKFLOW_STEPS[id];
          const active = id === phase;
          return (
            <button
              key={id}
              type="button"
              className={active ? styles.stepBtnActive : styles.stepBtn}
              aria-pressed={active}
              onClick={() => selectPhase(id)}
            >
              <span className={styles.stepBtnNum}>{item.order}</span>
              <span className={styles.stepBtnLabel}>{item.label}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {`Step ${phaseIndex + 1} of ${phaseCount}: ${step.label}`}
      </p>

      <div className={styles.body}>
        <div ref={mainRef} className={styles.main}>
          <div className={styles.actorRow}>
            <span className={styles.order}>{step.order}</span>
            <span className={styles.actorDivider}>/</span>
            <span className={styles.actor}>{step.actor}</span>
          </div>
          <h3 className={styles.headline}>{step.headline}</h3>
          <p className={styles.narrative}>{step.narrative}</p>
          <p className={styles.decision}>{step.decision}</p>
        </div>

        <div ref={detailRef} className={styles.detailWrap}>
          <dl className={styles.detail}>
            {step.detail.map((row) => (
              <div key={row.label} className={styles.detailRow}>
                <dt className={styles.detailKey}>{row.label}</dt>
                <dd className={styles.detailVal}>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div ref={footRef} className={styles.footer}>
        <p className={styles.handoff}>
          <span className={styles.handoffLabel}>Then</span>
          {step.handoff}
        </p>
        <div className={styles.controls}>
          <span className={styles.indicator}>
            {phaseIndex + 1} / {phaseCount}
          </span>
          {/* aria-disabled, not disabled: the control stays focusable at the
              ends of the range so keyboard focus is never dropped to <body>.
              goTo() already ignores out-of-range offsets. */}
          <button
            type="button"
            className={styles.controlBtn}
            onClick={() => goTo(-1)}
            aria-disabled={phaseIndex === 0}
            aria-label="Previous workflow step"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className={styles.controlBtn}
            onClick={() => goTo(1)}
            aria-disabled={phaseIndex === phaseCount - 1}
            aria-label="Next workflow step"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
