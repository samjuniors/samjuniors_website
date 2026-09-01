'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { StickyStage } from './StickyStage';
import { LumoraWorkflowBody } from './LumoraWorkflowBody';
import { LumoraMobileStepper } from './LumoraMobileStepper';

/** Below this width the walkthrough renders as a native vertical stepper. */
const MOBILE_QUERY = '(max-width: 979px)';

/**
 * LumoraWorkflowWalkthrough — the four-step walkthrough of Lumora's real
 * assessment workflow, composed for the viewport:
 *
 * - Desktop: StickyStage in scroll-linked mode (scroll is observed, never
 *   captured), with tap controls that always override.
 * - Reduced motion: StickyStage 'explore' mode — normal flow, tap only.
 * - Mobile: a native vertical stepper, one idea per step.
 *
 * Server HTML renders the desktop composition (useMediaQuery's server snapshot
 * is false) with the sticky geometry inactive, so without JavaScript the
 * section is the first step in normal document flow — readable, nothing
 * clipped, nothing hidden. The step controls need JS to change phase, so the
 * narrative detail for steps 02–04 is JS-only here; every claim those steps
 * make is also stated statically elsewhere on the page (the four step labels in
 * this section, the capability list, and the release-gate principle) and on the
 * homepage's four-step strip.
 */
export function LumoraWorkflowWalkthrough() {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const reduced = usePrefersReducedMotion();

  if (isMobile) {
    return <LumoraMobileStepper />;
  }

  return (
    <StickyStage mode={reduced ? 'explore' : 'scroll'}>
      {(api) => <LumoraWorkflowBody {...api} />}
    </StickyStage>
  );
}
