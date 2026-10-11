import SectionLabel from "../SectionLabel";
import Image from "next/image";

const PERSONAS = [
  {
    iconSrc: "/token.svg",
    title: "Token Bleeders",
    desc: "Burned credits on AI wrappers. No product. No progress.",
  },
  {
    iconSrc: "/context.svg",
    title: "No-Code Survivors",
    desc: "Prototype works — but it's brittle. It won't survive real users.",
  },
  {
    iconSrc: "/memory.svg",
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
    <section className="py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-1 md:px-0">
        <SectionLabel>// WHO THIS IS FOR</SectionLabel>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="text-[clamp(30px,4.5vw,52px)] font-normal text-[#171717] leading-[1.1] font-sans">
            Who is this for.
          </h2>
          <p className="text-base md:text-lg text-[#555] font-sans leading-[1.6] max-w-[440px]">
            For founders and builders stuck in the muck of AI wrappers and brittle prototypes. Real engineering velocity—without the co-founder drama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Personas */}
          <div className="flex flex-col gap-4">

            {PERSONAS.map((item, i) => (
              <div
                key={item.title}
                className="group flex items-start gap-5 p-5 border border-[#d8d8d8] rounded-[4px] bg-[#ebebeb] hover:border-[#00ff9d88] hover:bg-[#eeeeee] transition-all duration-200"
              >
                <span className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-lg border border-[#b0b0ba] bg-[#d8d8d8] rounded-[4px]  group-hover:border-[#00ff9d88] transition-colors">
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    className="w-6 h-6"
                    height={32}
                    width={32}
                  />
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="text-lg font-medium text-[#171717] font-sans">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-[#666] font-mono tracking-[0.15em]">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="lg:text-md text-[#888] font-sans leading-[1.6] mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What you get */}
          <div className="border border-[#c6c6c6] rounded-[4px]  overflow-hidden flex flex-col">
            <div className="flex items-center bg-[#ebebeb] justify-between px-6 py-4 border-b border-[#c6c6c6] bg-[#d8d8d8]">
              <p className="text-xs text-[#087a50] font-bold font-sans tracking-[0.18em] uppercase">
                What you get
              </p>
              <span className="w-2 h-2 rounded-full bg-[#00ff9d] shadow-[0_0_8px_#00ff9d99]" />
            </div>
            <ul className="flex-1 flex flex-col justify-center divide-y divide-[#c6c6c6] px-6">
              {DELIVERABLES.map((item) => (
                <li
                  key={item}
                  className="text-[15px] text-[#171717] font-sans flex items-center gap-3 py-[15px]"
                >
                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[11px] text-[#087a50] border border-[#087a5044] bg-[#087a500d] rounded-[2px]">
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