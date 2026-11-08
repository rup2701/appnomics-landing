import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import DocsSidebar from "@/components/docs/DocsSidebar";

/** The shell for every docs page: the site navbar, the left sidebar and the footer. */
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5f5f5] text-[#171717]">
        <div className="mx-auto grid max-w-[1320px] gap-8 px-6 pb-20 pt-28 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-12 lg:pt-36">
          <DocsSidebar />
          <main className="min-w-0">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
}
