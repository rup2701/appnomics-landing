import SectionLabel from "../SectionLabel";

export default function WhyAppnomicsSection() {
  return (
    <section id='why-appnomics' className="py-24">
      <div className="max-w-[1100px] mx-auto px-2">
        <SectionLabel centerAlign={true}>// WHY APPNOMICS</SectionLabel>

        <div className="text-center mb-14">
          <h2 className="text-[clamp(30px,4vw,52px)] font-normal text-[#171717] mb-2 leading-[1.15] font-sans">
            Experience you can&apos;t prompt.
          </h2>
          <p className="text-lg text-[#555] font-sans max-w-[600px] mx-auto">
            AI writes code. We ship products. Here&apos;s what that actually means.
          </p>
        </div>

        {/* Hero quote */}
        <div className="border border-[#00a76b33] rounded-[2px] p-6 bg-[#eaf5ef] mb-12">
          <p className="text-sm text-[#333] font-sans leading-[1.8] text-center">
            <span className="text-[#087a50] text-xl">&ldquo;</span>
            We&apos;ve built <span className="text-[#171717]">20+ MVPs and Startups</span> from zero to launch.
            Every startup has hidden traps — we know where they are
            because we&apos;ve stepped in every single one.
            <span className="text-[#087a50] text-xl">&rdquo;</span>
          </p>
          <p className="text-[13px] text-[#666] font-sans text-center mt-2">
            — 10 years of 0-to-1 product experience
          </p>
        </div>

        {/* Comparison Table */}
        <div className="border border-[#d8d8d8] rounded-[2px] overflow-hidden ">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-[#e8e8e8] border-b border-[#d8d8d8]">
            <div className="text-[10px] md:text-[14px] text-[#555] font-sans tracking-[0.12em] uppercase ">
              Capability
            </div>
            <div className="text-[10px] md:text-[14px] text-[#555] font-sans tracking-[0.12em] uppercase text-center">
              AI Tools <span className="text-[#666] font-normal">(Base44/Lovable)</span>
            </div>
            <div className="text-[10px] md:text-[14px] text-[#087a50] font-sans tracking-[0.12em] uppercase text-center">
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
                i < 8 ? "border-b border-[#e5e5e5]" : ""
              } hover:bg-[#ffffff02] transition-colors`}
            >
              <div className="text-sm text-[#333] font-sans">
                {row.label}
              </div>
              <div
                className="text-[12px] font-sans text-center"
                style={{ color: row.ai.color }}
              >
                {row.ai.value}
              </div>
              <div
                className="text-[12px] font-sans text-center"
                style={{ color: row.us.color === "#00ff9d" ? "#087a50" : row.us.color }}
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
            className="inline-block px-8 py-3.5 border border-[#087a50] rounded-[2px] text-sm font-bold text-[#087a50] font-sans no-underline hover:bg-[#087a50] hover:text-white transition-all duration-200"
          >
            EXPERIENCE MATTERS → START BUILDING
          </a>
          <p className="text-[12px] text-[#666] font-sans mt-3">
            No credit card · Free discovery · Real experience
          </p>
        </div>

        {/* Experience badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "20+", label: "MVPs Built", color: "#087a50" },
            { number: "10", label: "Years Experience", color: "#006987" },
            { number: "100%", label: "Code Ownership", color: "#7e22ce" },
            { number: "0", label: "Lock-in", color: "#a16207" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-[#d8d8d8] rounded-[2px] p-4 text-center bg-[#d8d8d8]"
            >
              <p
                className="text-[24px] font-bold font-sans"
                style={{ color: stat.color }}
              >
                {stat.number}
              </p>
              <p className="text-[9px] text-[#555] font-sans tracking-[0.08em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}