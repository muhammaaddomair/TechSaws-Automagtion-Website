import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-black pt-16 text-white">
      <FaqSection />
      <CtaSection />
    </main>
  );
}
