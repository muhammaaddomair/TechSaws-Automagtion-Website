import { notFound } from "next/navigation";
import { AiAutomationShowcase } from "@/components/ai-automation-showcase";
import { serviceItems } from "@/lib/services";

export function generateStaticParams() {
  return serviceItems.map((service) => ({
    slug: service.href.split("/").at(-1),
  }));
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = serviceItems.find((item) => item.href === `/services/${slug}`);

  if (!service) {
    notFound();
  }

  if (slug === "ai-automation") {
    return (
      <main className="min-h-screen bg-black" aria-label={service.title}>
        <AiAutomationShowcase />
      </main>
    );
  }

  return <main className="min-h-screen bg-black" aria-label={service.title} />;
}
