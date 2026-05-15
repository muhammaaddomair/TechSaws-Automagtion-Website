"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderLink {
  label: string;
  href: string;
}

const navItems: HeaderLink[] = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "Company", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

const authItems: HeaderLink[] = [
  { label: "Login", href: "#" },
  { label: "Sign Up", href: "#" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-30">
      <div className="relative mx-auto w-full max-w-7xl rounded-full bg-white/82 p-1.5 text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_8px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2">
          <a
            href="#"
            className="flex min-w-0 items-center gap-2 rounded-full px-2 py-1.5 transition hover:bg-zinc-100"
          >
            <span className="relative flex size-9 shrink-0 overflow-hidden rounded-full bg-black ring-1 ring-zinc-200">
              <Image
                src="/techsaw-logo.jpeg"
                alt="Techsaws logo"
                width={36}
                height={36}
                priority
                className="object-cover"
              />
            </span>
            <span className="hidden text-sm font-extrabold tracking-wide sm:inline">
              TECHSAWS
            </span>
          </a>

          <div className="hidden h-4 w-px bg-zinc-200 lg:block" />

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden h-4 w-px bg-zinc-200 md:block" />

          <div className="hidden items-center gap-1 md:flex">
            <a
              href={authItems[0].href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
            >
              {authItems[0].label}
            </a>
            <a
              href={authItems[1].href}
              className="rounded-full bg-zinc-950 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
            >
              {authItems[1].label}
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 lg:hidden"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-3 rounded-[1.45rem] bg-white/94 p-2 shadow-2xl shadow-black/20 ring-1 ring-zinc-200 backdrop-blur-xl lg:hidden">
            <div className="grid gap-1">
              {[...navItems, ...authItems].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
