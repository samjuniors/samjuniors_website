import { HeroSection } from '@/components/narrative/HeroSection';
import { ThesisSection } from '@/components/narrative/ThesisSection';
import { LumoraFlagship } from '@/components/narrative/LumoraFlagship';
import { FounderPresence } from '@/components/narrative/FounderPresence';
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
 * Homepage — five scenes carrying seven beats.
 *
 * 01 Overture: who SamJuniors is and what it builds.
 * 02 Thesis: why the company exists.
 * 03 Lumora: the flagship product, stated compactly, closing with one band of
 *    real product evidence. The full four-step workflow walkthrough lives on
 *    /products/lumora — the homepage does not spend four viewport heights on
 *    a single product, which is what keeps this beat inside its share of the
 *    page rather than consuming it.
 * 04 Founder: the human layer, with no invented founder identity.
 * 05 Horizon: the clear next action.
 *
 * Scene boundaries carry the transition grammar (dissolving seams, light
 * ramps, boundary spacing rhythm) and SceneProgress provides the persistent
 * 01–05 wayfinding.
 */
export default function HomePage() {
  return (
    <>
      <SceneProgress scenes={[...SCENES]} />

      <HeroSection />

      <ThesisSection />

      <LumoraFlagship />

      <FounderPresence />

      <HorizonSection />
    </>
  );
}
