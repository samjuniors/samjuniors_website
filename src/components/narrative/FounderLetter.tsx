import { companyContent } from '@/content/company';
import styles from './FounderLetter.module.css';

export function FounderLetter() {
  return (
    <section id="founder" className={styles.letterSection} aria-labelledby="founder-perspective-title">
      <div className={styles.labelRow}>
        <span className={styles.indexNumber}>04</span>
        <span className={styles.divider}>/</span>
        <span className={styles.label}>Perspective</span>
      </div>
      <blockquote className={styles.quoteWrapper}>
        <p id="founder-perspective-title" className={styles.letterBody}>
          &ldquo;We founded {companyContent.name} because software should be an <em>extension of human mastery</em>, not a substitute for it. The instruments we build are meant to disappear into your hands — fast, dependable, and sovereign.&rdquo;
        </p>
      </blockquote>
      <div className={styles.signatureBlock}>
        <div className={styles.signerDetails}>
          <div className={styles.signerName}>Founder & Leadership</div>
          <div className={styles.signerTitle}>{companyContent.legalEntity}</div>
        </div>
        <div className={styles.dateStamp}>Est. 2026</div>
      </div>
    </section>
  );
}
