import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/simple-page";

export const metadata: Metadata = {
  title: "Methodology | TechSaws",
  description:
    "How TechSaws discovers, designs, builds, and improves reliable business systems.",
};

export default function MethodologyPage() {
  return (
    <SimplePage
      eyebrow="Methodology"
      title="A clear path from messy systems to reliable execution."
      description="We move through focused discovery, practical architecture, staged delivery, and ongoing improvement so each build has a useful operating shape."
      cards={[
        {
          title: "Discover",
          text: "Map goals, workflows, constraints, tools, risks, and the highest-value system opportunities.",
        },
        {
          title: "Design",
          text: "Define architecture, data flow, integrations, security controls, and a phased delivery plan.",
        },
        {
          title: "Build",
          text: "Implement the system in practical stages with testing, documentation, deployment, and stakeholder review.",
        },
        {
          title: "Improve",
          text: "Monitor performance, tune workflows, extend capabilities, and keep the system aligned with business needs.",
        },
      ]}
    />
  );
}
