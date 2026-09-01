import Image from 'next/image';
import type { ProductEvidenceItem } from '@/content/types';
import styles from './LumoraEvidence.module.css';

interface LumoraEvidenceProps {
  items: ProductEvidenceItem[];
  /** Heading id for the enclosing section's aria-labelledby. */
  headingId: string;
  title: string;
  intro: string;
}

/**
 * LumoraEvidence — the product evidence surface.
 *
 * This is the intentional environment handoff: the SamJuniors obsidian
 * environment gives way to the product's own light canvas, because what is
 * being shown here belongs to Lumora, not to the parent company.
 *
 * Rules for this surface:
 * - Interface evidence is a real capture of the shipping product or it is not
 *   published at all. Nothing here reconstructs Lumora's UI in SamJuniors CSS.
 * - Captures show seeded demonstration data, and say so. Demo-data indicators
 *   present in a capture are never cropped out.
 * - `observed` entries describe behaviour visible in the product today. Items
 *   flagged `isPlaceholder` are omitted by the render gate below.
 */
export function LumoraEvidence({ items, headingId, title, intro }: LumoraEvidenceProps) {
  const published = items.filter((item) => !item.isPlaceholder);
  if (published.length === 0) return null;

  return (
    <section className={styles.band} aria-labelledby={headingId}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Product evidence</p>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          <p className={styles.intro}>{intro}</p>
        </header>

        <ul className={styles.list}>
          {published.map((item) => (
            <li key={item.id} className={item.image ? styles.item : styles.itemFull}>
              {item.image ? (
                <figure className={styles.figure}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className={styles.shot}
                    sizes="(max-width: 900px) 100vw, 720px"
                  />
                </figure>
              ) : null}

              <div className={styles.itemBody}>
                <div className={styles.itemHead}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  {item.isDemoData ? (
                    <span className={styles.demoTag}>Demonstration data</span>
                  ) : null}
                </div>
                <p className={styles.itemDesc}>{item.description}</p>
                <ul className={styles.observed}>
                  {item.observed.map((line) => (
                    <li key={line} className={styles.observedItem}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
