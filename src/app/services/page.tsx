import type { Metadata } from "next";
import { SimplePage } from "@/components/sections/simple-page";
import { serviceItems } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | TechSaws",
  description:
    "Explore TechSaws services across automation, backend infrastructure, cyber defense, revenue systems, conversion, and technical architecture.",
};

export default function ServicesPage() {
  return (
    <SimplePage
      eyebrow="Services"
      title="Systems services for teams that need cleaner execution."
      description="Explore the core services TechSaws uses to design, build, secure, automate, and scale modern business systems."
      cards={serviceItems.map((service) => ({
        title: service.title,
        text: service.description,
        href: service.href,
      }))}
    />
  );
}
