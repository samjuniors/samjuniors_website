import styles from './ThesisSection.module.css';

export function ThesisSection() {
  return (
    <section id="thesis" className={styles.thesis} aria-labelledby="thesis-heading">
      <div className={styles.layout}>
        <div className={styles.statementCol}>
          <div className={styles.label}>Engineering Thesis</div>
          <h2 id="thesis-heading" className={styles.statement}>
            Technology should compound in value over decades, not fade with the <em>next cycle</em>.
          </h2>
        </div>

        <div className={styles.proseCol}>
          <div className={styles.paragraphGroup}>
            <h3 className={styles.groupTitle}>Durable Utility Over Novelty</h3>
            <p className={styles.groupBody}>
              We deliberately reject the cycle of disposable, superficial AI wrappers. Every system we build is designed to eliminate deep structural friction in professional workflows, compounding in reliability and utility over years.
            </p>
          </div>

          <div className={styles.paragraphGroup}>
            <h3 className={styles.groupTitle}>Human Agency Over Automation</h3>
            <p className={styles.groupBody}>
              Computing should expand human creative mastery. We construct tools that provide builders, engineers, and thinkers with sovereign precision and speed rather than reducing them to passive operators.
            </p>
          </div>

          <div className={styles.paragraphGroup}>
            <h3 className={styles.groupTitle}>Local Privacy and Open Architecture</h3>
            <p className={styles.groupBody}>
              Intelligence belongs on the user&apos;s machine. Our platforms prioritize on-device execution, zero telemetry retention, and universal open standards so that creators always retain total ownership of their work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
