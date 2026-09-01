import Link from 'next/link';
import styles from './status-page.module.css';

export default function NotFound() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.code}>404 — Not found</div>
      <h1 className={styles.title}>This page does not exist</h1>
      <p className={styles.description}>
        The address you followed does not match anything on this site. It was
        either mistyped or a link that has since changed.
      </p>
      <div className={styles.actions}>
        <Link href="/" className="btn-primary">
          <span>Go to the homepage</span>
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/products" className="text-link">
          See what we build →
        </Link>
      </div>
    </div>
  );
}
