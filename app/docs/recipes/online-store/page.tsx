import type { Metadata } from "next";
import { DocPage, Prompt, Related } from "@/components/docs/DocPage";

export const metadata: Metadata = {
  title: "Online store | Appnomics Docs",
  description: "Describe your shop and Appnomics builds an online store for it, starting from a tested foundation.",
};

const TOC = [
  { id: "best-for", label: "Best for" },
  { id: "prompt", label: "Start here" },
  { id: "examples", label: "Live examples" },
  { id: "related", label: "Related" },
];

export default function OnlineStorePage() {
  return (
    <DocPage
      badge="Recipe"
      title="Online store."
      lead="Describe the shop you want to launch, and our agents build it, starting from a tested foundation."
      updated="2026-11-08"
      toc={TOC}
    >
      <section id="best-for">
        <h2>Best for</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>A small shop selling handmade goods, fashion or similar products.</li>
          <li>A store you want to see live quickly, then adjust.</li>
        </ul>
      </section>

      <section id="prompt">
        <h2>Start here</h2>
        <p>On the Builder home page, choose Online store. You can start from a template or describe your own. For example:</p>
        <div className="mt-6 space-y-4">
          <Prompt>A handmade ceramics store with mugs, bowls and custom engraving</Prompt>
          <Prompt>A boutique clothing shop with seasonal drops and local pickup</Prompt>
        </div>
      </section>

      <section id="examples">
        <h2>Live examples</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><a className="text-[#087a50] underline underline-offset-4 hover:no-underline" href="https://fernhollow.store" target="_blank" rel="noopener noreferrer">Fernhollow</a>, handmade goods</li>
          <li><a className="text-[#087a50] underline underline-offset-4 hover:no-underline" href="https://aldervale.appnomics.live" target="_blank" rel="noopener noreferrer">Alder &amp; Vale</a>, designer fashion</li>
        </ul>
      </section>

      <Related
        items={[
          { label: "How the builder works", href: "/docs/builder", text: "From first question to live site." },
          { label: "Engineering partner", href: "/docs/plans/engineering-partner", text: "For a store that needs custom features." },
        ]}
      />
    </DocPage>
  );
}
