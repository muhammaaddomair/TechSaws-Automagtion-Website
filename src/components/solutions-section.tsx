const solutions = [
  {
    category: "Finance",
    title: "Smart Invoice Reminders",
    body: "Automate invoice follow-ups with smart triggers to reduce late payments and boost cash flow - no manual chasing required.",
  },
  {
    category: "Operations",
    title: "Automated Review Collection",
    body: "Trigger review requests post-service or milestone to grow 5-star feedback and build trust - without lifting a finger.",
  },
  {
    category: "Operations",
    title: "Automated Onboarding",
    body: "Deliver a smooth client onboarding journey with automated emails, tasks, and scheduling - all synced to your systems.",
  },
  {
    category: "Marketing",
    title: "Lead Magnet Nurturing",
    body: "Turn downloads into leads with automated email journeys that follow up, educate, and drive conversion - on autopilot.",
  },
  {
    category: "Sales",
    title: "Automated Booking Systems",
    body: "Let leads instantly book the right time with the right person - synced with your calendar, CRM, and workflows.",
  },
  {
    category: "Sales",
    title: "Smart Lead Responders",
    body: "Auto-respond to new leads in seconds with personalised replies, booking links, and CRM updates - speed wins deals.",
  },
  {
    category: "Marketing",
    title: "Cyclic Content Generator",
    body: "Generate and recycle marketing content with AI-driven prompts and scheduling - keeping your brand visible, consistently.",
  },
  {
    category: "Sales",
    title: "Hiring Pipelines",
    body: "Streamline recruitment with automated workflows for applications, screening, and interview scheduling - fast, fair hiring.",
  },
  {
    category: "Sales",
    title: "Sales Outreach Engines",
    body: "Power consistent outbound with automated, sequenced emails and CRM updates that keep your pipeline full - and moving.",
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
            Discover a range of smart automation solutions designed to save time,
            reduce manual work, and unlock new efficiencies across your business.
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
