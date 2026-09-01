import {
  LUMORA_DEMO_STEPS,
  LUMORA_DEMO_STEP_ORDER,
} from '@/content/lumora-demo';
import { LumoraPhaseVisual } from './LumoraPhaseVisual';
import styles from './LumoraMobileStepper.module.css';

/**
 * LumoraMobileStepper — the mobile-native Scene 03 recomposition
 * (design-system §6.8.7, ADR-001; qa-checklist §2.10.6).
 *
 * The same four phases render as sequential full-width segments with the same
 * state evolution: sources and diagnostics become inline per-segment content
 * (never display:none), the phase navigation is an anchor segmented control
 * (≥44px targets, operable with and without JavaScript), and every string
 * comes from the registered content contract (src/content/lumora-demo.ts;
 * copy authority copy.md §4).
 */
export function LumoraMobileStepper() {
  return (
    <div className={styles.stepper}>
      {/* Phase navigation — native anchors, 44px targets, no-JS safe */}
      <nav className={styles.stepperNav} aria-label="Lumora Demonstration Phases">
        {LUMORA_DEMO_STEP_ORDER.map((key) => {
          const step = LUMORA_DEMO_STEPS[key];
          return (
            <a
              key={key}
              href={`#lumora-phase-${step.stepNum}`}
              className={styles.stepperTab}
            >
              <span className={styles.stepperTabNum}>{step.stepNum}</span>
              <span>{step.tabLabel.replace(/^\d+\.\s*/, '')}</span>
            </a>
          );
        })}
      </nav>

      {/* Sequential phase segments — full content parity with the workbench */}
      {LUMORA_DEMO_STEP_ORDER.map((key) => {
        const step = LUMORA_DEMO_STEPS[key];
        return (
          <article
            key={key}
            id={`lumora-phase-${step.stepNum}`}
            className={styles.segment}
            aria-labelledby={`lumora-phase-${key}-title`}
          >
            <header className={styles.segmentHeader}>
              <span className={styles.segmentBadge}>{step.badge}</span>
              <span className={styles.segmentHud}>
                {step.centerGraphic.statusBadge} · {step.centerGraphic.stageSubtitle}
              </span>
            </header>

            <h3 id={`lumora-phase-${key}-title`} className={styles.segmentTitle}>
              {step.headline}
            </h3>
            <p className={styles.segmentNarrative}>{step.narrative}</p>

            {/* Center demonstration visual (shared with the desktop workbench) */}
            <LumoraPhaseVisual phase={key} />

            {/* Sources — inline (desktop column 1) */}
            <section className={styles.segmentPanel} aria-label="Academic Sources and Inputs">
              <div className={styles.segmentPanelHeader}>
                <span>Academic Context</span>
                <span className={styles.segmentPanelBadge}>Resolved</span>
              </div>
              <ul className={styles.segmentSourcesList}>
                {step.sourceContext.map((item) => (
                  <li
                    key={item.title}
                    className={item.active ? styles.segmentSourceActive : styles.segmentSource}
                  >
                    <div className={styles.segmentSourceDetails}>
                      <span className={styles.segmentSourceTitle}>{item.title}</span>
                      <span className={styles.segmentSourceSubtitle}>{item.subtitle}</span>
                    </div>
                    <span className={styles.segmentSourceTag}>{item.tag}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Diagnostics — inline (desktop column 3) */}
            <section className={styles.segmentPanel} aria-label="Academic Diagnostics">
              <div className={styles.segmentPanelHeader}>
                <span>Diagnostics</span>
                <span className={styles.segmentPanelBadge}>Grounded</span>
              </div>
              <div className={styles.segmentDiagnosticsList}>
                {step.diagnostics.map((diag) => (
                  <div key={diag.label} className={styles.segmentDiagItem}>
                    <span className={styles.segmentDiagLabel}>{diag.label}</span>
                    <span className={styles.segmentDiagValue}>{diag.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Status bar (desktop footer) */}
            <footer className={styles.segmentStatus}>
              <span className={styles.segmentEngineTag}>{step.bottomStatus.engineState}</span>
              <span className={styles.segmentPrivacyTag}>{step.bottomStatus.privacy}</span>
            </footer>
          </article>
        );
      })}
    </div>
  );
}
