import type { Metadata } from "next";
import { Callout, DocPage, Related } from "@/components/docs/DocPage";

export const metadata: Metadata = {
  title: "Self-serve plans | Appnomics Docs",
  description: "Builder and Pro Builder: the self-serve plans for the Appnomics Builder.",
};

const TOC = [
  { id: "plans", label: "The plans" },
  { id: "beta", label: "During the beta" },
  { id: "related", label: "Related" },
];

const PLANS = [
  {
    name: "Builder",
    tagline: "STARTER PROFESSIONAL",
    month: "$49",
    year: "$470",
    text: "A focused workspace to build and iterate on one product with Scout.",
    features: ["14-day free trial", "1 active live project / workspace", "Unlimited conversational turns", "Standard preview & deploy queue", "Standard automated checks"],
    highlight: false,
  },
  {
    name: "Pro Builder",
    tagline: "HEAVY ITERATION & MULTI-APP",
    month: "$99",
    year: "$950",
    text: "More room for multiple products, with priority builds and deeper diagnostics.",
    features: ["14-day free trial", "Up to 3 active projects / workspaces", "Unlimited conversational turns", "Priority worker queue (skips general line)", "Enhanced checks + deeper diagnostic logging"],
    highlight: true,
  },
];

export default function SelfServePlansPage() {
  return (
    <DocPage
      badge="Plans"
      title="Self-serve plans."
      lead="Two plans for building and changing your own sites with Scout."
      updated="2026-11-08"
      toc={TOC}
    >
      <section id="plans">
        <h2>The plans</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`rounded-[20px] p-6 sm:p-8 ${plan.highlight ? "bg-[#edf3ef]" : "bg-white"}`}>
              <p className="font-mono text-xs tracking-[0.12em] text-[#087a50]">SELF-SERVE</p>
              <h3 className="mt-3 text-2xl!">{plan.name}</h3>
              <p className="mt-1 font-mono text-xs tracking-[0.1em]">{plan.tagline}</p>
              <p className="mt-5 text-3xl text-[#087a50]">
                {plan.month}<span className="text-base"> / mo</span>
                <span className="mx-2 text-[#999]">/</span>
                {plan.year}<span className="text-base"> / yr</span>
              </p>
              <p className="mt-4">{plan.text}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm">Paying yearly is 20% less than paying monthly.</p>
      </section>

      <section id="beta">
        <h2>During the beta</h2>
        <Callout title="What is live today">
          <p>
            Builder is in beta. Testers use an access code, and each site can take five changes. The free trial, project limits and priority queue start with paid plans.
          </p>
        </Callout>
      </section>

      <Related
        items={[
          { label: "Engineering partner", href: "/docs/plans/engineering-partner", text: "A custom build at a fixed price per epic." },
          { label: "How the builder works", href: "/docs/builder", text: "What Builder does, and its beta limits." },
        ]}
      />
    </DocPage>
  );
}
