import type { Metadata } from 'next';
import Link from 'next/link';
import { companyContent } from '@/content/company';
import { getFlagshipProduct } from '@/content/products';
import { Reveal } from '@/components/interactive/Reveal';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: companyContent.purpose,
  alternates: { canonical: '/about' },
};

/**
 * Company page.
 *
 * Establishes SamJuniors as the thing that exists and products as things it
 * produces — in that order. The filters and the cycle are the company's own
 * method; the closing section is the only place a product is named, and it is
 * named as an output of that method and links to the portfolio rather than
 * jumping straight into the product.
 */
export default function AboutPage() {
  const flagship = getFlagshipProduct();

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          Company
        </div>
        <h1 className={styles.title}>
          What {companyContent.name} is, and how it builds
        </h1>
        <p className={styles.lead}>
          {companyContent.purpose}
        </p>
      </header>

      {/* 4-Point Building Filter — editorial reading rhythm: each section
          surfaces once as a unit (design-system §6.8.4, calm group reveal) */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          The Four Foundational Filters
        </h2>
        <Reveal className={styles.filterList}>
          {companyContent.buildingFilters.map((filter, index) => (
            <div key={filter.id} className={styles.filterCard}>
              <span className={styles.filterNumber}>
                0{index + 1}
              </span>
              <div>
                <h3 className={styles.filterTitle}>
                  {filter.title}
                </h3>
                <p className={styles.filterDescription}>
                  {filter.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Building Cycle */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Iterative Building Cycle
        </h2>
        <Reveal className={styles.cycleGrid}>
          {companyContent.buildingCycle.map((cycle) => (
            <div key={cycle.stage} className={styles.cycleCard}>
              <div className={styles.cycleStage}>
                STAGE 0{cycle.stage}
              </div>
              <h3 className={styles.cycleTitle}>
                {cycle.title}
              </h3>
              <p className={styles.cycleDescription}>
                {cycle.description}
              </p>
            </div>
          ))}
        </Reveal>
      </section>
      {/*
        Products bridge — the only product mention on this page.
        The page previously ended on the cycle, which left the company's method
        described but never connected to anything it had produced, and gave
        /about no path to the portfolio. The product is named here as an output
        of the filters, and the link goes to /products rather than to the
        product page: the visitor should meet the portfolio before the product.
      */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          What this has produced so far
        </h2>
        <p className={styles.bridgeBody}>
          One platform has come through the filters and the cycle and is in beta
          today: {flagship.name}, an {flagship.category}. It is the first product
          {' '}{companyContent.name} has taken this far, and for now it is the
          entire portfolio — the filters are meant to reject far more than they
          pass.
        </p>
        <Link href="/products" className="text-link">
          See the {companyContent.name} portfolio →
        </Link>
      </section>
    </div>
  );
}
