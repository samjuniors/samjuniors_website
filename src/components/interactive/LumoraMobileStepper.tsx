import {
  LUMORA_WORKFLOW_STEPS,
  LUMORA_WORKFLOW_STEP_ORDER,
} from '@/content/lumora-workflow';
import styles from './LumoraMobileStepper.module.css';

/**
 * LumoraMobileStepper — the mobile-native composition of the Lumora workflow
 * walkthrough.
 *
 * One meaningful idea per step: what happens, who acts, and where the decision
 * sits. The desktop fact ledger is deliberately not repeated here — four
 * stacked specification tables is exactly what this composition exists to
 * avoid.
 *
 * Server component: no JS, no measurement, anchor navigation only (≥44px
 * targets, operable with and without JavaScript).
 */
export function LumoraMobileStepper() {
  return (
    <div className={styles.stepper}>
      <nav className={styles.stepperNav} aria-label="Lumora workflow steps">
        {LUMORA_WORKFLOW_STEP_ORDER.map((key) => {
          const step = LUMORA_WORKFLOW_STEPS[key];
          return (
            <a
              key={key}
              href={`#lumora-step-${step.order}`}
              className={styles.stepperTab}
            >
              <span className={styles.stepperTabNum}>{step.order}</span>
              <span>{step.label}</span>
            </a>
          );
        })}
      </nav>

      {LUMORA_WORKFLOW_STEP_ORDER.map((key) => {
        const step = LUMORA_WORKFLOW_STEPS[key];
        return (
          <article
            key={key}
            id={`lumora-step-${step.order}`}
            className={styles.segment}
            aria-labelledby={`lumora-step-${key}-title`}
          >
            <header className={styles.segmentHeader}>
              <span className={styles.segmentNum}>{step.order}</span>
              <span className={styles.segmentActor}>{step.actor}</span>
            </header>

            <h3 id={`lumora-step-${key}-title`} className={styles.segmentTitle}>
              {step.headline}
            </h3>
            <p className={styles.segmentNarrative}>{step.narrative}</p>
            <p className={styles.segmentDecision}>{step.decision}</p>

            <footer className={styles.segmentStatus}>
              <span className={styles.segmentHandoffLabel}>Then</span>
              <span className={styles.segmentHandoff}>{step.handoff}</span>
            </footer>
          </article>
        );
      })}
    </div>
  );
}
