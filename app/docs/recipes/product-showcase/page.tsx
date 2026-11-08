import type { Metadata } from "next";
import { Callout, DocPage, Prompt, Related } from "@/components/docs/DocPage";
import Shot from "@/components/docs/Shot";

export const metadata: Metadata = {
  title: "Product showcase | Appnomics Docs",
  description: "A product website with features, pricing, how it works and an FAQ, built from a short conversation with Scout.",
};

const TOC = [
  { id: "best-for", label: "Best for" },
  { id: "prompt", label: "Start here" },
  { id: "interview", label: "The interview" },
  { id: "expect", label: "What to expect" },
  { id: "examples", label: "Live example" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related" },
];

export default function ProductShowcasePage() {
  return (
    <DocPage
      badge="Recipe · opening soon"
      title="Product showcase."
      lead="A website for a product that exists: what it does, how it works, what it costs and answers to common questions."
      updated="2026-11-08"
      toc={TOC}
    >
      <section id="best-for">
        <h2>Best for</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>A software product that needs a marketing site with features, pricing, how it works and an FAQ.</li>
          <li>A site you can keep refining by chatting with Scout.</li>
        </ul>
        <p className="mt-6">
          It is a website, not an app. It has no sign-up form and no owner area. If you want to collect sign-ups to test an idea, use the waitlist site instead.
        </p>
      </section>

      <section id="prompt">
        <h2>Start here</h2>
        <p>On the Builder home page, choose Website, then the Product showcase template. It fills in this sentence for you:</p>
        <div className="mt-6">
          <Prompt>A product website for ___, with features, pricing and how it works.</Prompt>
        </div>
        <p className="mt-6">Replace the blank with your product&apos;s name and press Let&apos;s go.</p>
      </section>

      <section id="interview">
        <h2>The interview</h2>
        <p>Scout keeps it short and focused on your brand. Expect questions in this order of ideas:</p>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          <li><strong>What it is, and for whom.</strong> Scout asks who the product is for before it asks about pricing.</li>
          <li><strong>The page plan.</strong> Scout shows the sections as a short list. Switch the optional ones on or off.</li>
          <li><strong>Tone and colour.</strong> Pick a look such as dark, blue or light.</li>
          <li><strong>Pricing.</strong> Scout asks how many plans, how you bill, and the plan names and prices. If you skip it, Scout drafts two plans, Starter and Growth, and tells you so.</li>
        </ul>
        <Shot id="plan" className="mt-7" caption="The page plan: sections you can switch on or off." />
        <p className="mt-6">
          Testimonials get clearly marked placeholder text for you to review. Scout does not invent customer quotes, logos or security claims.
        </p>
      </section>

      <section id="expect">
        <h2>What to expect</h2>
        <p>
          A first build takes about 20 to 30 minutes in our tests; allow up to 45. When it is live you get the address of your site and a short list titled &quot;Check these before you share it.&quot; The footer includes product, company, resources, privacy and terms links; check that each one goes where you want.
        </p>
        <div className="mt-6">
          <Callout title="Then refine it">
            <p>Ask Scout for changes in plain words, for example a different background colour on one card. See Previews and undo.</p>
          </Callout>
        </div>
      </section>

      <section id="examples">
        <h2>Live example</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><a className="text-[#087a50] underline underline-offset-4 hover:no-underline" href="https://dispatchos-9901.appnomics.live" target="_blank" rel="noopener noreferrer">DispatchOS</a></li>
        </ul>
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>You get the waitlist interview instead.</strong> This recipe is opening in stages. If Scout opens with &quot;test whether your idea has legs,&quot; you are in the waitlist recipe.</li>
          <li><strong>Placeholder text and sample pricing.</strong> They are there so the page looks complete. Replace them with your own through Scout before you share the site.</li>
        </ul>
      </section>

      <Related
        items={[
          { label: "Waitlist site", href: "/docs/recipes/waitlist-site", text: "Collect sign-ups to test an idea." },
          { label: "Previews and undo", href: "/docs/scout/changes", text: "How changes to the live site work." },
        ]}
      />
    </DocPage>
  );
}
