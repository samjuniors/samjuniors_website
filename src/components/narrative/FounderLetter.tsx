import { companyContent } from '@/content/company';
import styles from './FounderLetter.module.css';

export function FounderLetter() {
  return (
    <section className={styles.letterSection} aria-labelledby="founder-perspective-title">
      <div className={styles.label}>Perspective</div>
      <p id="founder-perspective-title" className={styles.letterBody}>
        &ldquo;We founded {companyContent.name} because software should be an <em>extension of human mastery</em>, not a substitute for it. The instruments we build are meant to disappear into your hands — fast, dependable, and sovereign.&rdquo;
      </p>
      <div className={styles.signatureBlock}>
        <div>
          <div className={styles.signerName}>Founder & Leadership Team</div>
          <div className={styles.signerTitle}>{companyContent.legalEntity}</div>
        </div>
        <div className={styles.dateStamp}>Est. 2026</div>
      </div>
    </section>
  );
}
