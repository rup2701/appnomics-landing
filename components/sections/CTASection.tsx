import { useState } from "react";
import SectionLabel from "../SectionLabel";

export default function CTASection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="intake"
      className="py-[120px] pb-[100px] border-t border-[#1a1a1a] text-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #00ff9d08 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[640px] mx-auto px-10">
        <SectionLabel centerAlign={true}>
          // GET STARTED
        </SectionLabel>

        <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-[#e0e0e0] mb-4 leading-[1.1] font-mono">
          Ready to build
          <br />
          <span className="text-[#00ff9d]">
            your MVP?
          </span>
        </h2>

        <p className="text-lg text-[#777] mb-12 leading-[1.7] font-mono">
          Start with your idea. Get your 6-week epic breakdown in 24 hours — zero risk, zero lock-in.
        </p>

        <a
          href="#intake"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-block px-12 py-4 border border-[#00ff9d] rounded-[2px] text-[13px] font-bold tracking-[0.15em] font-mono no-underline transition-all duration-150 mb-5"
          style={{
            background: hovered ? "#00ff9d" : "transparent",
            color: hovered ? "#0a0a0a" : "#00ff9d",
            boxShadow: hovered ? "0 0 32px #00ff9d44" : "0 0 12px #00ff9d22",
          }}
        >
          START BUILDING →
        </a>

        <p className="text-[11px] text-[#333] font-mono">
          No credit card required · Free to start
        </p>
      </div>
    </section>
  );
}