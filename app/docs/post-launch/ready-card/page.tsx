import type { Metadata } from "next";
import { docsMetadata } from "@/components/docs/metadata";
import { Callout, DocPage, Related } from "@/components/docs/DocPage";
import Shot from "@/components/docs/Shot";

export const metadata: Metadata = docsMetadata("/post-launch/ready-card", {
  title: "Your ready card | Appnomics Docs",
  description: "The card you get when your site is live: its address, your owner sign-in and the list to read before you share it.",
});

const TOC = [
  { id: "card", label: "What is on the card" },
  { id: "password", label: "Your password" },
  { id: "check", label: "Check these before you share it" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related" },
];

export default function ReadyCardPage() {
  return (
    <DocPage
      badge="Post-launch"
      title="Your ready card."
      lead="When your site is live, Scout puts a card in the chat with everything you need next: the address, your sign-in and a short list to read before you share it."
      updated="2026-11-26"
      toc={TOC}
    >
      <section id="card">
        <h2>What is on the card</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>Your site.</strong> The live address, ready to open and share.</li>
          <li><strong>Owner area.</strong> The address of your private owner area, for sites that have one: a waitlist site from the start, a restaurant site a few minutes after it goes live.</li>
          <li><strong>Sign in with.</strong> The email you built the site with.</li>
          <li><strong>Password.</strong> Your owner password, shown once.</li>
        </ul>
        <p className="mt-4">A product showcase is a website only, so its card has the address and the list, with no sign-in.</p>
        <Shot id="ready" className="mt-7" caption="The ready card with the live address and the Check these before you share it list." />
      </section>

      <section id="password">
        <h2>Your password</h2>
        <p>
          The password is shown once. Use the eye button to see it and the copy button to copy it, then save it in a password manager. When you press &quot;I&apos;ve saved it&quot;, it is removed from the page, and the card says &quot;Removed from this page&quot;.
        </p>
        <div className="mt-6">
          <Callout title="The password is not kept in Builder">
            <p>If you lose it, email us and we will set a new one.</p>
          </Callout>
        </div>
      </section>

      <section id="check">
        <h2>Check these before you share it</h2>
        <p>The list under the card is written for your site. It tells you what to read or fix before you send the address to anyone. For example:</p>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          <li><strong>Claims to confirm.</strong> Anything Scout could not confirm is quoted, so you can make sure it is true before you publish it.</li>
          <li><strong>What is missing.</strong> Sections that show a &quot;coming soon&quot; block, and things left off the page because you did not give them.</li>
          <li><strong>Wording that was drafted for you.</strong> Headlines, benefits and similar text written from your answers. Read them and change what is not right.</li>
          <li><strong>Copied content.</strong> When the site was built from your old website, read the menu and prices once against your own copy.</li>
          <li><strong>Sample data.</strong> A waitlist site starts with sample sign-ups. Delete them before real use.</li>
        </ul>
        <p className="mt-4">Nothing on the list is made up to fill a gap. If you did not give it, the site shows a placeholder or leaves it out, and the list says so.</p>
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>The owner area line is missing on a restaurant site.</strong> It is added a few minutes after the site goes live. If Scout says it could not add it, your public site is fine. Send us a note.</li>
          <li><strong>I closed the tab before saving the password.</strong> If the card still shows it, save it now. If it is gone, email us and we will set a new one.</li>
        </ul>
      </section>

      <Related
        items={[
          { label: "Making changes", href: "/post-launch/changes", text: "How a change reaches your live site, and undo." },
          { label: "Restaurant site", href: "/recipes/restaurant-site", text: "The owner area, table requests and menu spreadsheets." },
          { label: "Waitlist site", href: "/recipes/waitlist-site", text: "Reading your sign-ups in the owner area." },
          { label: "Archive and restore", href: "/post-launch/archive", text: "Put a project away without taking its site down." },
        ]}
      />
    </DocPage>
  );
}
