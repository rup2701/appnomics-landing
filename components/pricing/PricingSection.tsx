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
    <section style={{ padding: "96px 0", borderTop: "1px solid #1a1a1a" }}>
      <div style={{  margin: "0 auto", padding: "0 40px", display:'block' }}>
        <SectionLabel>// PRICING</SectionLabel>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 700,
            color: "#e0e0e0",
            marginBottom: 8,
            lineHeight: 1.15,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          Transparent pricing.
          <br />
          <span style={{ color: "#6e6e6e" }}>No retainers. No surprises.</span>
        </h2>
        <p style={{ fontSize: 14, color: "#ddd", marginBottom: 56, fontFamily: "'JetBrains Mono', monospace" }}>
          Most apps are 5–6 epics → <span style={{ color: "#ddd" }}>$25K–$30K total.</span>
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
            maxWidth: 860,
            margin: "0 auto"
          }}
        >
          {/* Build Only */}
          <div
            onClick={() => setSelectedPlan("build")}
            style={{
              border: `1px solid ${selectedPlan === "build" ? "#00ff9d44" : "#1f1f1f"}`,
              borderRadius: 2,
              background: selectedPlan === "build" ? "#00ff9d08" : "#0d0d0d",
              padding: 32,
              cursor: "pointer",
              transition: "all 0.15s",
              position: "relative",
            }}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "#fafafa",
                    marginBottom: 6,
                    fontFamily: "'JetBrains Mono', monospace",
                    textAlign: 'left'
                  }}
                >
                  PLAN 01
                </p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#e0e0e0",
                    fontFamily: "'JetBrains Mono', monospace",
                    textAlign: 'left'
                  }}
                >
                  Build Only
                </h3>
              </div>
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#00ff9d",
                    fontFamily: "'JetBrains Mono', monospace",
                    lineHeight: 1,
                    textShadow: selectedPlan === "build" ? "0 0 16px #00ff9d66" : "none",
                  }}
                >
                  $5K
                </p>
                <p style={{ fontSize: 11, color: "#fafafa", fontFamily: "'JetBrains Mono', monospace" }}>
                  per epic
                </p>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              {BUILD_FEATURES.map((f) => (
                <CheckLine key={f} text={f} />
              ))}
            </div>

            <a
              href="#intake"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "block",
                textAlign: "center",
                padding: "11px 0",
                border: `1px solid ${selectedPlan === "build" ? "#00ff9d44" : "#2a2a2a"}`,
                color: selectedPlan === "build" ? "#00ff9d" : "#555",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontFamily: "'JetBrains Mono', monospace",
                textDecoration: "none",
                borderRadius: 2,
                background: selectedPlan === "build" ? "#00ff9d0d" : "transparent",
                transition: "all 0.15s",
              }}
            >
              START BUILDING →
            </a>
          </div>

          {/* Build + Run */}
          <div
            onClick={() => setSelectedPlan("build_run")}
            style={{
              border: `1px solid ${selectedPlan === "build_run" ? "#00d4ff44" : "#1f1f1f"}`,
              borderRadius: 2,
              background: selectedPlan === "build_run" ? "#00d4ff08" : "#0d0d0d",
              padding: 32,
              cursor: "pointer",
              transition: "all 0.15s",
              position: "relative",
            }}
          >
            {/* Recommended badge */}
            <div
              style={{
                position: "absolute",
                top: -1,
                right: 20,
                background: "#00d4ff",
                color: "#0a0a0a",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.15em",
                padding: "3px 10px",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              POPULAR
            </div>

            <div className="flex items-start justify-between mb-6">
              <div>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "#fafafa",
                    marginBottom: 6,
                    fontFamily: "'JetBrains Mono', monospace",
                    textAlign: 'left'
                  }}
                >
                  PLAN 02
                </p>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#e0e0e0",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Build + Run
                </h3>
              </div>
              <div style={{ textAlign: "right" }}>
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#00d4ff",
                    fontFamily: "'JetBrains Mono', monospace",
                    lineHeight: 1,
                    textShadow: selectedPlan === "build_run" ? "0 0 16px #00d4ff66" : "none",
                  }}
                >
                  $5K
                </p>
                <p style={{ fontSize: 11, color: "#fafafa", fontFamily: "'JetBrains Mono', monospace" }}>
                  per epic + 15% rev
                </p>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              {BUILD_RUN_FEATURES.map((f) => (
                <CheckLine key={f} text={f} />
              ))}
            </div>

            <a
              href="#intake"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "block",
                textAlign: "center",
                padding: "11px 0",
                border: `1px solid ${selectedPlan === "build_run" ? "#00d4ff44" : "#2a2a2a"}`,
                color: selectedPlan === "build_run" ? "#00d4ff" : "#555",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                fontFamily: "'JetBrains Mono', monospace",
                textDecoration: "none",
                borderRadius: 2,
                background: selectedPlan === "build_run" ? "#00d4ff0d" : "transparent",
                transition: "all 0.15s",
              }}
            >
              START BUILDING →
            </a>
          </div>
        </div>

        {/* Fine print */}
        <p style={{ marginTop: 28, fontSize: 11, color: "#333", fontFamily: "'JetBrains Mono', monospace" }}>
          No credit card required to start · Discovery is free ·{" "}
          <span style={{ color: "#fafafa" }}>We scope before you commit.</span>
        </p>
      </div>
    </section>
  );
}