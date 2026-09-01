import Link from 'next/link';
import { Reveal } from '@/components/interactive/Reveal';
import styles from './HorizonSection.module.css';

/**
 * Scene 05 — Horizon (ADR-001 §3, design-system §6.8.6).
 *
 * Scene transition grammar (Founder → Horizon, “re-expansion / closure”):
 * the measure widens from the Founder's 840px quiet column back to the
 * 1240px container and the two columns surface with a single restrained
 * first-entry reveal each (≤2 siblings, 90ms stagger, existing Reveal
 * primitive — no new motion language). The Founder's warm closing seam
 * (copper tint) opens this scene.
 */
export function HorizonSection() {
  return (
    <section id="horizon" className={styles.section} aria-label="Ecosystem and Dialogue">
      <div className={styles.sectionInner}>
        <div className={styles.grid}>
        <Reveal className={styles.col}>
          <div className={styles.labelRow}>
            <span className={styles.indexNumber}>05</span>
            <span className={styles.divider}>/</span>
            <span className={styles.label}>Ecosystem</span>
          </div>
          <h2>What comes after the first product</h2>
          <p>
            SamJuniors is built to outlast any single release. Lumora is the first
            platform to reach beta, and it sets the standard the rest of the
            portfolio is held to: solve a real workflow, show the evidence, and
            leave the consequential decision with a person.
          </p>
          <Link href="/products" className={styles.actionLink}>
            See what we build →
          </Link>
        </Reveal>

        <Reveal className={styles.col} delay={90}>
          <div className={styles.labelRow}>
            <span className={styles.label}>Collaboration</span>
          </div>
          <h2>Start a conversation</h2>
          <p>
            If you teach, run an institution, or build in this space, we want the
            conversation. Early Lumora access, pilots, and engineering partnerships
            all start the same way — an email that a person reads.
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Get in touch</span>
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
