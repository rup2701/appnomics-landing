import StudioOSMockup from "./StudioOSMockup";

export default function StudioOSSection() {
  return (
    <section id="studio" className="hidden md:block py-32">
      <div className="max-w-[1100px] mx-auto px-10">

        {/* Centered headline section */}
        <div className="text-center">
          <svg
            aria-hidden="true"
            className="mx-auto mb-4 h-[60px] w-[60px] text-[#b42318]"
            viewBox="0 0 60 60"
            fill="none"
          >
            <path
              d="M17.5 43.75h25a10 10 0 0 0 1.56-19.88A15 15 0 0 0 15.4 20.8 11.5 11.5 0 0 0 17.5 43.75Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2
            className="text-[42px] font-medium tracking-tight text-[#171717] mb-2 leading-[1.15] font-sans"
          >
            Appnomics Cloud
          </h2>
          <p
            className="text-lg text-[#555] mb-4 font-sans mx-auto max-w-[600px]"
          >
            Everything about your product—roadmap, artifacts, deployments, environment variables, team access, and handover—in one place, from day one.
          </p>
        </div>

        {/* Studio OS Dashboard mockup */}
        <div
          className="rounded-[20px] overflow-hidden h-[560px] shadow-[0_0_60px_#00ff9d0a,0_24px_48px_#00000022] mt-14"
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
              <span className="text-[#333] text-xs font-sans">
                {f.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}