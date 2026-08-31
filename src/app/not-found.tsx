import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-accent-flagship)', marginBottom: 'var(--space-2)' }}>
        404 // ROUTE_NOT_FOUND
      </div>
      <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>
        Page Not Found
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', maxWidth: '480px', margin: '0 auto var(--space-6) auto' }}>
        The requested resource or product entity does not exist in the active ecosystem.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          padding: 'var(--space-3) var(--space-5)',
          background: 'var(--color-text-primary)',
          color: 'var(--color-bg-canvas)',
          borderRadius: 'var(--radius-sm)',
          fontWeight: 600,
          fontSize: '0.9rem',
        }}
      >
        Return to Home
      </Link>
    </div>
  );
}
