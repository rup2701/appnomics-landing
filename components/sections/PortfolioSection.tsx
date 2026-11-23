import Image from "next/image";
import Link from "next/link";

// ── Portfolio data ─────────────────────────────────────────────────────────
const PROJECTS = [
  {
    name: "InstaRoom",
    domain: "getinstaroom.com",
    industry: "TELEHEALTH",
    description: "On-demand virtual appointment booking for independent practitioners. Auth, scheduling, Stripe paywall, calendar sync — shipped in 6 weeks.",
    epics: 8,
    stack: ["Next.js", "Neon", "Stripe", "Resend", "GenAI", "Node.js", "ML"],
    color: "#087a50",
  },
  {
    name: "DispatchOS",
    domain: "dispatchos.dev",
    industry: "GENAI / MARKETING",
    description: "DispatchOS turns the work you are already doing into a coherent story your market can understand.",
    epics: 5,
    stack: ["Next.js", "Railway", "Gemini AI", "Vercel"],
    color: "#006987",
  },
  {
    name: "EZLinks",
    domain: "ezlinks.netlify.app",
    industry: "DEVELOPER TOOLS",
    description: "A deep-linking platform that handles the plumbing for links to your app.",
    epics: 16,
    stack: ["Node.js", "Next.js", "Google Cloud Run", "Postgres", "Firebase"],
    color: "#7e22ce",
  },
  {
    name: "PlaySquares",
    domain: "playsquares.webflow.io",
    industry: "SPORTSECH",
    description: "PlaySquares is a mobile app that modernizes the classic pen-and-paper squares game with automated live scoring, instant winner notifications, and custom leaderboards.",
    epics: 16,
    stack: ["Swift", "Node.js", "Postgres", "Firebase", 'Google Cloud'],
    color: "#a16207",
  },
];

export default function PortfolioSection() {
  return (
    <section id='portfolio' className="py-32">
      <div className="mx-auto max-w-[1340px] px-2">
          <h2 className="mb-2 font-sans text-[32px] font-medium leading-[1.15] tracking-tight text-[#171717] sm:text-[42px]">
            Built. Shipped. Handed over.
          </h2>
          <p className="mb-10 font-sans text-lg text-[#555]">
            A sample of MVPs we&apos;ve taken from intake to production.
          </p>

          <article className="grid overflow-hidden rounded-[24px] bg-white md:grid-cols-2">
            <div className="flex flex-col items-start p-7 sm:p-10">
              <p className="mb-5 font-mono text-xs tracking-[0.12em] text-[#087a50]">FEATURED PROJECT · {PROJECTS[0].industry}</p>
              <h3 className="mb-3 font-sans text-3xl font-medium tracking-tight text-[#171717]">{PROJECTS[0].name}</h3>
              <p className="max-w-md font-sans text-base leading-relaxed text-[#555]">{PROJECTS[0].description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {PROJECTS[0].stack.map((item) => (
                  <span key={item} className="rounded-full bg-[#f5f5f5] px-3 py-1 font-sans text-xs text-[#555]">{item}</span>
                ))}
                <span className="rounded-full bg-[#edf3ef] px-3 py-1 font-sans text-xs text-[#087a50]">{PROJECTS[0].epics} epics</span>
              </div>
              <a href={`https://${PROJECTS[0].domain}`} target="_blank" rel="noreferrer" className="mt-8 font-sans text-sm font-medium text-[#087a50] underline underline-offset-4">
                Visit {PROJECTS[0].name} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <div className="flex min-h-64 items-center justify-center p-8 sm:p-12">
              <Image
                src="/images/instaroom.png"
                alt="InstaRoom website and virtual room dashboard"
                width={3054}
                height={1996}
                sizes="(min-width: 768px) 500px, 100vw"
                className="h-auto w-full rounded-[16px] shadow-sm"
              />
            </div>
          </article>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {PROJECTS.slice(1).map((project, index) => (
              <article key={project.name} className={`flex flex-col rounded-[20px] p-7 ${["bg-[#eaf5ef]", "bg-[#f0eeee]", "bg-[#f5f1eb]"][index]}`}>
                <p className="mb-4 font-mono text-[10px] tracking-[0.12em]" style={{ color: project.color }}>{project.industry}</p>
                <h3 className="mb-3 font-sans text-xl font-medium text-[#171717]">{project.name}</h3>
                <p className="flex-1 font-sans text-sm leading-relaxed text-[#555]">{project.description}</p>
                <p className="mt-5 font-sans text-xs leading-relaxed text-[#777]">
                  {project.stack.join(" · ")} · {project.epics} epics
                </p>
                <a href={`https://${project.domain}`} target="_blank" rel="noreferrer" className="mt-5 self-start font-sans text-sm font-medium text-[#087a50] underline underline-offset-4">
                  Visit {project.name} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/gallery" className="font-sans text-sm font-medium text-[#087a50] underline underline-offset-4">
              Explore the gallery <span aria-hidden="true">→</span>
            </Link>
        </div>
      </div>
    </section>
  );
}