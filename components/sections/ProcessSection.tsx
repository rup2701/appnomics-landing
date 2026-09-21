import { useState } from "react";
import SectionLabel from "../SectionLabel";
import Image from "next/image";

// ── Process steps ──────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    n: "00",
    label: "Discovery",
    sub: "1–2 days",
    detail: "You submit your idea. Within 48 hours, your entire product is mapped out, sliced into epics,\
    and provisioned live inside your dedicated Studio OS dashboard. No slides, no fluff—you see the complete\
    blueprint before you commit a single cent.",
    icon: "◈",
  },
  {
    n: "01",
    label: "Epic 1",
    sub: "~1 week",
    detail: "Auth, database schema, and the first slice of core functionality. Deployed to staging.\
    You see it working.",
    icon: "▸",
  },
  {
    n: "02",
    label: "Epic 2",
    sub: "~1 week",
    detail: "Core feature loop: the thing your users actually pay for.\
    Integrations, business logic, API contracts.",
    icon: "▸",
  },
  {
    n: "03",
    label: "Epic 3–N",
    sub: "~1 week each",
    detail: "Billing, notifications, admin tools, analytics — each epic ships\
    a vertical slice. Progress every 7 days.",
    icon: "▸",
  },
  {
    n: "04",
    label: "QA & Polish",
    sub: "3–5 days",
    detail: "Full QA pass, production deploy, DNS, monitoring setup, Sentry wired. Everything production-grade.",
    icon: "◉",
  },
  {
    n: "05",
    label: "The Handover",
    sub: "Day 1 artifact",
    detail: "All env vars, credentials, repos, docs, and a handover package — yours to own, transfer, or hand to a dev team.",
    icon: "⬡",
    accent: true,
  },
];

// ── Process Section ────────────────────────────────────────────────────────
export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string | null>("00");

  return (
    <section id='process' className="py-24 border-t border-[#262626]">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>// PROCESS</SectionLabel>
        <h2 className="text-[clamp(30px,4vw,52px)] font-bold text-[#e0e0e0] mb-2 leading-[1.15] font-sans">
          One epic per week.
          <br />
          <span className="text-[#fff]">Guaranteed launch.</span>
        </h2>
        <p className="text-lg text-[#999] mb-14 font-sans max-w-[560px]">
          No month-long sprints. <span className="text-[#fff] font-semibold">No token limits holding your launch back.</span>
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[19px] top-9 bottom-9 w-px bg-gradient-to-b from-[#00ff9d55] via-[#2b2b2b] to-transparent" />

          <div className="flex flex-col gap-3">
            {PROCESS_STEPS.map((step) => {
              const isActive = activeStep === step.n;
              const isLast = !!step.accent;

              return (
                <div
                  key={step.n}
                  onClick={() => setActiveStep(isActive ? null : step.n)}
                  className="group relative flex gap-4 md:gap-5 cursor-pointer"
                >
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0 w-10 pt-4">
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center text-[12px] font-mono transition-all duration-200 ${
                        isLast
                          ? "border-[#00ff9d] bg-[#00ff9d14] text-[#00ff9d] shadow-[0_0_14px_#00ff9d44]"
                          : isActive
                            ? "border-[#00ff9d] bg-[#00ff9d11] text-[#00ff9d] shadow-[0_0_10px_#00ff9d33]"
                            : "border-[#333] bg-[#161616] text-[#666] group-hover:border-[#555] group-hover:text-[#999]"
                      }`}
                    >
                      {step.n}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 border rounded-[4px] px-5 py-4 transition-all duration-200 ${
                      isActive
                        ? "border-[#00ff9d55] bg-[#1d1d1d]"
                        : "border-transparent group-hover:border-[#2b2b2b] group-hover:bg-[#1b1b1b]"
                    }`}
                  >
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-2 mb-1.5">
                      <span
                        className={`text-[18px] font-bold font-sans ${
                          isLast ? "text-[#00ff9d]" : isActive ? "text-[#fff]" : "text-[#c0c0c0]"
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="text-[11px] text-[#888] font-sans border border-[#2b2b2b] bg-[#161616] px-2 py-0.5 rounded-full">
                        {step.sub}
                      </span>
                      {isLast && (
                        <span className="text-[9px] text-[#00ff9d] border border-[#00ff9d33] bg-[#00ff9d0d] px-2 py-0.5 rounded-[2px] tracking-[0.12em] font-sans">
                          INCLUDED FREE
                        </span>
                      )}
                    </div>
                    <p className="text-md text-[#999] leading-[1.65] font-sans max-w-[640px]">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <Image
          src="/capabilities-timeline.png"
          alt="capability blocks and timeline"
          height={650}
          width={1200}
          className="my-4"
          style={{

            maxWidth: "100%",
            height: 'auto',
            filter: 'invert(4)',
            border: "1px solid #ddd"
          }}
        /> */}

        {/* callout bar */}
        <div className="mt-12 border border-[#2b2b2b] border-l-2 border-l-[#00ff9d] p-5 pl-6 rounded-r-[4px] bg-[#1d1d1d]">
          <p className="text-sm md:text-[15px] text-[#999] font-sans leading-[1.7]">
            An epic is a single, fully functional feature block delivered every week. <br/>
            Most MVPs are <span className="text-[#e0e0e0]">5&mdash;6 epics</span> — that&apos;s{" "}
            <span className="text-[#e0e0e0]">5&mdash;6 weeks</span> from intake to production. Every epic is fully laid out and mapped during your free discovery session — so you see the exact roadmap before you commit a cent.
          </p>
        </div>
      </div>
    </section>
  );
}