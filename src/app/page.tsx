import { HeroSection } from '@/components/narrative/HeroSection';
import { ThesisSection } from '@/components/narrative/ThesisSection';
import { LumoraStage } from '@/components/interactive/LumoraStage';
import { FounderLetter } from '@/components/narrative/FounderLetter';
import { HorizonSection } from '@/components/narrative/HorizonSection';
import { SceneProgress } from '@/components/interactive/SceneProgress';

/**
 * The unified scene numbering (design-system §6.8.6 wayfinding): one 01–05
 * system across the five scenes — the SceneProgress targets and indices.
 */
const SCENES = [
  { id: 'overture', index: '01' },
  { id: 'thesis', index: '02' },
  { id: 'lumora', index: '03' },
  { id: 'founder', index: '04' },
  { id: 'horizon', index: '05' },
] as const;

/**
 * Homepage — the 5-scene executable experience (ADR-001 §3).
 *
 * Each scene owns its composition width (design-system §6.8.6 width rhythm):
 * Scene 01 renders in the 1240px container, Scene 02 narrows to its 980px
 * editorial measure, Scene 03 breaks out wider than the container, and the
 * remaining scenes keep the standard container (their full scene-grammar
 * restaging is gated on founder review of the slice). Scene boundaries carry
 * the §6.8.6 transition grammar: dissolving seams, light ramps into/out of
 * the signature scene's elevated zone, and boundary spacing rhythm.
 * SceneProgress provides the persistent 01–05 wayfinding (§6.8.6).
 */
export default function HomePage() {
  return (
    <>
      <SceneProgress scenes={[...SCENES]} />

      {/* 1. Parent Opening & Core Identity — Scene 01 Overture */}
      <HeroSection />

      {/* 2. Editorial Building Thesis — Scene 02 */}
      <ThesisSection />

      {/* 3. Authentic Restrained Flagship Stage — Scene 03 Lumora Reveal */}
      <LumoraStage />

      {/* 4. Human Founder Conviction — Scene 04 (owns its 840px quiet measure) */}
      <FounderLetter />

      {/* 5. Expanding Horizon & Dialogue — Scene 05 (owns its 1240px container
          + full-bleed closure tone) */}
      <HorizonSection />
    </>
  );
}
