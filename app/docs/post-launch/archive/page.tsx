import type { Metadata } from "next";
import { docsMetadata } from "@/components/docs/metadata";
import { Callout, DocPage, Related } from "@/components/docs/DocPage";

export const metadata: Metadata = docsMetadata("/post-launch/archive", {
  title: "Archive and restore | Appnomics Docs",
  description: "Archive a project to put it away in Builder. Its site keeps running and keeps its address, and you can restore it later.",
});

const TOC = [
  { id: "archive", label: "Archive a project" },
  { id: "while", label: "While it is archived" },
  { id: "restore", label: "Restore it" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related" },
];

export default function ArchivePage() {
  return (
    <DocPage
      badge="Post-launch"
      title="Archive and restore."
      lead="Put a project away when you are done with it for now. Its site keeps running, and you can bring the project back at any time."
      updated="2026-11-26"
      toc={TOC}
    >
      <section id="archive">
        <h2>Archive a project</h2>
        <p>
          On the Projects page, press Archive on the project. It moves to the Archived list, and you see &quot;Archived. It is read-only now, and its site keeps running.&quot;
        </p>
        <p>
          If a build or a change is running on the project at that moment, wait for it to finish, then archive it. A change that was only waiting its turn does not run once the project is archived.
        </p>
      </section>

      <section id="while">
        <h2>While it is archived</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>The site stays online</strong> at the same address. Visitors see no difference.</li>
          <li><strong>The owner area keeps working.</strong> You can still sign in, edit a restaurant menu, see table requests or read sign-ups.</li>
          <li><strong>The project is read-only in Builder.</strong> Scout cannot change it, and it cannot be built, changed or published again. Its chat and history stay.</li>
          <li><strong>The address stays yours.</strong> No other project can use it while this one has it.</li>
        </ul>
        <div className="mt-6">
          <Callout title="Archiving does not take the site down">
            <p>To take a site offline, email us. Doing it yourself from Builder is not ready yet.</p>
          </Callout>
        </div>
      </section>

      <section id="restore">
        <h2>Restore it</h2>
        <p>
          Open Archived on the Projects page and press Restore, or open the project and press Restore in the line at the top. The project opens where you left it, and you can change it again.
        </p>
      </section>

      <section id="troubleshooting">
        <h2>Troubleshooting</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>&quot;Something is running on this project right now.&quot;</strong> A build or change is in progress. Wait for it to finish, then archive again.</li>
          <li><strong>&quot;Not restored.&quot;</strong> Another active project now uses the same site address. The message says which one if it is yours. Archive that one first, then restore this one.</li>
          <li><strong>A change I asked for did not happen.</strong> If the project was archived before it ran, nothing was changed. Restore the project and ask again.</li>
        </ul>
      </section>

      <Related
        items={[
          { label: "Your ready card", href: "/post-launch/ready-card", text: "Your address, your sign-in and the list to read before you share." },
          { label: "Making changes", href: "/post-launch/changes", text: "How a change reaches your live site, and undo." },
        ]}
      />
    </DocPage>
  );
}
