import type { Metadata } from "next";
import { Callout, DocPage, Related } from "@/components/docs/DocPage";

export const metadata: Metadata = {
  title: "Creator and membership app (coming soon) | Appnomics Docs",
  description: "A marketing site, a dashboard and a web app for creators who sell memberships. Coming soon to Appnomics Builder.",
};

const TOC = [
  { id: "what", label: "What it will be" },
  { id: "not-ready", label: "What is not ready" },
  { id: "now", label: "If you need one now" },
  { id: "related", label: "Related" },
];

export default function CreatorAppPage() {
  return (
    <DocPage
      badge="Coming soon"
      title="Creator and membership app."
      lead="Our first app recipe: a marketing site, a dashboard and a web app for creators who sell paid memberships."
      updated="2026-11-08"
      toc={TOC}
    >
      <section id="what">
        <h2>What it will be</h2>
        <p>
          The first app recipe will be built around a creator who sells paid memberships, such as a subscription for picks, lessons or private content. It brings three parts together:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-5">
          <li><strong>A marketing site</strong> that explains the offer.</li>
          <li><strong>A dashboard</strong> for the creator to manage members and content.</li>
          <li><strong>A web app</strong> for members to sign in and use what they paid for.</li>
        </ul>
      </section>

      <section id="not-ready">
        <h2>What is not ready</h2>
        <p>
          Member sign-in and payments are not available in Builder yet, so this recipe cannot be built from a conversation today. We will open it once those parts are ready.
        </p>
      </section>

      <section id="now">
        <h2>If you need one now</h2>
        <Callout title="Build it with us">
          <p>
            The engineering partner plan builds a production-ready app one epic at a time, for a fixed price per epic. Tell us what you want and we will scope it.
          </p>
          <a
            href="mailto:support@appnomics.dev?subject=Creator%20app"
            className="mt-5 inline-block rounded-lg bg-[#171717] px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-[#333]"
          >
            Talk to us <span aria-hidden="true">&rarr;</span>
          </a>
        </Callout>
      </section>

      <Related
        items={[
          { label: "Engineering partner", href: "/docs/plans/engineering-partner", text: "Fixed price per epic, with a full handover." },
          { label: "Product showcase", href: "/docs/recipes/product-showcase", text: "A marketing site you can build today." },
        ]}
      />
    </DocPage>
  );
}
