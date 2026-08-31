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
        {companyContent.name} bridges visionary computing concepts and production-grade tools. We engineer enduring software, spatial systems, and human interfaces designed for sovereign control and long-term utility.
      </p>

      <div className={styles.actionRow}>
        <Link href="#lumora" className={styles.primaryBtn}>
          <span>Discover {flagship.name}</span>
          <span aria-hidden="true">↓</span>
        </Link>
        <Link href="#thesis" className={styles.textLink}>
          Our Engineering Ethos →
        </Link>
      </div>

      <div className={styles.anchorLedger} aria-label="Company Core Standards">
        <div className={styles.ledgerItem}>
          <span className={styles.ledgerTitle}>Enduring Utility</span>
          <span>Zero disposable software</span>
        </div>
        <div className={styles.ledgerItem}>
          <span className={styles.ledgerTitle}>Local-First Architecture</span>
          <span>Zero telemetry or cloud lock-in for private workflows</span>
        </div>
        <div className={styles.ledgerItem}>
          <span className={styles.ledgerTitle}>Open Tooling</span>
          <span>Clean compilation to universal standards</span>
        </div>
      </div>
    </section>
  );
}
