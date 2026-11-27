import type { Metadata } from "next";
import { docsMetadata } from "@/components/docs/metadata";
import { Callout, DocPage, Prompt, Related } from "@/components/docs/DocPage";
import { docsHref } from "@/components/docs/urls";

export const metadata: Metadata = docsMetadata("/recipes/waitlist-site", {
  title: "Waitlist site | Appnomics Docs",
  description: "Test whether an idea has legs with a one-page waitlist site, built from a short conversation with Scout.",
});

const TOC = [
  { id: "best-for", label: "Best for" },
  { id: "prompt", label: "Start here" },
  { id: "expect", label: "What to expect" },
  { id: "owner-area", label: "Your sign-ups" },
  { id: "examples", label: "Live examples" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related" },
];

export default function WaitlistSitePage() {
  return (
    <DocPage
      badge="Use case"
      title="Waitlist site."
      lead="A one-page website that tests an idea by collecting sign-ups. Everything on the page serves one question: does this idea have legs?"
      updated="2026-11-26"
      toc={TOC}
    >
      <section id="best-for">
        <h2>Best for</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>An idea or a product that is not ready yet, where you want to see who is interested first.</li>
          <li>A first launch page with a product overview, features and a sign-up form.</li>
        </ul>
      </section>

      <section id="prompt">
        <h2>Start here</h2>
        <p>On the Builder home page, choose Website, then the Waitlist site template. It fills in this sentence for you:</p>
        <div className="mt-6">
          <Prompt>A waitlist website for ___, with a product overview, features and a signup form.</Prompt>
        </div>
        <p className="mt-6">
          Replace the blank with your product&apos;s name and press Let&apos;s go. Scout takes it as your first answer and goes on to ask what the product does and who it is for. Answer in your own words, and say &quot;use your best guess&quot; for anything you would rather skip.
        </p>
      </section>

      <section id="expect">
        <h2>What to expect</h2>
        <p>
          A first build takes about 20 to 30 minutes in our tests; allow up to 45. You can close the tab while it runs. When it is live you get the address of your site, your private owner sign-in, and a short list titled &quot;Check these before you share it.&quot;
        </p>
        <div className="mt-6">
          <Callout title="Afterwards">
            <p>Keep chatting with Scout to change the page: wording, colours, spacing, sections. See <a className="text-[#087a50] underline underline-offset-4 hover:no-underline" href={docsHref("/post-launch/changes")}>Making changes</a> for how a change goes live.</p>
          </Callout>
        </div>
      </section>

      <section id="owner-area">
        <h2>Your sign-ups</h2>
        <p>
          Your site comes with a private owner area where you read the sign-ups. The sign-in is on the card with your live address: the owner area address (your site&apos;s own address followed by /admin/sign-in), the email you built with and a password. The password is shown once, so save it in a password manager before you press &quot;I&apos;ve saved it&quot;.
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          <li><strong>The numbers first.</strong> The total, sign-ups today, and progress toward your goal if you set one.</li>
          <li><strong>What people answered.</strong> For each question with choices, how many people picked each option.</li>
          <li><strong>Where they came from.</strong> Add ?src= to the links you share, for example ?src=linkedin, and the owner area counts sign-ups by source.</li>
          <li><strong>The list.</strong> Newest first, with email, answers, source and date. Search by email, delete a sign-up, or download them all as a CSV file.</li>
          <li><strong>The words on the page.</strong> You can edit the headline, benefits, form questions and thank-you message there too, and show or hide blocks.</li>
        </ul>
        <div className="mt-6">
          <Callout title="Delete the samples first">
            <p>New sites start with sample sign-ups, labelled as samples, so you can see how the owner area looks. Delete them in one go before you share the site for real.</p>
          </Callout>
        </div>
        <p className="mt-6">
          Too many wrong passwords in a short time lock the sign-in for ten minutes. If you lose the password, email us and we will set a new one.
        </p>
      </section>

      <section id="examples">
        <h2>Live examples</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><a className="text-[#087a50] underline underline-offset-4 hover:no-underline" href="https://ksandra.appnomics.live/" target="_blank" rel="noopener noreferrer">Ksandra</a></li>
          <li><a className="text-[#087a50] underline underline-offset-4 hover:no-underline" href="https://tidewell-ring.appnomics.live/" target="_blank" rel="noopener noreferrer">Tidewell Ring</a></li>
          <li><a className="text-[#087a50] underline underline-offset-4 hover:no-underline" href="https://dispatchos-waitlist.appnomics.live" target="_blank" rel="noopener noreferrer">DispatchOS</a></li>
        </ul>
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>Scout says the site will be a waitlist page without pricing.</strong> That is the waitlist site doing its job. If you want pricing, how it works and an FAQ, use the product showcase.</li>
          <li><strong>Scout will not invent proof.</strong> Customer counts, quotes, logos and security claims appear only if you give them. Claims you have not confirmed are flagged for you to check.</li>
          <li><strong>Something looks wrong.</strong> Tell us what you typed, what you expected and what happened. A screenshot of the chat helps.</li>
        </ul>
      </section>

      <Related
        items={[
          { label: "Product showcase", href: "/recipes/product-showcase", text: "A site for a product that already exists." },
          { label: "Writing good requests", href: "/scout/requests", text: "Plain-words requests that Scout can act on." },
          { label: "Your ready card", href: "/post-launch/ready-card", text: "Your address, your sign-in and the list to read before you share." },
        ]}
      />
    </DocPage>
  );
}
