import type { NextConfig } from "next";

/**
 * Docs on their own subdomain, docs.appnomics.dev. Turned on by NEXT_PUBLIC_DOCS_ON_SUBDOMAIN=1,
 * set on the live site only; see components/docs/urls.ts. Off, the docs stay at /docs.
 *
 * The pages still live in app/docs. On the docs host, /builder is served from /docs/builder
 * and the address bar keeps showing docs.appnomics.dev/builder.
 */
const DOCS_ON_SUBDOMAIN = process.env.NEXT_PUBLIC_DOCS_ON_SUBDOMAIN === "1";
const DOCS_HOST = "docs.appnomics.dev";
const onDocsHost = [{ type: "host" as const, value: DOCS_HOST }];
const MAIN_HOSTS = ["appnomics.dev", "www.appnomics.dev"];

/**
 * Docs pages that moved, from their old path (without /docs) to the new one. Old links and bookmarks keep working.
 * Nov 2026: the restaurant owner area and menu spreadsheet pages became sections of the restaurant use case, and
 * Previews and undo became Making changes under Post-launch.
 */
const MOVED_DOCS: [from: string, to: string][] = [
  ["/after-launch/owner-area", "/recipes/restaurant-site#owner-area"],
  ["/after-launch/menu-spreadsheet", "/recipes/restaurant-site#menu-spreadsheet"],
  ["/scout/changes", "/post-launch/changes"],
];

const nextConfig: NextConfig = {
  async redirects() {
    if (!DOCS_ON_SUBDOMAIN) return MOVED_DOCS.map(([from, to]) => ({ source: `/docs${from}`, destination: `/docs${to}`, permanent: true }));
    return [
      ...MOVED_DOCS.map(([from, to]) => ({ source: from, has: onDocsHost, destination: to, permanent: true })),
      // The docs host has no home page of its own: start at the first docs page.
      // Temporary, so a docs home page can be added later.
      { source: "/", has: onDocsHost, destination: "/builder", permanent: false },
      // docs.appnomics.dev/docs/builder is the same page as docs.appnomics.dev/builder.
      { source: "/docs/:path*", has: onDocsHost, destination: "/:path*", permanent: true },
      // Old links on the main site go to the docs host, for good.
      ...MAIN_HOSTS.flatMap((host) => [
        { source: "/docs", has: [{ type: "host" as const, value: host }], destination: `https://${DOCS_HOST}/builder`, permanent: true },
        { source: "/docs/:path+", has: [{ type: "host" as const, value: host }], destination: `https://${DOCS_HOST}/:path+`, permanent: true },
      ]),
    ];
  },
  async rewrites() {
    if (!DOCS_ON_SUBDOMAIN) return { beforeFiles: [], afterFiles: [], fallback: [] };
    return {
      // Every page path on the docs host is served from app/docs. Files (anything with a dot,
      // such as the logo or sample-menu.csv) and Next.js internals (paths starting with _) are left alone.
      beforeFiles: [{ source: "/:path((?!_|docs(?:/|$))[^.]*)", has: onDocsHost, destination: "/docs/:path" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
