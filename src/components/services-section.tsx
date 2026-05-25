import Image from "next/image";
import strategySectionImage from "../../public/strategy-section-img.png";

const services = [
  {
    number: "01",
    title: "AI & Automation Systems",
    body: "Build intelligent systems that automate workflows, operations, and decision-making - reducing manual work while scaling execution across your business.",
  },
  {
    number: "02",
    title: "Backend & Infrastructure Engineering",
    body: "Design and build scalable, secure, high-performance backend systems that power products, dashboards, APIs, databases, and internal operations.",
  },
  {
    number: "03",
    title: "Offensive Security & Cyber Defense",
    body: "Identify, exploit, and eliminate vulnerabilities before attackers do with penetration testing, secure architecture, IAM, and compliance-ready systems.",
  },
  {
    number: "04",
    title: "Revenue & Growth Systems",
    body: "Build systems that generate, capture, and convert leads into predictable revenue through outreach infrastructure, funnels, CRM, and analytics.",
  },
];

export function ServicesSection() {
  return (
    <section className="relative isolate flex min-h-[110svh] overflow-hidden bg-black px-6 py-24 text-white sm:px-10 lg:items-center xl:px-[120px]">
      <Image
        src={strategySectionImage}
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/10" />

      <div className="mx-auto flex w-full flex-col justify-center">
        <h2 className="max-w-[1280px] text-[48px] font-medium leading-[1.34] tracking-[-0.055em] text-white">
          <span className="text-white/42">Services.</span> We design, build and
          scale intelligent systems that automate operations, secure
          infrastructure, and turn execution into measurable growth.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:mt-14 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="group relative isolate grid min-h-[26.5rem] grid-rows-[48px_1fr_auto_auto] overflow-hidden rounded-lg border border-white/22 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(255,255,255,0.035)_38%,rgba(255,255,255,0.012)_72%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(255,255,255,0.08),0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/34 hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.2),rgba(255,255,255,0.055)_38%,rgba(255,255,255,0.018)_72%)] sm:p-5"
            >
              <span className="relative z-10 text-[48px] font-medium leading-none tracking-[-0.06em] text-white/42 transition group-hover:text-white/56">
                {service.number}
              </span>

              <div />

              <h3 className="relative z-10 text-[24px] font-semibold leading-tight tracking-[-0.055em] text-white">
                {service.title}
              </h3>

              <p className="relative z-10 mt-6 max-w-sm text-[16px] font-medium leading-7 text-white/62">
                {service.body}
              </p>

              <div
                className={`pointer-events-none absolute inset-0 z-0 opacity-55 ${
                  index % 2 === 0
                    ? "bg-[radial-gradient(circle_at_12%_100%,rgba(29,78,216,0.48),transparent_42%)]"
                    : "bg-[radial-gradient(circle_at_22%_28%,rgba(76,71,128,0.48),transparent_44%)]"
                }`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
