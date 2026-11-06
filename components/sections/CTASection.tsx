import { useState } from "react";
import Link from "next/link";

export default function CTASection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="intake"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-[120px] text-center"
      style={{ background: "linear-gradient(115deg, #dce9e1 0%, #f5f5f5 52%, #e8eee9 100%)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(8, 122, 80, 0.2) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to right, transparent, black 14%, black 86%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[640px] px-6">
        <svg
          className="mx-auto mb-5 block h-12 w-12"
          viewBox="0 0 48 48"
          role="img"
          aria-label="Scout"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="16" fill="#171717" />
          <g transform="translate(10 10) scale(1.1667)" fill="none" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M15.5 8.5l-2 5-5 2 2-5z" />
          </g>
        </svg>
        <h2 className="text-[42px] font-medium tracking-tight text-[#171717] mb-4 leading-[1.1] font-sans">
          Start building today.
        
        </h2>

        <p className="text-lg text-[#555] mb-12 leading-[1.7] font-sans">
          Bring an idea. Scout helps shape it, and Builder helps turn it into a product.
        </p>

        <Link
          href="https://builder.appnomics.dev"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-block px-12 py-3 border border-[#087a50] rounded-lg text-[15px] font-bold tracking-[0.15em] font-sans no-underline transition-all duration-150 mb-5"
          style={{
            background: hovered ? "#0a0a0a" : "transparent",
            color: hovered ? "#fff" : "#087a50",
            boxShadow: hovered ? "0 0 32px #00ff9d44" : "0 0 12px #00ff9d22",
          }}
        >
          START BUILDING →
        </Link>

        <p className="text-[11px] text-[#666] font-sans">
          No credit card required · Free to start
        </p>
      </div>
    </section>
  );
}