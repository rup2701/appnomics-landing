"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS_NAV } from "./docs-nav";
import { docsHref, docsPage } from "./urls";

function NavList({ pathname }: { pathname: string }) {
  return (
    <ul className="space-y-7">
      {DOCS_NAV.map((section) => (
        <li key={section.title}>
          <p className="mb-3 font-sans text-xs font-semibold tracking-tight text-[#333]">{section.title}</p>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const active = docsPage(pathname) === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={docsHref(item.href)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between gap-2 rounded-lg py-2 pl-0 pr-3 text-sm no-underline transition-colors ${
                      active ? "bg-[#edf3ef] font-medium text-[#087a50]" : "text-[#555] hover:bg-white hover:text-[#171717]"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <item.icon aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.75} />
                      <span>{item.label}</span>
                    </span>
                    {item.soon ? <span className="rounded-full bg-white px-2 py-0.5 text-[11px] text-[#555]">Soon</span> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      ))}
    </ul>
  );
}

/** Left sidebar on wide screens; a Docs menu you open on narrow ones. */
export default function DocsSidebar() {
  const pathname = usePathname();
  return (
    <aside>
      <details className="rounded-[16px] bg-white p-4 lg:hidden">
        <summary className="cursor-pointer text-sm font-medium text-[#171717]">Docs menu</summary>
        <div className="mt-5">
          <NavList pathname={pathname} />
        </div>
      </details>
      <nav aria-label="Docs" className="hidden lg:sticky lg:top-24 lg:block">
        <NavList pathname={pathname} />
      </nav>
    </aside>
  );
}
