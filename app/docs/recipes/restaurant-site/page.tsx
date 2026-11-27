import type { Metadata } from "next";
import { docsMetadata } from "@/components/docs/metadata";
import { Callout, DocPage, Prompt, Related } from "@/components/docs/DocPage";
import Shot from "@/components/docs/Shot";

export const metadata: Metadata = docsMetadata("/recipes/restaurant-site", {
  title: "Restaurant site | Appnomics Docs",
  description: "A website for a restaurant with a home page, a menu page and a story page, built from a conversation with Scout, with an owner area for your menu and table requests and a menu you can load from a spreadsheet.",
});

const TOC = [
  { id: "best-for", label: "Best for" },
  { id: "prompt", label: "Start here" },
  { id: "expect", label: "What to expect" },
  { id: "placeholders", label: "Coming soon blocks" },
  { id: "owner-area", label: "Your owner area" },
  { id: "menu-spreadsheet", label: "Menu from a spreadsheet" },
  { id: "not-yet", label: "Not yet" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related" },
];

const link = "text-[#087a50] underline underline-offset-4 hover:no-underline";

export default function RestaurantSitePage() {
  return (
    <DocPage
      badge="Use case"
      title="Restaurant site."
      lead="A website for a restaurant: a home page, a full menu page and your story, with a table request form and an owner area where you keep the menu up to date."
      updated="2026-11-26"
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
          If you have a menu in a spreadsheet, attach it in the chat before the build. See <a className={link} href="#menu-spreadsheet">Menu from a spreadsheet</a>.
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

      <section id="owner-area">
        <h2>Your owner area</h2>
        <p>The private part of your restaurant site. Keep your menu up to date and see the tables people ask for.</p>

        <div className="mt-6 rounded-[20px] bg-[#edf3ef] p-6 sm:p-8">
          <h3>It is added for you</h3>
          <p>
            A few minutes after the site goes live, Builder adds an owner area and a database that belong to your site. Your public site stays live the whole time.
          </p>
        </div>

        <h3 className="mt-10">Signing in</h3>
        <p>
          The sign-in appears on the card with your live address: the owner area address (your site&apos;s own address followed by /admin/login), the email you built with and a password. The password is shown once, so save it in a password manager before you press &quot;I&apos;ve saved it&quot;.
        </p>
        <Shot id="ownerLogin" className="mt-7" caption="The owner sign-in page on your own site." />
        <p className="mt-6">
          There is one owner sign-in per site. Too many wrong passwords in a short time lock the sign-in for a while. If you lose the password, email us and we will set a new one.
        </p>

        <h3 className="mt-10">Your menu</h3>
        <p>
          The Menu page lists your sections and dishes. For each dish you can change the name, price and description, hide it without deleting it, and move it up or down; you can also add a dish or a whole section. Press Save when you are done; your public menu updates within about a minute.
        </p>
        <Shot id="ownerMenu" className="mt-7" caption="Edit dishes, hide them and change their order." />
        <p className="mt-6">
          To put a whole menu in at once, upload a spreadsheet. See <a className={link} href="#menu-spreadsheet">Menu from a spreadsheet</a>.
        </p>

        <h3 className="mt-10">Table requests</h3>
        <p>
          When someone fills in the table request form on your site, the request is saved in the owner area and an email goes to the address you signed up with. Each request shows the guest&apos;s name, party size, date and time, their phone or email and any note. Use Mark confirmed or Mark declined so you can see what is left. If the email to you did not go out, the request says so.
        </p>
        <Shot id="ownerRequests" className="mt-7" caption="Table requests, newest first, with their status." />
        <div className="mt-6">
          <Callout title="A request is not a booking">
            <p>The form does not check availability and does not confirm anything for the guest. Contact them yourself to confirm.</p>
          </Callout>
        </div>

        <h3 className="mt-10">Good to know</h3>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>Your data is yours alone.</strong> Each site has its own database. Your menu and requests are not shared with other sites.</li>
          <li><strong>If the database is unreachable,</strong> your public site still shows the menu it was built with.</li>
          <li><strong>Sites built before the owner area existed</strong> have none until they are rebuilt.</li>
        </ul>
      </section>

      <section id="menu-spreadsheet">
        <h2>Menu from a spreadsheet</h2>
        <p>Put your whole menu in at once from a csv or Excel (.xlsx) file, then tweak single dishes by hand. The first row holds the column names. Use these four, in any order. Only Dish is required.</p>
        <div className="mt-6 overflow-x-auto rounded-[20px] bg-[#e8eee9] p-2">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-[#171717]">
                <th className="p-4 font-medium">Column</th>
                <th className="p-4 font-medium">What goes in it</th>
                <th className="p-4 font-medium">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-4">Section</td><td className="p-4">The menu section the dish belongs to. Dishes with the same section are grouped together.</td><td className="p-4">Starters</td></tr>
              <tr><td className="p-4">Dish</td><td className="p-4">The dish name. Required.</td><td className="p-4">Paneer Tikka</td></tr>
              <tr><td className="p-4">Price</td><td className="p-4">Shown exactly as you type it. We do not add a currency sign.</td><td className="p-4">$13</td></tr>
              <tr><td className="p-4">Description</td><td className="p-4">A short line about the dish. Optional.</td><td className="p-4">Tandoor-grilled cottage cheese, mint chutney</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6">
          <a className={link} href="/sample-menu.csv" download>Download a sample menu</a> (invented dishes, to show the shape).
        </p>
        <p>Type prices as text, the way you want them shown. If you leave a price empty, the dish shows without one; Scout never fills one in.</p>

        <h3 className="mt-10">Before the build</h3>
        <p>
          When Scout has your details and has shown the plan, but before it builds, attach the file in the chat with the table button next to the message box. Scout reads it, tells you how many sections and dishes it found, lists any rows it could not use and updates the plan. Then you build as usual.
        </p>
        <Shot id="menuAttach" className="mt-7" caption="Attach the file in the chat. Scout reports what it found." />

        <h3 className="mt-10">In the owner area</h3>
        <p>Open Menu in the owner area, choose a file, pick how it should apply, then press Read the file. You see a preview first, and nothing changes until you confirm.</p>
        <div className="mt-6 space-y-4">
          <div className="rounded-[20px] bg-[#e8eee9] p-6">
            <h3>Replace my menu</h3>
            <p>The default. The file becomes your whole menu: dishes not in the file are removed. Use this when your spreadsheet is the complete menu.</p>
          </div>
          <div className="rounded-[20px] bg-[#e8eee9] p-6">
            <h3>Only add what is missing</h3>
            <p>Only dishes that are not already on your menu are added, matched by section and dish name, ignoring capital letters. Nothing existing is changed or removed. Use this to add a new section or a few new dishes.</p>
          </div>
        </div>
        <p className="mt-6">
          &quot;Download the current menu&quot; gives you your menu as a file in the same format, so you can edit it in a spreadsheet and upload it again.
        </p>
        <Shot id="ownerUpload" className="mt-7" caption="The preview shows the sections and dishes before you confirm." />

        <h3 className="mt-10">Rules and limits</h3>
        <ul className="list-disc space-y-3 pl-5">
          <li>Files up to 1 MB and 500 rows, up to 12 sections and 40 dishes in each.</li>
          <li>Dish names up to 80 characters, section names 40, prices 20, descriptions 200.</li>
          <li>No web links or markup in any cell.</li>
          <li>For an Excel file, the first sheet is used.</li>
        </ul>
        <div className="mt-6">
          <Callout title="Rows that cannot be used">
            <p>A row that breaks a rule, such as a missing dish name or a link in a description, is skipped. The rest of the file still loads, and the skipped rows are listed with the reason so you can fix them and upload again.</p>
          </Callout>
        </div>
      </section>

      <section id="not-yet">
        <h2>Not yet</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>Changing the site from the chat.</strong> For restaurant sites, changes to the menu go through the owner area. Scout changes to the page itself (wording, layout) are coming.</li>
          <li><strong>Live booking.</strong> The form sends you a table request. It does not check availability or confirm a booking for you. If you use a booking service, your site can link to it.</li>
          <li><strong>Photos you have not confirmed.</strong> Pictures read from an existing website are used only after you confirm the site is yours.</li>
        </ul>
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>
        <h3>The site</h3>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>A section says &quot;coming soon&quot;.</strong> That means Scout had nothing to put there. Add the content in the owner area (menu) or ask us to help with the rest.</li>
          <li><strong>A dish or price is wrong.</strong> Edit it in the owner area. Scout does not guess prices; what you typed or what your website said is what is shown.</li>
          <li><strong>Something looks wrong.</strong> Tell us what you typed, what you expected and what happened. A screenshot of the chat helps.</li>
        </ul>
        <h3 className="mt-8">The owner area</h3>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>The owner area has not appeared.</strong> Wait a few more minutes. If the card still shows no sign-in, or Scout says it could not add it, your public site is fine. Send us a note.</li>
          <li><strong>I cannot sign in.</strong> Check the email is the one you built the site with, and that the password was copied without a space at either end. After several wrong tries, wait a few minutes.</li>
          <li><strong>My menu change is not on the site.</strong> Give it a minute and reload. If it is still old, email us with the time you saved.</li>
          <li><strong>I did not get an email for a request.</strong> It is still in the owner area. Check your spam folder, then tell us.</li>
        </ul>
        <h3 className="mt-8">The spreadsheet</h3>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>Everything landed in one section called Menu.</strong> The Section column is missing or empty. Add it and upload again. A blank Section cell uses the section of the row above it.</li>
          <li><strong>My prices look different.</strong> Prices appear exactly as typed. In Excel, write $13 as text or format the column as text.</li>
          <li><strong>Some rows were skipped.</strong> Read the list under the preview. The reason is given for each row.</li>
          <li><strong>I replaced the menu by mistake.</strong> Upload your earlier file again with Replace. It is a good habit to download the current menu before a big change.</li>
        </ul>
      </section>

      <Related
        items={[
          { label: "Your ready card", href: "/post-launch/ready-card", text: "Your address, your sign-in and the list to read before you share." },
          { label: "Archive and restore", href: "/post-launch/archive", text: "Put a project away without taking its site down." },
          { label: "Attaching files", href: "/scout/attachments", text: "What you can attach in the chat." },
          { label: "How the builder works", href: "/builder", text: "The steps from first question to live site." },
        ]}
      />
    </DocPage>
  );
}
