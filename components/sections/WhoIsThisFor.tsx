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

export default function WhoThisIsFor() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-1 md:px-0">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="text-[42px] font-medium tracking-tight text-[#171717] leading-[1.1] font-sans">
            Who is this for.
          </h2>
          <p className="text-base md:text-lg text-[#555] font-sans leading-[1.6] max-w-[440px]">
            For founders and builders stuck in the muck of AI wrappers and brittle prototypes. Real engineering velocity—without the co-founder drama.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PERSONAS.map((item, i) => (
            <div
              key={item.title}
              className="group flex flex-col items-start gap-5 rounded-[20px] bg-[#ebebeb] p-6 transition-all duration-200 hover:bg-[#eeeeee]"
            >
              <div className="flex w-full items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#b0b0ba] bg-[#d8d8d8] text-lg transition-colors group-hover:border-[#00ff9d88]">
                  <Image
                    src={item.iconSrc}
                    alt=""
                    className="h-6 w-6"
                    height={32}
                    width={32}
                  />
                </span>
                <span className="font-mono text-[11px] tracking-[0.15em] text-[#666]">
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-[#171717]">
                  {item.title}
                </h3>
                <p className="mt-1 font-sans leading-[1.6] text-[#555]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}