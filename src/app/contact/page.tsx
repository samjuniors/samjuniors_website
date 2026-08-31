import type { Metadata } from 'next';
import { companyContent } from '@/content/company';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact & Dialogue',
  description: `Connect with the ${companyContent.name} engineering and leadership team.`,
};

export default function ContactPage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.pageHeader}>
        <div className={styles.eyebrow}>
          Intent-Aligned Dialogue
        </div>
        <h1 className={styles.title}>
          Connect with {companyContent.name}
        </h1>
        <p className={styles.lead}>
          For inquiries regarding institutional partnership, technical research, or ecosystem collaboration.
        </p>
      </header>

      <section className={styles.gatewaySection}>
        <div className={styles.gatewayCard}>
          <h2 className={styles.cardTitle}>
            Ecosystem Communications Gateway
          </h2>
          <p className={styles.cardBody}>
            Direct communication channels are established based on visitor intent.
          </p>
          <div className={styles.email}>
            contact@samjuniors.com
          </div>
        </div>
      </section>
    </div>
  );
}
