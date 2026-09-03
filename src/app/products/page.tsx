import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/content/products';
import { companyContent } from '@/content/company';
import { Reveal } from '@/components/interactive/Reveal';
import styles from './products.module.css';

export const metadata: Metadata = {
  title: 'Products',
  description: `What ${companyContent.name} builds: one flagship platform in beta today, presented with what it does and what it does not do yet.`,
  alternates: { canonical: '/products' },
};

/**
 * Products portfolio — the flagship composition (design-system §6.8.6).
 *
 * The page leads with a full-width flagship panel (elevated surface, copper
 * top edge, first-entry reveal) instead of a uniform card grid: one real
 * flagship presented honestly at flagship scale. Non-flagship products —
 * when they exist — follow in the standard grid. No fabricated products,
 * no empty-state filler.
 *
 * Hierarchy: this is the company's portfolio, not the flagship's landing page.
 * The header names SamJuniors before any product name, and the closing band
 * states the company standard the portfolio is judged against — so removing
 * the one product leaves a page that is still about the company.
 */
export default function ProductsPage() {
  const flagship = products.filter((product) => product.isFlagship);
  const others = products.filter((product) => !product.isFlagship);

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          {companyContent.name} portfolio
        </div>
        <h1 className={styles.title}>
          Products
        </h1>
        <p className={styles.lead}>
          {companyContent.name} builds production software for the places where
          professional and academic work still breaks down. One platform is in
          beta today, and it is held to the same standard as everything that
          follows it — we would rather present one real product honestly than a
          portfolio of intentions.
        </p>
      </header>

      {/* Flagship panel — one real flagship at flagship scale */}
      {flagship.map((product) => (
        <Reveal key={product.slug} as="article" className={styles.flagshipPanel}>
          <div className={styles.flagshipMeta}>
            <span className={styles.status}>
              {product.statusLabel}
            </span>
            <span className={styles.flagshipChip}>
              Flagship product
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
          <Link
            href={`/products/${product.slug}`}
            className={`text-link ${styles.exploreLink}`}
          >
            How {product.name} works →
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
                    {product.statusLabel}
                  </span>
                </div>
                <h2 className={styles.cardTitle}>
                  {product.name}
                </h2>
                <p className={styles.cardDescription}>
                  {product.shortDescription}
                </p>
              </div>
              <Link
                href={`/products/${product.slug}`}
                className={`text-link ${styles.exploreLink}`}
              >
                How {product.name} works →
              </Link>
            </article>
          ))}
        </div>
      )}
      {/*
        Company standard — the closing beat of the portfolio.
        Without it this page is a header and one product panel, so removing
        Lumora would leave nothing that belongs to the company. The three
        pillars are the company's own stated reputation goals from
        docs/company/foundation.md (rendered here for the first time), not new
        claims written for this page, and they say nothing about products that
        do not exist.
      */}
      <section className={styles.standard} aria-labelledby="portfolio-standard-heading">
        <h2 id="portfolio-standard-heading" className={styles.standardTitle}>
          What {companyContent.name} sets out to be known for
        </h2>
        <ol className={styles.standardList}>
          {companyContent.reputationPillars.map((pillar, index) => (
            <li key={pillar} className={styles.standardItem}>
              <span className={styles.standardOrder}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.standardLabel}>{pillar}</span>
            </li>
          ))}
        </ol>
        <Link href="/about" className={`text-link ${styles.exploreLink}`}>
          How {companyContent.name} decides what to build →
        </Link>
      </section>
    </div>
  );
}
