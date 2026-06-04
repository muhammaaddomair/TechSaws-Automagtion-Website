import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { serviceItems } from "@/lib/services";

const navItems = [
  { title: "Services", href: "/services" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Capabilities", href: "/capabilities" },
  { title: "Methodology", href: "/methodology" },
  { title: "Engagement", href: "/engagement" },
  { title: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-px z-50 mx-auto flex w-full items-center justify-between gap-8 bg-black/72 px-6 py-4 text-white backdrop-blur-xl sm:px-10 xl:px-[120px]">
      <Link href="/" className="flex items-center gap-3 text-xl font-extrabold">
        <span className="relative grid size-11 place-items-center overflow-hidden rounded-md bg-black ring-1 ring-white/12">
          <Image
            src="/assets/brand/techsaws-logo.png"
            alt="TechSaws logo"
            width={44}
            height={44}
            priority
            className="h-full w-full object-contain"
          />
        </span>
        TechSaws
      </Link>

      <nav className="hidden items-center gap-8 text-sm font-medium text-white/58 lg:flex">
        {navItems.map((item) =>
          item.title === "Services" ? (
            <div key={item.href} className="group py-3">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center gap-1 transition group-hover:text-white"
                aria-haspopup="true"
              >
                {item.title}
                <ChevronDown className="size-3 transition group-hover:rotate-180" />
              </button>

              <div className="pointer-events-none absolute inset-x-0 top-full z-50 bg-[#0b0b0b] px-6 py-12 opacity-0 shadow-[0_34px_70px_rgba(0,0,0,0.45)] transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 sm:px-10 xl:px-[120px]">
                <div className="grid gap-12 lg:grid-cols-[0.38fr_1fr]">
                  <div>
                    <Link
                      href="/services"
                      className="block text-[34px] font-semibold leading-none tracking-[-0.045em] text-white transition hover:text-blue-200"
                    >
                      Services
                    </Link>
                    <p className="mt-6 max-w-sm text-[18px] font-medium leading-7 text-white/52">
                      Our expert services cover automation, infrastructure,
                      security, growth, conversion, and long-term system
                      scaling.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group/card flex min-h-[92px] items-center justify-between gap-6 rounded-md bg-white/[0.055] px-7 py-5 transition hover:bg-white/[0.085]"
                      >
                        <span>
                          <span className="block text-[18px] font-semibold leading-tight tracking-[-0.04em] text-white">
                            {service.title}
                          </span>
                          <span className="mt-2 block text-[13px] font-semibold text-white/44">
                            Explore Service
                          </span>
                        </span>
                        <ArrowRight className="size-4 text-white/52 transition group-hover/card:translate-x-1 group-hover/card:text-white" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1 transition hover:text-white"
            >
              {item.title}
            </Link>
          )
        )}
      </nav>

      <Link
        href="/connect"
        className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-5 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_30px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-500"
      >
        Connect
      </Link>
    </header>
  );
}
