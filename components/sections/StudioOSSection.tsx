import SectionLabel from "../SectionLabel";
import StudioOSMockup from "./StudioOSMockup";

export default function StudioOSSection() {
  return (
    <section className="py-24 border-t border-[#1a1a1a] bg-[#0d0d0d]">
      <div className="max-w-[1100px] mx-auto px-10">
        <SectionLabel>// STUDIO OS</SectionLabel>
        
        {/* Centered headline section */}
        <div className="text-center">
          <h2
            className="text-[clamp(24px,3vw,36px)] font-bold text-[#e0e0e0] mb-2 leading-[1.15] font-mono"
          >
            The Handover —
            <br />
            <span className="text-[#00ff9d]">
              built into every project.
            </span>
          </h2>
          <p
            className="text-sm text-[#777] mb-4 font-mono mx-auto max-w-[600px]"
          >
            Environment variables, artifacts, epic timeline, and a complete handover package — all in one dashboard,
            from Day 1.
          </p>
        </div>

        {/* Feature bullets - centered */}
        <div
          className="flex gap-8 flex-wrap justify-center mb-14"
        >
          {[
            { icon: "⬡", label: "All env vars & secrets", color: "#00ff9d" },
            { icon: "{ }", label: "Specs, designs, PRs, QA", color: "#00d4ff" },
            { icon: "◎", label: "Epic timeline & progress", color: "#a855f7" },
            { icon: "↑", label: "Live deploy links", color: "#ffb800" },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-2">
              <span style={{ color: f.color, fontSize: 14 }}>{f.icon}</span>
              <span className="text-[#666] text-xs font-mono">
                {f.label}
              </span>
            </div>
          ))}
        </div>

        {/* Studio OS Dashboard mockup */}
        <div
          className="border border-[#2a2a2a] rounded-[4px] overflow-hidden h-[560px] shadow-[0_0_60px_#00ff9d0a,0_40px_80px_#00000088]"
        >
          <StudioOSMockup />
        </div>
      </div>
    </section>
  );
}