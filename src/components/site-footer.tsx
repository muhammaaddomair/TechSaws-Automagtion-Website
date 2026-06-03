import Link from "next/link";
import Image from "next/image";
import { serviceItems } from "@/lib/services";

const columns = [
  {
    title: "Services",
    links: serviceItems.slice(0, 4),
  },
  {
    title: "Industries",
    links: [
      { title: "Professional Services", href: "#" },
      { title: "Finance", href: "#" },
      { title: "Recruitment & HR", href: "#" },
      { title: "Technology & Software", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { title: "Conversion & Experience Systems", href: "/services/conversion-experience" },
      { title: "Strategic Systems & Digital Architecture", href: "/services/strategy-architecture" },
      { title: "Cloud & DevOps", href: "/services/specialized-systems" },
      { title: "Data & Intelligence", href: "/services/specialized-systems" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Technology", href: "#" },
      { title: "Insights", href: "#" },
      { title: "Resources", href: "#" },
      { title: "FAQs", href: "/faq" },
      { title: "Get In Touch", href: "/contact" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#080808] px-6 py-8 text-white sm:px-10 xl:px-[120px]">
      <div className="grid min-h-[34rem] gap-12 lg:grid-cols-[0.9fr_1.6fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative grid size-14 place-items-center overflow-hidden rounded-md bg-black ring-1 ring-white/12">
              <Image
                src="/Techsaws-Logo.png"
                alt="TechSaws logo"
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-xl font-extrabold text-white">TechSaws</span>
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {columns.slice(0, 2).map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-bold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-4">
                {column.links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-base font-medium text-white/42 transition hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {columns.slice(2).map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-bold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-4">
                {column.links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-base font-medium text-white/42 transition hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-end justify-between gap-6">
        <div className="flex items-center gap-3 text-white/62">
          <a
            href="#"
            aria-label="LinkedIn"
            className="grid size-5 place-items-center rounded-sm bg-white/62 text-[0.65rem] font-black text-black transition hover:bg-white"
          >
            in
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="grid h-5 w-6 place-items-center rounded bg-white/62 text-[0.58rem] font-black text-black transition hover:bg-white"
          >
            ▶
          </a>
        </div>
        <p className="text-sm text-white/62">© 2025 TechSaws</p>
      </div>
    </footer>
  );
}
