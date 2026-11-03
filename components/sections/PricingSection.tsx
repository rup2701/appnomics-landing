// ── Pricing Section ────────────────────────────────────────────────────────

import { useState } from "react";
import CheckLine from "../CheckLine";
import type { TabId } from "../HeroPrompt";
import Link from "next/link";

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

const BUILDER_FEATURES = [
  "2 site builds per month",
  "Live site in about 45 minutes",
  "Chat with Scout to shape your site",
  "Published and hosted for you",
  "Owner sign-in and a launch checklist",
  "Email support",
];

export default function PricingSection({ onChoosePlan }: { onChoosePlan: (tab: TabId) => void }) {
  const [selectedPlan, setSelectedPlan] = useState<"builder" | "build" | "build_run">("build");

  function choosePlan(tab: TabId) {
    onChoosePlan(tab);
    document.getElementById("hero-prompt")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id='pricing' className="py-24">
      <div className="max-w-7xl mx-auto block">
        <h2
          className="text-[42px] font-medium tracking-tight text-[#171717] mb-2 leading-[1.15] font-sans text-center"
        >
          Plans for every way you build.
        </h2>
        <p className="text-lg text-[#555] mb-14 font-sans text-center">
          Build it yourself with Builder, or partner with us to ship and run your product.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {/* Builder */}
          <div
            onClick={() => setSelectedPlan("builder")}
            className={`border rounded-sm p-8 cursor-pointer transition-all duration-150 relative flex flex-col ${
              selectedPlan === "builder"
                ? "border-[#00ff9d] bg-[#00ff9d08]"
                : "border-[#d8d8d8] bg-white"
            }`}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block text-[10px] tracking-[0.12em] text-[#087a50] bg-[#087a500d] rounded-full py-1 px-2.5 mb-3 font-sans">
                  SELF-SERVE
                </span>
                <p className="text-[10px] tracking-[0.15em] text-[#555] mb-1.5 font-sans text-left">
                  PLAN 01
                </p>
                <h3 className="text-xl font-medium text-[#171717] font-sans text-left">
                  Builder
                </h3>
              </div>
              <div className="text-right">
                <p className="text-[28px] font-bold font-sans leading-none text-[#087a50]">
                  $20
                </p>
                <p className="text-[11px] text-[#555] font-sans">per month</p>
              </div>
            </div>

            <p className="text-sm text-[#555] mb-6 font-sans">
              Build websites and applications yourself with AI.
            </p>

            <div className="mb-6 flex-1">
              {BUILDER_FEATURES.map((f) => (
                <CheckLine key={f} text={f} />
              ))}
            </div>

            <Link
              href="https://builder.appnomics.dev"
              className={`block text-center py-[11px] px-0 border rounded-sm text-xs font-bold tracking-[0.12em] font-sans no-underline transition-all duration-150 ${
                selectedPlan === "builder"
                  ? "border-[#087a5044] text-[#087a50] bg-[#087a500d]"
                  : "border-[#bbb] text-[#555] bg-transparent"
              }`}
            >
              START BUILDING →
            </Link>
          </div>

          {/* Build Only */}
          <div
            onClick={() => setSelectedPlan("build")}
            className={`border rounded-sm p-8 cursor-pointer transition-all duration-150 relative flex flex-col ${
              selectedPlan === "build"
                ? "border-[#00ff9d] bg-[#00ff9d08]"
                : "border-[#d8d8d8] bg-white"
            }`}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block text-[10px] tracking-[0.12em] text-[#555] bg-[#dcdcdc] rounded-full py-1 px-2.5 mb-3 font-sans">
                  ENGINEERING PARTNER
                </span>
                <p className="text-[10px] tracking-[0.15em] text-[#555] mb-1.5 font-sans text-left">
                  PLAN 02
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

            <div className="mb-6 flex-1 text-[#fff]">
              {BUILD_FEATURES.map((f) => (
                <CheckLine key={f} text={f} />
              ))}
            </div>

            <a
              href="#hero-prompt"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                choosePlan("mvp");
              }}
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
            className={`border rounded-sm p-8 cursor-pointer transition-all duration-150 relative flex flex-col ${
              selectedPlan === "build_run"
                ? "border-[#00d4ff44] bg-[#00d4ff08]"
                : "border-[#d8d8d8] bg-[#ebebeb]"
            }`}
          >
            {/* Recommended badge */}
            <div className="absolute -top-px right-5 bg-[#00d4ff] text-[#0a0a0a] text-[9px] font-bold tracking-[0.15em] py-[3px] px-2.5 font-sans">
              POPULAR
            </div>

            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block text-[10px] tracking-[0.12em] text-[#555] bg-[#dcdcdc] rounded-full py-1 px-2.5 mb-3 font-sans">
                  CUSTOM
                </span>
                <p className="text-[10px] tracking-[0.15em] text-[#555] mb-1.5 font-sans text-left">
                  PLAN 03
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

            <div className="mb-6 flex-1">
              {BUILD_RUN_FEATURES.map((f) => (
                <CheckLine key={f} text={f} />
              ))}
            </div>

            <a
              href="#hero-prompt"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                choosePlan("startup");
              }}
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