import Link from 'next/link';
import { siteNavigation } from '@/content/navigation';
import { companyContent } from '@/content/company';
import styles from './Footer.module.css';

/**
 * Site footer.
 *
 * The link groups are the structural statement of the hierarchy: the company
 * brand and its purpose sit at the top level, and everything below is sorted
 * into what SamJuniors *is* (`Company`) and what it *builds* (`Products`).
 * A product only ever appears as a child of the Products group, never as a
 * peer of the company.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <div className={styles.brandName}>{companyContent.name}</div>
            <p className={styles.tagline}>{companyContent.tagline}</p>
          </div>
          <div className={styles.groups}>
            {siteNavigation.footerGroups.map((group) => (
              <nav key={group.label} className={styles.group} aria-label={group.label}>
                <h2 className={styles.groupLabel}>{group.label}</h2>
                <ul className={styles.links}>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className={styles.bottomRow}>
          <span>&copy; {currentYear} {companyContent.name}. All rights reserved.</span>
          <span>{companyContent.legalEntity}</span>
        </div>
      </div>
    </footer>
  );
}
