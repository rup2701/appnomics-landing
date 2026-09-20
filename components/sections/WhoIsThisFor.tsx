import SectionLabel from "../SectionLabel";

const PERSONAS = [
  {
    icon: "🔥",
    title: "Token Bleeders",
    desc: "Burned credits on AI wrappers. No product. No progress.",
  },
  {
    icon: "🧱",
    title: "No-Code Survivors",
    desc: "Prototype works — but it's brittle. It won't survive real users.",
  },
  {
    icon: "💔",
    title: "Co-Founder Refugees",
    desc: "Ghosted by devs who wanted equity. You keep 100% of your company.",
  },
];

const DELIVERABLES = [
  "1 epic/week · $5K/epic",
  "Full code ownership",
  "Studio OS handover",
  "No equity split",
  "No token limits",
  "No pauses",
];

export default function WhoThisIsFor() {
  return (
    <section className="py-16 md:py-24 border-t border-[#262626]">
      <div className="max-w-[1100px] mx-auto px-1 md:px-0">
        <SectionLabel>// WHO THIS IS FOR</SectionLabel>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-bold text-[#e0e0e0] leading-[1.1] font-sans">
            Who is this for.
          </h2>
          <p className="text-base md:text-lg text-[#999] font-sans leading-[1.6] max-w-[440px]">
            For founders and builders stuck in the muck of AI wrappers and brittle prototypes. Real engineering velocity—without the co-founder drama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Personas */}
          <div className="flex flex-col gap-4">

            {PERSONAS.map((item, i) => (
              <div
                key={item.title}
                className="group flex items-start gap-5 p-5 border border-[#2b2b2b] rounded-[4px] bg-[#1b1b1b] hover:border-[#00ff9d55] hover:bg-[#1e1e1e] transition-all duration-200"
              >
                <span className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-lg border border-[#333] rounded-[4px] bg-[#161616] group-hover:border-[#00ff9d44] transition-colors">
                  {item.icon}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="text-lg font-bold text-[#e0e0e0] font-sans">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-[#555] font-mono tracking-[0.15em]">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-[#999] font-sans leading-[1.6] mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What you get */}
          <div className="border border-[#2b2b2b] rounded-[4px] bg-[#1b1b1b] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2b2b2b] bg-[#1f1f1f]">
              <p className="text-xs text-[#00ff9d] font-bold font-sans tracking-[0.18em] uppercase">
                What you get
              </p>
              <span className="w-2 h-2 rounded-full bg-[#00ff9d] shadow-[0_0_8px_#00ff9d99]" />
            </div>
            <ul className="flex-1 flex flex-col justify-center divide-y divide-[#242424] px-6">
              {DELIVERABLES.map((item) => (
                <li
                  key={item}
                  className="text-[15px] text-[#c0c0c0] font-sans flex items-center gap-3 py-[15px]"
                >
                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[11px] text-[#00ff9d] border border-[#00ff9d44] bg-[#00ff9d0d] rounded-[2px]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}