'use client';

import { companyContent } from '@/content/company';
import styles from './status-page.module.css';

/**
 * Route error boundary. Required by the App Router: without it an uncaught
 * render error in any route falls through to Next.js's default screen, which
 * shows a raw stack in development and an unbranded blank in production.
 *
 * Client component by contract (error boundaries are client-only). The reset
 * button is a real retry — it re-renders the failed segment — and the contact
 * address is the same monitored mailto used everywhere else, so a visitor who
 * hits this is not left without a route forward. No error text is rendered:
 * `error.message` can contain internal detail and is not useful to a visitor.
 */
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.code}>Error</div>
      <h1 className={styles.title}>Something went wrong on this page</h1>
      <p className={styles.description}>
        The page failed to load. Trying again usually resolves it. If it keeps
        happening, tell us what you were doing and we will look into it.
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={reset} className="btn-primary">
          <span>Try again</span>
        </button>
        <a href={`mailto:${companyContent.contactEmail}`} className="text-link">
          Report this to us →
        </a>
      </div>
    </div>
  );
}
