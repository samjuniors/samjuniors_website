import { HeroSection } from '@/components/narrative/HeroSection';
import { ThesisSection } from '@/components/narrative/ThesisSection';
import { LumoraStage } from '@/components/interactive/LumoraStage';
import { FounderLetter } from '@/components/narrative/FounderLetter';
import { HorizonSection } from '@/components/narrative/HorizonSection';

export default function HomePage() {
  return (
    <div className="container">
      {/* 1. Parent Opening & Core Identity */}
      <HeroSection />

      {/* 2. Editorial Building Thesis */}
      <ThesisSection />

      {/* 3. Authentic Restrained Flagship Stage */}
      <LumoraStage />

      {/* 4. Human Founder Conviction */}
      <FounderLetter />

      {/* 5. Expanding Horizon & Dialogue */}
      <HorizonSection />
    </div>
  );
}
