import Link from 'next/link';
import { companyContent } from '@/content/company';
import { getFlagshipProduct } from '@/content/products';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const flagship = getFlagshipProduct();

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.topline}>
        <span className={styles.mark} aria-hidden="true" />
        <span>Technology & Computing Ecosystem</span>
      </div>

      <h1 id="hero-heading" className={styles.headline}>
        We see what could be next — <em>and build the technology to reach it.</em>
      </h1>

      <p className={styles.lead}>
        {companyContent.name} creates purposeful computing systems, spatial tools, and human interfaces designed for long-term utility rather than short-lived novelty.
      </p>

      <div className={styles.actionRow}>
        <Link href="#lumora" className={styles.primaryBtn}>
          <span>Explore {flagship.name}</span>
          <span aria-hidden="true">↓</span>
        </Link>
        <Link href="#thesis" className={styles.textLink}>
          Why We Build →
        </Link>
      </div>

      <div className={styles.anchorLedger} aria-label="Company Core Standards">
        <div className={styles.ledgerItem}>
          <span className={styles.ledgerTitle}>Enduring Utility</span>
          <span>Zero disposable software</span>
        </div>
        <div className={styles.ledgerItem}>
          <span className={styles.ledgerTitle}>Local-First Reasoning</span>
          <span>Zero cloud dependency for private workflows</span>
        </div>
        <div className={styles.ledgerItem}>
          <span className={styles.ledgerTitle}>Open Tooling</span>
          <span>Zero proprietary vendor lock-in</span>
        </div>
      </div>
    </section>
  );
}
