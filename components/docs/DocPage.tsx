import type { ReactNode } from "react";
import Link from "next/link";

export type TocItem = { id: string; label: string };

/** The frame every docs page uses: a header, the article, and "On this page" in a right column on wide screens. */
export function DocPage({
  badge,
  title,
  lead,
  updated,
  toc,
  children,
}: {
  badge?: string;
  title: string;
  lead: string;
  /** ISO date, for example 2026-11-08 */
  updated?: string;
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_190px] xl:gap-14">
      <div className="min-w-0">
        <header className="rounded-[24px] bg-[#edf3ef] px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs tracking-[0.16em] text-[#087a50]">APPNOMICS DOCS</p>
            {badge ? <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#555]">{badge}</span> : null}
          </div>
          <h1 className="mt-5 max-w-3xl text-[clamp(34px,5vw,54px)] leading-[1.08] tracking-tight">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#555]">{lead}</p>
          {updated ? (
            <p className="mt-6 text-sm text-[#555]">
              Updated <time dateTime={updated}>{new Date(`${updated}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            </p>
          ) : null}
        </header>
        <article className="mt-12 min-w-0 space-y-16 text-base leading-7 text-[#555] [&_h2]:mb-6 [&_h2]:text-[28px] [&_h2]:leading-tight [&_h2]:tracking-tight sm:[&_h2]:text-[36px] [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-[#171717] [&_p+p]:mt-4 [&_strong]:font-medium [&_strong]:text-[#171717]">
          {children}
        </article>
      </div>
      <aside className="hidden xl:block">
        <nav aria-label="On this page" className="sticky top-24">
          <p className="mb-4 font-mono text-xs tracking-[0.12em] text-[#555]">ON THIS PAGE</p>
          <ul className="space-y-3">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-[#555] no-underline transition-colors hover:text-[#087a50] hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

/** Links to other docs pages, shown as cards at the end of a page. */
export function Related({ items }: { items: { label: string; href: string; text: string }[] }) {
  return (
    <section id="related">
      <h2>Related</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-[20px] bg-white p-6 no-underline transition-colors hover:bg-[#edf3ef]">
            <p className="text-lg font-medium text-[#171717]">{item.label} <span aria-hidden="true">&rarr;</span></p>
            <p className="mt-2 text-sm">{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[20px] bg-[#edf3ef] p-6 sm:p-8">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export function Prompt({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[20px] bg-white p-6 sm:p-8">
      <p className="mb-3 font-mono text-xs tracking-[0.1em] text-[#087a50]">PASTE THIS</p>
      <p className="text-lg leading-relaxed text-[#171717]">{children}</p>
    </div>
  );
}
