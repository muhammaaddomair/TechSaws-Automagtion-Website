import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/simple-page";

export const metadata: Metadata = {
  title: "Capabilities | TechSaws",
  description:
    "TechSaws capabilities across automation, backend engineering, security, revenue systems, and digital architecture.",
};

export default function CapabilitiesPage() {
  return (
    <SimplePage
      eyebrow="Capabilities"
      title="Technical capabilities built around execution."
      description="TechSaws combines system design, automation, engineering, security, and growth operations into practical build capabilities."
      cards={[
        {
          title: "Automation and AI workflows",
          text: "Workflow automation, AI agents, integrations, internal tools, routing logic, and operating systems.",
        },
        {
          title: "Backend and infrastructure",
          text: "APIs, databases, cloud environments, CI/CD, monitoring, logging, and scalable service architecture.",
        },
        {
          title: "Cyber defense",
          text: "Security reviews, access control hardening, vulnerability discovery, monitoring, and incident readiness.",
        },
        {
          title: "Revenue and experience systems",
          text: "CRM workflows, lead systems, outreach infrastructure, analytics, websites, landing pages, and conversion flows.",
        },
      ]}
    />
  );
}
