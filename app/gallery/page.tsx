import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "App Gallery | Appnomics",
  description: "Explore Appnomics Builder examples and engineering-partner products. Browse websites, online stores, SaaS and mobile apps, and discover ideas for your next build.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f5f5f5] text-[#171717]">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
