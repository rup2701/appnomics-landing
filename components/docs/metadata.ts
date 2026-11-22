import type { Metadata } from "next";
import { docsUrl, SITE_ORIGIN } from "./urls";

export function docsMetadata(path: string, content: { title: string; description: string }): Metadata {
  const url = new URL(docsUrl(path), SITE_ORIGIN).toString();
  return {
    ...content,
    alternates: { canonical: url },
    openGraph: { ...content, url, type: "article" },
  };
}
