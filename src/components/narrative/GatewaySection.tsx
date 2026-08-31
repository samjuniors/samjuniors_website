import Link from 'next/link';
import { getFlagshipProduct } from '@/content/products';
import styles from './GatewaySection.module.css';

export function GatewaySection() {
  const flagship = getFlagshipProduct();

  return (
    <section className={styles.section} aria-label="Contextual Gateways">
      <div className={styles.grid}>
        <Link href={`/products/${flagship.slug}`} className={styles.card}>
          <div>
            <h3 className={styles.cardTitle}>Experience {flagship.name}</h3>
            <p className={styles.cardSub}>
              Explore our active flagship platform and interactive demonstration environment.
            </p>
          </div>
          <div className={styles.arrow} aria-hidden="true">
            Launch Preview →
          </div>
        </Link>

        <Link href="/about" className={styles.card}>
          <div>
            <h3 className={styles.cardTitle}>Building Philosophy</h3>
            <p className={styles.cardSub}>
              Inspect our four foundational filters, engineering thesis, and long-term vision.
            </p>
          </div>
          <div className={styles.arrow} aria-hidden="true">
            Read Philosophy →
          </div>
        </Link>

        <Link href="/contact" className={styles.card}>
          <div>
            <h3 className={styles.cardTitle}>Initiate Dialogue</h3>
            <p className={styles.cardSub}>
              Connect with our leadership team regarding institutional collaboration or technical partnership.
            </p>
          </div>
          <div className={styles.arrow} aria-hidden="true">
            Connect With Us →
          </div>
        </Link>
      </div>
    </section>
  );
}
