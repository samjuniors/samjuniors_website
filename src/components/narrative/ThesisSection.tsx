import { companyContent } from '@/content/company';
import styles from './ThesisSection.module.css';

export function ThesisSection() {
  return (
    <section id="thesis" className={styles.thesis} aria-labelledby="thesis-heading">
      {/* Section Header Statement */}
      <div className={styles.headerArea}>
        <div className={styles.labelRow}>
          <span className={styles.indexNumber}>02</span>
          <span className={styles.divider}>/</span>
          <span className={styles.label}>Building Philosophy</span>
        </div>
        <h2 id="thesis-heading" className={styles.statement}>
          Technology should compound in value over decades, not fade with the <em>next cycle</em>.
        </h2>
        <p className={styles.statementLead}>
          We deliberately avoid disposable wrappers and speculative hype. True technological institutions are built on deep utility, sovereign human control, and rigorous engineering craft.
        </p>
      </div>

      {/* Asymmetric Dual Flow: The 6-Stage Building Cycle & Deep Philosophy */}
      <div className={styles.editorialGrid}>
        {/* Left Spine: The 6-Stage Building Cycle */}
        <div className={styles.cycleColumn} aria-label="The SamJuniors Building Cycle">
          <div className={styles.columnLabel}>The Building Cycle</div>
          <ol className={styles.cycleList}>
            {companyContent.buildingCycle.map((stage) => (
              <li key={stage.stage} className={styles.cycleStep}>
                <div className={styles.stepMarker}>
                  <span className={styles.stepNum}>0{stage.stage}</span>
                  <span className={styles.stepLine} aria-hidden="true" />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{stage.title}</h3>
                  <p className={styles.stepDesc}>{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right Flow: Core Convictions */}
        <div className={styles.convictionColumn}>
          <div className={styles.columnLabel}>Core Convictions</div>
          <div className={styles.proseBlock}>
            <h3 className={styles.proseHeading}>Durable Compounding vs. Ephemeral Novelty</h3>
            <p className={styles.proseText}>
              Every system we engineer is designed to eliminate deep structural friction in professional and academic workflows. Rather than packaging superficial API wrappers, we build foundational tools that grow more dependable with everyday use.
            </p>
          </div>

          <div className={styles.proseBlock}>
            <h3 className={styles.proseHeading}>Human Mastery Over Passive Automation</h3>
            <p className={styles.proseText}>
              Computing should expand human creative mastery, not diminish it. We construct instruments that give creators, researchers, and thinkers sovereign precision, speed, and deeper comprehension—keeping the human at the center of every meaningful decision.
            </p>
          </div>

          <div className={styles.proseBlock}>
            <h3 className={styles.proseHeading}>Local Sovereignty &amp; Data Ownership</h3>
            <p className={styles.proseText}>
              Private intellect, research notes, and creative assets belong entirely on the user&apos;s machine. Our platforms prioritize client-side execution and open standards, ensuring total privacy, zero telemetry retention, and lifetime ownership of your work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
