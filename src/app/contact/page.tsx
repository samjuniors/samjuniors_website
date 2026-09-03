import type { Metadata } from 'next';
import { companyContent } from '@/content/company';
import { getFlagshipProduct } from '@/content/products';
import { Reveal } from '@/components/interactive/Reveal';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Email ${companyContent.name} about ${getFlagshipProduct().name} access, pilots, or engineering partnerships.`,
  alternates: { canonical: '/contact' },
};

/**
 * Contact — one real, monitored destination.
 *
 * Deliberately not a form: there is no submission endpoint behind this site, and
 * a form that silently discards messages would be worse than an address that
 * works. The mailto is the actual path, so it is presented as one.
 */
export default function ContactPage() {
  const flagship = getFlagshipProduct();
  const email = companyContent.contactEmail;

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.pageHeader}>
        <div className={styles.eyebrow}>Contact</div>
        <h1 className={styles.title}>Connect with {companyContent.name}</h1>
        <p className={styles.lead}>
          One address, read by the people building the products. Early {flagship.name}{' '}
          access, classroom or institutional pilots, engineering partnerships, and
          press all arrive in the same inbox.
        </p>
      </header>

      <section className={styles.gatewaySection} aria-labelledby="contact-card-heading">
        <Reveal as="div" className={styles.gatewayCard}>
          <h2 id="contact-card-heading" className={styles.cardTitle}>
            Email us
          </h2>
          <p className={styles.cardBody}>
            Tell us who you teach or what you build, and what you want from{' '}
            {companyContent.name} — {flagship.name} access, a pilot, or
            engineering work. Concrete beats formal; it gets you a more useful
            reply.
          </p>
          <a href={`mailto:${email}`} className={styles.email}>
            {email}
          </a>
        </Reveal>

        <div className={styles.notes}>
          <div className={styles.note}>
            <p className={styles.noteLabel}>{flagship.name} access</p>
            <p className={styles.noteBody}>
              {flagship.name} is in pre-launch beta and there is no public sign-up
              yet. Access is arranged by conversation, one educator or institution at
              a time.
            </p>
          </div>
          <div className={styles.note}>
            <p className={styles.noteLabel}>What we can&apos;t promise</p>
            <p className={styles.noteBody}>
              We are a small team and we answer email ourselves, so a reply may take
              a few days. We would rather say that than advertise a response time we
              cannot hold.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
