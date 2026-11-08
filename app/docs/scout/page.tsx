import type { Metadata } from "next";
import { DocPage, Related } from "@/components/docs/DocPage";
import Shot from "@/components/docs/Shot";

export const metadata: Metadata = {
  title: "Meet Scout | Appnomics Docs",
  description: "Scout is the AI guide in Appnomics Builder. What it does, and what it will not do.",
};

const TOC = [
  { id: "overview", label: "What Scout is" },
  { id: "does", label: "What Scout does" },
  { id: "does-not", label: "What Scout does not do" },
  { id: "related", label: "Related" },
];

export default function ScoutPage() {
  return (
    <DocPage
      badge="Builder beta"
      title="Meet Scout."
      lead="Scout is the AI guide you talk to. It asks about your product, suggests wording and makes every change to your site."
      updated="2026-11-08"
      toc={TOC}
    >
      <section id="overview">
        <h2>What Scout is</h2>
        <p>
          You never have to write code or design anything. Scout asks one question at a time, in plain words, and keeps your own words wherever it can.
        </p>
        <Shot id="scout" className="mt-7" caption="Scout opens the conversation and asks one question at a time." />
      </section>

      <section id="does">
        <h2>What Scout does</h2>
        <div className="rounded-[20px] bg-white p-6 sm:p-8">
          <ul className="list-disc space-y-3 pl-5">
            <li>Asks one question at a time, in plain words, and keeps your own words wherever it can.</li>
            <li>Drafts your headline, three short feature phrases, how-it-works steps, and closing line. You approve or edit each one.</li>
            <li>When you skip a question, tells you what it will use instead and asks if that works.</li>
            <li>After launch, turns your request into a short plan with a title and bullet points, makes the approved change, and shows the result.</li>
          </ul>
        </div>
      </section>

      <section id="does-not">
        <h2>What Scout does not do</h2>
        <div className="rounded-[20px] bg-[#edf3ef] p-6 sm:p-8">
          <ul className="list-disc space-y-3 pl-5">
            <li><strong>Invent proof.</strong> Prices, quotes, logos, user counts, and security or compliance claims appear only if you provide them. Unconfirmed claims are flagged for your review.</li>
            <li><strong>Verify your claims.</strong> The page is for a product that exists; what you tell Scout is its starting point.</li>
            <li><strong>Open links or fetch images.</strong> Paste the text from a link. Images start as designed placeholders you can replace later.</li>
            <li><strong>Change anything but the public page.</strong> Requests about owner sign-in, sign-ups, the database or payments get a short explanation and no change card.</li>
          </ul>
        </div>
      </section>

      <Related
        items={[
          { label: "Writing good requests", href: "/docs/scout/requests", text: "Examples of requests Scout can act on." },
          { label: "Previews and undo", href: "/docs/scout/changes", text: "How a change reaches your live site." },
        ]}
      />
    </DocPage>
  );
}
