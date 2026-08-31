import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/content/products';
import { companyContent } from '@/content/company';

export const metadata: Metadata = {
  title: 'Products Portfolio',
  description: `Explore the expanding portfolio of AI-first products and platforms developed by ${companyContent.name}.`,
};

export default function ProductsPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
      <header style={{ maxWidth: 'var(--container-narrow-width)', marginBottom: 'var(--space-7)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-accent-flagship)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
          Portfolio Architecture
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'var(--space-3)' }}>
          Product Ecosystem
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          Expressions of {companyContent.name} engineering, designed for lasting utility, human agency, and systemic scale.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 'var(--space-6)' }}>
        {products.map((product) => (
          <article
            key={product.slug}
            style={{
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                  {product.status}
                </span>
                {product.isFlagship && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-accent-flagship)', background: 'rgba(112, 184, 255, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>
                    FLAGSHIP
                  </span>
                )}
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                {product.name}
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', lineHeight: 1.5 }}>
                {product.shortDescription}
              </p>
            </div>
            <Link
              href={`/products/${product.slug}`}
              style={{ color: 'var(--color-accent-flagship)', fontSize: '0.9rem', fontWeight: 500 }}
            >
              Explore {product.name} →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
