import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | TechSaws",
  description:
    "Answers to common questions about TechSaws services, process, timelines, integrations, and support.",
};

const faqItems = [
  {
    question: "What kinds of systems does TechSaws build?",
    answer:
      "We build AI automation, backend infrastructure, cybersecurity, revenue systems, conversion experiences, integrations, dashboards, and scalable digital architecture.",
  },
  {
    question: "Can you work with our existing tools?",
    answer:
      "Yes. We can connect with CRMs, websites, APIs, databases, cloud platforms, payment tools, helpdesks, analytics, and internal operations systems.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "We begin with discovery, map the highest-value opportunities, define the system scope, then plan the first build phase around clear outcomes.",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Focused automations and website improvements can move quickly, while larger systems are delivered in planned phases with milestones and review points.",
  },
  {
    question: "Do you handle security and reliability?",
    answer:
      "Yes. We design with access control, logging, monitoring, secure integrations, performance, and maintainability in mind from the start.",
  },
  {
    question: "Can you support systems after launch?",
    answer:
      "Yes. We can provide ongoing improvements, maintenance, monitoring, optimization, and new feature development as your business grows.",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black pt-24 text-white">
      <section className="relative isolate px-6 pb-24 pt-10 sm:px-10 xl:px-[120px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_14%,rgba(37,99,235,0.26),transparent_34%),radial-gradient(circle_at_12%_82%,rgba(16,185,129,0.12),transparent_30%),linear-gradient(180deg,#050505_0%,#000_66%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/10" />

        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-400">
            Frequently Asked Questions
          </p>
          <h1 className="mt-4 max-w-4xl text-6xl font-medium leading-none tracking-[-0.06em] text-white sm:text-7xl lg:text-[92px]">
            Clear answers before we build.
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-medium leading-8 text-white/58">
            A simple guide to how TechSaws plans, builds, connects, and supports
            business systems.
          </p>

          <div className="mt-14 divide-y divide-white/10 overflow-hidden rounded-md border border-white/12 bg-white/[0.025]">
            {faqItems.map((item, index) => (
              <article
                key={item.question}
                className="grid gap-4 px-6 py-7 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                  Question {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {item.question}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base font-medium leading-7 text-white/58">
                    {item.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
