import Link from 'next/link';
import styles from './HorizonSection.module.css';

export function HorizonSection() {
  return (
    <section className={styles.section} aria-label="Ecosystem and Dialogue">
      <div className={styles.grid}>
        <div className={styles.col}>
          <h2>An Expanding Ecosystem</h2>
          <p>
            SamJuniors is structured to develop multiple computing platforms and spatial tools over decades, all sharing our local-first, high-performance architecture.
          </p>
          <Link href="/products" className={styles.actionLink}>
            View Portfolio Architecture →
          </Link>
        </div>

        <div className={styles.col}>
          <h2>Initiate Dialogue</h2>
          <p>
            We welcome conversations with institutional partners, researchers, and builders who share our conviction in enduring computing craft.
          </p>
          <Link href="/contact" className={styles.actionLink}>
            Get in Touch →
          </Link>
        </div>
      </div>
    </section>
  );
}
