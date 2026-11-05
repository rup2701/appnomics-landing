import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "How the Appnomics Builder Works | Appnomics Docs",
  description:
    "Meet Scout and learn how to build a product website, review your brief, publish changes by chat, and work with the Appnomics Builder beta.",
};

const CONTENTS = [
  { id: "overview", label: "What Builder does" },
  { id: "scout", label: "Meet Scout" },
  { id: "first-build", label: "Your first build" },
  { id: "changes", label: "Changing your site" },
  { id: "requests", label: "Writing good requests" },
  { id: "beta", label: "Beta limits" },
  { id: "feedback", label: "Report a problem" },
];

export default function BuilderGuidePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f5f5f5] text-[#171717]">
        <header className="bg-[#edf3ef] px-6 pb-16 pt-32 sm:pb-20 sm:pt-40">
          <div className="mx-auto max-w-[1100px]">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs tracking-[0.16em] text-[#087a50]">
                APPNOMICS DOCS
              </p>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-[#555]">
                Builder beta
              </span>
            </div>
            <h1 className="mt-6 max-w-3xl text-[clamp(40px,6vw,64px)] leading-[1.08] tracking-tight">
              How the Appnomics Builder works.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#555]">
              Describe your product to Scout. Approve a brief. Get a live
              website, then keep shaping it in the same conversation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="https://builder.appnomics.dev"
                className="rounded-lg bg-[#171717] px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-[#333]"
              >
                Open Builder <span aria-hidden="true">&rarr;</span>
              </a>
              <p className="text-sm text-[#555]">
                Updated <time dateTime="2026-11-05">November 5, 2026</time>
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-[1100px] gap-12 px-6 py-14 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-16 lg:px-0 lg:py-20">
          <aside>
            <nav aria-label="On this page" className="lg:sticky lg:top-24">
              <p className="mb-4 font-mono text-xs tracking-[0.12em] text-[#555]">
                ON THIS PAGE
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col">
                {CONTENTS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-[#555] no-underline transition-colors hover:text-[#087a50] hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 space-y-16 text-base leading-7 text-[#555] [&_h2]:mb-6 [&_h2]:text-[32px] [&_h2]:leading-tight [&_h2]:tracking-tight sm:[&_h2]:text-[42px] [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-[#171717] [&_p+p]:mt-4 [&_strong]:font-medium [&_strong]:text-[#171717]">
            <section id="overview">
              <h2>What Builder does</h2>
              <p>
                The Appnomics Builder turns a short conversation into a live
                website for your product, then lets you change that site by
                asking for changes in the same chat.
              </p>
              <p>
                You describe your product to Scout, our AI guide. Scout writes
                up a brief, you approve it, and Builder creates the site, puts
                it online at its own address, and gives you a private owner
                sign-in. The site has a sign-up form that collects email
                addresses. After it is live, keep talking to Scout to change
                the page.
              </p>
            </section>

            <section id="scout">
              <h2>Meet Scout</h2>
              <p>
                Scout is the AI guide you talk to. It asks about your product,
                suggests wording, and makes changes to your site. You do not
                need to write code or design the page yourself.
              </p>
              <div className="mt-7 space-y-6">
                <div className="rounded-[20px] bg-white p-6 sm:p-8">
                  <h3>What Scout does</h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li>Asks one question at a time, in plain words, and keeps your own words wherever it can.</li>
                    <li>Drafts your headline, three short feature phrases, how-it-works steps, and closing line. You approve or edit each one.</li>
                    <li>When you skip a question, tells you what it will use instead and asks if that works.</li>
                    <li>After launch, turns your request into a short plan with a title and bullet points, makes the approved change, and shows the result.</li>
                  </ul>
                </div>
                <div className="rounded-[20px] bg-[#edf3ef] p-6 sm:p-8">
                  <h3>What Scout does not do</h3>
                  <ul className="list-disc space-y-3 pl-5">
                    <li><strong>Invent proof.</strong> Prices, quotes, logos, user counts, and security or compliance claims appear only if you provide them. Unconfirmed claims are flagged for your review.</li>
                    <li><strong>Verify your claims.</strong> The page is for a product that exists; what you tell Scout is its starting point.</li>
                    <li><strong>Open links or fetch images.</strong> Paste the text from a link. Images start as designed placeholders you can replace later.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="first-build">
              <h2>Your first build</h2>
              <p>
                A first build takes about 20 to 30 minutes in our tests, so
                allow up to 45. You can close the tab while it runs; Scout
                keeps going.
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
              <p className="mt-6 text-sm">
                During testing, new sites display a short &quot;This site is a
                demonstration&quot; notice at the top of the page.
              </p>
            </section>

            <section id="changes">
              <h2>Changing your site</h2>
              <p>
                Once your site is live, chat turns into edit mode. Type what
                you want changed and Scout shows a plan first: a short title
                and bullet points saying what it will do. Nothing happens
                until you click <strong>Make this change</strong>.
              </p>
              <p>
                If your wording leaves a choice open, such as &quot;light gray
                or a bit darker,&quot; Scout picks one and shows the exact value.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] bg-white p-6">
                  <h3>Small wording changes</h3>
                  <p>A headline, button label, subtitle, or price text.</p>
                  <p>After you confirm the plan, the change goes live as soon as it is made. You can undo it afterwards.</p>
                  <p className="text-sm"><strong>Typical time:</strong> 2 to 3 minutes.</p>
                </div>
                <div className="rounded-[20px] bg-white p-6">
                  <h3>Design changes</h3>
                  <p>Colors, spacing, layout, adding or removing sections, or changes in several places.</p>
                  <p>You get a preview first. Approve and publish, ask for changes, or remove the change.</p>
                  <p className="text-sm"><strong>Typical time:</strong> about 1.5 minutes to preview, then about 1.5 minutes to publish.</p>
                </div>
              </div>
              <p className="mt-6">
                Scout decides the size of the change. If it is not sure, you
                get the preview.
              </p>
              <div className="mt-8">
                <h3>Reviewing a design preview</h3>
                <p>You see before and after pictures of the part of the page that changed. Nothing is live yet.</p>
                <ul className="mt-4 list-disc space-y-3 pl-5">
                  <li><strong>Approve and publish</strong> puts exactly what you saw on your live site.</li>
                  <li><strong>Ask for changes</strong> lets you describe a tweak, such as &quot;a bit smaller.&quot; Scout revises it and shows a new preview. You can do this up to three times per change.</li>
                  <li><strong>Remove this change</strong> discards the change. Your live site stays as it was.</li>
                </ul>
              </div>
              <div className="mt-8">
                <h3>Undo the latest change</h3>
                <p>
                  A published change shows an <strong>Undo this change</strong>{" "}
                  button. It puts the site back as it was before that change.
                  You can undo only the latest change, and it takes about as
                  long as publishing.
                </p>
              </div>
              <div className="mt-8">
                <h3>Already done?</h3>
                <p>
                  Scout compares your request with changes already live. If
                  you ask for something already there, it says so and makes no
                  change card. If only part is new, it plans only that part.
                </p>
              </div>
            </section>

            <section id="requests">
              <h2>Writing good requests</h2>
              <p>
                Name the part of the page and say what you want it to become.
                Plain words are fine; you do not need design terms.
              </p>
              <div className="mt-7 space-y-4">
                {[
                  {
                    request: "Change the subtitle in the hero section to: Stop writing parsers. Ledgerline turns messy bank statements into clean JSON.",
                    result: "Scout plans a small wording change and publishes it as soon as it is made, after you confirm the plan.",
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
                    <blockquote className="text-lg leading-relaxed text-[#171717]">
                      &quot;{example.request}&quot;
                    </blockquote>
                    <p className="mt-4 text-sm">{example.result}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-7 list-disc space-y-3 pl-5">
                <li><strong>One topic per request.</strong> Two small requests are faster and easier to check than one large one.</li>
                <li><strong>Give exact text for exact wording.</strong> Scout uses your text as written.</li>
                <li><strong>Be specific about choices.</strong> If you say &quot;or,&quot; Scout chooses and tells you what it picked. Use &quot;Ask for changes&quot; if you disagree.</li>
                <li><strong>Supply the facts.</strong> Scout will not invent numbers, prices, names, logos, or quotes. Give them in your request and it uses them exactly.</li>
              </ul>
              <div className="mt-7 rounded-[20px] bg-[#edf3ef] p-6">
                <h3>Public page changes only</h3>
                <p>
                  Requests about owner sign-in, sign-ups, the database, or
                  payments get a short explanation and no change card. Chat
                  changes the public page, not the underlying behavior of
                  those systems.
                </p>
              </div>
            </section>

            <section id="beta">
              <h2>What to expect in beta</h2>
              <p>Builder works end to end, but it is new. These are the limits you will notice.</p>
              <ul className="mt-6 list-disc space-y-4 pl-5">
                <li><strong>Five changes per site.</strong> Failed, cancelled, or removed changes do not count. Neither do rounds of &quot;Ask for changes.&quot;</li>
                <li><strong>One change at a time.</strong> Wait while a change is being made or published. A preview waiting on your approval must be approved, revised, or removed before you start another change.</li>
                <li><strong>Sample content.</strong> New sites include sign-ups labelled as samples. Delete them in the owner area before using the site for real. Images start as designed placeholders.</li>
                <li><strong>Page changes only.</strong> Owner sign-in, the sign-up form&apos;s behavior, and the database cannot be changed through chat.</li>
                <li><strong>Build time.</strong> First builds take about 20 to 30 minutes in our tests; allow up to 45.</li>
              </ul>
              <div className="mt-8 rounded-[20px] bg-white p-6 sm:p-8">
                <h3>What we have tested</h3>
                <p>
                  We have built and changed real sites end to end, including
                  small edits, design previews, removing a change, and undoing
                  a published one. Most testing is on a small number of sites,
                  so expect rough edges, especially with unusual products.
                  The &quot;Ask for changes&quot; step on a preview has had the
                  least testing.
                </p>
              </div>
            </section>

            <section id="feedback" className="rounded-[20px] bg-[#edf3ef] p-6 sm:p-8">
              <h2>Tell us what breaks</h2>
              <p>
                Send a short report: what you typed, what you expected, and
                what happened instead. A screenshot of the chat helps.
                Include your site name and roughly when it happened so we
                can find it in the logs.
              </p>
              <a
                href="mailto:support@appnomics.dev?subject=Builder%20beta%20feedback"
                className="mt-6 inline-block rounded-lg bg-[#171717] px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-[#333]"
              >
                Email support <span aria-hidden="true">&rarr;</span>
              </a>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
