import { Hero } from "@/components/sections/Hero";
import { BackedBy } from "@/components/sections/BackedBy";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { InfoCards } from "@/components/sections/InfoCards";
import { CTABanner } from "@/components/sections/CTABanner";
import { StepSection } from "@/components/sections/StepSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BackedBy />
      <FeatureCards />
      <InfoCards />
      <CTABanner />
      <StepSection />
    </>
  );
}
