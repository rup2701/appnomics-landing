'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import DynamicHero from '@/components/DynamicHero';
import PricingSection from '@/components/sections/PricingSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import CTASection from '@/components/sections/CTASection';
import StudioOSSection from '@/components/sections/StudioOSSection';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/Navbar';
import ProductProofSection from '@/components/sections/ProductProofSection';
import WhoThisIsFor from '@/components/sections/WhoIsThisFor';
import HeroPrompt from '@/components/HeroPrompt';
import type { TabId } from '@/components/HeroPrompt';



export default function Home() {
  const [idea, setIdea] = useState('');
  const [heroTab, setHeroTab] = useState<TabId>('builder');
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
    <main className="min-h-screen bg-[#f5f5f5] text-[#171717] font-sans flex flex-col">
      {/* <DynamicHero /> */}
      
      <div className="w-full bg-[#edf3ef]">
        <HeroPrompt selectedTab={heroTab} onTabChange={setHeroTab} />
      </div>
      <div className="flex-grow flex flex-col justify-center px-6 pt-6 pb-0 md:pt-8 w-full">  
        {/* 
          FIX 3: Ensure each internal section component uses 'w-full max-w-[1220px] mx-auto'
          inside their own files, or wrap them like this if you can't edit them:
        */}
        <div className="w-full max-w-[1340px] mx-auto">
          <PricingSection />
          <WhoThisIsFor />   
          <StudioOSSection />  
          <ProductProofSection />
          <PortfolioSection />
          <FAQSection />
          <CTASection />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

}