import type { Metadata } from "next";
import { DocPage, Related } from "@/components/docs/DocPage";
import Shot from "@/components/docs/Shot";

export const metadata: Metadata = {
  title: "Previews and undo | Appnomics Docs",
  description: "How a change you ask Scout for reaches your live site: the plan, the preview, the checks after approval and undo.",
};

const TOC = [
  { id: "plan", label: "The plan" },
  { id: "size", label: "Small and design changes" },
  { id: "preview", label: "Reviewing a preview" },
  { id: "approve", label: "After you approve" },
  { id: "undo", label: "Undo the latest change" },
  { id: "already", label: "Already done?" },
  { id: "related", label: "Related" },
];

export default function ChangesPage() {
  return (
    <DocPage
      badge="Scout"
      title="Previews and undo."
      lead="You see the result first. After you approve it, the change is checked and made permanent in the background, and you can keep working."
      updated="2026-11-08"
      toc={TOC}
    >
      <section id="plan">
        <h2>The plan</h2>
        <p>
          Once your site is live, chat turns into edit mode. Type what you want changed and Scout shows a plan first: a short title and bullet points saying what it will do. Nothing happens until you click <strong>Make this change</strong>.
        </p>
        <Shot id="change" className="mt-7" caption="Scout's plan for a change. Nothing happens until you click Make this change." />
      </section>

      <section id="size">
        <h2>Small and design changes</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[20px] bg-white p-6">
            <h3>Small wording changes</h3>
            <p>A headline, button label, subtitle, or price text.</p>
            <p>After you confirm the plan, the change is made, checked and goes live without a preview. You can undo it afterwards.</p>
            <p className="text-sm"><strong>Typical time:</strong> about 2 minutes, in the background.</p>
          </div>
          <div className="rounded-[20px] bg-white p-6">
            <h3>Design changes</h3>
            <p>Colors, spacing, layout, adding or removing sections, or changes in several places.</p>
            <p>You get a preview first. Approve and publish, ask for changes, or remove the change.</p>
            <p className="text-sm"><strong>Typical time:</strong> under a minute to the preview, then about 2 minutes to check it and make it permanent, in the background.</p>
          </div>
        </div>
        <p className="mt-6">Scout decides the size of the change. If it is not sure, you get the preview.</p>
      </section>

      <section id="preview">
        <h2>Reviewing a preview</h2>
        <p>You see before and after pictures of the part of the page that changed. Nothing is live yet.</p>
        <Shot id="preview" className="mt-5" caption="A design preview. Approve it, ask for changes, or remove it." />
        <ul className="mt-5 list-disc space-y-3 pl-5">
          <li><strong>Approve and publish</strong> puts exactly what you saw on your live site.</li>
          <li><strong>Ask for changes</strong> lets you describe a tweak, such as &quot;a bit smaller.&quot; Scout revises it and shows a new preview. You can do this up to three times per change.</li>
          <li><strong>Remove this change</strong> discards the change. Your live site stays as it was.</li>
        </ul>
      </section>

      <section id="approve">
        <h2>After you approve</h2>
        <p>
          The preview comes first so you are never kept waiting. Once you approve, the change is checked and then made permanent on your live site, in the background. You can keep working, ask Scout for the next change, or close the tab. Scout tells you in the chat when it is done, or if anything needs your attention.
        </p>
        <Shot id="publishing" className="mt-5" caption="Checks passed. The change is being made permanent while the next request waits its turn." />
        <ul className="mt-5 list-disc space-y-3 pl-5">
          <li><strong>If a check finds a problem,</strong> Scout tries to fix it once and checks again. If it still fails, the change is not applied and your live site stays exactly as it was. You are told what happened.</li>
          <li><strong>If something goes wrong on our side,</strong> you are told plainly that it is on us, not on your request, and your live site stays as it was. We are alerted and look into it. You can try the change again.</li>
        </ul>
      </section>

      <section id="undo">
        <h2>Undo the latest change</h2>
        <p>
          A published change shows an <strong>Undo this change</strong> button. It puts the site back as it was before that change. You can undo only the latest change, and it takes about as long as publishing.
        </p>
        <Shot id="live" className="mt-5" caption="A live change, with the link to your site and the Undo button." />
      </section>

      <section id="already">
        <h2>Already done?</h2>
        <p>
          Scout compares your request with changes already live. If you ask for something already there, it says so and makes no change card. If only part is new, it plans only that part.
        </p>
      </section>

      <Related
        items={[
          { label: "Writing good requests", href: "/docs/scout/requests", text: "Examples of requests Scout can act on." },
          { label: "How the builder works", href: "/docs/builder", text: "Beta limits and how to report a problem." },
        ]}
      />
    </DocPage>
  );
}
