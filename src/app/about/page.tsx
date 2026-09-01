import type { Metadata } from 'next';
import { companyContent } from '@/content/company';
import { Reveal } from '@/components/interactive/Reveal';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'Company Foundation & Philosophy',
  description: companyContent.purpose,
};

export default function AboutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          Company Foundation
        </div>
        <h1 className={styles.title}>
          How We Build
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
    </div>
  );
}
