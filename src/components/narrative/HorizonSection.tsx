import Link from 'next/link';
import styles from './HorizonSection.module.css';

export function HorizonSection() {
  return (
    <section className={styles.section} aria-label="Ecosystem and Dialogue">
      <div className={styles.grid}>
        <div className={styles.col}>
          <div className={styles.labelRow}>
            <span className={styles.indexNumber}>05</span>
            <span className={styles.divider}>/</span>
            <span className={styles.label}>Ecosystem</span>
          </div>
          <h2>An Expanding Ecosystem</h2>
          <p>
            SamJuniors is built as an enduring technology institution. As we expand into new computing domains, every initiative shares our foundational architecture: client-side privacy, deterministic execution, and open standards.
          </p>
          <Link href="/products" className={styles.actionLink}>
            Explore Portfolio Architecture →
          </Link>
        </div>

        <div className={styles.col}>
          <div className={styles.labelRow}>
            <span className={styles.indexNumber}>06</span>
            <span className={styles.divider}>/</span>
            <span className={styles.label}>Collaboration</span>
          </div>
          <h2>Initiate Dialogue</h2>
          <p>
            We welcome conversations with engineering partners, researchers, and creators who share our conviction in enduring computing craft and sovereign tools.
          </p>
          <Link href="/contact" className={styles.actionLink}>
            Connect With Leadership →
          </Link>
        </div>
      </div>
    </section>
  );
}
