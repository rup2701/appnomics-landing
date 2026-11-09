import CheckLine from "../CheckLine";
import Link from "next/link";

const BUILD_FEATURES = [
  "1 epic per week (avg)",
  "Studio OS dashboard access",
  "Weekly async progress updates",
  "Full codebase + repo ownership",
  "The Handover package on completion",
  "90-day QA warranty on delivered epics",
];

const BUILDER_TIERS = [
  {
    name: "Builder",
    audience: "STARTER PROFESSIONAL",
    monthlyPrice: "$49",
    annualPrice: "$470",
    projects: "1 active live project / workspace",
    deployment: "Standard preview & deploy queue",
    checks: "Standard automated checks (lint, types, tests)",
    description:
      "A focused workspace to build and iterate on one product with Scout.",
  },
  {
    name: "Pro Builder",
    audience: "HEAVY ITERATION & MULTI-APP",
    monthlyPrice: "$99",
    annualPrice: "$950",
    projects: "Up to 3 active projects / workspaces",
    deployment: "Priority worker queue (skips general line)",
    checks: "Enhanced checks + deeper diagnostic logging",
    description:
      "More room for multiple products, with priority builds and deeper diagnostics.",
  },
];

const SCOUT_FEATURE = "Unlimited conversational turns";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32">
      <div className="mx-auto block max-w-[1240px] px-2">
        <svg
          aria-hidden="true"
          className="mx-auto mb-4 h-[60px] w-[72px] text-[#b42318]"
          viewBox="0 0 60 60"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M15 9h30v42l-5-3-5 3-5-3-5 3-5-3-5 3V9Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 21h16M22 29h16m-16 8h7m5 3 3 3 6-7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="mb-2 text-center font-sans text-[42px] font-medium leading-[1.15] tracking-tight text-[#171717]">
          Plans for every way you build.
        </h2>
        <p className="mb-14 text-center font-sans text-lg text-[#555]">
          Build and iterate yourself with our AI Builder, or partner with us to ship your product.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {BUILDER_TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`flex flex-col rounded-[20px] p-7 sm:p-8 ${
                tier.name === "Pro Builder" ? "bg-[#ebebeb]" : "bg-[#fafafa]"
              }`}
            >
              <div className="mb-5">
                <div>
                  <span className="mb-3 inline-block rounded-full bg-[#087a500d] px-2.5 py-1 font-sans text-[10px] tracking-[0.12em] text-[#087a50]">
                    SELF-SERVE
                  </span>
                  <h3 className="text-left font-sans text-xl font-semibold text-[#171717]">
                    {tier.name}
                  </h3>
                  <p className="mt-1 font-sans text-[10px] tracking-[0.1em] text-[#555]">
                    {tier.audience}
                  </p>
                </div>
                <div
                  className="mt-4 flex items-baseline gap-4 whitespace-nowrap font-sans"
                  aria-label={`${tier.monthlyPrice} per month or ${tier.annualPrice} per year`}
                >
                  <span className="text-[30px] font-medium leading-none text-[#087a50]">
                    {tier.monthlyPrice}
                    <span className="ml-0.5 text-sm font-medium">mo</span>
                  </span>
                  <span aria-hidden="true" className="text-lg text-[#999]">/</span>
                  <span className="text-[30px] font-medium leading-none text-[#006987]">
                    {tier.annualPrice}
                    <span className="ml-0.5 text-sm font-medium">yr</span>
                  </span>
                </div>
              </div>

              <p className="mb-6 font-sans text-sm text-[#555]">
                {tier.description}
              </p>

              <div className="mb-3 flex-1">
                <CheckLine text="14-day free trial" />
                <CheckLine text={tier.projects} />
                <CheckLine text={SCOUT_FEATURE} />
                <CheckLine text={tier.deployment} />
                <CheckLine text={tier.checks} />
              </div>

              <Link
                href="https://builder.appnomics.dev"
                className="block rounded-lg border border-[#087a5044] bg-[#087a500d] px-4 py-[11px] text-center font-sans text-xs font-bold tracking-[0.12em] text-[#087a50] no-underline transition-colors hover:bg-[#087a501a]"
              >
                START BUILDING
              </Link>
            </article>
          ))}

          <article className="flex flex-col rounded-[20px] bg-[#fafafa] p-7 sm:p-8">
            <div className="mb-5">
              <div>
                <span className="mb-3 inline-block rounded-full bg-[#f0f0f0] px-2.5 py-1 font-sans text-[10px] tracking-[0.12em] text-[#555]">
                  ENGINEERING PARTNER
                </span>
                <h3 className="text-left font-sans text-xl font-semibold text-[#171717]">
                  Build
                </h3>
                <p className="mt-1 font-sans text-[10px] tracking-[0.1em] text-[#555]">
                  FIXED PRICE PER EPIC
                </p>
              </div>
              <div className="mt-4 flex items-baseline gap-2 whitespace-nowrap font-sans">
                <span className="text-[30px] font-medium leading-none text-[#087a50]">
                  $5K
                </span>
                <span aria-hidden="true" className="text-lg text-[#999]">/</span>
                <span className="font-sans text-sm font-medium text-[#555]">
                  per epic
                </span>
              </div>
              <p className="mt-3 max-w-[32ch] font-sans text-sm leading-relaxed text-[#555]">
                Production-ready full-stack MVP with optional ongoing run support (15% rev share).
              </p>
            </div>

            <div className="mb-2 flex-1">
              {BUILD_FEATURES.map((feature) => (
                <CheckLine key={feature} text={feature} />
              ))}
            </div>

            <p className="mb-3 rounded-xl bg-[#e8eee9] px-4 py-2 font-sans text-sm leading-relaxed text-[#444]">
              An epic is one scoped feature or product slice, typically delivered in about a week.
            </p>

            <a
              href="mailto:rupesh@appnomics.dev"
              className="block w-full rounded-lg border border-[#087a5044] bg-[#087a500d] px-4 py-[11px] text-center font-sans text-xs font-bold tracking-[0.12em] text-[#087a50] transition-colors hover:bg-[#087a501a]"
            >
              BOOK A CALL
            </a>
          </article>
        </div>

        <p className="mt-7 text-center font-sans text-[11px] text-[#555]">
          Annual plans are billed upfront · Annual pricing saves about 20% · Discovery is free ·{" "}
          <span className="text-[#171717]">We scope before you commit.</span>
        </p>
      </div>
    </section>
  );
}
