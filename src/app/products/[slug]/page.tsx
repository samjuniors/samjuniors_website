import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, products } from '@/content/products';
import { companyContent } from '@/content/company';
import styles from './product-detail.module.css';

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

  // Render gate (qa-checklist §2.2): placeholder content never ships to production output.
  const capabilities = product.capabilities.filter((cap) => !cap.isPlaceholder);
  const evidence = (product.verifiableEvidence ?? []).filter((item) => !item.isPlaceholder);

  return (
    <div className={`container ${styles.page}`}>
      {/* Breadcrumb Navigation for Direct Deep-Link Entry */}
      <nav aria-label="Breadcrumbs" className={styles.breadcrumbs}>
        <Link href="/" className={styles.breadcrumbLink}>
          {companyContent.name}
        </Link>
        {' / '}
        <Link href="/products" className={styles.breadcrumbLink}>
          Products
        </Link>
        {' / '}
        <span className={styles.breadcrumbCurrent}>{product.name}</span>
      </nav>

      <header className={styles.pageHeader}>
        <div className={styles.badgeRow}>
          <span className={styles.flagshipChip}>
            {product.isFlagship ? 'FLAGSHIP PLATFORM' : 'ECOSYSTEM VENTURE'}
          </span>
          <span className={styles.statusLabel}>
            STATUS: {product.status}
          </span>
        </div>
        <h1 className={styles.title}>
          {product.name}
        </h1>
        <p className={styles.tagline}>
          {product.tagline}
        </p>
      </header>

      {/* Capabilities Section */}
      {capabilities.length > 0 && (
        <section className={styles.capabilitiesSection}>
          <h2 className={styles.sectionTitle}>
            Capability Architecture
          </h2>
          <div className={styles.capabilityGrid}>
            {capabilities.map((cap, idx) => (
              <div key={idx} className={styles.capabilityCard}>
                <h3 className={styles.capabilityTitle}>
                  {cap.title}
                </h3>
                <p className={styles.capabilityDescription}>
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Verifiable Evidence Section (spec §4.5 Product evidence class) */}
      {evidence.length > 0 && (
        <section className={styles.evidenceSection}>
          <div className={styles.evidenceGrid}>
            {evidence.map((item, idx) => (
              <article key={idx} className={styles.evidenceCard}>
                <h3 className={styles.evidenceTitle}>
                  {item.title}
                </h3>
                <p className={styles.evidenceDescription}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Parent Company Signal & Cross-Link */}
      <footer className={styles.pageFooter}>
        <div>
          <span className={styles.footerContext}>An expression of </span>
          <Link href="/" className={styles.footerLink}>
            {companyContent.name} Ecosystem
          </Link>
        </div>
        <Link href="/products" className={styles.viewAllLink}>
          ← View All Products
        </Link>
      </footer>
    </div>
  );
}
