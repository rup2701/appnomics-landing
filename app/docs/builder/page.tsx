import type { Metadata } from "next";
import { DocPage, Related } from "@/components/docs/DocPage";
import Shot from "@/components/docs/Shot";

export const metadata: Metadata = {
  title: "How the Appnomics Builder Works | Appnomics Docs",
  description: "Meet Scout, build a product website, review your brief and change the live site by chat. How the Appnomics Builder beta works.",
};

const TOC = [
  { id: "overview", label: "What Builder does" },
  { id: "first-build", label: "Your first build" },
  { id: "beta", label: "Beta limits" },
  { id: "feedback", label: "Report a problem" },
  { id: "related", label: "Related" },
];

export default function BuilderGuidePage() {
  return (
    <DocPage
      badge="Builder beta"
      title="How the Appnomics Builder works."
      lead="Describe your product to Scout. Approve a brief. Get a live website, then keep shaping it in the same conversation."
      updated="2026-11-08"
      toc={TOC}
    >
      <section id="overview">
        <h2>What Builder does</h2>
        <p>
          The Appnomics Builder turns a short conversation into a live website for your product, then lets you change that site by asking for changes in the same chat.
        </p>
        <p>
          You describe your product to Scout, our AI guide. Scout writes up a brief, you approve it, and Builder creates the site, puts it online at its own address, and gives you a private owner sign-in. The site has a sign-up form that collects email addresses. After it is live, keep talking to Scout to change the page.
        </p>
        <a
          href="https://builder.appnomics.dev"
          className="mt-6 inline-block rounded-lg bg-[#171717] px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-[#333]"
        >
          Open Builder <span aria-hidden="true">&rarr;</span>
        </a>
      </section>

      <section id="first-build">
        <h2>Your first build</h2>
        <p>
          A first build takes about 20 to 30 minutes in our tests, so allow up to 45. You can close the tab while it runs; Scout keeps going.
        </p>
        <ol className="mt-7 space-y-4">
          {[
            {
              title: "Interview",
              text: 'Scout asks about your product, who it is for, what you want visitors to do, and the look you want. Answer in your own words. Say "use your best guess" for any question you would rather skip.',
            },
            {
              title: "Brief",
              text: "Read the brief in the panel next to the chat. Drafted wording and unconfirmed claims are flagged. Approve it or change a line.",
            },
            {
              title: "Build",
              text: 'Click "Build my site". Builder writes the site, checks that it works, and polishes the design.',
            },
            {
              title: "Live",
              text: 'Get your live site address, owner sign-in, and a list titled "Check these before you share it": drafted wording, unconfirmed claims, and placeholder images.',
            },
          ].map((step, index) => (
            <li key={step.title} className="flex gap-4 rounded-[20px] bg-white p-6 sm:gap-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf3ef] font-mono text-sm text-[#087a50]" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          <Shot id="plan" caption="The interview, with the page plan to switch sections on or off." />
          <Shot id="brief" caption="The brief, with drafted wording and unconfirmed claims flagged." />
          <Shot id="build" caption="The build in progress. You can close the tab." />
          <Shot id="ready" caption="Your live address and the list to check before you share it." />
        </div>
        <p className="mt-6 text-sm">
          During testing, new sites display a short &quot;This site is a demonstration&quot; notice at the top of the page.
        </p>
      </section>

      <section id="beta">
        <h2>What to expect in beta</h2>
        <p>Builder works end to end, but it is new. These are the limits you will notice.</p>
        <ul className="mt-6 list-disc space-y-4 pl-5">
          <li><strong>Five changes per site.</strong> Failed, cancelled, or removed changes do not count. Neither do rounds of &quot;Ask for changes.&quot;</li>
          <li><strong>One change at a time.</strong> While a change is being made, wait for its preview. Once you approve it, you can ask for the next change while the first one is checked and made permanent. A preview waiting on your approval must be approved, revised, or removed before you start another change.</li>
          <li><strong>Sample content.</strong> New sites include sign-ups labelled as samples. Delete them in the owner area before using the site for real. Images start as designed placeholders.</li>
          <li><strong>Page changes only.</strong> Owner sign-in, the sign-up form&apos;s behavior, and the database cannot be changed through chat.</li>
          <li><strong>Build time.</strong> First builds take about 20 to 30 minutes in our tests; allow up to 45.</li>
        </ul>
        <div className="mt-8 rounded-[20px] bg-white p-6 sm:p-8">
          <h3>What we have tested</h3>
          <p>
            We have built and changed real sites end to end, including small edits, design previews, removing a change, and undoing a published one. Most testing is on a small number of sites, so expect rough edges, especially with unusual products. The &quot;Ask for changes&quot; step on a preview has had the least testing, and so have the automatic fix and the failure messages after approval.
          </p>
        </div>
      </section>

      <section id="feedback" className="rounded-[20px] bg-[#edf3ef] p-6 sm:p-8">
        <h2>Tell us what breaks</h2>
        <p>
          Send a short report: what you typed, what you expected, and what happened instead. A screenshot of the chat helps. Include your site name and roughly when it happened so we can find it in the logs.
        </p>
        <a
          href="mailto:support@appnomics.dev?subject=Builder%20beta%20feedback"
          className="mt-6 inline-block rounded-lg bg-[#171717] px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-[#333]"
        >
          Email support <span aria-hidden="true">&rarr;</span>
        </a>
      </section>

      <Related
        items={[
          { label: "Meet Scout", href: "/docs/scout", text: "What Scout does, and what it will not do." },
          { label: "Previews and undo", href: "/docs/scout/changes", text: "How a change goes from your request to your live site." },
          { label: "Waitlist site", href: "/docs/recipes/waitlist-site", text: "Test an idea with a sign-up page." },
          { label: "Product showcase", href: "/docs/recipes/product-showcase", text: "A website for a product that exists." },
        ]}
      />
    </DocPage>
  );
}
