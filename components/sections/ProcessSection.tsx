import { useState } from "react";
import SectionLabel from "../SectionLabel";
import Image from "next/image";

// ── Process steps ──────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    n: "00",
    label: "Discovery",
    sub: "1\-2 days",
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
    sub: "3\-5 days",
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
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section id='process' className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>// PROCESS</SectionLabel>
        <h2 className="text-[clamp(24px,3vw,42px)] font-bold text-[#e0e0e0] mb-2 leading-[1.15] font-mono">
          One epic per week.
          <br />
          <span className="text-[#fff]">Guaranteed launch.</span>
        </h2>
        <p className="text-lg text-[#999] mb-[60px] font-mono max-w-[560px]">
          No month-long sprints. <span className={'text-[#fff] text-extrabold'}>No token limits holding your launch back.</span>
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[27px] top-7 bottom-7 w-px bg-gradient-to-b from-[#00ff9d44] to-[#1a1a1a]" />

          <div className="flex flex-col gap-0">
            {PROCESS_STEPS.map((step, i) => {
              const isActive = activeStep === step.n;
              const isLast = step.accent;
              const dotColor = isLast ? "#00ff9d" : isActive ? "#e0e0e0" : "#333";

              return (
                <div
                  key={step.n}
                  onClick={() => setActiveStep(isActive ? null : step.n)}
                  className="flex gap-1 cursor-pointer"
                >
                  {/* Dot */}
                  <div className="flex-shrink-0 w-[54px] pt-[18px]">
                    <div
                      className="w-[14px] h-[14px] rounded-full border transition-all duration-200 ml-0"
                      style={{
                        borderColor: dotColor,
                        background: isLast ? "#00ff9d22" : isActive ? "#1f1f1f" : "#0a0a0a",
                        boxShadow: isLast ? "0 0 10px #00ff9d66" : isActive ? "0 0 6px #e0e0e022" : "none",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pt-4 pb-5 ${
                      i < PROCESS_STEPS.length - 1 ? "border-b border-[#141414]" : ""
                    }`}
                  >
                    <div className="flex items-baseline flex-wrap gap-3 mb-1">
                      <span className="text-[13px] text-[#666] tracking-[0.1em] font-mono">
                        {step.n}
                      </span>
                      <span
                        className={`text-[18px] font-bold font-mono ${
                          isLast ? "text-[#00ff9d] shadow-[0_0_10px_#00ff9d55]" : "text-[#c0c0c0]"
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="text-[10px] md:text-[14px] text-[#666] font-mono">
                        {step.sub}
                      </span>
                      {isLast && (
                        <span className="text-[9px] text-[#00ff9d] border border-[#00ff9d33] bg-[#00ff9d0d] px-2 py-0.5 rounded-[2px] tracking-[0.12em] font-mono">
                          INCLUDED FREE
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#999] leading-[1.6] font-mono max-w-[600px]">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Image
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
        />

        {/* callout bar */}
        <div className="mt-12 border border-[#1f1f1f] border-l-2 border-l-[#00ff9d] p-4 pl-6 bg-[#00ff9d08] rounded-r-[2px] bg-[#2a2a2a]">
          <p className="text-sm md:text-[16px] text-[#888] font-mono leading-[1.7]">
            An epic is a single, fully functional feature block delivered every week. <br/>
            Most MVPs are <span className="text-[#e0e0e0]">5&mdash;6 epics</span> — that&apos;s{" "}
            <span className="text-[#e0e0e0]">5&mdash;6 weeks</span> from intake to production. Every epic is fully laid out and mapped during your free discovery session — so you see the exact roadmap before you commit a cent.
          </p>
        </div>
      </div>
    </section>
  );
}