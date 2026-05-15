import { ChevronRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-black px-5 pb-16 pt-0 text-white sm:px-8 xl:px-16">
      <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden rounded-md bg-[#050505] px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(37,99,235,0.42),transparent_46%),radial-gradient(circle_at_18%_90%,rgba(99,102,241,0.22),transparent_34%),radial-gradient(circle_at_78%_8%,rgba(16,185,129,0.11),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_36%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(135deg,transparent_0_12%,rgba(17,24,39,0.42)_12%_24%,transparent_24%_36%,rgba(6,78,59,0.16)_36%_84%,transparent_84%)] opacity-70" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="text-5xl font-medium leading-none tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            AI &amp; Automation Audit
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-lg font-semibold leading-8 text-white/60 sm:text-xl">
            Whether you&apos;re considering building or migrating our team can
            guide or answer any questions you might have. Click the button below
            to request an appointment.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex h-14 items-center justify-center gap-2 rounded bg-blue-600 px-7 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-500"
          >
            Get in Touch
            <ChevronRight className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
