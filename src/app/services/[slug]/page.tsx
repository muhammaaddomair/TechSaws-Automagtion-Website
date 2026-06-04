import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileSearch, Gauge, Network, ServerCog } from "lucide-react";
import {
  AiAutomationShowcase,
  AutomationContactSection,
} from "@/components/services/ai-automation-showcase";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroAgentTabs } from "@/components/sections/hero-agent-tabs";
import { serviceItems } from "@/lib/services";
import cyberDefenseHeroGif from "../../../../public/assets/animations/cyber-defense-hero.gif";
import backendHeroImage from "../../../../public/assets/images/services/backend-infrastructure-hero.png";
import backendServiceImage from "../../../../public/assets/images/services/backend-infrastructure-process-bg.png";

const backendProcessCards = [
  {
    title: "Audit the stack",
    text: "We review your APIs, database structure, deployment flow, bottlenecks, risks, and current operating constraints.",
    icon: FileSearch,
    iconStyle:
      "border-sky-300/36 bg-sky-400/14 text-sky-200 shadow-[0_18px_44px_rgba(56,189,248,0.22)]",
  },
  {
    title: "Design the architecture",
    text: "We define the right service boundaries, data model, cloud approach, security controls, and delivery roadmap.",
    icon: Network,
    iconStyle:
      "border-violet-300/36 bg-violet-400/14 text-violet-200 shadow-[0_18px_44px_rgba(167,139,250,0.2)]",
  },
  {
    title: "Build the foundation",
    text: "We implement scalable backend services, integrations, infrastructure, CI/CD, monitoring, and documentation.",
    icon: ServerCog,
    iconStyle:
      "border-emerald-300/36 bg-emerald-400/14 text-emerald-200 shadow-[0_18px_44px_rgba(52,211,153,0.2)]",
  },
  {
    title: "Scale and support",
    text: "We tune performance, improve reliability, support releases, and keep the platform ready for future growth.",
    icon: Gauge,
    iconStyle:
      "border-amber-300/36 bg-amber-400/14 text-amber-200 shadow-[0_18px_44px_rgba(251,191,36,0.18)]",
  },
];

const cyberBuildCards = [
  {
    title: "Attack surface mapping",
    text: "Identify exposed systems, risky access paths, weak configurations, and the assets that need the most protection.",
  },
  {
    title: "Vulnerability discovery",
    text: "Test applications, infrastructure, APIs, and workflows to find exploitable issues before they become incidents.",
  },
  {
    title: "Access control hardening",
    text: "Improve IAM, permissions, authentication, secrets handling, and admin workflows so access stays intentional.",
  },
  {
    title: "Incident-ready monitoring",
    text: "Build logging, alerts, response playbooks, and visibility systems that help teams detect and act faster.",
  },
];

const serviceContent = {
  "backend-infrastructure": {
    eyebrow: "Backend & Infrastructure",
    headline: "Reliable systems for products that need to scale.",
    intro:
      "We design backend architecture, APIs, databases, cloud systems, and deployment foundations that keep your business fast, secure, and maintainable.",
    outcomes: [
      "Scalable APIs and backend services",
      "Database architecture and optimization",
      "Cloud deployment and infrastructure planning",
      "Monitoring, logging, and performance improvements",
    ],
    process: [
      "Audit the current stack and bottlenecks",
      "Define the target architecture and delivery plan",
      "Build, test, deploy, and document the system",
    ],
    faqs: [
      {
        question: "Can you modernize an existing backend?",
        answer:
          "Yes. We can refactor legacy services, improve APIs, optimize databases, and migrate infrastructure in controlled phases.",
      },
      {
        question: "Do you handle cloud deployment?",
        answer:
          "Yes. We plan and implement cloud environments, CI/CD, monitoring, scaling, and operational workflows.",
      },
      {
        question: "Can you work with our internal development team?",
        answer:
          "Yes. We can work alongside your team, document decisions, and hand over systems cleanly.",
      },
      {
        question: "Can you build APIs for web and mobile apps?",
        answer:
          "Yes. We design and build secure APIs for websites, mobile apps, dashboards, customer portals, and third-party integrations.",
      },
      {
        question: "Do you improve database performance?",
        answer:
          "Yes. We can review schema design, queries, indexes, data flows, and storage choices to improve speed and reliability.",
      },
      {
        question: "Can you set up CI/CD and deployment workflows?",
        answer:
          "Yes. We can create deployment pipelines, environment workflows, testing gates, rollback plans, and release processes.",
      },
      {
        question: "Do you add monitoring and logging?",
        answer:
          "Yes. We can add logs, metrics, alerts, dashboards, and observability practices so problems are easier to detect and fix.",
      },
      {
        question: "Can you help reduce infrastructure costs?",
        answer:
          "Yes. We can audit usage, tune resources, remove waste, improve caching, and design infrastructure around actual demand.",
      },
    ],
  },
  "cyber-defense": {
    eyebrow: "Cyber Defense",
    headline: "Find weaknesses before attackers do.",
    intro:
      "We help teams identify risk, harden systems, improve access controls, and build practical security foundations across products and infrastructure.",
    outcomes: [
      "Security reviews and vulnerability discovery",
      "Access control and IAM improvements",
      "Secure architecture guidance",
      "Monitoring, logging, and incident readiness",
    ],
    process: [
      "Map systems, assets, and likely attack paths",
      "Test and prioritize security findings",
      "Remediate issues and improve ongoing controls",
    ],
    faqs: [
      {
        question: "Do you provide penetration testing?",
        answer:
          "We can assess applications, infrastructure, workflows, and configurations, then prioritize fixes by real business risk.",
      },
      {
        question: "Can you help after a security issue?",
        answer:
          "Yes. We can support containment planning, evidence review, hardening, logging, and recovery improvements.",
      },
      {
        question: "Will you help our team fix findings?",
        answer:
          "Yes. We can provide remediation guidance or directly implement fixes depending on the engagement.",
      },
    ],
  },
  "revenue-growth": {
    eyebrow: "Revenue Systems",
    headline: "Build systems that create and convert demand.",
    intro:
      "We build lead generation, outreach, CRM, analytics, funnel, and automation systems that help revenue teams move faster with cleaner data.",
    outcomes: [
      "Lead capture and routing systems",
      "CRM pipeline and automation workflows",
      "Outbound and follow-up systems",
      "Revenue dashboards and conversion tracking",
    ],
    process: [
      "Map your acquisition and sales workflow",
      "Identify friction, leakage, and automation opportunities",
      "Build the systems that improve speed and visibility",
    ],
    faqs: [
      {
        question: "Can you improve our CRM workflow?",
        answer:
          "Yes. We can clean pipeline stages, automate routing, enrich records, trigger follow-ups, and improve reporting.",
      },
      {
        question: "Do you build outbound systems?",
        answer:
          "Yes. We can create outreach workflows, lead lists, personalization logic, email sequences, and tracking systems.",
      },
      {
        question: "Can you help measure conversion?",
        answer:
          "Yes. We can connect analytics, dashboards, attribution events, and funnel reporting so teams can see what works.",
      },
    ],
  },
  "conversion-experience": {
    eyebrow: "Conversion & Experience",
    headline: "Digital experiences built to convert.",
    intro:
      "We design and build websites, landing pages, flows, and product experiences that are fast, clear, persuasive, and easy to use.",
    outcomes: [
      "High-conversion websites and landing pages",
      "UX improvements and funnel optimization",
      "Performance and accessibility improvements",
      "Analytics-ready user journeys",
    ],
    process: [
      "Review audience, goals, and current conversion friction",
      "Design clear user flows and page structure",
      "Build, test, optimize, and track performance",
    ],
    faqs: [
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We can improve structure, messaging, layout, performance, and conversion without losing what already works.",
      },
      {
        question: "Do you build landing pages?",
        answer:
          "Yes. We build landing pages for campaigns, services, lead capture, product launches, and sales funnels.",
      },
      {
        question: "Can you improve page speed?",
        answer:
          "Yes. We optimize frontend performance, media, code structure, and loading behavior.",
      },
    ],
  },
  "strategy-architecture": {
    eyebrow: "Strategy & Architecture",
    headline: "A technical roadmap before expensive build decisions.",
    intro:
      "We help you choose the right architecture, prioritize systems, and define a practical technology roadmap before committing to major development work.",
    outcomes: [
      "System architecture and roadmap planning",
      "Technical audits and build recommendations",
      "Tooling and integration strategy",
      "Phased delivery plans for complex systems",
    ],
    process: [
      "Understand goals, constraints, and current systems",
      "Map architecture options and tradeoffs",
      "Deliver a phased roadmap with next steps",
    ],
    faqs: [
      {
        question: "Can you review our current tech stack?",
        answer:
          "Yes. We can audit architecture, integrations, technical debt, security posture, and scaling constraints.",
      },
      {
        question: "Do you help choose tools?",
        answer:
          "Yes. We can compare platforms, APIs, infrastructure, and vendors based on your goals and operating reality.",
      },
      {
        question: "Can this happen before a build?",
        answer:
          "Yes. Strategy and architecture work is often the best first step before investing in major implementation.",
      },
    ],
  },
  "specialized-systems": {
    eyebrow: "Specialized Systems",
    headline: "Custom capabilities for complex business needs.",
    intro:
      "We build specialized product, payment, integration, cloud, data, security, and operations systems when off-the-shelf tools are not enough.",
    outcomes: [
      "Custom internal tools and portals",
      "Payment, product, and platform capabilities",
      "Middleware and third-party integrations",
      "Data, cloud, and operational systems",
    ],
    process: [
      "Define the capability and system boundaries",
      "Design the integration and data model",
      "Build, test, deploy, and support the workflow",
    ],
    faqs: [
      {
        question: "Can you build custom internal tools?",
        answer:
          "Yes. We build dashboards, admin panels, portals, approval tools, reporting systems, and workflow interfaces.",
      },
      {
        question: "Can you integrate multiple platforms?",
        answer:
          "Yes. We can connect APIs, databases, SaaS tools, payment systems, CRMs, and custom applications.",
      },
      {
        question: "Do you support specialized builds after launch?",
        answer:
          "Yes. We can maintain, extend, monitor, and optimize systems after they go live.",
      },
    ],
  },
} as const;

type ServiceSlug = keyof typeof serviceContent;

function StandardServicePage({
  service,
  slug,
}: {
  service: (typeof serviceItems)[number];
  slug: ServiceSlug;
}) {
  const content = serviceContent[slug];
  const isBackendPage = slug === "backend-infrastructure";
  const isCyberDefensePage = slug === "cyber-defense";
  const isFeatureHero = isBackendPage || isCyberDefensePage;

  return (
    <>
      <section
        className={`relative isolate overflow-hidden bg-black px-6 text-white sm:px-10 xl:px-[120px] ${
          isFeatureHero
            ? "flex min-h-screen items-center py-40 text-center"
            : "pb-24 pt-36"
        }`}
      >
        {isBackendPage ? (
          <>
            <Image
              src={backendHeroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="absolute inset-0 -z-20 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.56)_56%,rgba(0,0,0,0.84)_100%),radial-gradient(circle_at_50%_46%,rgba(37,99,235,0.18),transparent_38%)]" />
          </>
        ) : isCyberDefensePage ? (
          <>
            <Image
              src={cyberDefenseHeroGif}
              alt=""
              fill
              priority
              unoptimized
              sizes="100vw"
              className="absolute inset-0 -z-20 object-cover"
            />
          </>
        ) : (
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_14%,rgba(37,99,235,0.28),transparent_34%),radial-gradient(circle_at_12%_82%,rgba(16,185,129,0.1),transparent_30%),linear-gradient(180deg,#050505_0%,#000_68%)]" />
        )}
        <div className={`mx-auto ${isFeatureHero ? "max-w-5xl" : "max-w-6xl"}`}>
          <p
            className={
              isFeatureHero
                ? "backend-hero-pill relative mx-auto inline-flex h-9 items-center overflow-hidden rounded-full border border-white/20 px-5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_16px_46px_rgba(37,99,235,0.18)] backdrop-blur-md"
                : "text-sm font-bold uppercase tracking-[0.16em] text-blue-400"
            }
          >
            {isFeatureHero ? (
              <span className="backend-hero-pill-line" aria-hidden="true" />
            ) : null}
            <span className="relative z-10">{content.eyebrow}</span>
          </p>
          <h1
            className={`mt-5 text-6xl font-medium leading-none tracking-[-0.06em] text-white sm:text-7xl lg:text-[92px] ${
              isFeatureHero ? "mx-auto max-w-5xl" : "max-w-5xl"
            }`}
          >
            {content.headline}
          </h1>
          <p
            className={`mt-7 max-w-3xl text-lg font-medium leading-8 text-white/60 sm:text-xl ${
              isFeatureHero ? "mx-auto" : ""
            }`}
          >
            {content.intro}
          </p>
          {isFeatureHero ? (
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/connect"
                className="inline-flex h-13 items-center justify-center rounded-md bg-blue-600 px-7 text-sm font-bold uppercase tracking-wide text-white shadow-[0_18px_46px_rgba(37,99,235,0.34)] transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                {isCyberDefensePage
                  ? "Start a Security Review"
                  : "Start a Backend Project"}
              </Link>
              <Link
                href="#service-details"
                className="inline-flex h-13 items-center justify-center rounded-md border border-white/22 bg-white/[0.06] px-7 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.1]"
              >
                {isCyberDefensePage ? "View Security Scope" : "View Capabilities"}
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      {isFeatureHero ? (
        <section className="relative isolate overflow-hidden bg-black px-7 py-10 sm:px-12 lg:px-20">
          <HeroAgentTabs
            visual="robot"
            title={
              isCyberDefensePage
                ? "Security systems built for resilience."
                : "Backend systems built to scale."
            }
            description={
              isCyberDefensePage
                ? "TechSaws helps teams uncover vulnerabilities, strengthen access controls, harden infrastructure, and build security workflows that reduce risk before it turns into disruption."
                : "TechSaws helps teams design APIs, databases, cloud infrastructure, deployment pipelines, and operational systems that stay reliable as usage, teams, and product complexity grow."
            }
          />
        </section>
      ) : null}

      {isBackendPage ? (
        <section
          id="service-details"
          className="relative isolate flex min-h-[42vh] items-center overflow-hidden bg-black px-6 py-8 text-white sm:px-10 xl:px-[120px]"
        >
          <Image
            src={backendServiceImage}
            alt=""
            fill
            sizes="100vw"
            className="absolute inset-0 -z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.3)_48%,rgba(0,0,0,0.58)_100%),linear-gradient(90deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.32)_100%),radial-gradient(circle_at_50%_30%,rgba(37,99,235,0.14),transparent_34%)]" />

          <div className="mx-auto max-w-7xl">
            <div className="max-w-6xl">
              <h2 className="text-[42px] font-medium leading-[1.15] tracking-[-0.055em] text-white sm:text-[56px] lg:text-[68px]">
                <span className="text-white">How we work.</span>{" "}
                <span className="text-white/40">
                  We design, build, and scale backend systems that keep products
                  fast, secure, and ready for growth.
                </span>
              </h2>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_40px_1fr_40px_1fr_40px_1fr] lg:items-stretch">
              {backendProcessCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div key={card.title} className="contents">
                    <div className="min-h-[240px] rounded-md border border-white/24 bg-white/[0.08] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.22)] backdrop-blur-[6px]">
                      <span
                        className={`grid size-14 place-items-center rounded-full border ${card.iconStyle}`}
                      >
                        <Icon className="size-7" strokeWidth={1.8} />
                      </span>
                      <h3 className="mt-14 text-[22px] font-semibold leading-tight tracking-[-0.045em] text-white">
                        {card.title}
                      </h3>
                      <p className="mt-5 text-base font-medium leading-7 text-white/62">
                        {card.text}
                      </p>
                    </div>

                    {index < backendProcessCards.length - 1 ? (
                      <div className="hidden items-center justify-center lg:flex">
                        <span className="grid place-items-center text-white/72">
                          <ArrowRight className="size-8" strokeWidth={1.8} />
                        </span>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : isCyberDefensePage ? (
        <section
          id="service-details"
          className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-black px-6 py-12 text-white sm:px-10 xl:px-[120px]"
        >
          <video
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            src="/assets/backgrounds/cyber-defense-build-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.24)_48%,rgba(0,0,0,0.7)_100%),radial-gradient(circle_at_50%_18%,rgba(37,99,235,0.18),transparent_34%)]" />

          <div className="mx-auto max-w-7xl">
            <div>
              <h2 className="w-full text-[48px] font-medium leading-[1.18] tracking-[-0.045em] text-white/42">
                <span className="text-white">What we build.</span> Security
                foundations that reveal risk and strengthen response.
              </h2>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {cyberBuildCards.map((card) => (
                <article
                  key={card.title}
                  className="min-h-[225px] rounded-md border border-white/22 bg-white/[0.08] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-[10px]"
                >
                  <div className="h-px w-16 bg-gradient-to-r from-blue-300 via-white/70 to-transparent" />
                  <h3 className="mt-12 text-[22px] font-semibold leading-tight tracking-[-0.045em] text-white">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-base font-medium leading-7 text-white/64">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section id="service-details" className="bg-[#050505] px-6 py-24 text-white sm:px-10 xl:px-[120px]">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
            <div className="rounded-md border border-white/12 bg-white/[0.025] p-7">
              <h2 className="text-3xl font-semibold tracking-[-0.045em]">
                What we build
              </h2>
              <div className="mt-8 grid gap-4">
                {content.outcomes.map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-white/10 px-5 py-4 text-base font-medium text-white/64"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-white/12 bg-white/[0.025] p-7">
              <h2 className="text-3xl font-semibold tracking-[-0.045em]">
                How we work
              </h2>
              <div className="mt-8 grid gap-4">
                {content.process.map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-md border border-white/10 px-5 py-4">
                    <span className="text-sm font-bold text-blue-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium text-white/64">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {isFeatureHero ? <AutomationContactSection /> : null}

      <FaqSection
        items={content.faqs}
        heading={
          <>
            <span className="text-white">FAQs.</span> Key questions about
            scope, delivery, and how this service works.
          </>
        }
      />

      <CtaSection
        title={`Build Your ${content.eyebrow} System`}
        description={`Talk with TechSaws about ${service.title.toLowerCase()} and we will map the right architecture, workflow, and first build phase.`}
        buttonText="Start the Conversation"
      />
    </>
  );
}

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

  const standardSlug = slug as ServiceSlug;

  return (
    <main className="min-h-screen bg-black" aria-label={service.title}>
      <StandardServicePage service={service} slug={standardSlug} />
    </main>
  );
}
