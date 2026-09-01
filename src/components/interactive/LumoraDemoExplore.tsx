'use client';

import { StickyStage } from './StickyStage';
import { LumoraWorkbenchBody } from './LumoraWorkbenchBody';

/**
 * LumoraDemoExplore — the `/products/lumora` deep-dive exhibit (ADR-001 H4:
 * free/tap exploration mode; design-system §6.8.5 "Exploration mode").
 *
 * The same content/state model and the same workbench frame as the homepage
 * signature scene, but tap-only: StickyStage runs in 'explore' mode — normal
 * document flow, no sticky, no scroll linkage, no phase pacing geometry.
 * Phase switching happens through the tabs and prev/next controls only.
 *
 * The honest-framing signals (registered evidence copy + STATUS) are rendered
 * by the consumer (the product page) around this exhibit — this component is
 * purely the interactive form of the registered demonstration evidence.
 *
 * Safety contracts: identical to the homepage contracts (qa-checklist §2.10)
 * — and explore mode is exactly the reduced-motion behavior, so this exhibit
 * is motion-safe by construction in every environment.
 */
export function LumoraDemoExplore() {
  return (
    <StickyStage mode="explore">
      {(api) => <LumoraWorkbenchBody {...api} />}
    </StickyStage>
  );
}
