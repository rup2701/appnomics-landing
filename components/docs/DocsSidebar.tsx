"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS_NAV } from "./docs-nav";

function NavList({ pathname }: { pathname: string }) {
  return (
    <ul className="space-y-7">
      {DOCS_NAV.map((section) => (
        <li key={section.title}>
          <p className="mb-3 font-mono text-xs tracking-[0.12em] text-[#555]">{section.title.toUpperCase()}</p>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm no-underline transition-colors ${
                      active ? "bg-[#edf3ef] font-medium text-[#087a50]" : "text-[#555] hover:bg-white hover:text-[#171717]"
                    }`}
                  >
                    <span>{item.label}</span>
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
