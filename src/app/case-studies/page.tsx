import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/simple-page";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | TechSaws",
  description:
    "Selected TechSaws case studies across automation, infrastructure, security, and growth systems.",
};

export default function CaseStudiesPage() {
  return (
    <SimplePage
      eyebrow="Case Studies"
      title="Practical systems work, shaped around business outcomes."
      description="A look at the kinds of operational, technical, and growth systems TechSaws builds for teams that need reliable execution."
      cards={caseStudies.map((study) => ({
        title: study.title,
        text: study.summary,
        href: `/case-studies/${study.slug}`,
      }))}
    />
  );
}
