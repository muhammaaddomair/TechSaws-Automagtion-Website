import Link from "next/link";

type SimplePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards?: readonly {
    title: string;
    text: string;
    href?: string;
  }[];
};

export function SimplePage({
  eyebrow,
  title,
  description,
  cards = [],
}: SimplePageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-black pt-24 text-white">
      <section className="relative isolate px-6 pb-24 pt-10 sm:px-10 xl:px-[120px]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_84%_14%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_12%_82%,rgba(16,185,129,0.1),transparent_30%),linear-gradient(180deg,#050505_0%,#000_68%)]" />

        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-400">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-5xl text-6xl font-medium leading-none tracking-[-0.06em] text-white sm:text-7xl lg:text-[92px]">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-medium leading-8 text-white/58">
            {description}
          </p>

          {cards.length > 0 ? (
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {cards.map((card) => {
                const className =
                  "block min-h-[190px] rounded-md border border-white/12 bg-white/[0.035] p-7 transition hover:border-white/24 hover:bg-white/[0.055]";

                const content = (
                  <>
                    <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {card.title}
                    </h2>
                    <p className="mt-4 text-base font-medium leading-7 text-white/58">
                      {card.text}
                    </p>
                  </>
                );

                return card.href ? (
                  <Link key={card.title} href={card.href} className={className}>
                    {content}
                  </Link>
                ) : (
                  <article key={card.title} className={className}>
                    {content}
                  </article>
                );
              })}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
