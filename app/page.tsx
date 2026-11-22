import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_ORIGIN } from "@/components/docs/urls";
import HomePage from "./HomePage";

const title = "AI App and MVP Builder | Appnomics";
const description = "Build apps and websites with Appnomics Builder and Scout, or partner with our engineers to launch a production-ready MVP. Explore live examples and own your code.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: SITE_ORIGIN },
  openGraph: { title, description, url: SITE_ORIGIN, type: "website" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Appnomics Builder",
        url: "https://builder.appnomics.dev",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "Build and iterate on products with Scout.",
      }} />
      <HomePage />
    </>
  );
}
