import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { HeroAgentTabs } from "@/components/hero-agent-tabs";
import { LoadingScreen } from "@/components/loading-screen";
import { ServicesSection } from "@/components/services-section";
import { SolutionsSection } from "@/components/solutions-section";
import { TechnologySection } from "@/components/technology-section";
import { TopAutomationHero } from "@/components/top-automation-hero";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <LoadingScreen />
      <TopAutomationHero />
      <SolutionsSection />
      <TechnologySection />
      <ServicesSection />
      <FaqSection />
      <section className="relative isolate overflow-hidden bg-black px-7 py-10 sm:px-12 lg:px-20">
        <HeroAgentTabs />
      </section>
      <CtaSection />
    </main>
  );
}
