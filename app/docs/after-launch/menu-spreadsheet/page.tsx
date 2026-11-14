import type { Metadata } from "next";
import { Callout, DocPage, Related } from "@/components/docs/DocPage";
import Shot from "@/components/docs/Shot";

export const metadata: Metadata = {
  title: "Menu from a spreadsheet | Appnomics Docs",
  description: "Put your whole restaurant menu in from a csv or Excel file, before the build or later in the owner area.",
};

const TOC = [
  { id: "columns", label: "The columns" },
  { id: "before", label: "Before the build" },
  { id: "after", label: "In the owner area" },
  { id: "rules", label: "Rules and limits" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related" },
];

export default function MenuSpreadsheetPage() {
  return (
    <DocPage
      badge="After launch"
      title="Menu from a spreadsheet."
      lead="Put your whole menu in at once from a csv or Excel (.xlsx) file, then tweak single dishes by hand."
      updated="2026-11-14"
      toc={TOC}
    >
      <section id="columns">
        <h2>The columns</h2>
        <p>The first row holds the column names. Use these four, in any order. Only Dish is required.</p>
        <div className="mt-6 overflow-x-auto rounded-[20px] bg-white p-2">
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
          <a className="text-[#087a50] underline underline-offset-4 hover:no-underline" href="/docs/sample-menu.csv" download>Download a sample menu</a> (invented dishes, to show the shape).
        </p>
        <p>Type prices as text, the way you want them shown. If you leave a price empty, the dish shows without one; Scout never fills one in.</p>
      </section>

      <section id="before">
        <h2>Before the build</h2>
        <p>
          When Scout has your details and has shown the plan, but before it builds, attach the file in the chat with the table button next to the message box. Scout reads it, tells you how many sections and dishes it found, lists any rows it could not use and updates the plan. Then you build as usual.
        </p>
        <Shot id="menuAttach" className="mt-7" caption="Attach the file in the chat. Scout reports what it found." />
      </section>

      <section id="after">
        <h2>In the owner area</h2>
        <p>Open Menu in the owner area, choose a file, pick how it should apply, then press Read the file. You see a preview first, and nothing changes until you confirm.</p>
        <div className="mt-6 space-y-4">
          <div className="rounded-[20px] bg-white p-6">
            <h3>Replace my menu</h3>
            <p>The default. The file becomes your whole menu: dishes not in the file are removed. Use this when your spreadsheet is the complete menu.</p>
          </div>
          <div className="rounded-[20px] bg-white p-6">
            <h3>Only add what is missing</h3>
            <p>Only dishes that are not already on your menu are added, matched by section and dish name, ignoring capital letters. Nothing existing is changed or removed. Use this to add a new section or a few new dishes.</p>
          </div>
        </div>
        <p className="mt-6">
          "Download the current menu" gives you your menu as a file in the same format, so you can edit it in a spreadsheet and upload it again.
        </p>
        <Shot id="ownerUpload" className="mt-7" caption="The preview shows the sections and dishes before you confirm." />
      </section>

      <section id="rules">
        <h2>Rules and limits</h2>
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

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>Everything landed in one section called Menu.</strong> The Section column is missing or empty. Add it and upload again. A blank Section cell uses the section of the row above it.</li>
          <li><strong>My prices look different.</strong> Prices appear exactly as typed. In Excel, write $13 as text or format the column as text.</li>
          <li><strong>Some rows were skipped.</strong> Read the list under the preview. The reason is given for each row.</li>
          <li><strong>I replaced the menu by mistake.</strong> Upload your earlier file again with Replace. It is a good habit to download the current menu before a big change.</li>
        </ul>
      </section>

      <Related
        items={[
          { label: "Restaurant owner area", href: "/docs/after-launch/owner-area", text: "Sign in, edit dishes and see table requests." },
          { label: "Restaurant site", href: "/docs/recipes/restaurant-site", text: "How the site is built and what to expect." },
        ]}
      />
    </DocPage>
  );
}
