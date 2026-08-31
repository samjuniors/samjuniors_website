import styles from './ThesisSection.module.css';

export function ThesisSection() {
  return (
    <section id="thesis" className={styles.thesis} aria-labelledby="thesis-heading">
      <div className={styles.layout}>
        <div className={styles.statementCol}>
          <div className={styles.label}>Building Thesis</div>
          <h2 id="thesis-heading" className={styles.statement}>
            Most software today creates noise.<br />
            We engineer <em>durable instruments</em>.
          </h2>
        </div>

        <div className={styles.proseCol}>
          <div className={styles.paragraphGroup}>
            <h3 className={styles.groupTitle}>Utility Over Fleeting Novelty</h3>
            <p className={styles.groupBody}>
              We deliberately reject the race to build disposable, superficial wrappers. Every system we create is designed to solve deep structural friction, compounding in reliability and utility over years rather than fading with the next trend.
            </p>
          </div>

          <div className={styles.paragraphGroup}>
            <h3 className={styles.groupTitle}>Human Agency Over Automation</h3>
            <p className={styles.groupBody}>
              Computing should expand what people are capable of imagining and constructing. We build tools that grant creators, engineers, and thinkers sovereign control, speed, and precision rather than turning them into passive spectators.
            </p>
          </div>

          <div className={styles.paragraphGroup}>
            <h3 className={styles.groupTitle}>Local Privacy and Open Architecture</h3>
            <p className={styles.groupBody}>
              Intelligence belongs in the hands of the user. Our architectures prioritize local-first execution, zero telemetry retention, and universal open standards that ensure users always own their work and can deploy anywhere without lock-in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
