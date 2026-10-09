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
    <section id='pricing' className="py-24">
      <div className="max-w-7xl mx-auto block">
        <SectionLabel centerAlign={true}>// PRICING</SectionLabel>
        <h2
          className="text-[clamp(30px,4vw,52px)] font-normal text-[#171717] mb-2 leading-[1.15] font-sans text-center" 
        >
          Transparent pricing.
          <br />
          <span className="text-[#555] font-normal">Fixed pricing. No pauses.</span>
        </h2>
        <p className="text-lg text-[#555] mb-14 font-sans text-center">
          Most apps are 5&mdash;6 epics. 6 weeks to deploy.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[860px] mx-auto"
        >
          {/* Build Only */}
          <div
            onClick={() => setSelectedPlan("build")}
            className={`border rounded-sm p-8 cursor-pointer transition-all duration-150 relative ${
              selectedPlan === "build"
                ? "border-[#00ff9d44] bg-[#00ff9d08]"
                : "border-[#d8d8d8] bg-white"
            }`}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#555] mb-1.5 font-sans text-left">
                  PLAN 01
                </p>
                <h3 className="text-xl font-medium text-[#171717] font-sans text-left">
                  Build Only
                </h3>
              </div>
              <div className="text-right">
                <p
                  className={`text-[28px] font-bold font-sans leading-none ${
                    selectedPlan === "build"
                      ? "text-[#087a50] "
                      : "text-[#087a50]"
                  }`}
                >
                  $5K
                </p>
                <p className="text-[11px] text-[#555] font-sans">
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
              className={`block text-center py-[11px] px-0 border rounded-sm text-xs font-bold tracking-[0.12em] font-sans no-underline transition-all duration-150 ${
                selectedPlan === "build"
                  ? "border-[#087a5044] text-[#087a50] bg-[#087a500d]"
                  : "border-[#bbb] text-[#555] bg-transparent"
              }`}
            >
              START BUILDING →
            </a>
          </div>

          {/* Build + Run */}
          <div
            onClick={() => setSelectedPlan("build_run")}
            className={`border rounded-sm p-8 cursor-pointer transition-all duration-150 relative ${
              selectedPlan === "build_run"
                ? "border-[#00d4ff44] bg-[#00d4ff08]"
                : "border-[#d8d8d8] bg-white"
            }`}
          >
            {/* Recommended badge */}
            <div className="absolute -top-px right-5 bg-[#00d4ff] text-[#0a0a0a] text-[9px] font-bold tracking-[0.15em] py-[3px] px-2.5 font-sans">
              POPULAR
            </div>

            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-[10px] tracking-[0.15em] text-[#555] mb-1.5 font-sans text-left">
                  PLAN 02
                </p>
                <h3 className="text-xl font-medium text-[#171717] font-sans">
                  Build + Run
                </h3>
              </div>
              <div className="text-right">
                <p
                  className={`text-[32px] font-bold font-sans leading-none ${
                    selectedPlan === "build_run"
                      ? "text-[#006987]"
                      : "text-[#006987]"
                  }`}
                >
                  $5K
                </p>
                <p className="text-[11px] text-[#555] font-sans">
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
              className={`block text-center py-[11px] px-0 border rounded-sm text-xs font-bold tracking-[0.12em] font-sans no-underline transition-all duration-150 ${
                selectedPlan === "build_run"
                  ? "border-[#00698744] text-[#006987] bg-[#0069870d]"
                  : "border-[#bbb] text-[#555] bg-transparent"
              }`}
            >
              START BUILDING →
            </a>
          </div>
        </div>

        {/* Fine print */}
        <p className="mt-7 text-[11px] text-[#555] font-sans text-center">
          No credit card required to start · Discovery is free ·{" "}
          <span className="text-[#171717]">We scope before you commit.</span>
        </p>
      </div>
    </section>
  );
}