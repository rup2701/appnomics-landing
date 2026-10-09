import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ── Navigation ─────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Process", href: "#process" },
  { label: "Studio OS", href: "#studio" },
  { label: "Why Us", href: "#why-appnomics" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  // { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 overflow-x-clip transition-all duration-300 ${
        isScrolled
          ? "bg-[#f5f5f5]/95 backdrop-blur-md border-b border-[#d8d8d8]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[100vw] mx-auto px-4 sm:px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src="/appnomics.svg"
            alt="Appnomics"
            height={22}
            width={102}
            className="h-5 w-auto"
          />
          <span className="text-[10px] text-[#087a50] font-mono font-bold tracking-[0.12em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            / STUDIO
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[15px] text-[#333] font-medium font-sans hover:text-[#087a50] transition-colors duration-200 no-underline tracking-[0.04em]"
            >
              {item.label}
            </a>
          ))}
           <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="text-sm text-[#087a50] hover:text-[#171717] border border-[#087a50] font-bold rounded-[2px] hover:border-[#171717] px-4 py-1.5 transition-all duration-150"
            style={{
              background: hovered ? "#00ff9d" : "transparent",
              color: hovered ? "#171717" : "#087a50",
              boxShadow: hovered ? "0 0 32px #00ff9d44" : "0 0 12px #00ff9d22",
            }}>
            <Link href="mailto:rupesh@appnomics.dev" className="font-sans">
              GET STARTED
            </Link>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-[#171717] hover:text-[#087a50] transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#f5f5f5] border-t border-[#d8d8d8] px-4 sm:px-6 md:px-10 py-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[13px] text-[#444] font-sans hover:text-[#087a50] transition-colors duration-200 no-underline py-1"
            >
              {item.label}
            </a>
          ))}
            <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="text-sm text-[#087a50] hover:text-[#171717] border border-[#087a50] font-bold rounded-[2px] hover:border-[#171717] px-4 py-1.5 transition-all duration-150"
            style={{
              background: hovered ? "#00ff9d" : "transparent",
              color: hovered ? "#171717" : "#087a50",
              boxShadow: hovered ? "0 0 32px #00ff9d44" : "0 0 12px #00ff9d22",
            }}>
            <Link href="mailto:rupesh@appnomics.dev">
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}