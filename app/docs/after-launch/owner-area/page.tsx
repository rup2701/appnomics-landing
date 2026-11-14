import type { Metadata } from "next";
import { Callout, DocPage, Related } from "@/components/docs/DocPage";
import Shot from "@/components/docs/Shot";

export const metadata: Metadata = {
  title: "Restaurant owner area | Appnomics Docs",
  description: "Sign in to your restaurant's owner area to edit the menu, upload a spreadsheet and answer table requests.",
};

const TOC = [
  { id: "sign-in", label: "Signing in" },
  { id: "menu", label: "Your menu" },
  { id: "requests", label: "Table requests" },
  { id: "good-to-know", label: "Good to know" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related" },
];

export default function OwnerAreaPage() {
  return (
    <DocPage
      badge="After launch"
      title="Restaurant owner area."
      lead="The private part of your restaurant site. Keep your menu up to date and see the tables people ask for."
      updated="2026-11-14"
      toc={TOC}
    >
      <section id="sign-in">
        <h2>Signing in</h2>
        <p>
          After your site goes live, Builder adds the owner area and puts the sign-in on the card with your live address: the address (your site&apos;s own address followed by /admin/login), the email you built with and a password. The password is shown once, so save it in a password manager before you press &quot;I&apos;ve saved it&quot;.
        </p>
        <Shot id="ownerLogin" className="mt-7" caption="The owner sign-in page on your own site." />
        <p className="mt-6">
          There is one owner sign-in per site. Too many wrong passwords in a short time lock the sign-in for a while. If you lose the password, email us and we will set a new one.
        </p>
      </section>

      <section id="menu">
        <h2>Your menu</h2>
        <p>
          The Menu page lists your sections and dishes. For each dish you can change the name, price and description, hide it without deleting it, and move it up or down; you can also add a dish or a whole section. Press Save when you are done; your public menu updates within about a minute.
        </p>
        <Shot id="ownerMenu" className="mt-7" caption="Edit dishes, hide them and change their order." />
        <p className="mt-6">
          To put a whole menu in at once, upload a spreadsheet. You see a preview before anything changes, and you can add only the dishes that are missing instead of replacing everything. "Download the current menu" gives you a file you can edit and upload again. See Menu from a spreadsheet.
        </p>
        <Shot id="ownerUpload" className="mt-7" caption="The preview before a spreadsheet replaces the menu." />
      </section>

      <section id="requests">
        <h2>Table requests</h2>
        <p>
          When someone fills in the table request form on your site, the request is saved in the owner area and an email goes to the address you signed up with. Each request shows the guest&apos;s name, party size, date and time, their phone or email and any note. Use Mark confirmed or Mark declined so you can see what is left. If the email to you did not go out, the request says so.
        </p>
        <Shot id="ownerRequests" className="mt-7" caption="Table requests, newest first, with their status." />
        <div className="mt-6">
          <Callout title="A request is not a booking">
            <p>The form does not check availability and does not confirm anything for the guest. Contact them yourself to confirm.</p>
          </Callout>
        </div>
      </section>

      <section id="good-to-know">
        <h2>Good to know</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>Your data is yours alone.</strong> Each site has its own database. Your menu and requests are not shared with other sites.</li>
          <li><strong>If the database is unreachable,</strong> your public site still shows the menu it was built with.</li>
          <li><strong>Sites built before this feature</strong> have no owner area until they are rebuilt.</li>
          <li><strong>Changing the page itself</strong> (wording, layout) from the chat is not ready for restaurant sites yet.</li>
        </ul>
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>I cannot sign in.</strong> Check the email is the one you built the site with, and that the password was copied without a space at either end. After several wrong tries, wait a few minutes.</li>
          <li><strong>My menu change is not on the site.</strong> Give it a minute and reload. If it is still old, email us with the time you saved.</li>
          <li><strong>I did not get an email for a request.</strong> It is still in the owner area. Check your spam folder, then tell us.</li>
        </ul>
      </section>

      <Related
        items={[
          { label: "Menu from a spreadsheet", href: "/docs/after-launch/menu-spreadsheet", text: "Columns, rules, replace and add." },
          { label: "Restaurant site", href: "/docs/recipes/restaurant-site", text: "How the site is built and what to expect." },
        ]}
      />
    </DocPage>
  );
}
