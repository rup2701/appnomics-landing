import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";
import { APPS } from "@/components/gallery-data";
import { SITE_ORIGIN } from "@/components/docs/urls";

const title = "App Gallery | Appnomics";
const description = "Explore Appnomics Builder examples and engineering-partner products. Browse websites, online stores, SaaS and mobile apps, and discover ideas for your next build.";
const url = `${SITE_ORIGIN}/gallery`;
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website" },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description,
        url,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: APPS.map((app, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: app.name,
              description: app.description,
              ...(app.liveUrl ? { url: app.liveUrl } : {}),
            },
          })),
        },
      }} />
      <Navbar />
      <main className="min-h-screen bg-[#f5f5f5] text-[#171717]">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
