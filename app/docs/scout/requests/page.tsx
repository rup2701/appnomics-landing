import type { Metadata } from "next";
import { Callout, DocPage, Related } from "@/components/docs/DocPage";

export const metadata: Metadata = {
  title: "Writing good requests | Appnomics Docs",
  description: "How to ask Scout for changes to your live site, with examples of requests and what Scout does with them.",
};

const TOC = [
  { id: "how", label: "The basics" },
  { id: "examples", label: "Examples" },
  { id: "tips", label: "Tips" },
  { id: "limits", label: "What Scout will not change" },
  { id: "related", label: "Related" },
];

export default function RequestsPage() {
  return (
    <DocPage
      badge="Scout"
      title="Writing good requests."
      lead="Name the part of the page and say what you want it to become. Plain words are fine."
      updated="2026-11-08"
      toc={TOC}
    >
      <section id="how">
        <h2>The basics</h2>
        <p>
          You do not need design terms. Say which part of the page and what you want. If your wording leaves a choice open, such as &quot;light gray or a bit darker,&quot; Scout picks one and shows you the exact value.
        </p>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <div className="space-y-4">
          {[
            {
              request: "Change the subtitle in the hero section to: Stop writing parsers. Ledgerline turns messy bank statements into clean JSON.",
              result: "Scout plans a small wording change, and after you confirm the plan it is checked and published without a preview.",
            },
            {
              request: "Make the step number circles in How it works light gray, with dark readable numbers.",
              result: "Scout picks an exact gray and a text color with enough contrast, shows a preview, and waits for your approval.",
            },
            {
              request: "Change the three-card layout in How it works into a bento layout, with a more detailed JSON in step 3.",
              result: "Scout plans a design change and shows before and after pictures.",
            },
          ].map((example) => (
            <div key={example.request} className="rounded-[20px] bg-white p-6 sm:p-8">
              <p className="mb-3 font-mono text-xs tracking-[0.1em] text-[#087a50]">YOU ASK</p>
              <blockquote className="text-lg leading-relaxed text-[#171717]">&quot;{example.request}&quot;</blockquote>
              <p className="mt-4 text-sm">{example.result}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tips">
        <h2>Tips</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>One topic per request.</strong> Two small requests are faster and easier to check than one large one.</li>
          <li><strong>Give exact text for exact wording.</strong> Scout uses your text as written.</li>
          <li><strong>Be specific about choices.</strong> If you say &quot;or,&quot; Scout chooses and tells you what it picked. Use &quot;Ask for changes&quot; if you disagree.</li>
          <li><strong>Supply the facts.</strong> Scout will not invent numbers, prices, names, logos, or quotes. Give them in your request and it uses them exactly.</li>
        </ul>
      </section>

      <section id="limits">
        <h2>What Scout will not change</h2>
        <Callout title="Public page changes only">
          <p>
            Requests about owner sign-in, sign-ups, the database, or payments get a short explanation and no change card. Chat changes the public page, not the underlying behavior of those systems.
          </p>
        </Callout>
      </section>

      <Related
        items={[
          { label: "Previews and undo", href: "/docs/scout/changes", text: "What happens after you confirm a request." },
          { label: "Meet Scout", href: "/docs/scout", text: "What Scout does and does not do." },
        ]}
      />
    </DocPage>
  );
}
