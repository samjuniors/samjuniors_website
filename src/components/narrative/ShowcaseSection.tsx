import { getFlagshipProduct } from '@/content/products';
import { LumoraWorkbench } from '@/components/interactive/LumoraWorkbench';
import styles from './ShowcaseSection.module.css';

export function ShowcaseSection() {
  const flagship = getFlagshipProduct();

  return (
    <section id="lumora" className={styles.section} aria-labelledby="showcase-title">
      <div className={styles.header}>
        <div className={styles.flagshipBadge}>
          <span>✦ Current Flagship Expression</span>
        </div>
        <h2 id="showcase-title" className={styles.title}>
          Meet {flagship.name}.
        </h2>
        <p className={styles.lead}>
          A tangible demonstration of our building philosophy — combining spatial intelligence with precision authoring tools.
        </p>
      </div>

      {/* Interactive Living Workbench */}
      <LumoraWorkbench />

      {/* Pillars of Execution */}
      <div className={styles.pillarsGrid}>
        <div className={styles.pillarCard}>
          <h3 className={styles.pillarTitle}>Tangible Utility</h3>
          <p className={styles.pillarDesc}>
            Engineered for workflows where speed, predictability, and tactile precision determine success.
          </p>
        </div>

        <div className={styles.pillarCard}>
          <h3 className={styles.pillarTitle}>Deterministic Execution</h3>
          <p className={styles.pillarDesc}>
            Reliable computing pipelines that eliminate latency and protect user focus.
          </p>
        </div>

        <div className={styles.pillarCard}>
          <h3 className={styles.pillarTitle}>Open Interoperability</h3>
          <p className={styles.pillarDesc}>
            Seamlessly export and integrate with external computing and development platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
