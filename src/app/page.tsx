import { HeroSection } from '@/components/narrative/HeroSection';
import { ThesisSection } from '@/components/narrative/ThesisSection';
import { LumoraStage } from '@/components/interactive/LumoraStage';
import { FounderLetter } from '@/components/narrative/FounderLetter';
import { HorizonSection } from '@/components/narrative/HorizonSection';

/**
 * Homepage — the 5-scene executable experience (ADR-001 §3).
 *
 * Each scene owns its composition width (design-system §6.8.6 width rhythm):
 * Scene 01 renders in the 1240px container, Scene 02 narrows to its 980px
 * editorial measure, Scene 03 breaks out wider than the container, and the
 * remaining scenes (outside this slice's scope) keep the standard container.
 */
export default function HomePage() {
  return (
    <>
      {/* 1. Parent Opening & Core Identity — Scene 01 Overture */}
      <HeroSection />

      {/* 2. Editorial Building Thesis — Scene 02 */}
      <ThesisSection />

      {/* 3. Authentic Restrained Flagship Stage — Scene 03 Lumora Reveal */}
      <LumoraStage />

      {/* 4. Human Founder Conviction — Scene 04 (later pass) */}
      <div className="container">
        <FounderLetter />
      </div>

      {/* 5. Expanding Horizon & Dialogue — Scene 05 (later pass) */}
      <div className="container">
        <HorizonSection />
      </div>
    </>
  );
}
