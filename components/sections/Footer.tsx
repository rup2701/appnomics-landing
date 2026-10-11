// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#ebebeb] pt-16 pb-4 text-[#0a0a0a]">
      <div className="max-w-[1340px] mx-auto px-6 md:px-10">
        {/* Logo + Tagline Row */}
        <div className="pb-6 border-b border-[#c6c6c6]">
          <Image
            src="/appnomics-logo.svg"
            alt="Appnomics"
            className="h-6 w-auto mt-1"
            height={32}
            width={132}
          />
          <p className="text-[13px] text-[#444] font-sans mt-2">
            Your AI cofounder — without the equity split.
          </p>
        </div>

        {/* Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 pb-8">
          
          {/* Row 1: Studio & Core */}
          <div>
            <h4 className="text-[14px] text-[#171717] uppercase font-sans font-medium mb-4">
              Core
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Overview", href: "#" },
                { label: "The 6-Week Epic", href: "/#process" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Studio OS", href: "/#studio" },
                { label: "Book a Discovery Call", href: "/#intake" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-[#676767] font-sans hover:text-[#087a50] transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Row 2: Compare Appnomics */}
          <div>
            <h4 className="text-[14px] text-[#171717] font-sans uppercase font-medium mb-4">
              Appnomics
            </h4>
            <ul className="space-y-3">
              {[
                { label: "vs. AI Coding Agents", href: "#why-appnomics" },
                { label: "vs. No-Code Builders", href: "#why-appnomics" },
                { label: "vs. Traditional Agencies", href: "#why-appnomics" },
                { label: "vs. Freelance Marketplaces", href: "#why-appnomics" },
                { label: "The Co-Founder Equity Trap", href: "#why-appnomics" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-[#676767] font-sans hover:text-[#087a50] transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Row 3: Solutions */}
          <div>
            <h4 className="text-[14px] text-[#171717] uppercase font-sans font-medium mb-4">
              Solutions
            </h4>
            <ul className="space-y-3">
              {[
                { label: "MVP from Idea", href: "#" },
                { label: "No-Code to Production", href: "#" },
                { label: "AI Prototype Hardening", href: "#" },
                { label: "Legacy Migration", href: "#" },
                { label: "API State Refactoring", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-[#676767] font-sans hover:text-[#087a50] transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Row 4: Resources & Company (combined) */}
          <div>
            <div className="mb-6">
              <h4 className="text-[14px] uppercase text-[#171717] font-sans font-medium mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "The MVP Playbook", href: "#" },
                  { label: "AI Code-Gen Migration Guide", href: "#" },
                  { label: "Studio OS Walkthrough", href: "#" },
                  { label: "Case Studies", href: "#portfolio" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-[#676767] font-sans hover:text-[#087a50] transition-colors no-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] text-[#171717] uppercase font-sans font-medium mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About", href: "#" },
                  // { label: "Founders & Network", href: "#" },
                  { label: "Support", href: "#" },
                  { label: "FAQ", href: "/#faq" },
                  { label: "Privacy Policy", href: "#" },          
                  { label: "Terms of Service", href: "#" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-[#676767] font-sans hover:text-[#087a50] transition-colors no-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#c6c6c6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#777] font-mono">
            © 2026 Appnomics. Built in San Francisco. Made with ☕.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[8px] text-[#555] tracking-[0.12em] font-sans uppercase">
              ✦ v1.0
            </span>
            <span className="w-px h-3 bg-[#aaa]" />
            <span className="text-[8px] text-[#555] font-mono">
              Ship. Scale. Own.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}