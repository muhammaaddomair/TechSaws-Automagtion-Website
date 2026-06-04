const solutions = [
  {
    category: "Experience",
    title: "Conversion & Experience Systems",
    body: "Design and build high-performance websites, landing pages, funnels, UX improvements, and performance systems that convert visitors into customers.",
  },
  {
    category: "Strategy",
    title: "Strategic Systems & Digital Architecture",
    body: "Plan system architecture, SaaS strategy, AI adoption, infrastructure, and CTO-level decisions before your team commits to a build.",
  },
  {
    category: "Platforms",
    title: "Product & Platform Systems",
    body: "Create custom web apps, portals, internal systems, white-label platforms, and onboarding or KYC systems tailored to your operations.",
  },
  {
    category: "Payments",
    title: "Monetization & Payments",
    body: "Build subscription, billing, checkout, payment integration, and revenue tracking systems that support reliable monetization at scale.",
  },
  {
    category: "Integration",
    title: "Integrations & Middleware",
    body: "Connect APIs, webhooks, event systems, CRMs, ERPs, and middleware so your tools exchange data cleanly and reliably.",
  },
  {
    category: "Cloud",
    title: "Cloud & DevOps",
    body: "Design cloud architecture across AWS, GCP, or Azure with CI/CD pipelines, containerization, Kubernetes, and deployment workflows.",
  },
  {
    category: "Data",
    title: "Data & Intelligence",
    body: "Create BI dashboards, KPI systems, ETL pipelines, lead scoring, and predictive analytics that make performance easier to measure.",
  },
  {
    category: "Security",
    title: "Security Enhancements",
    body: "Strengthen systems with threat modeling, zero-trust architecture, secure access controls, audit logging, and monitoring foundations.",
  },
  {
    category: "Scaling",
    title: "Support & Scaling",
    body: "Keep systems improving with SLA-based maintenance, continuous development, AI enhancements, performance optimization, and scaling support.",
  },
];

export function SolutionsSection() {
  return (
    <section className="bg-black px-6 py-24 text-white sm:px-10 xl:px-[120px]">
      <div className="mx-auto w-full">
        <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
          <h2 className="text-5xl font-medium leading-none tracking-[-0.04em] text-white sm:text-6xl">
            Solutions
          </h2>
          <p className="max-w-3xl text-xl leading-8 text-white/62">
            Explore specialized systems for automation, infrastructure, security,
            growth, conversion, payments, data, and long-term technical scale.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="min-h-[268px] rounded-lg bg-[#151515] p-8 transition duration-300 hover:-translate-y-1 hover:bg-[#181818]"
            >
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/42">
                {solution.category}
              </p>
              <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.045em] text-white">
                {solution.title}
              </h3>
              <p className="mt-6 max-w-md text-base leading-7 text-white/60">
                {solution.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
