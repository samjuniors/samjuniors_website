import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'link';
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export function Button({
  children,
  href,
  variant = 'primary',
  icon,
  className = '',
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const variantClass = styles[variant] || styles.primary;
  const combinedClassName = `${styles.btn} ${variantClass} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          <span>{children}</span>
          {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName} aria-label={ariaLabel}>
        <span>{children}</span>
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span>{children}</span>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
    </button>
  );
}
