import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";
import { AutomationContactSection } from "@/components/services/ai-automation-showcase";

export const metadata: Metadata = {
  title: "Connect | TechSaws",
  description:
    "Connect with TechSaws about automation, infrastructure, cyber defense, growth systems, and digital architecture.",
};

export default function ConnectPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black pt-16 text-white">
      <AutomationContactSection />
      <CtaSection />
    </main>
  );
}
