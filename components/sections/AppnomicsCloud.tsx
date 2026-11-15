import StudioOSMockup from "./StudioOSMockup";

const FEATURES = [
  {
    title: "Integrations",
    description: "Keep credentials, OAuth connections, and API keys in one place.",
    icon: <><circle cx="15.5" cy="8.5" r="4.5" /><path d="m12 12-7 7v2h3v-2h2v-2h2l2-2" /><circle cx="16" cy="8" r=".7" fill="currentColor" stroke="none" /></>,
  },
  {
    title: "Deployments",
    description: "Manage environments, releases, and rollbacks as your product evolves.",
    icon: <><path d="M14 5c2-2 5-2 7-2 0 2 0 5-2 7l-6 6-5-5 6-6Z" /><path d="m8 11-3 1-2 3 5 .5M13 16l-.5 5L16 19l1-3M7 17c-2 .5-3 2-3 4 2 0 3.5-1 4-3" /><circle cx="16" cy="8" r="1.5" /></>,
  },
  {
    title: "Product memory",
    description: "Keep architecture, decisions, and documentation together for your team.",
    icon: <><path d="M12 6c-2-2-5-2-9-2v14c4 0 7 0 9 2 2-2 5-2 9-2V4c-4 0-7 0-9 2Z" /><path d="M12 6v14" /></>,
  },
  {
    title: "Operations",
    description: "Keep track of application health, logs, monitoring, and maintenance.",
    icon: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 13h4l2-3 3 5 3-6 2 4h4" /></>,
  },
];

export default function AppnomicsCloud() {
  return (
    <section id="studio" className="hidden md:block py-32">
      <div className="mx-auto max-w-[1340px] px-2">

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
            className="text-[32px] sm:text-[42px] font-medium tracking-tight text-[#171717] mb-2 leading-[1.15] font-sans"
          >
            Appnomics Cloud
          </h2>
          <p
            className="text-lg text-[#555] mb-4 font-sans mx-auto max-w-[600px]"
          >
            Everything about your product—roadmap, artifacts, deployments, environment variables, team access, and handover—in one place, from day one.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[4fr_6fr] lg:gap-16 lg:overflow-hidden lg:rounded-[26px] lg:bg-white lg:p-8 lg:py-12 lg:pr-0">
          <div className="divide-y divide-[#d8d8d8] lg:self-center lg:pl-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4 py-5 first:pt-0 last:pb-0">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 shrink-0 text-[#087a50]">
                  {feature.icon}
                </svg>
                <div>
                  <h3 className="text-lg font-medium text-[#171717]">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#555]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[480px] min-w-0 overflow-x-auto rounded-[20px] rounded-l-lg shadow-[0_0_60px_#00ff9d0a,0_24px_48px_#00000022] lg:rounded-r-none" tabIndex={0} role="region" aria-label="Appnomics Cloud dashboard preview">
            <div className="h-full min-w-[760px]">
              <StudioOSMockup />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}