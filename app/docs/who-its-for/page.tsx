import type { Metadata } from "next";
import { DocPage, Related } from "@/components/docs/DocPage";

export const metadata: Metadata = {
  title: "Who Builder is for | Appnomics Docs",
  description: "Who the Appnomics Builder suits today, which recipe to start with, and when to talk to us about a custom build.",
};

const TOC = [
  { id: "start-ups", label: "Start-ups and MVPs" },
  { id: "pick", label: "Which recipe to start with" },
  { id: "not-yet", label: "Not a fit yet" },
  { id: "related", label: "Related" },
];

export default function WhoItsForPage() {
  return (
    <DocPage
      badge="Builder beta"
      title="Who Builder is for."
      lead="Founders and small teams who want a live website for a product or an idea, without writing code or hiring a designer first."
      updated="2026-11-08"
      toc={TOC}
    >
      <section id="start-ups">
        <h2>Start-ups and MVPs</h2>
        <p>
          If you are testing an idea or launching a first version, Builder gets you a live site from a conversation, and you keep refining it by chatting with Scout. You do not need to write code or design anything.
        </p>
        <p>
          When you need something Builder does not do yet, such as a custom app, the engineering partner plan builds it for a fixed price per epic.
        </p>
      </section>

      <section id="pick">
        <h2>Which recipe to start with</h2>
        <div className="mt-2 space-y-4">
          {[
            { title: "You have an idea and want to see if people care", text: "Start with a waitlist site. It collects sign-ups so you can see interest before you build more.", href: "/docs/recipes/waitlist-site" },
            { title: "You have a product and need a website for it", text: "Start with a product showcase: features, pricing, how it works and an FAQ.", href: "/docs/recipes/product-showcase" },
            { title: "You sell things", text: "Start with an online store.", href: "/docs/recipes/online-store" },
          ].map((row) => (
            <a key={row.title} href={row.href} className="block rounded-[20px] bg-white p-6 no-underline transition-colors hover:bg-[#edf3ef]">
              <h3>{row.title}</h3>
              <p>{row.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="not-yet">
        <h2>Not a fit yet</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>Apps with sign-in and payments.</strong> The creator and membership app is coming. Until then, the engineering partner plan can build one.</li>
          <li><strong>Changes to owner sign-in, the database or payments by chat.</strong> Scout changes the public page only.</li>
        </ul>
      </section>

      <Related
        items={[
          { label: "How the builder works", href: "/docs/builder", text: "The four steps from first question to live site." },
          { label: "Engineering partner", href: "/docs/plans/engineering-partner", text: "A custom build, delivered one epic at a time." },
        ]}
      />
    </DocPage>
  );
}
