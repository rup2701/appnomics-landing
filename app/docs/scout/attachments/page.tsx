import type { Metadata } from "next";
import { docsMetadata } from "@/components/docs/metadata";
import { DocPage, Related } from "@/components/docs/DocPage";
import { docsHref } from "@/components/docs/urls";

export const metadata: Metadata = docsMetadata("/scout/attachments", {
  title: "Attaching files | Appnomics Docs",
  description: "Supply images for your site or attach a menu spreadsheet in Scout.",
});

const TOC = [
  { id: "images", label: "Images for your site" },
  { id: "spreadsheets", label: "Menu spreadsheets" },
  { id: "related", label: "Related" },
];

export default function AttachmentsPage() {
  return (
    <DocPage
      badge="Scout"
      title="Attaching files."
      lead="Give Scout images for your site or a menu spreadsheet for your restaurant."
      updated="2026-11-16"
      toc={TOC}
    >
      <section id="images">
        <h2>Images for your site</h2>
        <p>
          Attach images in the chat for your site, such as a hero image or images for the benefits section. Tell Scout where you want each image used. You can also supply images through your site&apos;s admin page.
        </p>
      </section>

      <section id="spreadsheets">
        <h2>Menu spreadsheets</h2>
        <p>
          For a restaurant site, you can attach a menu spreadsheet in the chat before the build. See <a className="text-[#087a50] underline underline-offset-4 hover:no-underline" href={docsHref("/recipes/restaurant-site#menu-spreadsheet")}>Menu from a spreadsheet</a> for the columns and limits.
        </p>
      </section>

      <Related
        items={[
          { label: "Meet Scout", href: "/scout", text: "What Scout does, and what it will not do." },
          { label: "Writing good requests", href: "/scout/requests", text: "Examples of requests Scout can act on." },
        ]}
      />
    </DocPage>
  );
}
