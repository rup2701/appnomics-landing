import type { Metadata } from "next";
import { Callout, DocPage, Prompt, Related } from "@/components/docs/DocPage";
import Shot from "@/components/docs/Shot";

export const metadata: Metadata = {
  title: "Restaurant site | Appnomics Docs",
  description: "A website for a restaurant with a home page, a menu page and a story page, built from a conversation with Scout, with an owner area for your menu and table requests.",
};

const TOC = [
  { id: "best-for", label: "Best for" },
  { id: "prompt", label: "Start here" },
  { id: "expect", label: "What to expect" },
  { id: "placeholders", label: "Coming soon blocks" },
  { id: "after", label: "After it is live" },
  { id: "not-yet", label: "Not yet" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related" },
];

export default function RestaurantSitePage() {
  return (
    <DocPage
      badge="Recipe"
      title="Restaurant site."
      lead="A website for a restaurant: a home page, a full menu page and your story, with a table request form and an owner area where you keep the menu up to date."
      updated="2026-11-14"
      toc={TOC}
    >
      <section id="best-for">
        <h2>Best for</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li>A neighbourhood restaurant, cafe or takeaway that wants a clean site people can read on a phone.</li>
          <li>A restaurant that has a website already and wants a fresh one, or has none at all.</li>
        </ul>
      </section>

      <section id="prompt">
        <h2>Start here</h2>
        <p>On the Builder home page, choose Website, then the Restaurant site template. Scout opens the conversation. You can start in one of two ways:</p>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          <li><strong>You have a website.</strong> Give Scout the address. It reads the menu, pictures, hours and story from it and shows you what it found.</li>
          <li><strong>You do not.</strong> Scout asks for the details one question at a time and you type them in.</li>
        </ul>
        <div className="mt-6">
          <Prompt>A website for my restaurant, ___, in ___.</Prompt>
        </div>
        <p className="mt-6">
          Say &quot;skip&quot; or &quot;use your best guess&quot; for anything you would rather leave for later. Scout shows the plan, a card listing the sections your page will have, before it builds anything.
        </p>
        <Shot id="restaurantPlan" className="mt-7" caption="The plan card lists the sections. Sections you have not filled in are marked as placeholders." />
      </section>

      <section id="expect">
        <h2>What to expect</h2>
        <p>
          A first build usually takes several minutes. You can close the tab while it runs. When the site is live you get its address and a short list titled &quot;Check these before you share it.&quot;
        </p>
        <p>
          The site has three pages: the home page, a full menu page and a story page. Prices show as you typed them, and you can hide them all with one switch. Scout never invents prices, hours, an address, a phone number, your story or reviews.
        </p>
        <p>
          If you have a menu in a spreadsheet, attach it in the chat before the build. See Menu from a spreadsheet.
        </p>
        <Shot id="restaurantReady" className="mt-7" caption="The ready card with your live address and the list to read before you share the site." />
      </section>

      <section id="placeholders">
        <h2>Coming soon blocks</h2>
        <p>
          Every section the template promises is on the page, whether or not you gave Scout the content yet. A section without content shows a clearly labelled placeholder instead of disappearing or being made up:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          <li><strong>Our story, menu, reviews and catering</strong> show a &quot;coming soon&quot; block.</li>
          <li><strong>Signature dishes</strong> show four cards. Real dishes come first, and the rest read Dish 1 to Dish 4.</li>
          <li><strong>Pictures</strong> show numbered Photo tiles.</li>
          <li><strong>Opening hours</strong> in the footer read &quot;Coming soon&quot;.</li>
        </ul>
        <p className="mt-4">
          The &quot;Check these before you share it&quot; list tells you which sections are placeholders. Fill them in before you share the site widely.
        </p>
        <Shot id="restaurantPlaceholders" className="mt-7" caption="A new site with its placeholders: coming soon blocks, Dish 1 to Dish 4 and Photo tiles." />
      </section>

      <section id="after">
        <h2>After it is live</h2>
        <div className="rounded-[20px] bg-[#edf3ef] p-6 sm:p-8">
          <h3>Your owner area is added for you</h3>
          <p>
            A few minutes after the site goes live, Builder adds an owner area and a database that belong to your site. The sign-in appears on the same card as your live address: the owner area address, your email and a password. The password is shown once. Save it in a password manager, then press &quot;I&apos;ve saved it&quot;. Your public site stays live the whole time.
          </p>
        </div>
        <p className="mt-6">
          In the owner area you edit your menu, upload a spreadsheet and see table requests. See Restaurant owner area.
        </p>
      </section>

      <section id="not-yet">
        <h2>Not yet</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>Changing the site from the chat.</strong> For restaurant sites, changes to the menu go through the owner area. Scout changes to the page itself are coming.</li>
          <li><strong>Live booking.</strong> The form sends you a table request. It does not check availability or confirm a booking for you. If you use a booking service, your site can link to it.</li>
          <li><strong>Photos you have not confirmed.</strong> Pictures read from an existing website are used only after you confirm the site is yours.</li>
        </ul>
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>A section says &quot;coming soon&quot;.</strong> That means Scout had nothing to put there. Add the content in the owner area (menu) or ask us to help with the rest.</li>
          <li><strong>The owner area has not appeared.</strong> Wait a few more minutes. If the card still shows no sign-in, or Scout says it could not add it, your public site is fine. Send us a note.</li>
          <li><strong>A dish or price is wrong.</strong> Edit it in the owner area. Scout does not guess prices; what you typed or what your website said is what is shown.</li>
          <li><strong>Something looks wrong.</strong> Tell us what you typed, what you expected and what happened. A screenshot of the chat helps.</li>
        </ul>
      </section>

      <Related
        items={[
          { label: "Restaurant owner area", href: "/docs/after-launch/owner-area", text: "Sign in, edit your menu and answer table requests." },
          { label: "Menu from a spreadsheet", href: "/docs/after-launch/menu-spreadsheet", text: "The columns, the rules and how replace and add work." },
          { label: "Writing good requests", href: "/docs/scout/requests", text: "Plain-words requests that Scout can act on." },
          { label: "How the builder works", href: "/docs/builder", text: "The steps from first question to live site." },
        ]}
      />
    </DocPage>
  );
}
