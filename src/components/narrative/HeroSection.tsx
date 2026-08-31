import Link from 'next/link';
import { companyContent } from '@/content/company';
import { getFlagshipProduct } from '@/content/products';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const flagship = getFlagshipProduct();

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowLine} aria-hidden="true" />
        <span>AI-First Parent Technology Ecosystem</span>
      </div>

      <h1 id="hero-title" className={styles.headline}>
        We see what could be next — <span className={styles.headlineMuted}>and build the technology to reach it.</span>
      </h1>

      <p className={styles.subtext}>
        {companyContent.name} turns ambitious ideas into enduring tools, spatial systems, and human interfaces for the next era of computing.
      </p>

      <div className={styles.actionRow}>
        <Link href={`/products/${flagship.slug}`} className={styles.primaryBtn}>
          <span>Discover {flagship.name}</span>
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="#philosophy" className={styles.secondaryBtn}>
          <span>Read Building Thesis</span>
        </Link>
      </div>
    </section>
  );
}
