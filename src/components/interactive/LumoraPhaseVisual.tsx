import type { LumoraDemoStepId } from '@/content/lumora-demo';
import styles from './LumoraStage.module.css';

/**
 * LumoraPhaseVisual — the four center-stage demonstration visuals, rendered
 * per phase (content: src/content/lumora-demo.ts · copy authority: copy.md
 * §4.1–§4.4 — strings verbatim, no new copy).
 *
 * Shared by the desktop workbench (active phase) and the mobile vertical
 * stepper (each segment) so both compositions stay in exact content parity
 * (design-system §6.8.7, qa-checklist §2.10.6).
 */

const phaseByKey = {
  context: ContextIngestVisual,
  understanding: UnderstandingVisual,
  advisory: AdvisoryVisual,
  action: ActionVisual,
} as const;

export function LumoraPhaseVisual({ phase }: { phase: LumoraDemoStepId }) {
  const Visual = phaseByKey[phase];
  return <Visual />;
}

function ContextIngestVisual() {
  return (
    <div className={styles.visualCard}>
      <div className={styles.cardHeaderRow}>
        <span className={styles.cardTitle}>Resolved Academic Signal</span>
        <span className={styles.cardTag}>Active Stream</span>
      </div>
      <div className={styles.timelineRows}>
        <div className={styles.timelineRow}>
          <span className={styles.weekLabel}>CS 3410</span>
          <div className={styles.barItem}>Distributed Systems · Lab 3 &amp; Consensus Readings</div>
        </div>
        <div className={styles.timelineRow}>
          <span className={styles.weekLabel}>MATH 4210</span>
          <div className={styles.barItem}>Nonlinear Optimization · Convex Analysis P-Set</div>
        </div>
        <div className={styles.timelineRow}>
          <span className={styles.weekLabel}>Thesis</span>
          <div className={styles.barItem}>Formal Verification of Leader Election Lemmas</div>
        </div>
      </div>
    </div>
  );
}

function UnderstandingVisual() {
  return (
    <div className={styles.visualCard}>
      <div className={styles.cardHeaderRow}>
        <span className={styles.cardTitle}>Academic Trajectory Forecast</span>
        <span className={styles.cardWarningTag}>Friction Point</span>
      </div>
      <div className={styles.timelineRows}>
        <div className={styles.timelineRow}>
          <span className={styles.weekLabel}>Week 07</span>
          <div className={styles.barItem}>Standard Pacing · 2 Problem Sets · Normal Load</div>
        </div>
        <div className={styles.timelineRow}>
          <span className={styles.weekLabel}>Week 08</span>
          <div className={styles.barWarning}>
            <span className={styles.warningIcon}>⚠</span>
            <span>Midterm Exam 2 + Thesis Chapter 3 Draft due simultaneously</span>
          </div>
        </div>
        <div className={styles.timelineRow}>
          <span className={styles.weekLabel}>Week 09</span>
          <div className={styles.barItem}>Elective Sequencing Window · Thesis Peer Review</div>
        </div>
      </div>
    </div>
  );
}

function AdvisoryVisual() {
  return (
    <div className={styles.advisoryContainer}>
      <div className={styles.advisoryTop}>
        <span className={styles.advisoryPill}>Mentor Recommendation</span>
        <span className={styles.advisoryImpact}>High Impact (+6.5h)</span>
      </div>
      <h4 className={styles.advisoryHeadline}>Shift Thesis Chapter 3 Proofs 4 Days Forward</h4>
      <p className={styles.advisoryBody}>
        By finalizing formal consensus proofs in Week 7 instead of Week 8, you open 6.5 hours of calm, high-retention review for the Distributed Systems midterm without compromising thesis depth.
      </p>
      <div className={styles.advisoryBottom}>
        <span className={styles.verifiedTag}>✓ Student-Validated Strategy</span>
        <span className={styles.explainableTag}>Explainable Rationale</span>
      </div>
    </div>
  );
}

function ActionVisual() {
  return (
    <div className={styles.workspaceContainer}>
      <div className={styles.workspaceHeader}>
        <div className={styles.timerBadge}>
          <span className={styles.pulseDot} aria-hidden="true" />
          <span>Focus Sprint // 42:18 Elapsed</span>
        </div>
        <span className={styles.trackLabel}>Senior Thesis / Proof Analysis</span>
      </div>
      <div className={styles.workspaceObjective}>
        <span className={styles.objectiveLabel}>Active Objective</span>
        <p className={styles.objectiveText}>Verify Raft leader election safety lemmas against edge-case network partitions.</p>
      </div>
      <div className={styles.workspaceTags}>
        <span className={styles.tagItem}>Ref: Ongaro &amp; Ousterhout (2014)</span>
        <span className={styles.tagItem}>Notes: Local &amp; Air-Gapped</span>
      </div>
    </div>
  );
}
