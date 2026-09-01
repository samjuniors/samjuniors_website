import Image from 'next/image';
import { companyContent } from '@/content/company';
import styles from './FounderPresence.module.css';

/**
 * FounderPresence — Scene 04, the human layer of the company.
 *
 * Founder identity is founder-supplied data, never generated here. The fields
 * in companyContent.founder (name, role, bio, portrait, statement) are `null`
 * until the founder provides them, and each block below is gated on its own
 * field. Until then the scene speaks about how the company is led without
 * implying a founder profile exists — which also holds the boundary recorded
 * in docs/company/foundation.md §1: SamJuniors is never equated with its
 * founder.
 *
 * Do not fill these fields with inferred or placeholder identity.
 */
export function FounderPresence() {
  const { founder, name } = companyContent;

  return (
    <section
      id="founder"
      className={styles.letterSection}
      aria-labelledby="founder-heading"
    >
      <div className={styles.labelRow}>
        <span className={styles.indexNumber}>04</span>
        <span className={styles.divider}>/</span>
        <span className={styles.label}>The people layer</span>
      </div>

      <h2 id="founder-heading" className={styles.heading}>
        {name} is founder-led, and deliberately not a personal brand
      </h2>

      <p className={styles.body}>
        One architect sets the direction and holds the long view. Everything
        past that is an engineering standard that has to stand on its own — the
        products are built to be judged on what they do, not on whose name is
        attached to them.
      </p>

      {founder.name ? (
        <div className={styles.founderBlock}>
          {founder.portrait ? (
            <Image
              src={founder.portrait.src}
              alt={founder.portrait.alt}
              width={founder.portrait.width}
              height={founder.portrait.height}
              className={styles.portrait}
              sizes="120px"
            />
          ) : null}

          <div className={styles.founderDetails}>
            <p className={styles.founderName}>{founder.name}</p>
            {founder.role ? (
              <p className={styles.founderRole}>{founder.role}</p>
            ) : null}
            {founder.bio ? <p className={styles.founderBio}>{founder.bio}</p> : null}
          </div>
        </div>
      ) : null}

      {founder.statement && founder.name ? (
        <blockquote className={styles.quoteWrapper}>
          <p className={styles.statement}>{founder.statement}</p>
          <footer className={styles.attribution}>
            {founder.name}
            {founder.role ? `, ${founder.role}` : null}
          </footer>
        </blockquote>
      ) : null}
    </section>
  );
}
