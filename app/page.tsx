'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import DynamicHero from '@/components/DynamicHero';
import PricingSection from '@/components/sections/PricingSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import CTASection from '@/components/sections/CTASection';
import StudioOSSection from '@/components/sections/StudioOSSection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/Navbar';



export default function Home() {
  const [idea, setIdea] = useState('');
  const router = useRouter();
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    if (!idea.trim()) return;
    console.log('Idea saved:', idea);
    router.push('/auth');
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (e.key === 'Enter' && !e.shiftKey) {
  //     e.preventDefault();
  //     handleEnter();
  //   }
  // };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white font-mono flex flex-col">

        {/* Navbar */}
        {/* <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <span>
            <Image
              src='/appnomics-1.svg'
              alt='appnomics logo'
              height={24}
              width={110}
            />
          </span>
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="text-sm text-gray-400 hover:text-white border-1 border border-[#00ff9d] font-bold rounded-[2px] hover:border-gray-500  px-4 py-1.5  transition-all duration-150"
            style={{
              background: hovered ? "#00ff9d" : "transparent",
              color: hovered ? "#0a0a0a" : "#00ff9d",
              boxShadow: hovered ? "0 0 32px #00ff9d44" : "0 0 12px #00ff9d22",
            }}>
            <Link href="/auth">
              Sign in
            </Link>
          </button>
        </nav> */}

        <DynamicHero />

        {/* Main content — flex column, pushes footer down */}
        <div className="flex-grow flex flex-col items-center justify-center px-6 py-6 md:py-8">
          <div className="max-w-3xl w-full text-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300 mb-10 py-6 md:py-8">
              {[
                'Strategy & Roadmap',
                'Infra & Security',
                'Build & Deploy',
                // 'GTM & Ads',
                // 'Billing & Support',
                // 'Revenue & Analytics',
              ].map((label) => (
                <div
                  key={label}
                  className="border border-gray-800 rounded-xl px-4 py-3 text-center hover:border-gray-600 transition"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <PortfolioSection />
          <ProcessSection />
          <PricingSection />
          <StudioOSSection />
          <FAQSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}