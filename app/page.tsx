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
import WhyAppnomicsSection from '@/components/sections/WhyUs';



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
      <DynamicHero />
      
      <div className="flex-grow flex flex-col justify-center px-6 py-6 md:py-8 w-full">  
        {/* 
          FIX 3: Ensure each internal section component uses 'w-full max-w-[1220px] mx-auto'
          inside their own files, or wrap them like this if you can't edit them:
        */}
        <div className="w-full max-w-[1220px] mx-auto">
          <ProcessSection />
          <WhyAppnomicsSection />
          <PricingSection />
          <PortfolioSection />
          <StudioOSSection />
          <FAQSection />
          <CTASection />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

}