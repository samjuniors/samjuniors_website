import Link from 'next/link';
import { siteNavigation } from '@/content/navigation';
import { companyContent } from '@/content/company';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`${companyContent.name} Home`}>
          <span className={styles.brandMark} aria-hidden="true" />
          <span>{companyContent.name}</span>
        </Link>
        <nav aria-label="Main Navigation">
          <ul className={styles.nav}>
            {siteNavigation.primaryLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href={siteNavigation.primaryCta.href} className={styles.cta}>
          {siteNavigation.primaryCta.label}
        </Link>
      </div>
    </header>
  );
}
