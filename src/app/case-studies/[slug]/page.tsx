import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SimplePage } from "@/components/sections/simple-page";
import { caseStudies } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  return {
    title: study ? `${study.title} | TechSaws` : "Case Study | TechSaws",
    description: study?.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <SimplePage
      eyebrow="Case Study"
      title={study.title}
      description={study.summary}
      cards={[
        {
          title: "Challenge",
          text: "The team needed cleaner systems, stronger visibility, and fewer manual handoffs across critical workflows.",
        },
        {
          title: "Approach",
          text: "TechSaws mapped the operating flow, designed the system architecture, and built the first reliable delivery phase.",
        },
        {
          title: "Outcome",
          text: "The result was a more maintainable system foundation with better automation, clearer data, and stronger execution control.",
        },
      ]}
    />
  );
}
