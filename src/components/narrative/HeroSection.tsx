import Link from 'next/link';
import { companyContent } from '@/content/company';
import { getFlagshipProduct } from '@/content/products';
import { Reveal } from '@/components/interactive/Reveal';
import styles from './HeroSection.module.css';

/**
 * Scene 01 — Overture (ADR-001 §3, design-system §6.8.3/§6.8.6).
 *
 * Full-viewport statement with intentional negative space: the topline opens
 * the frame, the statement block centers in the remaining emptiness, and the
 * tenets baseline closes it at the bottom. The staged load choreography runs
 * once (topline → headline → lead → action row → tenets, 60ms stagger,
 * ≤500ms total, transform/opacity only); the server HTML is fully visible
 * and the sequence is added by script only (no-JS safe); reduced motion
 * falls back to the static composition.
 */
export function HeroSection() {
  const flagship = getFlagshipProduct();

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.heroShell}`}>
        <Reveal className={styles.topline}>
          <span className={styles.statusPulse} aria-hidden="true" />
          <span>Parent Technology Ecosystem</span>
        </Reveal>

        <div className={styles.statementArea}>
          <Reveal
            as="h1"
            id="hero-heading"
            className={styles.headline}
            delay={60}
          >
            We see what could be next — <em>and build the technology to reach it.</em>
          </Reveal>

          <Reveal
            as="p"
            className={styles.lead}
            delay={120}
          >
            {companyContent.name} bridges visionary computing concepts and production-grade systems. We engineer enduring software, intelligent platforms, and human interfaces designed for sovereign control and long-term utility.
          </Reveal>

          <Reveal className={styles.actionRow} delay={180}>
            <Link href="#lumora" className={styles.primaryBtn}>
              <span>Experience {flagship.name}</span>
              <span aria-hidden="true">↓</span>
            </Link>
            <Link href="#thesis" className={styles.textLink}>
              Our Building Philosophy →
            </Link>
          </Reveal>
        </div>

        {/* Architectural Tenets Baseline (Continuous Editorial Flow, not Card Boxes) */}
        <Reveal
          className={styles.tenetsRow}
          delay={240}
          aria-label="Institutional Building Tenets"
        >
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
        </Reveal>
      </div>
    </section>
  );
}
