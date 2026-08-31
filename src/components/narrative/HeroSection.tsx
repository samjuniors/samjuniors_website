import Link from 'next/link';
import { companyContent } from '@/content/company';
import { getFlagshipProduct } from '@/content/products';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const flagship = getFlagshipProduct();

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.topline}>
        <span className={styles.statusPulse} aria-hidden="true" />
        <span>Parent Technology Ecosystem</span>
      </div>

      <div className={styles.statementArea}>
        <h1 id="hero-heading" className={styles.headline}>
          We see what could be next — <em>and build the technology to reach it.</em>
        </h1>

        <p className={styles.lead}>
          {companyContent.name} bridges visionary computing concepts and production-grade systems. We engineer enduring software, intelligent platforms, and human interfaces designed for sovereign control and long-term utility.
        </p>

        <div className={styles.actionRow}>
          <Link href="#lumora" className={styles.primaryBtn}>
            <span>Experience {flagship.name}</span>
            <span aria-hidden="true">↓</span>
          </Link>
          <Link href="#thesis" className={styles.textLink}>
            Our Building Philosophy →
          </Link>
        </div>
      </div>

      {/* Architectural Tenets Baseline (Continuous Editorial Flow, not Card Boxes) */}
      <div className={styles.tenetsRow} aria-label="Institutional Building Tenets">
        <div className={styles.tenetItem}>
          <div className={styles.tenetHeader}>
            <span className={styles.tenetNumber}>01</span>
            <span className={styles.tenetTitle}>Durable Compounding</span>
          </div>
          <p className={styles.tenetBody}>
            Systems designed to accumulate value over decades, deliberately rejecting disposable software cycles.
          </p>
        </div>

        <div className={styles.tenetItem}>
          <div className={styles.tenetHeader}>
            <span className={styles.tenetNumber}>02</span>
            <span className={styles.tenetTitle}>Grounded Intelligence</span>
          </div>
          <p className={styles.tenetBody}>
            Machine intelligence engineered to expand human comprehension, decision quality, and creative autonomy.
          </p>
        </div>

        <div className={styles.tenetItem}>
          <div className={styles.tenetHeader}>
            <span className={styles.tenetNumber}>03</span>
            <span className={styles.tenetTitle}>Local Sovereignty</span>
          </div>
          <p className={styles.tenetBody}>
            Zero cloud telemetry, retention, or platform lock-in on private coursework, research, and personal data.
          </p>
        </div>
      </div>
    </section>
  );
}
