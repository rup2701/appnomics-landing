import SectionLabel from "../SectionLabel";

export default function WhoThisIsFor() {
  return (
    <section className="py-4 md: py-24 border-t border-[#1a1a1a] ">
      <div className="max-w-[1100px] mx-auto px-1 md:px-10">
        {/* <SectionLabel>// WHO THIS IS FOR</SectionLabel> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-10">
          {/* Left Column */}
          <div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-[#e0e0e0] leading-[1.1] font-mono mb-8">
              Who is this for.
            </h2>

            {/* <p className="text-md text-[#fff9] font-mono leading-[1.7] mb-8">
              If that sounds familiar, you&apos;re in the right place.
            </p> */}

            <div className="space-y-4">
              {[
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
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 border border-[#1f1f1f] rounded-[2px] bg-[#2a2a2a] hover:border-[#00ff9d44] transition-colors"
                >
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-[#e0e0e0] font-mono">
                      {item.title}
                    </h4>
                    <p className="text-md text-[#fff9] font-mono leading-[1.5]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center align-center rounded-[2px] p-8 ">
            <p className="text-sm text-[#fff8] text-bold font-mono tracking-[0.12em] uppercase mb-2">
              What you get
            </p>
            <ul className="space-y-3">
              {[
                "1 epic/week · $5K/epic",
                "Full code ownership",
                "Studio OS handover",
                "No equity split",
                "No token limits",
                "No pauses",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm text-[#c0c0c0] font-mono flex items-center gap-3"
                >
                  <span className="text-[#00ff9d]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* <div className="mt-8 pt-6 border-t border-[#1f1f1f]">
              <a
                href="#process"
                className="inline-block w-full text-center py-3 border border-[#00ff9d] rounded-[2px] text-sm font-bold text-[#00ff9d] font-mono hover:bg-[#00ff9d] hover:text-[#0a0a0a] transition-all duration-200"
              >
                Learn More
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}