import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, products } from '@/content/products';
import { companyContent } from '@/content/company';
import { LumoraWorkflowWalkthrough } from '@/components/interactive/LumoraWorkflowWalkthrough';
import { LumoraEvidence } from '@/components/product/LumoraEvidence';
import { JsonLd } from '@/components/seo/JsonLd';
import { productGraph } from '@/lib/structured-data';
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
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      type: 'article',
      title: `${product.name} — ${product.tagline}`,
      description: product.shortDescription,
      url: `/products/${product.slug}`,
    },
  };
}

/**
 * Product detail — the page that has to answer, in order: what this product is,
 * who it is for, what problem it solves, how the workflow actually runs, what is
 * implemented today, what is not built yet, and what the visitor can do next.
 *
 * The workflow walkthrough is Lumora's own four-step flow, so it renders only
 * for that product; every other block is driven by the content registry.
 */
export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Render gate: placeholder content never reaches production output.
  const capabilities = product.capabilities.filter((cap) => !cap.isPlaceholder);
  const evidence = product.evidence.filter((item) => !item.isPlaceholder);
  const showWorkflowWalkthrough = product.slug === 'lumora';

  return (
    <>
      <JsonLd data={productGraph(product)} />

      <div className={`container ${styles.page}`}>
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
              {product.isFlagship ? 'Flagship product' : 'Ecosystem product'}
            </span>
            <span className={styles.statusLabel}>{product.statusLabel}</span>
          </div>
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.tagline}>{product.tagline}</p>
          <p className={styles.description}>{product.shortDescription}</p>
        </header>

        {/* Who it is for / what it solves. */}
        <section className={styles.framingGrid} aria-labelledby="framing-heading">
          <h2 id="framing-heading" className="sr-only">
            Who {product.name} is for and what it solves
          </h2>

          <div className={styles.framingCol}>
            <p className={styles.metaLabel}>Built for</p>
            <p className={styles.metaPrimary}>{product.audience.primary}</p>
            <p className={styles.metaSecondary}>
              Also serves {product.audience.secondary.join(', ').toLowerCase()}.
            </p>
          </div>

          <div className={styles.framingCol}>
            <p className={styles.metaLabel}>The problem</p>
            <p className={styles.problem}>{product.problem}</p>
          </div>
        </section>

        <p className={styles.principle}>{product.principle}</p>
      </div>

      {showWorkflowWalkthrough ? (
        <section
          id="workflow"
          className={styles.workflowSection}
          aria-labelledby="workflow-heading"
        >
          <div className={`container ${styles.workflowIntro}`}>
            <p className={styles.sectionEyebrow}>How the workflow runs</p>
            <h2 id="workflow-heading" className={styles.sectionTitle}>
              Four steps, and the last one belongs to a person
            </h2>
            <p className={styles.sectionLead}>
              This is the real path a piece of student work takes through{' '}
              {product.name} — from the rubric it is measured against to the moment a
              teacher releases the result. Step through it in any order.
            </p>
          </div>
          <div className="container">
            <LumoraWorkflowWalkthrough />
          </div>
        </section>
      ) : null}

      <div className={`container ${styles.page}`}>
        {capabilities.length > 0 && (
          <section className={styles.block} aria-labelledby="implemented-heading">
            <p className={styles.sectionEyebrow}>What exists today</p>
            <h2 id="implemented-heading" className={styles.sectionTitle}>
              Implemented and observable in the product
            </h2>
            <div className={styles.capabilityGrid}>
              {capabilities.map((cap) => (
                <div key={cap.title} className={styles.capabilityCard}>
                  <h3 className={styles.capabilityTitle}>{cap.title}</h3>
                  <p className={styles.capabilityDescription}>{cap.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/*
        Evidence substantiates the capability list, so it sits directly after it:
        the page then runs what it is → who for → how it works → what is real
        (claimed, then evidenced) → what is not built → what to do next, with the
        honest gap as the last thing read before the ask.
      */}
      <LumoraEvidence
        items={evidence}
        headingId="product-evidence-heading"
        title={`${product.name} as it stands today`}
        intro={`Each of these surfaces exists in the product now. What they do is described from the product's own build, running on seeded demonstration data rather than real student records — none of it is a description of an intended future.`}
      />

      <div className={`container ${styles.page}`}>
        {product.roadmap.length > 0 && (
          <section className={styles.block} aria-labelledby="roadmap-heading">
            <p className={styles.sectionEyebrow}>What does not exist yet</p>
            <h2 id="roadmap-heading" className={styles.sectionTitle}>
              Named, so nobody has to guess
            </h2>
            <p className={styles.sectionLead}>
              {product.name} is in pre-launch beta and in active development. The
              following is not built, and is listed here rather than implied by
              omission.
            </p>
            <ul className={styles.roadmapList}>
              {product.roadmap.map((item) => (
                <li key={item.title} className={styles.roadmapItem}>
                  <div className={styles.roadmapHead}>
                    <h3 className={styles.roadmapTitle}>{item.title}</h3>
                    <span className={styles.horizonTag}>
                      {item.horizon === 'in-development' ? 'In development' : 'Planned'}
                    </span>
                  </div>
                  <p className={styles.roadmapDescription}>{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <div className={`container ${styles.page}`}>
        <section className={styles.ctaSection} aria-labelledby="cta-heading">
          <h2 id="cta-heading" className={styles.ctaTitle}>
            {product.name} is not generally available yet
          </h2>
          <p className={styles.ctaBody}>
            There is no public sign-up, and we would rather say so than send you to a
            waiting-list page that does nothing. If you want early access, a pilot in
            your classroom or institution, or a walkthrough with the person building
            it, email us and we will reply.
          </p>
          <div className={styles.ctaActions}>
            <a
              href={`mailto:${companyContent.contactEmail}?subject=${encodeURIComponent(
                `${product.name} early access`,
              )}`}
              className="btn-primary"
            >
              <span>Email us about {product.name}</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link href="/contact" className="text-link">
              Other ways to reach us →
            </Link>
          </div>
        </section>

        <footer className={styles.pageFooter}>
          <div>
            <span className={styles.footerContext}>A product of </span>
            <Link href="/" className={styles.footerLink}>
              {companyContent.name}
            </Link>
          </div>
          <Link href="/products" className={styles.viewAllLink}>
            ← All products
          </Link>
        </footer>
      </div>
    </>
  );
}
