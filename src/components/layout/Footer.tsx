import Link from 'next/link';
import { siteNavigation } from '@/content/navigation';
import { companyContent } from '@/content/company';
import styles from './Footer.module.css';

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
          <ul className={styles.links}>
            {siteNavigation.footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottomRow}>
          <span>&copy; {currentYear} {companyContent.name}. All rights reserved.</span>
          <span>{companyContent.legalEntity}</span>
        </div>
      </div>
    </footer>
  );
}
