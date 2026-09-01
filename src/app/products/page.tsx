import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/content/products';
import { companyContent } from '@/content/company';
import { Reveal } from '@/components/interactive/Reveal';
import styles from './products.module.css';

export const metadata: Metadata = {
  title: 'Products Portfolio',
  description: `Explore the expanding portfolio of AI-first products and platforms developed by ${companyContent.name}.`,
};

/**
 * Products portfolio — the flagship composition (design-system §6.8.6).
 *
 * The page leads with a full-width flagship panel (elevated surface, copper
 * top edge, first-entry reveal) instead of a uniform card grid: one real
 * flagship presented honestly at flagship scale. Non-flagship products —
 * when they exist — follow in the standard grid. No fabricated products,
 * no empty-state filler.
 */
export default function ProductsPage() {
  const flagship = products.filter((product) => product.isFlagship);
  const others = products.filter((product) => !product.isFlagship);

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          Portfolio Architecture
        </div>
        <h1 className={styles.title}>
          Product Ecosystem
        </h1>
        <p className={styles.lead}>
          Expressions of {companyContent.name} engineering, designed for lasting utility, human agency, and systemic scale.
        </p>
      </header>

      {/* Flagship panel — one real flagship at flagship scale */}
      {flagship.map((product) => (
        <Reveal key={product.slug} as="article" className={styles.flagshipPanel}>
          <div className={styles.flagshipMeta}>
            <span className={styles.status}>
              {product.status}
            </span>
            <span className={styles.flagshipChip}>
              FLAGSHIP
            </span>
          </div>
          <h2 className={styles.flagshipTitle}>
            {product.name}
          </h2>
          <p className={styles.flagshipTagline}>
            {product.tagline}
          </p>
          <p className={styles.flagshipDescription}>
            {product.shortDescription}
          </p>
          <Link href={`/products/${product.slug}`} className={styles.exploreLink}>
            Explore {product.name} →
          </Link>
        </Reveal>
      ))}

      {/* Ecosystem ventures — standard grid, rendered only when they exist */}
      {others.length > 0 && (
        <div className={styles.grid}>
          {others.map((product) => (
            <article key={product.slug} className={styles.card}>
              <div>
                <div className={styles.cardMeta}>
                  <span className={styles.status}>
                    {product.status}
                  </span>
                </div>
                <h2 className={styles.cardTitle}>
                  {product.name}
                </h2>
                <p className={styles.cardDescription}>
                  {product.shortDescription}
                </p>
              </div>
              <Link href={`/products/${product.slug}`} className={styles.exploreLink}>
                Explore {product.name} →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
