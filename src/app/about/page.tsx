import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/simple-page";

export const metadata: Metadata = {
  title: "About | TechSaws",
  description:
    "Learn about TechSaws and how we build automation, infrastructure, security, and growth systems.",
};

export default function AboutPage() {
  return (
    <SimplePage
      eyebrow="About TechSaws"
      title="We engineer the systems behind faster business growth."
      description="TechSaws builds automation, backend infrastructure, cybersecurity, revenue systems, and digital experiences for teams that need cleaner operations and software that scales."
      cards={[
        {
          title: "Systems-first thinking",
          text: "We focus on the workflows, data, architecture, and operating habits that make software useful after launch.",
        },
        {
          title: "Practical delivery",
          text: "We favor clear scopes, phased builds, documented decisions, and systems that teams can actually run.",
        },
      ]}
    />
  );
}
