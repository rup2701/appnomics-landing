import SectionLabel from "../SectionLabel";
import StudioOSMockup from "./StudioOSMockup";

export default function StudioOSSection() {
  return (
    <section id="studio" className="hidden md:block py-24 border-t border-[#262626]">
      <div className="max-w-[1100px] mx-auto px-10">

        <SectionLabel centerAlign={true}>// STUDIO OS</SectionLabel>
        
        {/* Centered headline section */}
        <div className="text-center">
          <h2
            className="text-[clamp(30px,4vw,52px)] font-extrabold text-[#e0e0e0] mb-2 leading-[1.15] font-sans"
          >
            Studio OS —
            <br />
            <span className="text-[#00ff9d] font-extrabold">
              Your startup&apos;s operating system.
            </span>
          </h2>
          <p
            className="text-lg text-[#999] mb-4 font-sans mx-auto max-w-[600px]"
          >
            Environment variables, artifacts, epic timeline, and a complete handover package — all in one dashboard,
            from Day 1.
          </p>
        </div>

        {/* Studio OS Dashboard mockup */}
        <div
          className="border border-[#2b2b2b] rounded-[4px] overflow-hidden h-[560px] shadow-[0_0_60px_#00ff9d0a,0_40px_80px_#00000088] mt-14"
        >
          <StudioOSMockup />
        </div>

        {/* Feature bullets - centered */}
        <div
          className="flex gap-8 flex-wrap justify-center mt-14"
        >
          {[
            { icon: "⬡", label: "All env vars & secrets", color: "#00ff9d" },
            { icon: "{ }", label: "Specs, designs, PRs, QA", color: "#00d4ff" },
            { icon: "◎", label: "Epic timeline & progress", color: "#a855f7" },
            { icon: "↑", label: "Live deploy links", color: "#ffb800" },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-2">
              <span style={{ color: f.color, fontSize: 13 }}>{f.icon}</span>
              <span className="text-[#fff] text-xs font-sans">
                {f.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}