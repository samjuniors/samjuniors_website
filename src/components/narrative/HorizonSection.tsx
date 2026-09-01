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
    <section className={styles.section} aria-label="Ecosystem and Dialogue">
      <div className={styles.grid}>
        <Reveal className={styles.col}>
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
        </Reveal>

        <Reveal className={styles.col} delay={90}>
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
        </Reveal>
      </div>
    </section>
  );
}
