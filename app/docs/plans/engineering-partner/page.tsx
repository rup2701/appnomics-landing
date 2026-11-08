import type { Metadata } from "next";
import { DocPage, Related } from "@/components/docs/DocPage";

export const metadata: Metadata = {
  title: "Engineering partner | Appnomics Docs",
  description: "Build: a production-ready full-stack MVP from Appnomics at a fixed price per epic, with full code ownership and a handover package.",
};

const TOC = [
  { id: "what", label: "What it is" },
  { id: "includes", label: "What is included" },
  { id: "epic", label: "What is an epic?" },
  { id: "talk", label: "Talk to us" },
  { id: "related", label: "Related" },
];

export default function EngineeringPartnerPage() {
  return (
    <DocPage
      badge="Plans"
      title="Engineering partner."
      lead="Our original model: we build your product for a fixed price per epic, and you own the code."
      updated="2026-11-08"
      toc={TOC}
    >
      <section id="what">
        <h2>What it is</h2>
        <div className="rounded-[20px] bg-white p-6 sm:p-8">
          <p className="font-mono text-xs tracking-[0.12em] text-[#555]">ENGINEERING PARTNER</p>
          <h3 className="mt-3 text-2xl!">Build</h3>
          <p className="mt-1 font-mono text-xs tracking-[0.1em]">FIXED PRICE PER EPIC</p>
          <p className="mt-5 text-3xl text-[#087a50]">$5K <span className="text-base text-[#555]">/ per epic</span></p>
          <p className="mt-4">Production-ready full-stack MVP with optional ongoing run support (15% rev share).</p>
        </div>
      </section>

      <section id="includes">
        <h2>What is included</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>1 epic per week (avg)</li>
          <li>Studio OS dashboard access</li>
          <li>Weekly async progress updates</li>
          <li>Full codebase + repo ownership</li>
          <li>The Handover package on completion</li>
          <li>90-day QA warranty on delivered epics</li>
        </ul>
      </section>

      <section id="epic">
        <h2>What is an epic?</h2>
        <p>An epic is one scoped feature or product slice, typically delivered in about a week.</p>
      </section>

      <section id="talk" className="rounded-[20px] bg-[#edf3ef] p-6 sm:p-8">
        <h2>Talk to us</h2>
        <p>Tell us what you want to build and we will scope the first epics with you.</p>
        <a
          href="mailto:support@appnomics.dev?subject=Engineering%20partner"
          className="mt-6 inline-block rounded-lg bg-[#171717] px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-[#333]"
        >
          Book a call <span aria-hidden="true">&rarr;</span>
        </a>
      </section>

      <Related
        items={[
          { label: "Self-serve plans", href: "/docs/plans/self-serve", text: "Build and change your own sites with Scout." },
          { label: "Creator and membership app", href: "/docs/recipes/creator-app", text: "Our first app recipe, coming soon." },
        ]}
      />
    </DocPage>
  );
}
