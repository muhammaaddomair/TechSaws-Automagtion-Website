"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What kinds of systems do you build?",
    answer:
      "We build AI automation, backend infrastructure, security, revenue, conversion, product, cloud, data, and support systems.",
  },
  {
    question: "Can you work with our existing stack?",
    answer:
      "Yes. We integrate with CRMs, APIs, databases, cloud platforms, websites, internal tools, payment systems, and existing workflows.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Focused systems can show value within weeks, while larger infrastructure, security, or product builds are planned in clear phases.",
  },
  {
    question: "Do you handle security as part of the build?",
    answer:
      "Yes. We design around access control, secure architecture, audit logging, monitoring, IAM, and practical compliance readiness.",
  },
  {
    question: "Can you improve revenue and conversion systems?",
    answer:
      "Yes. We build lead generation, outreach, funnels, CRM pipelines, analytics, high-conversion websites, and performance systems.",
  },
  {
    question: "Do you build internal tools and dashboards?",
    answer:
      "Yes. We create operational dashboards, internal systems, portals, KPI views, data pipelines, and custom workflow tools.",
  },
  {
    question: "Can you maintain and scale systems after launch?",
    answer:
      "Yes. We support continuous development, SLA-based maintenance, AI enhancements, performance optimization, and system scaling.",
  },
  {
    question: "How do we get started?",
    answer:
      "We start with a discovery call, map the highest-value system opportunities, then define the architecture and first build phase.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black px-6 py-24 text-white sm:px-10 xl:px-[120px]">
      <div className="mx-auto w-full">
        <h2 className="w-full text-[48px] font-medium leading-[1.18] tracking-[-0.045em] text-white/42">
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
                    className={`text-[20px] font-medium tracking-[-0.045em] transition ${
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
                  <p className="max-w-5xl px-7 pb-7 text-[16px] leading-7 text-white/56">
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
