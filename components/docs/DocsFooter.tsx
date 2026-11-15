"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DOCS_NAV } from "./docs-nav";
import { docsHref, docsPage, siteHref } from "./urls";

const PAGES = DOCS_NAV.flatMap((section) => section.items);

/** Previous and next page links at the end of a docs article, in sidebar order. */
export function DocsPager() {
  const pathname = usePathname();
  const index = PAGES.findIndex((page) => page.href === docsPage(pathname));
  if (index === -1) return null;
  const prev = PAGES[index - 1];
  const next = PAGES[index + 1];
  if (!prev && !next) return null;

  return (
    <nav aria-label="More docs" className="mt-16 grid gap-4 border-t border-black/10 pt-8 sm:grid-cols-2">
      {prev ? (
        <Link href={docsHref(prev.href)} className="group block rounded-[16px] bg-white p-5 no-underline transition-colors hover:bg-[#edf3ef]">
          <p className="flex items-center gap-1.5 text-xs text-[#555]">
            <ArrowLeft aria-hidden="true" className="size-3.5" /> Previous
          </p>
          <p className="mt-1 font-medium text-[#171717] group-hover:text-[#087a50]">{prev.label}</p>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next ? (
        <Link href={docsHref(next.href)} className="group block rounded-[16px] bg-white p-5 text-right no-underline transition-colors hover:bg-[#edf3ef]">
          <p className="flex items-center justify-end gap-1.5 text-xs text-[#555]">
            Next <ArrowRight aria-hidden="true" className="size-3.5" />
          </p>
          <p className="mt-1 font-medium text-[#171717] group-hover:text-[#087a50]">{next.label}</p>
        </Link>
      ) : null}
    </nav>
  );
}

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact us", href: "mailto:rupesh@appnomics.dev" },
];

/** The slim footer under every docs page, in place of the full site footer. */
export function DocsFooter() {
  return (
    <footer className="mt-20 flex flex-col gap-3 border-t border-black/10 pt-6 text-[13px] text-[#777] sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Appnomics</p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {LINKS.map((link) => (
          <li key={link.label}>
            <Link href={siteHref(link.href)} className="text-[#555] no-underline transition-colors hover:text-[#087a50]">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
