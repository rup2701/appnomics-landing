/**
 * Where the docs live.
 *
 * Off (local, previews): the docs are at /docs on the main site, for example /docs/builder.
 * On (NEXT_PUBLIC_DOCS_ON_SUBDOMAIN=1, set on the live site only): the docs are at
 * docs.appnomics.dev/builder. next.config.ts serves those pages from app/docs and sends
 * old /docs links there.
 *
 * A docs page is named by its path without /docs, for example "/builder".
 */
export const DOCS_ON_SUBDOMAIN = process.env.NEXT_PUBLIC_DOCS_ON_SUBDOMAIN === "1";
export const DOCS_HOST = "docs.appnomics.dev";
export const SITE_ORIGIN = "https://appnomics.dev";
const DOCS_ORIGIN = `https://${DOCS_HOST}`;

/** A link to a docs page, used inside the docs. */
export function docsHref(page: string): string {
  if (DOCS_ON_SUBDOMAIN) return page;
  return page === "/" ? "/docs" : `/docs${page}`;
}

/** A link to a docs page, used on the main site. */
export function docsUrl(page: string): string {
  return DOCS_ON_SUBDOMAIN ? `${DOCS_ORIGIN}${page}` : docsHref(page);
}

/** A link to a main site page, used inside the docs. */
export function siteHref(path: string): string {
  return DOCS_ON_SUBDOMAIN && path.startsWith("/") ? `${SITE_ORIGIN}${path}` : path;
}

/**
 * The docs page a pathname shows. Gives the same answer on the server, which renders
 * /docs/builder, and in the browser, which shows /builder on the subdomain.
 */
export function docsPage(pathname: string): string {
  return pathname.replace(/^\/docs(?=\/|$)/, "") || "/";
}
