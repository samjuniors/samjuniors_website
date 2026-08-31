import { HeroSection } from '@/components/narrative/HeroSection';
import { PhilosophySection } from '@/components/narrative/PhilosophySection';
import { ShowcaseSection } from '@/components/narrative/ShowcaseSection';
import { EcosystemSection } from '@/components/narrative/EcosystemSection';
import { FounderSection } from '@/components/narrative/FounderSection';
import { GatewaySection } from '@/components/narrative/GatewaySection';

export default function HomePage() {
  return (
    <div className="container">
      {/* 1. Parent Opening & Orientation */}
      <HeroSection />

      {/* 2. Editorial Building Thesis & 4 Filters */}
      <PhilosophySection />

      {/* 3. Flagship Spotlight & Living Demonstration */}
      <ShowcaseSection />

      {/* 4. Multi-Product Scalable Horizon */}
      <EcosystemSection />

      {/* 5. Leadership Perspective */}
      <FounderSection />

      {/* 6. Contextual Gateways */}
      <GatewaySection />
    </div>
  );
}
