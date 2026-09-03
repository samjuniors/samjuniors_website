import Link from 'next/link';
import { siteNavigation } from '@/content/navigation';
import { companyContent } from '@/content/company';
import { CloseNavOnNavigate } from './CloseNavOnNavigate';
import styles from './Header.module.css';

/**
 * Site header.
 *
 * The compact-viewport navigation is a native `<details>` disclosure rather than
 * a JS menu: it is keyboard-operable, exposes aria-expanded through the browser,
 * and — unlike the previous `display: none` treatment — still works with no
 * client script at all. Primary navigation is never hidden without an equivalent
 * interaction taking its place. The one thing script adds is collapsing the panel
 * after a link is taken (see CloseNavOnNavigate); without script the disclosure
 * simply behaves like any other `<details>`.
 */
export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`${companyContent.name} Home`}>
          <span className={styles.brandMark} aria-hidden="true" />
          <span>{companyContent.name}</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
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

        <Link href={siteNavigation.primaryCta.href} className={`${styles.cta} ${styles.desktopCta}`}>
          {siteNavigation.primaryCta.label}
        </Link>

        <details className={styles.compactNav} id="compact-nav">
          <summary className={styles.compactToggle} aria-label="Navigation menu">
            <span className={styles.toggleBars} aria-hidden="true" />
            <span className={styles.toggleWord}>Menu</span>
          </summary>
          <nav className={styles.compactPanel} aria-label="Site navigation">
            <ul className={styles.compactList}>
              {siteNavigation.primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.compactLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={siteNavigation.primaryCta.href} className={styles.cta}>
              {siteNavigation.primaryCta.label}
            </Link>
          </nav>
        </details>
        <CloseNavOnNavigate />
      </div>
    </header>
  );
}
