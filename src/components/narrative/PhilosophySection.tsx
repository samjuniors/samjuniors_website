import { companyContent } from '@/content/company';
import styles from './PhilosophySection.module.css';

export function PhilosophySection() {
  return (
    <section id="philosophy" className={styles.section} aria-labelledby="philosophy-title">
      <div className={styles.grid}>
        <div className={styles.leadCol}>
          <h2 id="philosophy-title">
            Most technology creates noise.<br />We build enduring systems.
          </h2>
          <p>{'// The Building Filter'}</p>
        </div>

        <div className={styles.stream}>
          {companyContent.buildingFilters.map((filter, index) => (
            <div key={filter.id} className={styles.item}>
              <span className={styles.num} aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3 className={styles.itemTitle}>{filter.title}</h3>
                <p className={styles.itemDesc}>{filter.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
