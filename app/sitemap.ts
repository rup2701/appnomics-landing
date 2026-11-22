import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { DOCS_NAV } from "@/components/docs/docs-nav";
import { DOCS_HOST, DOCS_ON_SUBDOMAIN, SITE_ORIGIN, docsUrl } from "@/components/docs/urls";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host")?.split(":")[0];
  const isDocsHost = DOCS_ON_SUBDOMAIN && host === DOCS_HOST;
  const docs = DOCS_NAV.flatMap((section) => section.items).map((page) => ({
    url: new URL(docsUrl(page.href), SITE_ORIGIN).toString(),
  }));
  if (isDocsHost) return docs;

  const main = ["", "/about", "/gallery", "/gunner-wins-case"].map((path) => ({
    url: `${SITE_ORIGIN}${path}`,
  }));
  return DOCS_ON_SUBDOMAIN ? main : [...main, ...docs];
}
