import Link from 'next/link';
import { getFlagshipProduct } from '@/content/products';
import { LumoraEvidence } from '@/components/product/LumoraEvidence';
import styles from './LumoraFlagship.module.css';

/**
 * LumoraFlagship — Scene 03, the flagship product beat of the homepage.
 *
 * Deliberately compact: the homepage states what Lumora is, how its workflow
 * runs, where the human decision sits, and what its primary surface does today.
 * The full four-step walkthrough and the complete evidence set live on
 * /products/lumora — the homepage is not the place to spend four viewport
 * heights on one product.
 *
 * Server component: no client state on this beat.
 */
export function LumoraFlagship() {
  const product = getFlagshipProduct();

  return (
    <section id="lumora" className={styles.stage} aria-labelledby="lumora-heading">
      <div className={styles.stageWidth}>
        <div className={styles.intro}>
          <div className={styles.eyebrowRow}>
            <span className={styles.indexNumber}>03</span>
            <span className={styles.eyebrowDivider}>/</span>
            <span className={styles.eyebrow}>Flagship product</span>
          </div>
          <h2 id="lumora-heading" className={styles.headline}>
            {product.name} — assessment the teacher still decides
          </h2>
          <p className={styles.category}>
            {product.category}
            {/* The separator lives inside the status span so it wraps with the
                status text instead of dangling at the end of the category line. */}
            <span className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true">·</span>
              {product.statusLabel}
            </span>
          </p>
          <p className={styles.lead}>{product.shortDescription}</p>
        </div>

        <ol className={styles.workflow}>
          {product.workflow.map((step) => (
            <li key={step.id} className={styles.workflowStep}>
              <span className={styles.workflowOrder}>{step.order}</span>
              <h3 className={styles.workflowLabel}>{step.label}</h3>
              <p className={styles.workflowSummary}>{step.summary}</p>
            </li>
          ))}
        </ol>

        <div className={styles.closing}>
          <p className={styles.principle}>{product.principle}</p>
          <div className={styles.actions}>
            <Link href={`/products/${product.slug}`} className="btn-primary">
              <span>How {product.name} works</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="text-link">
              Talk to us about {product.name} →
            </Link>
          </div>
        </div>
      </div>

      <LumoraEvidence
        items={product.evidence.slice(0, 1)}
        headingId="lumora-evidence-heading"
        title="What the product actually does today"
        intro={`${product.name} is in pre-launch beta and in active development. This is what its primary surface does today, verified against the product's own build and running on seeded demonstration data — not a description of an intended future.`}
      />
    </section>
  );
}
