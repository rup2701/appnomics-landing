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

const nextConfig: NextConfig = {
  async redirects() {
    if (!DOCS_ON_SUBDOMAIN) return [];
    return [
      // The docs host has no home page of its own: start at the first docs page.
      { source: "/", has: onDocsHost, destination: "/builder", permanent: false },
      // docs.appnomics.dev/docs/builder is the same page as docs.appnomics.dev/builder.
      { source: "/docs/:path*", has: onDocsHost, destination: "/:path*", permanent: false },
      // Old links on the main site go to the docs host.
      ...MAIN_HOSTS.flatMap((host) => [
        { source: "/docs", has: [{ type: "host" as const, value: host }], destination: `https://${DOCS_HOST}/builder`, permanent: false },
        { source: "/docs/:path+", has: [{ type: "host" as const, value: host }], destination: `https://${DOCS_HOST}/:path+`, permanent: false },
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
