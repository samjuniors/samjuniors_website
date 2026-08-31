import Link from 'next/link';
import { companyContent } from '@/content/company';
import { getFlagshipProduct, products } from '@/content/products';
import styles from './page.module.css';

export default function HomePage() {
  const flagship = getFlagshipProduct();

  return (
    <div className={`container ${styles.page}`}>
      {/* 1. Parent Company Orientation */}
      <section className={styles.section} aria-labelledby="hero-title">
        <div className={styles.eyebrow}>AI-First Parent Technology Ecosystem</div>
        <h1 id="hero-title" className={styles.headline}>
          {companyContent.tagline}
        </h1>
        <p className={styles.lead}>{companyContent.purpose}</p>
        <div className={styles.actions}>
          <Link href={`/products/${flagship.slug}`} className={styles.primaryBtn}>
            Discover {flagship.name} →
          </Link>
          <Link href="/about" className={styles.secondaryBtn}>
            How We Build
          </Link>
        </div>
      </section>

      {/* 2. Flagship Product Spotlight (Data-Driven Prominence) */}
      <section className={styles.section} aria-labelledby="flagship-title">
        <div className={styles.badge}>Flagship Platform</div>
        <h2 id="flagship-title" className={styles.subheadline}>
          {flagship.name}
        </h2>
        <p className={styles.text}>{flagship.tagline}</p>
        <div className={styles.card}>
          <p className={styles.cardText}>{flagship.shortDescription}</p>
          <Link href={`/products/${flagship.slug}`} className={styles.link}>
            Explore {flagship.name} Architecture →
          </Link>
        </div>
      </section>

      {/* 3. Multi-Product Ecosystem Horizon */}
      <section className={styles.section} aria-labelledby="ecosystem-title">
        <h2 id="ecosystem-title" className={styles.subheadline}>
          Expanding Ecosystem
        </h2>
        <p className={styles.text}>
          An enduring technology architecture designed to scale across multiple product expressions.
        </p>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.slug} className={styles.productCard}>
              <div className={styles.productStatus}>{product.status.toUpperCase()}</div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDesc}>{product.shortDescription}</p>
              <Link href={`/products/${product.slug}`} className={styles.link}>
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
