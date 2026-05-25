import { TransparentVideo } from "@/components/transparent-video";

export function TopAutomationHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black px-6 pb-10 pt-5 text-white sm:px-10 xl:px-[120px]">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="mx-auto flex w-full flex-col pt-28 sm:pt-32 lg:pt-30">
        <div className="max-w-none">
          <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.36em] text-blue-500">
            Systems Engineering Agency
          </p>
          <h1 className="whitespace-nowrap text-[calc(2.35rem+25px)] font-medium leading-none tracking-[-0.045em] text-white sm:text-[calc(3.6rem+25px)] lg:text-[calc(5.2rem+25px)]">
            Automate. accelerate. scale.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/54 sm:text-xl">
            We build automation, backend, security, and growth systems that help
            B2B teams operate faster, scale cleaner, and convert more reliably.
          </p>
        </div>

        <div className="relative mt-8 min-h-[24rem] sm:mt-7 lg:mt-5 lg:min-h-[34rem]">
          <div className="pointer-events-none absolute -left-24 -top-8 w-[118vw] max-w-none sm:-left-32 sm:-top-10 lg:-left-44 lg:-top-14 lg:w-[calc(100vw+56px)]">
            <TransparentVideo
              src="/homepage-hero-vid2.mp4"
              className="aspect-[2.65/1] w-full scale-[1.16] origin-bottom drop-shadow-[0_0_70px_rgba(37,99,235,0.32)]"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-8 border-t border-white/8 pt-8 sm:grid-cols-3">
          <div className="h-px bg-gradient-to-r from-white/16 to-transparent" />
          <div className="h-px bg-gradient-to-r from-white/16 to-transparent" />
          <div className="h-px bg-gradient-to-r from-white/16 to-transparent" />
        </div>
      </div>
    </section>
  );
}
