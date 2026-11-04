// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#edf3ef] pt-20 pb-8 text-[#0a0a0a]">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-10 pb-12 md:grid-cols-3 lg:grid-cols-[1.5fr_repeat(4,minmax(0,1fr))]">
          {/* Brand */}
          <div>
            <Image
              src="/appnomics-logo.svg"
              alt="Appnomics"
              className="h-7 w-auto mt-1"
              height={32}
              width={132}
            />
            <p className="text-[13px] text-[#444] font-sans mt-2">
              {"// Ship. Scale. Own"}
            </p>
          </div>

          {/* Core */}
          <div>
            <h4 className="text-[14px] text-[#171717] font-sans font-medium mb-4">
              Core
            </h4>
            <ul className="space-y-1">
              {[
                { label: "Overview", href: "#" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Appnomics Cloud", href: "/#studio" },
                { label: "Book a Discovery Call", href: "mailto:rupesh@appnomics.dev" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#555] font-sans hover:text-[#087a50] transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[14px] text-[#171717] font-sans font-medium mb-4">
              Solutions
            </h4>
            <ul className="space-y-1">
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
                    className="text-[13px] text-[#555] font-sans hover:text-[#087a50] transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[14px] text-[#171717] font-sans font-medium mb-4">
              Resources
            </h4>
            <ul className="space-y-1">
              {[
                { label: "Templates", href: "#" },
                { label: "Gallery", href: "/gallery" },
                { label: "Blog", href: "#" },
                { label: "The MVP Playbook", href: "#" },
                { label: "AI Code-Gen Migration Guide", href: "#" },
                { label: "Studio OS Walkthrough", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#555] font-sans hover:text-[#087a50] transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[14px] text-[#171717] font-sans font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-1">
              {[
                { label: "About", href: "/about" },
                { label: "Support", href: "mailto:support@appnomics.dev" },
                { label: "FAQ", href: "/#faq" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-[#555] font-sans hover:text-[#087a50] transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#c6c6c6] flex flex-col sm:flex-row items-center justify-between gap-4">
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