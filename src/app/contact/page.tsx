import type { Metadata } from "next";
import { AutomationContactSection } from "@/components/ai-automation-showcase";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Get in Touch | TechSaws",
  description:
    "Contact TechSaws about AI automation, infrastructure, cyber defense, growth systems, and digital architecture.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black pt-16 text-white">
      <AutomationContactSection />
      <CtaSection />
    </main>
  );
}
