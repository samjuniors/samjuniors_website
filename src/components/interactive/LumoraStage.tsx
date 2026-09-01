'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { StickyStage } from './StickyStage';
import { LumoraWorkbenchBody } from './LumoraWorkbenchBody';
import { LumoraMobileStepper } from './LumoraMobileStepper';
import styles from './LumoraStage.module.css';

/**
 * LumoraStage — Scene 03, the flagship signature scene (ADR-001 H4/H5,
 * design-system §6.8.5).
 *
 * Two compositions over the one content model (src/content/lumora-demo.ts):
 * - Desktop: intro → StickyStage (sticky workbench, scroll-linked four-phase
 *   progression with tap override) → philosophy bridge.
 * - Mobile (§6.8.7): intro → native vertical stepper (full content parity,
 *   anchor navigation) → philosophy bridge.
 * - Reduced motion (§6.8.8): the desktop workbench renders in normal flow
 *   with tap-only phase switching (StickyStage 'explore' mode).
 *
 * The workbench body itself is shared with the `/products/lumora` deep-dive
 * exhibit (LumoraWorkbenchBody, component-inventory §4.15) — one frame, two
 * ADR-001 H4 presentation modes.
 *
 * Copy authority: docs/website/copy.md §4 — every string below is registered
 * and rendered verbatim (string parity enforced by qa-checklist §2.8).
 */

/** Mobile breakpoint for the scene recomposition (design-system §6.9 workbench collapse). */
const MOBILE_QUERY = '(max-width: 979px)';

export function LumoraStage() {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const reduced = usePrefersReducedMotion();

  // Scene intro (registered copy — identical in both compositions).
  const intro = (
    <div className={styles.intro}>
      <div className={styles.eyebrowRow}>
        <span className={styles.indexNumber}>03</span>
        <span className={styles.eyebrowDivider}>/</span>
        <span className={styles.eyebrow}>Flagship Expression</span>
      </div>
      <h2 id="lumora-heading" className={styles.headline}>
        Lumora — AI-Native Academic Operating System
      </h2>
      <p className={styles.lead}>
        Our first major flagship platform. Lumora turns fragmented coursework, research deadlines, syllabi, and degree requirements into continuous understanding, grounded advisory guidance, and focused action.
      </p>
    </div>
  );

  // Philosophy bridge (registered copy — identical in both compositions).
  const bridge = (
    <div className={styles.philosophyBridge}>
      <div className={styles.bridgeContent}>
        <div className={styles.bridgeEyebrow}>The Purpose of an Academic OS</div>
        <p className={styles.bridgeQuote}>
          &ldquo;Traditional institutions provide immense knowledge; Lumora provides the operating system to master it. By resolving fragmented records into grounded clarity, we give builders, researchers, and students sovereign agency over their intellectual trajectory.&rdquo;
        </p>
      </div>
      <div className={styles.bridgeLedger}>
        <div className={styles.ledgerRow}>
          <span className={styles.ledgerKey}>Context Convergence</span>
          <span className={styles.ledgerVal}>Continuous synthesis of syllabi, milestones, and exams into a single active timeline.</span>
        </div>
        <div className={styles.ledgerRow}>
          <span className={styles.ledgerKey}>Grounded Guidance</span>
          <span className={styles.ledgerVal}>Explainable recommendations that pinpoint cognitive friction weeks before deadlines collide.</span>
        </div>
        <div className={styles.ledgerRow}>
          <span className={styles.ledgerKey}>Sovereign Action</span>
          <span className={styles.ledgerVal}>Distraction-free focus execution with zero cloud telemetry or private data extraction.</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="lumora" className={styles.stage} aria-labelledby="lumora-heading">
      <div className={styles.stageWidth}>
        {intro}

        {isMobile ? (
          <LumoraMobileStepper />
        ) : (
          <StickyStage mode={reduced ? 'explore' : 'scroll'}>
            {(api) => <LumoraWorkbenchBody {...api} />}
          </StickyStage>
        )}

        {bridge}
      </div>
    </section>
  );
}
