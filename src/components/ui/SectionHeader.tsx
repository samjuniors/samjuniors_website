import type { ReactNode } from 'react';
import styles from './SectionHeader.module.css';

export interface SectionHeaderProps {
  indexNumber: string;
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  indexNumber,
  kicker,
  title,
  lead,
  id,
  className = '',
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${align === 'center' ? styles.center : ''} ${className}`}>
      <div className={styles.eyebrowRow}>
        <span className={styles.indexNumber}>{indexNumber}</span>
        <span className={styles.divider} aria-hidden="true">/</span>
        <span className={styles.kicker}>{kicker}</span>
      </div>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}
