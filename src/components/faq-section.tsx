"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Will this replace my team?",
    answer:
      "No. Our automation systems remove repetitive manual work so your team can focus on higher-value strategy, service, and growth.",
  },
  {
    question: "What's the difference between AI and automation?",
    answer:
      "Automation follows defined workflows. AI adds judgement, classification, drafting, summarisation, and decision support inside those workflows.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most focused workflows can show value within the first few weeks, depending on system access, complexity, and approval speed.",
  },
  {
    question: "Is AI suitable for small or mid-sized businesses?",
    answer:
      "Yes. Small and mid-sized teams often benefit fastest because automation can remove bottlenecks without adding headcount.",
  },
  {
    question: "What types of processes can be automated with AI?",
    answer:
      "Lead response, onboarding, reporting, scheduling, follow-ups, document handling, customer support, and internal operations are common starting points.",
  },
  {
    question: "What tools or platforms do you work with?",
    answer:
      "We work across CRMs, calendars, marketing tools, AI models, file systems, databases, websites, and custom APIs.",
  },
  {
    question: "Is this secure and compliant?",
    answer:
      "We design workflows with access control, least-privilege permissions, auditability, and sensible data handling from the start.",
  },
  {
    question: "How do we get started?",
    answer:
      "We begin with a short discovery call, map the highest-value automation opportunities, then build the first workflow in focused phases.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black px-5 py-24 text-white sm:px-8 xl:px-16">
      <div className="mx-auto w-full">
        <h2 className="w-full text-4xl font-medium leading-[1.18] tracking-[-0.045em] text-white/42 sm:text-5xl lg:text-6xl">
          <span className="text-white">FAQs.</span> We&apos;ve answered some
          of the most common questions below about how we work and what to
          expect.
        </h2>

        <div className="mt-20 space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-md bg-[#151515]"
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-controls={answerId}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-7 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-xl font-medium tracking-[-0.045em] transition ${
                      isOpen ? "text-white" : "text-white/52"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <Plus
                    className={`size-5 shrink-0 text-white/66 transition duration-300 ${
                      isOpen ? "rotate-45 text-white" : ""
                    }`}
                    strokeWidth={1.8}
                  />
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-5xl px-7 pb-7 text-base leading-7 text-white/56">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
