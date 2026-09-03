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
    <section id="overture" className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.heroShell}`}>
        <Reveal className={styles.topline}>
          <span className={styles.statusPulse} aria-hidden="true" />
          <span>AI-first technology company</span>
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
            {companyContent.name} builds production software in the places where
            professional and academic work still breaks down. One flagship
            platform is in beta today; everything we ship is engineered to keep
            the person doing the work in charge of the decisions that matter.
          </Reveal>

          {/*
            CTA hierarchy: the strongest action on the company's most-read
            surface is company-scoped (the portfolio), and the flagship product
            is the supporting path. Leading with the product here inverted the
            hierarchy — the site's first ask became "go look at Lumora" rather
            than "here is what this company builds".
          */}
          <Reveal className={styles.actionRow} delay={180}>
            <Link href="/products" className="btn-primary">
              <span>See what {companyContent.name} builds</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href={`/products/${flagship.slug}`} className="text-link">
              {flagship.name}, our flagship platform →
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
              <span className={styles.tenetTitle}>Human Authority</span>
            </div>
            <p className={styles.tenetBody}>
              Automation proposes; the responsible person decides and releases. No
              consequential outcome leaves our systems without a human acting on it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
