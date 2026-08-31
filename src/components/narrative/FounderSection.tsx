import { companyContent } from '@/content/company';
import styles from './FounderSection.module.css';

export function FounderSection() {
  return (
    <section id="conviction" className={styles.section} aria-labelledby="founder-title">
      <div className={styles.letterBox}>
        <blockquote className={styles.quote}>
          &ldquo;We founded {companyContent.name} not to chase fleeting AI novelties, but to build enduring technology that expands human agency — quiet, fast, and profoundly capable.&rdquo;
        </blockquote>
        <div className={styles.meta}>
          <div>
            <div id="founder-title" className={styles.name}>
              Founder & Leadership Team
            </div>
            <div className={styles.role}>{companyContent.legalEntity}</div>
          </div>
          <span className={styles.badge}>[FOUNDER DIRECTIVE]</span>
        </div>
      </div>
    </section>
  );
}
