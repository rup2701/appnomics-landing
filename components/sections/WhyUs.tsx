import SectionLabel from "../SectionLabel";

export default function WhyAppnomicsSection() {
  return (
    <section id='why-appnomics' className="py-24 border-t border-[#1a1a1a] ">
      <div className="max-w-[1100px] mx-auto px-2">
        <SectionLabel centerAlign={true}>// WHY APPNOMICS</SectionLabel>

        <div className="text-center mb-14">
          <h2 className="text-[clamp(24px,3vw,42px)] font-bold text-[#e0e0e0] mb-2 leading-[1.15] font-mono">
            Experience you can&apos;t prompt.
          </h2>
          <p className="text-lg text-[#fff9] font-mono max-w-[600px] mx-auto">
            AI writes code. We ship products. Here&apos;s what that actually means.
          </p>
        </div>

        {/* Hero quote */}
        <div className="border border-[#00ff9d33] rounded-[2px] p-6 bg-[#00ff9d08] mb-12">
          <p className="text-sm text-[#fff9] font-mono leading-[1.8] text-center">
            <span className="text-[#00ff9d] text-xl">"</span>
            We&apos;ve built <span className="text-[#e0e0e0]">20+ MVPs and Startups</span> from zero to launch.
            Every startup has hidden traps — we know where they are
            because we&apos;ve stepped in every single one.
            <span className="text-[#00ff9d] text-xl">"</span>
          </p>
          <p className="text-[13px] text-[#777] font-mono text-center mt-2">
            — 10 years of 0-to-1 product experience
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-[#1f1f1f] rounded-[2px] overflow-hidden bg-[#2a2a2a]">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-[#0a0a0a] border-b border-[#1f1f1f] bg-[#222]">
            <div className="text-[10px] md:text-[14px] text-[#999] font-mono tracking-[0.12em] uppercase ">
              Capability
            </div>
            <div className="text-[10px] md:text-[14px] text-[#999] font-mono tracking-[0.12em] uppercase text-center">
              AI Tools <span className="text-[#999] font-normal">(Base44/Lovable)</span>
            </div>
            <div className="text-[10px] md:text-[14px] text-[#00ff9d] font-mono tracking-[0.12em] uppercase text-center">
              Appnomics
            </div>
          </div>

          {/* Rows */}
          {[
            {
              label: "Can write code",
              ai: { value: "✅", color: "#444" },
              us: { value: "✅", color: "#00ff9d" },
            },
            {
              label: "Can use AI to accelerate",
              ai: { value: "✅", color: "#444" },
              us: { value: "✅", color: "#00ff9d" },
            },
            {
              label: "Knows what breaks first",
              ai: { value: "❌", color: "#444" },
              us: { value: "✅ ", color: "#00ff9d" },
            },
            {
              label: "Knows what users actually need",
              ai: { value: "❌", color: "#444" },
              us: { value: "✅", color: "#00ff9d" },
            },
            {
              label: "Can prevent common traps",
              ai: { value: "❌", color: "#444" },
              us: { value: "✅", color: "#00ff9d" },
            },
            {
              label: "Can ship a real product",
              ai: { value: "🤞", color: "#444" },
              us: { value: "✅", color: "#00ff9d" },
            },
            {
              label: "Knows 'good enough' vs. over-engineering",
              ai: { value: "❌", color: "#444" },
              us: { value: "✅", color: "#00ff9d" },
            },
            {
              label: "Handles the messy stuff (edge cases, data migrations)",
              ai: { value: "❌", color: "#444" },
              us: { value: "✅", color: "#00ff9d" },
            },
            {
              label: "No pause due to AI tokens running out",
              ai: { value: "❌", color: "#444" },
              us: { value: "✅", color: "#00ff9d" },
            },
          ].map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 gap-4 px-6 py-3.5 ${
                i < 8 ? "border-b border-[#141414]" : ""
              } hover:bg-[#ffffff02] transition-colors`}
            >
              <div className="text-sm text-[#c0c0c0] font-mono">
                {row.label}
              </div>
              <div
                className="text-[12px] font-mono text-center"
                style={{ color: row.ai.color }}
              >
                {row.ai.value}
              </div>
              <div
                className="text-[12px] font-mono text-center"
                style={{ color: row.us.color }}
              >
                {row.us.value}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#intake"
            className="inline-block px-8 py-3.5 border border-[#00ff9d] rounded-[2px] text-sm font-bold text-[#00ff9d] font-mono no-underline hover:bg-[#00ff9d] hover:text-[#0a0a0a] transition-all duration-200"
          >
            EXPERIENCE MATTERS → START BUILDING
          </a>
          <p className="text-[12px] text-[#888] font-mono mt-3">
            No credit card · Free discovery · Real experience
          </p>
        </div>

        {/* Experience badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "20+", label: "MVPs Built", color: "#00ff9d" },
            { number: "10", label: "Years Experience", color: "#00d4ff" },
            { number: "100%", label: "Code Ownership", color: "#a855f7" },
            { number: "0", label: "Lock-in", color: "#ffb800" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-[#1f1f1f] rounded-[2px] p-4 text-center bg-[#0a0a0a]"
            >
              <p
                className="text-[24px] font-bold font-mono"
                style={{ color: stat.color }}
              >
                {stat.number}
              </p>
              <p className="text-[9px] text-[#888] font-mono tracking-[0.08em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}