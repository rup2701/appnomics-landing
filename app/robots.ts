import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { DOCS_HOST, DOCS_ON_SUBDOMAIN, SITE_ORIGIN } from "@/components/docs/urls";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host")?.split(":")[0];
  const origin = DOCS_ON_SUBDOMAIN && host === DOCS_HOST ? `https://${DOCS_HOST}` : SITE_ORIGIN;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${origin}/sitemap.xml`,
  };
}
