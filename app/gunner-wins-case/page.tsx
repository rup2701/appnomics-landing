'use client';

import ImageCarousel from "@/components/ImageCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export default function GunnerPicksCaseStudy() {
  return (
    <>
      <Navbar/>
      <section className="py-24 border-t border-[#1a1a1a] bg-[#0d0d0d]">
        <div className="max-w-[1340px] mx-auto px-10">
          {/* Back link */}
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-[12px] text-[#888] font-mono hover:text-[#666] transition-colors no-underline mb-12"
          >
            ← Back to Portfolio
          </Link>

          {/* Hero */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] text-[#00d4ff] font-mono tracking-[0.15em] bg-[#00d4ff0d] border border-[#00d4ff33] px-3 py-1 rounded-[2px]">
                CASE STUDY
              </span>
              <span className="text-[10px] text-[#444] font-mono">/</span>
              <span className="text-[10px] text-[#666] font-mono">SPORTS / ANALYTICS</span>
            </div>

            <h1 className="text-[clamp(32px,4vw,48px)] font-bold text-[#e0e0e0] leading-[1.1] font-mono mb-4">
              GunnerWins
            </h1>
            <p className="text-lg text-[#777] font-mono leading-[1.7] max-w-[700px]">
              Sports prediction platform with subscription tiers, live feed ingestion, and a picks leaderboard.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a
                href="https://gunnerwins.com"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-[#00d4ff] font-mono border-b border-[#00d4ff33] hover:border-[#00d4ff] transition-colors no-underline"
              >
                gunnerpicks.com ↗
              </a>
              <span className="w-px h-4 bg-[#1f1f1f]" />
              <span className="text-[11px] text-[#444] font-mono">5 epics</span>
              <span className="w-px h-4 bg-[#1f1f1f]" />
              <span className="text-[11px] text-[#444] font-mono">5 weeks</span>
              <span className="w-px h-4 bg-[#1f1f1f]" />
              <span className="text-[11px] text-[#00ff9d] font-mono">● PAUSED</span>
            </div>
          </div>

          <ImageCarousel />

          {/* Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-lg font-bold text-[#fff9] uppercase tracking-[0.15em] font-mono mb-4">
                The Challenge
              </h3>
              <div className="space-y-4">
                <p className="text-MD text-[#888] font-mono leading-[1.8]">
                  Gunner came to us as a professional sports handicapper with a proven track record but no way to monetize his picks at scale.
                </p>
                <ul className="space-y-2">
                  {[
                    "No technical expertise to build a monetized platform",
                    "Webflow and Squarespace couldn't handle paywalls at the time",
                    "Needed to see MRR/ARR at a glance",
                    "Wanted a marketing-friendly platform to grow his audience",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-md text-[#999] font-mono leading-[1.6]">
                      <span className="text-[#ff4444] mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#fff9] uppercase tracking-[0.15em] font-mono mb-4">
                The Solution
              </h3>
              <ul className="space-y-2">
                {[
                  "Built a responsive, branded website highlighting the value proposition",
                  "Integrated Stripe + PayPal for subscription payments",
                  "User accounts with profile, email, and SMS delivery of picks",
                  "Subscription and billing system in the cloud",
                  "Admin dashboard with MRR/ARR metrics",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-md text-[#999] font-mono leading-[1.6]">
                    <span className="text-[#00ff9d] mt-1">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="border border-[#1f1f1f] rounded-[2px] p-6 text-center bg-[#00d4ff08]">
              <p className="text-[28px] font-bold text-[#00d4ff] font-mono">5</p>
              <p className="text-[10px] text-[#444] font-mono tracking-[0.1em] mt-1">EPICS</p>
            </div>
            <div className="border border-[#1f1f1f] rounded-[2px] p-6 text-center bg-[#00d4ff08]">
              <p className="text-[28px] font-bold text-[#00d4ff] font-mono">5</p>
              <p className="text-[10px] text-[#444] font-mono tracking-[0.1em] mt-1">WEEKS TO LAUNCH</p>
            </div>
            <div className="border border-[#1f1f1f] rounded-[2px] p-6 text-center bg-[#00d4ff08]">
              <p className="text-[28px] font-bold text-[#00d4ff] font-mono">100%</p>
              <p className="text-[10px] text-[#444] font-mono tracking-[0.1em] mt-1">CODE OWNERSHIP</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h3 className="text-[11px] font-bold text-[#444] uppercase tracking-[0.15em] font-mono mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Railway", "OpenAI", "Loops", "Stripe", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] text-[#666] font-mono border border-[#1f1f1f] px-3 py-1.5 rounded-[2px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="border-l-2 border-[#00d4ff] pl-6 py-2 mb-16 bg-[#00d4ff08] rounded-r-[2px] p-6">
            <p className="text-[13px] text-[#888] font-mono leading-[1.8] italic">
              "Appnomics took my idea and turned it into a real business in 5 weeks. 
              I went from zero to paying subscribers without touching a line of code. 
              The dashboard lets me see exactly what's working."
            </p>
            <p className="text-[11px] text-[#444] font-mono mt-4">— Gunner Picks</p>
          </div>

          {/* CTA */}
          <div className="border border-[#1f1f1f] rounded-[2px] p-8 text-center bg-[#0d0d0d]">
            <h4 className="text-[18px] font-bold text-[#e0e0e0] font-mono mb-2">
              Ready to build your MVP?
            </h4>
            <p className="text-[12px] text-[#666] font-mono mb-6">
              Let's scope your project in 24 hours.
            </p>
            <a
              href="/#intake"
              className="inline-block px-8 py-3 border border-[#00ff9d] rounded-[2px] text-[12px] font-bold text-[#00ff9d] font-mono no-underline hover:bg-[#00ff9d] hover:text-[#0a0a0a] transition-all duration-200"
            >
              START BUILDING →
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}