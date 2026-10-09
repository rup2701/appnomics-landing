import { useState } from "react";
import SectionLabel from "../SectionLabel";

export default function CTASection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="intake"
      className="py-[120px] pb-[100px] text-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #00ff9d08 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[640px] mx-auto px-2">
        <SectionLabel centerAlign={true}>
          // GET STARTED
        </SectionLabel>

        <h2 className="text-[clamp(28px,3.5vw,44px)] font-normal text-[#171717] mb-4 leading-[1.1] font-sans">
          Start building today.
        
        </h2>

        <p className="text-lg text-[#555] mb-12 leading-[1.7] font-sans">
          Start with your idea. Get your 6-week epic breakdown in 24 hours — zero risk, zero lock-in.
        </p>

        <a
          href="mailto:rupesh@appnomics.dev"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-block px-12 py-4 border border-[#087a50] rounded-[2px] text-[13px] font-bold tracking-[0.15em] font-sans no-underline transition-all duration-150 mb-5"
          style={{
            background: hovered ? "#00ff9d" : "transparent",
            color: hovered ? "#171717" : "#087a50",
            boxShadow: hovered ? "0 0 32px #00ff9d44" : "0 0 12px #00ff9d22",
          }}
        >
          START BUILDING →
        </a>

        <p className="text-[11px] text-[#666] font-sans">
          No credit card required · Free to start
        </p>
      </div>
    </section>
  );
}