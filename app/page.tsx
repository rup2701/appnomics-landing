'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DynamicHero from '@/components/DynamicHero';

export default function Home() {
  const [idea, setIdea] = useState('');
  const router = useRouter();

  const handleEnter = () => {
    if (!idea.trim()) return;
    console.log('Idea saved:', idea);
    router.push('/auth');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleEnter();
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-mono flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <span className="text-sm font-bold tracking-widest text-gray-300">
          appnomics
        </span>
        <button className="text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-full px-4 py-1.5 transition">
          <Link href="/auth">
            Sign in
          </Link>
        </button>
      </nav>

      <DynamicHero />

      {/* Main content — flex column, pushes footer down */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-6 md:py-8">
        <div className="max-w-3xl w-full text-center">

          {/* Hero */}
          {/* <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Your AI cofounder —<br />
              <span className="text-gray-400">without the equity split.</span>
            </h1>
            <div className="w-12 h-0.5 bg-gray-700 mx-auto mt-4" />
          </div> */}

          {/* Textarea with Enter button */}
          {/* <div className="relative mb-10">
            <textarea
              placeholder="Describe your idea..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 pr-14 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 resize-none"
              rows={2}
            />
            <button
              onClick={handleEnter}
              className="absolute bottom-3 right-3 text-xs text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-md px-3 py-1 transition"
            >
              Let&apos;s go →
            </button>
          </div> */}

          {/* Capability Grid */}
          <h2 className="mb-4 text-xl font-semibold text-white md:text-2xl opacity-[0.5]  ">
           Everything needed to run your idea autonomously
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-300 mb-10 py-6 md:py-8">
            {[
              'Strategy & Roadmap',
              'Build & Deploy',
              'GTM & Ads',
              'Billing & Support',
              'Infra & Security',
              'Revenue & Analytics',
            ].map((label) => (
              <div
                key={label}
                className="border border-gray-800 rounded-xl px-4 py-3 text-center hover:border-gray-600 transition"
              >
                {label}
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div className="py-6 md:py-8">
            <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
              Launch your idea in 48 hours<br />
              and run your business with confidence.
            </p>
            <div className="mt-6">
              <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                <Link href="/auth">
                  Start building
                </Link>
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required · Free to start
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-xs text-gray-600 flex flex-wrap justify-center gap-6 border-t border-gray-800 py-4 px-6">
        <a href="#" className="hover:text-gray-400 transition">About</a>
        <a href="#" className="hover:text-gray-400 transition">Terms</a>
        <a href="#" className="hover:text-gray-400 transition">Privacy</a>
        <a href="#" className="hover:text-gray-400 transition">Contact</a>
      </footer>
    </main>
  );
}