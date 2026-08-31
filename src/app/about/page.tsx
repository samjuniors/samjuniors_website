import type { Metadata } from 'next';
import { companyContent } from '@/content/company';

export const metadata: Metadata = {
  title: 'Company Foundation & Philosophy',
  description: companyContent.purpose,
};

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
      <header style={{ maxWidth: 'var(--container-narrow-width)', marginBottom: 'var(--space-8)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent-flagship)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
          Company Foundation
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'var(--space-4)' }}>
          How We Build
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          {companyContent.purpose}
        </p>
      </header>

      {/* 4-Point Building Filter */}
      <section style={{ maxWidth: 'var(--container-narrow-width)', marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-5)' }}>
          The Four Foundational Filters
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {companyContent.buildingFilters.map((filter, index) => (
            <div
              key={filter.id}
              style={{
                background: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-5)',
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: 'var(--space-4)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent-flagship)', fontWeight: 600 }}>
                0{index + 1}
              </span>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--space-1)' }}>
                  {filter.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)' }}>
                  {filter.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Building Cycle */}
      <section style={{ maxWidth: 'var(--container-narrow-width)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-5)' }}>
          Iterative Building Cycle
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
          {companyContent.buildingCycle.map((cycle) => (
            <div
              key={cycle.stage}
              style={{
                background: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-5)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                STAGE 0{cycle.stage}
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 'var(--space-1)' }}>
                {cycle.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                {cycle.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
