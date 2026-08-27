

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0d0d0d]">
      <div className="max-w-[1100px] mx-auto px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo + Tagline */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/appnomics-1.svg"
                alt="Appnomics"
                className="h-8 w-auto"
                height={44}
                width={149}
              />
            </div>
            <p className="text-[11px] text-[#999] font-mono leading-[1.6] max-w-[200px]">
              Your AI cofounder — <br />
              without the equity split.
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-[14px] font-bold text-[#444] uppercase tracking-[0.15em] font-mono mb-3">
              Product
            </h4>
            <ul className="space-y-2">
              {["Process", "Pricing", "Portfolio", "Studio"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[15px] text-[#aaa] font-mono hover:text-[#e0e0e0] transition-colors duration-200 no-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[14px] font-bold text-[#444] uppercase tracking-[0.15em] font-mono mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              {["About", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[15px] text-[#aaa] font-mono hover:text-[#e0e0e0] transition-colors duration-200 no-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-[14px] font-bold text-[#444] uppercase tracking-[0.15em] font-mono mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Security"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[15px] text-[#aaa] font-mono hover:text-[#e0e0e0] transition-colors duration-200 no-underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-[#999] font-mono">
            © 2026 Appnomics.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-[#9999] tracking-[0.12em] font-mono uppercase">
              ✦ v1.0
            </span>
            <span className="w-px h-3 bg-[#1f1f1f]" />
            <span className="text-[11px] text-[#999] font-mono">
              Made with ☕ in the Bay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}