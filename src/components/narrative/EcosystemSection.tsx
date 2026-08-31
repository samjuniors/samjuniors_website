import Link from 'next/link';
import { getFlagshipProduct } from '@/content/products';
import { companyContent } from '@/content/company';
import styles from './EcosystemSection.module.css';

export function EcosystemSection() {
  const flagship = getFlagshipProduct();

  return (
    <section id="ecosystem" className={styles.section} aria-labelledby="ecosystem-title">
      <div className={styles.header}>
        <h2 id="ecosystem-title">An Expanding Ecosystem</h2>
        <p>
          {companyContent.name} is built to support a continuous horizon of products and ventures without structural redesign.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Active Flagship */}
        <div className={`${styles.item} ${styles.flagshipItem}`}>
          <div>
            <span className={styles.status}>Flagship Platform</span>
            <h3 className={styles.title}>{flagship.name}</h3>
            <p className={styles.desc}>{flagship.shortDescription}</p>
          </div>
          <Link href={`/products/${flagship.slug}`} className={styles.link}>
            Explore Platform Architecture →
          </Link>
        </div>

        {/* Scalable Horizon Track Container */}
        <div className={styles.item}>
          <div>
            <span className={styles.status} style={{ color: 'var(--text-dim)' }}>
              Active Research Horizon
            </span>
            <h3 className={styles.title}>Ecosystem Research Tracks</h3>
            <p className={styles.desc}>
              Continuous exploration across autonomous systems, tactile computing, and foundational AI tooling satisfying our four building filters.
            </p>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: 'var(--space-5)' }}>
            [RESEARCH IN PROGRESS]
          </span>
        </div>
      </div>
    </section>
  );
}
