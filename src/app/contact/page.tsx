import type { Metadata } from 'next';
import { companyContent } from '@/content/company';

export const metadata: Metadata = {
  title: 'Contact & Dialogue',
  description: `Connect with the ${companyContent.name} engineering and leadership team.`,
};

export default function ContactPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
      <header style={{ maxWidth: 'var(--container-narrow-width)', marginBottom: 'var(--space-8)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent-flagship)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
          Intent-Aligned Dialogue
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'var(--space-4)' }}>
          Connect with {companyContent.name}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          For inquiries regarding institutional partnership, technical research, or ecosystem collaboration.
        </p>
      </header>

      <section style={{ maxWidth: 'var(--container-narrow-width)' }}>
        <div
          style={{
            background: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-6)',
          }}
        >
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
            Ecosystem Communications Gateway
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', lineHeight: 1.5 }}>
            Direct communication channels are established based on visitor intent. (Server Action backend integration boundary prepared).
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-accent-flagship)' }}>
            contact@samjuniors.com
          </div>
        </div>
      </section>
    </div>
  );
}
