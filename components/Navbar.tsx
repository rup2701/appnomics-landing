import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ── Navigation ─────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why-appnomics" },
  { label: "Pricing", href: "#pricing" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Studio OS", href: "#studio" },
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
          ? "bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#1a1a1a]"
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
            src="/appnomics-1.svg"
            alt="Appnomics"
            height={32}
            width={122}
            className="h-7 w-auto"
          />
          <span className="text-[10px] text-[#00ff9d] font-mono font-bold tracking-[0.12em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              className="text-[13px] text-[#999] font-mono hover:text-[#e0e0e0] transition-colors duration-200 no-underline tracking-[0.04em]"
            >
              {item.label}
            </a>
          ))}
           <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="text-sm text-gray-400 hover:text-white border-1 border border-[#00ff9d] font-bold rounded-[2px] hover:border-gray-500  px-4 py-1.5  transition-all duration-150"
            style={{
              background: hovered ? "#00ff9d" : "transparent",
              color: hovered ? "#0a0a0a" : "#00ff9d",
              boxShadow: hovered ? "0 0 32px #00ff9d44" : "0 0 12px #00ff9d22",
            }}>
            <Link href="/auth" className="font-mono">
              GET STARTED
            </Link>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-[#e0e0e0] hover:text-[#00ff9d] transition-colors"
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
        <div className="bg-[#0d0d0d] border-t border-[#1a1a1a] px-4 sm:px-6 md:px-10 py-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[13px] text-[#999] font-mono hover:text-[#e0e0e0] transition-colors duration-200 no-underline py-1"
            >
              {item.label}
            </a>
          ))}
            <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="text-sm text-gray-400 hover:text-white border-1 border border-[#00ff9d] font-bold rounded-[2px] hover:border-gray-500  px-4 py-1.5  transition-all duration-150"
            style={{
              background: hovered ? "#00ff9d" : "transparent",
              color: hovered ? "#0a0a0a" : "#00ff9d",
              boxShadow: hovered ? "0 0 32px #00ff9d44" : "0 0 12px #00ff9d22",
            }}>
            <Link href="/auth">
              Sign in
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}