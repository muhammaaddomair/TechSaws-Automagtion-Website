import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | TechSaws",
  description:
    "TechSaws terms and conditions for website visitors, service inquiries, and project engagements.",
};

const termsSections = [
  {
    title: "Use of This Website",
    text:
      "This website is provided for general information about TechSaws, our services, and our capabilities. You agree not to misuse the site, interfere with its operation, or attempt unauthorized access to any systems.",
  },
  {
    title: "Service Information",
    text:
      "Descriptions of services, timelines, outcomes, and capabilities are provided for informational purposes. A project scope, deliverables, pricing, and timeline are confirmed separately in a written agreement.",
  },
  {
    title: "Project Engagements",
    text:
      "Client work begins after both parties agree on scope, responsibilities, fees, and terms. Any changes to scope, integrations, deadlines, or deliverables may require a revised plan or additional approval.",
  },
  {
    title: "Client Materials and Access",
    text:
      "You are responsible for providing accurate information, required access, brand assets, credentials, and approvals needed for delivery. We use provided access only for agreed project purposes.",
  },
  {
    title: "Intellectual Property",
    text:
      "Ownership of final deliverables is handled according to the project agreement. TechSaws may retain ownership of pre-existing tools, reusable methods, internal processes, and general technical knowledge.",
  },
  {
    title: "Third-Party Tools",
    text:
      "Projects may rely on third-party platforms, APIs, software, hosting, payment tools, or automation services. Their availability, pricing, rules, and limitations are controlled by those providers.",
  },
  {
    title: "Limitation of Liability",
    text:
      "To the maximum extent permitted by law, TechSaws is not liable for indirect, incidental, consequential, or special damages arising from website use or service discussions.",
  },
  {
    title: "Updates to Terms",
    text:
      "We may update these terms as our website, services, or business practices evolve. Continued use of the website after changes means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black pt-24 text-white">
      <section className="relative isolate px-6 pb-24 pt-10 sm:px-10 xl:px-[120px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_14%,rgba(37,99,235,0.26),transparent_34%),radial-gradient(circle_at_12%_82%,rgba(16,185,129,0.12),transparent_30%),linear-gradient(180deg,#050505_0%,#000_66%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/10" />

        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-400">
            Terms & Conditions
          </p>
          <h1 className="mt-4 max-w-4xl text-6xl font-medium leading-none tracking-[-0.06em] text-white sm:text-7xl lg:text-[92px]">
            Simple terms for working with TechSaws.
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-medium leading-8 text-white/58">
            These terms explain the basic conditions for using this website and
            discussing or starting a project with TechSaws.
          </p>

          <div className="mt-14 grid gap-4">
            {termsSections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-md border border-white/12 bg-white/[0.025] px-6 py-7 sm:px-8"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-10">
                  <p className="min-w-[110px] text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {section.title}
                    </h2>
                    <p className="mt-3 max-w-4xl text-base font-medium leading-7 text-white/58">
                      {section.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
