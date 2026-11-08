export type NavItem = { label: string; href: string; soon?: boolean };
export type NavSection = { title: string; items: NavItem[] };

/** The docs sidebar. Add a page by adding one line here. soon: true shows a Soon tag. */
export const DOCS_NAV: NavSection[] = [
  {
    title: "Get started",
    items: [
      { label: "How the builder works", href: "/docs/builder" },
      { label: "Who it's for", href: "/docs/who-its-for" },
    ],
  },
  {
    title: "Recipes",
    items: [
      { label: "Waitlist site", href: "/docs/recipes/waitlist-site" },
      { label: "Product showcase", href: "/docs/recipes/product-showcase" },
      { label: "Online store", href: "/docs/recipes/online-store" },
      { label: "Creator app", href: "/docs/recipes/creator-app", soon: true },
    ],
  },
  {
    title: "Scout",
    items: [
      { label: "Meet Scout", href: "/docs/scout" },
      { label: "Writing good requests", href: "/docs/scout/requests" },
      { label: "Previews and undo", href: "/docs/scout/changes" },
    ],
  },
  {
    title: "Plans",
    items: [
      { label: "Self-serve plans", href: "/docs/plans/self-serve" },
      { label: "Engineering partner", href: "/docs/plans/engineering-partner" },
    ],
  },
];
