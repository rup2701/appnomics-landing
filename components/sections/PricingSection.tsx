// ── Pricing Section ────────────────────────────────────────────────────────

import { useState } from "react";
import SectionLabel from "../SectionLabel";
import CheckLine from "../CheckLine";

// ── Pricing ────────────────────────────────────────────────────────────────
const BUILD_FEATURES = [
  "Full-stack MVP, production-ready",
  "1 epic per week (avg)",
  "Studio OS dashboard access",
  "Weekly async progress updates",
  "Full codebase + repo ownership",
  "The Handover package on completion",
  "90-day QA warranty on delivered epics",
];

const BUILD_RUN_FEATURES = [
  "Everything in Build Only",
  "Ongoing maintenance & monitoring",
  "Bug fixes & security patches",
  "Feature velocity retainer",
  "Monthly usage & revenue reports",
  "Priority epic queue",
  "15% of revenue, no upfront extras",
];

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<"build" | "build_run">("build");

  return (
    <section id='pricing' className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto block">
        <SectionLabel centerAlign={true}>// PRICING</SectionLabel>
        <h2
          className="text-[clamp(24px,3vw,42px)] font-extrabold text-[#e0e0e0] mb-2 leading-[1.15] font-mono text-center" 
        >
          Transparent pricing.
          <br />
          <span className="text-[#6e6e6e] font-extrabold">Fixed pricing. No pauses.</span>
        </h2>
        <p className="text-lg text-[#999] mb-14 font-mono text-center">
          Most apps are 5&mdash;6 epics. 6 weeks to deploy.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[860px] mx-auto"
        >
          {/* Build Only */}
          <div
            onClick={() => setSelectedPlan("build")}
            className={`bg-[#2a2a2a] border rounded-sm p-8 cursor-pointer transition-all duration-150 relative ${
              selectedPlan === "build"
                ? "border-[#00ff9d44] bg-[#00ff9d08]"
                : "border-[#1f1f1f] bg-[#0d0d0d]"
            }`}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#fafafa] mb-1.5 font-mono text-left">
                  PLAN 01
                </p>
                <h3 className="text-xl font-bold text-[#e0e0e0] font-mono text-left">
                  Build Only
                </h3>
              </div>
              <div className="text-right">
                <p
                  className={`text-[28px] font-bold font-mono leading-none ${
                    selectedPlan === "build"
                      ? "text-[#00ff9d] "
                      : "text-[#00ff9d]"
                  }`}
                >
                  $5K
                </p>
                <p className="text-[11px] text-[#fafafa] font-mono">
                  per epic
                </p>
              </div>
            </div>

            <div className="mb-6 text-[#fff]">
              {BUILD_FEATURES.map((f) => (
                <CheckLine key={f} text={f} />
              ))}
            </div>

            <a
              href="#intake"
              onClick={(e) => e.stopPropagation()}
              className={`block text-center py-[11px] px-0 border rounded-sm text-xs font-bold tracking-[0.12em] font-mono no-underline transition-all duration-150 ${
                selectedPlan === "build"
                  ? "border-[#00ff9d44] text-[#00ff9d] bg-[#00ff9d0d]"
                  : "border-[#2a2a2a] text-[#555] bg-transparent"
              }`}
            >
              START BUILDING →
            </a>
          </div>

          {/* Build + Run */}
          <div
            onClick={() => setSelectedPlan("build_run")}
            className={`bg-[#2a2a2a] border rounded-sm p-8 cursor-pointer transition-all duration-150 relative ${
              selectedPlan === "build_run"
                ? "border-[#00d4ff44] bg-[#00d4ff08]"
                : "border-[#1f1f1f] bg-[#0d0d0d]"
            }`}
          >
            {/* Recommended badge */}
            <div className="absolute -top-px right-5 bg-[#00d4ff] text-[#0a0a0a] text-[9px] font-bold tracking-[0.15em] py-[3px] px-2.5 font-mono">
              POPULAR
            </div>

            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#fafafa] mb-1.5 font-mono text-left">
                  PLAN 02
                </p>
                <h3 className="text-xl font-bold text-[#e0e0e0] font-mono">
                  Build + Run
                </h3>
              </div>
              <div className="text-right">
                <p
                  className={`text-[32px] font-bold font-mono leading-none ${
                    selectedPlan === "build_run"
                      ? "text-[#00d4ff]"
                      : "text-[#00d4ff]"
                  }`}
                >
                  $5K
                </p>
                <p className="text-[11px] text-[#fafafa] font-mono">
                  per epic + 15% rev
                </p>
              </div>
            </div>

            <div className="mb-6">
              {BUILD_RUN_FEATURES.map((f) => (
                <CheckLine key={f} text={f} />
              ))}
            </div>

            <a
              href="#intake"
              onClick={(e) => e.stopPropagation()}
              className={`block text-center py-[11px] px-0 border rounded-sm text-xs font-bold tracking-[0.12em] font-mono no-underline transition-all duration-150 ${
                selectedPlan === "build_run"
                  ? "border-[#00d4ff44] text-[#00d4ff] bg-[#00d4ff0d]"
                  : "border-[#2a2a2a] text-[#555] bg-transparent"
              }`}
            >
              START BUILDING →
            </a>
          </div>
        </div>

        {/* Fine print */}
        <p className="mt-7 text-[11px] text-[#999] font-mono text-center">
          No credit card required to start · Discovery is free ·{" "}
          <span className="text-[#fafafa]">We scope before you commit.</span>
        </p>
      </div>
    </section>
  );
}