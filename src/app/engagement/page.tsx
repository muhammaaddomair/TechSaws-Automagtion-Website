import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/simple-page";

export const metadata: Metadata = {
  title: "Engagement | TechSaws",
  description:
    "Engagement models for working with TechSaws on automation, infrastructure, security, and growth systems.",
};

export default function EngagementPage() {
  return (
    <SimplePage
      eyebrow="Engagement"
      title="Flexible ways to plan, build, and scale systems."
      description="Engagements are shaped around the system you need, the complexity of your environment, and the delivery pace that fits your team."
      cards={[
        {
          title: "Discovery sprint",
          text: "A focused audit and roadmap for teams that need clarity before committing to a build.",
        },
        {
          title: "System build",
          text: "A scoped implementation engagement for automation, infrastructure, security, revenue, or experience systems.",
        },
        {
          title: "Embedded delivery",
          text: "Ongoing technical execution alongside your team for complex systems and continuous improvement.",
        },
        {
          title: "Support and optimization",
          text: "Maintenance, monitoring, iteration, and performance improvements after a system is launched.",
        },
      ]}
    />
  );
}
