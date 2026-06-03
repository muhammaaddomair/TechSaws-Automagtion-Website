import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { serviceItems } from "@/lib/services";

export const metadata: Metadata = {
  title: "Get in Touch | TechSaws",
  description:
    "Contact TechSaws about AI automation, infrastructure, cyber defense, growth systems, and digital architecture.",
};

const solutionItems = [
  "Conversion & Experience Systems",
  "Strategic Systems & Digital Architecture",
  "Product & Platform Systems",
  "Monetization & Payments",
  "Integrations & Middleware",
  "Cloud & DevOps",
  "Data & Intelligence",
  "Security Enhancements",
  "Support & Scaling",
];

const interestItems = [
  ...serviceItems.map((service) => service.title),
  ...solutionItems,
];

const contactFields = [
  "First Name",
  "Last Name",
  "Company Name",
  "Email",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black pt-24 text-white">
      <section className="relative isolate px-6 pb-20 pt-10 sm:px-10 lg:pb-28 xl:px-[120px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_12%,rgba(37,99,235,0.28),transparent_32%),radial-gradient(circle_at_12%_78%,rgba(16,185,129,0.12),transparent_30%),linear-gradient(180deg,#050505_0%,#000_62%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/10" />

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-start lg:gap-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-400">
              Contact TechSaws
            </p>
            <h1 className="mt-4 max-w-2xl text-6xl font-medium leading-none tracking-[-0.06em] text-white sm:text-7xl lg:text-[92px]">
              Get in touch
            </h1>
            <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-white/58">
              Tell us what you want to build, automate, secure, or scale. We
              will map the right system and next step.
            </p>

            <form className="mt-10 max-w-2xl" action="#" method="post">
              <div className="grid gap-5 sm:grid-cols-2">
                {contactFields.map((field) => (
                  <label key={field} className="block">
                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/52">
                      {field}
                    </span>
                    <input
                      type={field === "Email" ? "email" : "text"}
                      name={field.toLowerCase().replaceAll(" ", "-")}
                      className="mt-2 h-12 w-full rounded-md border border-white/16 bg-white/[0.035] px-4 text-base text-white outline-none transition placeholder:text-white/28 focus:border-blue-400 focus:bg-white/[0.055]"
                    />
                  </label>
                ))}
              </div>

              <label className="mt-5 block">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/52">
                  Project Notes
                </span>
                <textarea
                  name="project-notes"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-md border border-white/16 bg-white/[0.035] px-4 py-3 text-base leading-7 text-white outline-none transition placeholder:text-white/28 focus:border-blue-400 focus:bg-white/[0.055]"
                />
              </label>

              <fieldset className="mt-7">
                <legend className="text-xs font-bold uppercase tracking-[0.1em] text-white/52">
                  Interested In
                </legend>
                <div className="mt-4 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                  {interestItems.map((item) => (
                    <label
                      key={item}
                      className="flex min-h-7 items-start gap-2 text-sm font-medium leading-5 text-white/68"
                    >
                      <input
                        type="checkbox"
                        name="interests"
                        value={item}
                        className="mt-1 size-3.5 rounded-sm border border-white/28 bg-transparent accent-blue-500"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                className="mt-8 inline-flex h-13 w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-7 text-sm font-bold uppercase tracking-wide text-white shadow-[0_18px_46px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
              >
                Submit
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-md border border-white/12 bg-[#080808] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
              <iframe
                title="TechSaws on Google Maps"
                src="https://www.google.com/maps?q=TechSaws&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0 grayscale invert-[0.92] hue-rotate-180 saturate-[0.85] sm:h-[430px] lg:h-[520px]"
              />
            </div>

            <div className="mt-8 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md bg-white/[0.06] text-blue-300">
                  <MapPin className="size-4" />
                </span>
                <span className="text-sm font-semibold text-white/62">
                  Remote-first, global delivery
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md bg-white/[0.06] text-blue-300">
                  <Mail className="size-4" />
                </span>
                <span className="text-sm font-semibold text-white/62">
                  hello@techsaws.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-md bg-white/[0.06] text-blue-300">
                  <Phone className="size-4" />
                </span>
                <span className="text-sm font-semibold text-white/62">
                  Book a systems call
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
