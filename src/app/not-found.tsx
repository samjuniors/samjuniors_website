import { Button } from '@/components/ui/Button';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={`container ${styles.page}`}>
      <div className={styles.code}>
        404 // ROUTE_NOT_FOUND
      </div>
      <h1 className={styles.title}>
        Page Not Found
      </h1>
      <p className={styles.description}>
        The requested resource or product entity does not exist in the active ecosystem.
      </p>
      <Button href="/">
        Return to Home
      </Button>
    </div>
  );
}
