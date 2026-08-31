import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, products } from '@/content/products';
import { companyContent } from '@/content/company';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} — ${product.tagline}`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}>
      {/* Breadcrumb Navigation for Direct Deep-Link Entry */}
      <nav aria-label="Breadcrumbs" style={{ marginBottom: 'var(--space-5)', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
        <Link href="/" style={{ color: 'var(--color-text-secondary)' }}>
          {companyContent.name}
        </Link>
        {' / '}
        <Link href="/products" style={{ color: 'var(--color-text-secondary)' }}>
          Products
        </Link>
        {' / '}
        <span style={{ color: 'var(--color-text-primary)' }}>{product.name}</span>
      </nav>

      <header style={{ maxWidth: 'var(--container-narrow-width)', marginBottom: 'var(--space-8)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent-flagship)', background: 'rgba(112, 184, 255, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>
            {product.isFlagship ? 'FLAGSHIP PLATFORM' : 'ECOSYSTEM VENTURE'}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
            STATUS: {product.status}
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 'var(--space-3)' }}>
          {product.name}
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          {product.tagline}
        </p>
      </header>

      {/* Capabilities Section */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 'var(--space-5)' }}>
          Capability Architecture
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-5)' }}>
          {product.capabilities.map((cap, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-5)',
              }}
            >
              {cap.isPlaceholder && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: 'var(--space-2)' }}>
                  [STRUCTURAL CAPABILITY CONTAINER]
                </span>
              )}
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                {cap.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Parent Company Signal & Cross-Link */}
      <footer style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
        <div>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>An expression of </span>
          <Link href="/" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {companyContent.name} Ecosystem
          </Link>
        </div>
        <Link href="/products" style={{ color: 'var(--color-accent-flagship)', fontSize: '0.9rem', fontWeight: 500 }}>
          ← View All Products
        </Link>
      </footer>
    </div>
  );
}
