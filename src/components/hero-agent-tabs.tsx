import { TransparentVideo } from "@/components/transparent-video";

export function HeroAgentTabs() {
  return (
    <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
      <div className="max-w-2xl text-left">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-red-400">
          About TechSaws
        </p>
        <h2 className="text-[44px] font-extrabold leading-[1.05] tracking-normal text-white">
          We build automation systems that make teams faster.
        </h2>
        <p className="mt-6 max-w-xl text-[18px] leading-8 text-white/68">
          TechSaws helps businesses connect tools, automate repetitive work, and
          launch reliable digital workflows. Our focus is simple: cleaner
          systems, faster execution, and software that keeps compounding value.
        </p>
      </div>

      <div className="relative min-h-[18rem] lg:min-h-[24rem]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full max-w-[42rem]">
          <TransparentVideo
            src="/Homepage-hero-video.mp4"
            className="aspect-video w-full drop-shadow-[0_28px_70px_rgba(229,9,20,0.22)]"
          />
        </div>
      </div>
    </div>
  );
}
