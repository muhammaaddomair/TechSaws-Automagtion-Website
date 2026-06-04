import { ServicesSection } from "@/components/home/services-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { TechnologySection } from "@/components/home/technology-section";
import { TopAutomationHero } from "@/components/home/top-automation-hero";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroAgentTabs } from "@/components/sections/hero-agent-tabs";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <LoadingScreen />
      <TopAutomationHero />
      <section className="relative isolate overflow-hidden bg-[#030303] px-7 py-10 sm:px-12 lg:px-20">
        <HeroAgentTabs
          visual="robot"
          title="We engineer the systems behind faster business growth."
          description="TechSaws builds automation, backend infrastructure, cybersecurity, revenue systems, and digital experiences for teams that need cleaner operations, stronger platforms, and software that scales with them."
        />
      </section>
      <SolutionsSection />
      <TechnologySection />
      <ServicesSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
