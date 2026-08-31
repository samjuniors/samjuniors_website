import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/content/products';
import { companyContent } from '@/content/company';
import styles from './products.module.css';

export const metadata: Metadata = {
  title: 'Products Portfolio',
  description: `Explore the expanding portfolio of AI-first products and platforms developed by ${companyContent.name}.`,
};

export default function ProductsPage() {
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

      <div className={styles.grid}>
        {products.map((product) => (
          <article key={product.slug} className={styles.card}>
            <div>
              <div className={styles.cardMeta}>
                <span className={styles.status}>
                  {product.status}
                </span>
                {product.isFlagship && (
                  <span className={styles.flagshipChip}>
                    FLAGSHIP
                  </span>
                )}
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
    </div>
  );
}
