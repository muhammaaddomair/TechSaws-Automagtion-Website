import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { TransparentVideo } from "@/components/transparent-video";

const navItems = ["Industries", "Solutions", "Technology", "Services", "Resources"];

export function TopAutomationHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black px-6 pb-10 pt-5 text-white sm:px-10 xl:px-[120px]">
      <header className="mx-auto flex w-full items-center justify-between gap-8">
        <a href="#" className="flex items-center gap-2 text-base font-extrabold">
          <span className="relative grid size-7 place-items-center overflow-hidden rounded-full bg-white">
            <Image
              src="/techsaw-logo.jpeg"
              alt="TechSaws logo"
              width={28}
              height={28}
              priority
              className="h-full w-full object-cover"
            />
          </span>
          TechSaws
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/58 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              {item}
              {(item === "Industries" || item === "Solutions") && (
                <ChevronDown className="size-3" />
              )}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-5 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-500"
        >
          Get in touch
        </a>
      </header>

      <div className="mx-auto flex w-full flex-col pt-18 sm:pt-20 lg:pt-18">
        <div className="max-w-none">
          <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.36em] text-blue-500">
            AI Automation Agency
          </p>
          <h1 className="whitespace-nowrap text-[calc(2.35rem+25px)] font-medium leading-none tracking-[-0.045em] text-white sm:text-[calc(3.6rem+25px)] lg:text-[calc(5.2rem+25px)]">
            Automate. accelerate. scale.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/54 sm:text-xl">
            We create and build high-ROI automation solutions that help B2B
            businesses boost productivity and reclaim their time.
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
