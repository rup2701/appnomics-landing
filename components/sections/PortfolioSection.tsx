import { useState } from "react";
import SectionLabel from "../SectionLabel";

// ── Portfolio data ─────────────────────────────────────────────────────────
const PROJECTS = [
  {
    name: "InstaRoom",
    domain: "getinstaroom.com",
    industry: "TELEHEALTH",
    description: "On-demand virtual appointment booking for independent practitioners. Auth, scheduling, Stripe paywall, calendar sync — shipped in 6 weeks.",
    epics: 8,
    stack: ["Next.js", "Neon", "Stripe", "Resend"],
    color: "#00ff9d",
    status: "LIVE",
    char: "IR",
  },
  {
    name: "Gunner Wins",
    domain: "gunnerwins.com",
    industry: "SPORTS / ANALYTICS",
    description: "AI-powered sports prediction platform with subscription tiers, live feed ingestion, and a picks leaderboard.",
    epics: 5,
    stack: ["Next.js", "Railway", "OpenAI", "Loops"],
    color: "#00d4ff",
    status: "LIVE",
    char: "GP",
  },
  {
    name: "MediaDance",
    domain: "mediadance.io",
    industry: "INFRASTRUCTURE",
    description: "Media processing pipeline with background job queue, S3-compatible storage, and a client-facing usage dashboard.",
    epics: 6,
    stack: ["Node.js", "Cloudflare R2", "Redis", "Railway"],
    color: "#a855f7",
    status: "BETA",
    char: "MD",
  },
  {
    name: "FinFare",
    domain: "finfare.app",
    industry: "FINTECH",
    description: "Personal finance tracker with Plaid bank sync, recurring transaction detection, and a natural language query interface.",
    epics: 5,
    stack: ["Next.js", "Plaid", "Neon", "Vercel"],
    color: "#ffb800",
    status: "LIVE",
    char: "FF",
  },
];

// ── Utility ────────────────────────────────────────────────────────────────
function Tag({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="text-[10px] font-bold tracking-[0.12em] px-[7px] py-0.5 rounded-[2px] font-mono whitespace-nowrap"
      style={{
        color,
        border: `1px solid ${color}33`,
        background: `${color}0d`,
      }}
    >
      {label}
    </span>
  );
}

export default function PortfolioSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 border-t border-[#1a1a1a]">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel>// PORTFOLIO</SectionLabel>
        <h2 className="text-[clamp(24px,3vw,36px)] font-bold text-[#e0e0e0] mb-2 leading-[1.15] font-mono">
          Built. Shipped. Handed over.
        </h2>
        <p className="text-lg text-[#999] mb-14 font-mono">
          A sample of MVPs we've taken from intake to production.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              onMouseEnter={() => setHovered(p.name)}
              onMouseLeave={() => setHovered(null)}
              className="bg-[#2a2a2a] border rounded-[2px] p-7 cursor-default transition-all duration-200 relative overflow-hidden"
              style={{
                borderColor: hovered === p.name ? p.color + "44" : "#1f1f1f",
                background: hovered === p.name ? "#2a2a2a80" : "#2a2a2a",
              }}
            >
              {/* Subtle corner glow on hover */}
              {hovered === p.name && (
                <div
                  className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${p.color}18 0%, transparent 70%)`,
                  }}
                />
              )}

              <div className="flex items-start justify-between gap-4 mb-4">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-[2px] flex items-center justify-center text-[13px] font-bold flex-shrink-0 font-mono transition-shadow duration-200"
                  style={{
                    background: `${p.color}14`,
                    border: `1px solid ${p.color}33`,
                    color: p.color,
                    boxShadow: hovered === p.name ? `0 0 16px ${p.color}22` : "none",
                  }}
                >
                  {p.char}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-[15px] font-bold text-[#e0e0e0] font-mono">
                      {p.name}
                    </span>
                    <Tag label={p.status} color={p.status === "LIVE" ? "#00ff9d" : "#ffb800"} />
                    <Tag label={p.industry} color={p.color} />
                  </div>
                  <a
                    href={`https://${p.domain}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#444] text-[11px] no-underline font-mono hover:text-[#666] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {p.domain} ↗
                  </a>
                </div>
              </div>

              <p className="text-[#aaa] text-md leading-[1.65] mb-5 font-mono">
                {p.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[12px] text-[#999] border border-[#1f1f1f] px-1.5 py-0.5 rounded-[2px] font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] text-[#999] font-mono whitespace-nowrap ml-3">
                  {p.epics} epics
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}