'use client';

import Image from "next/image";
import { useState, useRef, useEffect } from "react";


// ── Carousel images ──────────────────────────────────────────────────────
// Replace these with your actual image imports or URLs
const CAROUSEL_IMAGES = [
  {
    id: 1,
    src: "/gunnerwins/new-picks.png",
    alt: "Gunner Picks homepage",
    label: "Homepage",
    color: "#00d4ff",
  },
  // {
  //   id: 2,
  //   src: "/screenshots/gunner-dashboard.png",
  //   alt: "Member dashboard",
  //   label: "Dashboard",
  //   color: "#00d4ff",
  // },
  // {
  //   id: 3,
  //   src: "/screenshots/gunner-picks.png",
  //   alt: "Picks display",
  //   label: "Picks Feed",
  //   color: "#00d4ff",
  // },
  // {
  //   id: 4,
  //   src: "/screenshots/gunner-pricing.png",
  //   alt: "Pricing page",
  //   label: "Pricing",
  //   color: "#00d4ff",
  // },
  // {
  //   id: 5,
  //   src: "/screenshots/gunner-admin.png",
  //   alt: "Admin dashboard",
  //   label: "Admin",
  //   color: "#00d4ff",
  // },
  // {
  //   id: 6,
  //   src: "/screenshots/gunner-mobile.png",
  //   alt: "Mobile view",
  //   label: "Mobile",
  //   color: "#00d4ff",
  // },
];

// ── Carousel Section ────────────────────────────────────────────────────
export default function ImageCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Calculate max scroll
  useEffect(() => {
    const updateMaxScroll = () => {
      if (scrollRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const scrollWidth = scrollRef.current.scrollWidth;
        setMaxScroll(Math.max(0, scrollWidth - containerWidth));
      }
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth * 0.8;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(maxScroll, scrollPosition + scrollAmount);

      containerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  const scrollToImage = (index: number) => {
    if (containerRef.current && scrollRef.current) {
      const imageWidth = scrollRef.current.children[index]?.clientWidth || 0;
      const gap = 12;
      const targetPosition = index * (imageWidth + gap);
      containerRef.current.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    }
  };

  // const totalImages = CAROUSEL_IMAGES.length;
  // const totalImagess = 1

  return (
    <section className="py-12 border-t border-[#1a1a1a] bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-2">
    

        <div className="flex items-end justify-end mb-8">
          {/* Navigation arrows - desktop */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={scrollPosition === 0}
              className="w-10 h-10 border border-[#1f1f1f] rounded-[2px] flex items-center justify-center text-[#fff] hover:border-[#00d4ff44] hover:text-[#e0e0e0] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#1f1f1f] disabled:hover:text-[#444]"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={scrollPosition >= maxScroll - 10}
              className="w-10 h-10 border border-[#1f1f1f] rounded-[2px] flex items-center justify-center text-[#fff] hover:border-[#00d4ff44] hover:text-[#e0e0e0] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#1f1f1f] disabled:hover:text-[#444]"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="overflow-x-auto scrollbar-hide scroll-smooth relative"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div ref={scrollRef} className="flex gap-3 pb-4">
            {CAROUSEL_IMAGES.map((image) => (
              <div
                key={image.id}
                className="flex-shrink-0 w-[280px] md:w-[380px] lg:w-[1200px]"
              >
                <div className="border border-[#1f1f1f] rounded-[2px] overflow-hidden bg-[#0a0a0a]">
                  <div
                    className="w-full aspect-[16/10] bg-[#0a0a0a] flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, #0a0a0a 0%, #111 100%)`,
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      height={1200}
                      width={750}
                      style={{
                        width: "100%",
                        height: 'auto'
                      }}
                    />
                    {/* Placeholder gradient - replace with actual images */}
                    {/* <div className="w-full h-full flex flex-col items-center justify-center p-4">
                      <div
                        className="w-full h-full rounded-[2px] flex items-center justify-center"
                        style={{
                          background: `radial-gradient(circle at center, ${image.color}15 0%, transparent 70%)`,
                        }}
                      >
                        <div className="text-center">
                          <span
                            className="text-[48px] opacity-20"
                            style={{ color: image.color }}
                          >
                            {image.label === "Homepage" && "🏠"}
                            {image.label === "Dashboard" && "📊"}
                            {image.label === "Picks Feed" && "📈"}
                            {image.label === "Pricing" && "💰"}
                            {image.label === "Admin" && "⚙️"}
                            {image.label === "Mobile" && "📱"}
                          </span>
                          <p className="text-[11px] text-[#444] font-mono mt-2">
                            {image.alt}
                          </p>
                          <p className="text-[9px] text-[#333] font-mono">
                            Replace with actual screenshot
                          </p>
                        </div>
                      </div>
                    </div> */}

                    {/* Status indicator */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d]" />
                      <span className="text-[8px] text-[#00ff9d] font-mono tracking-[0.08em]">
                        LIVE
                      </span>
                    </div>

                    {/* Label overlay */}
                    <div className="absolute bottom-3 left-3">
                      <span
                        className="text-[9px] font-mono tracking-[0.1em] px-2 py-1 rounded-[2px]"
                        style={{
                          color: image.color,
                          background: `${image.color}11`,
                          border: `1px solid ${image.color}22`,
                        }}
                      >
                        {image.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fades */}
          <div
            className="absolute top-0 left-0 w-12 h-full pointer-events-none"
            style={{
              background: "linear-gradient(to right, #0d0d0d, transparent)",
              opacity: scrollPosition > 10 ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          />
          <div
            className="absolute top-0 right-0 w-12 h-full pointer-events-none"
            style={{
              background: "linear-gradient(to left, #0d0d0d, transparent)",
              opacity: scrollPosition < maxScroll - 10 ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          />
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {CAROUSEL_IMAGES.map((_, index) => {
            const isActive = (() => {
              if (!containerRef.current || !scrollRef.current) return index === 0;
              const imageWidth = scrollRef.current.children[index]?.clientWidth || 0;
              const gap = 12;
              const scrollPosition = containerRef.current.scrollLeft;
              const imageStart = index * (imageWidth + gap);
              const imageEnd = imageStart + imageWidth;
              const center = scrollPosition + containerRef.current.offsetWidth / 2;
              return center >= imageStart && center <= imageEnd;
            })();

            return (
              <button
                key={index}
                onClick={() => scrollToImage(index)}
                className="transition-all duration-200 rounded-full"
                style={{
                  width: isActive ? 20 : 6,
                  height: 4,
                  background: isActive ? "#00d4ff" : "#1f1f1f",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          })}
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-6">
          <button
            onClick={() => scroll("left")}
            disabled={scrollPosition === 0}
            className="px-6 py-2 border border-[#1f1f1f] rounded-[2px] text-[11px] text-[#444] font-mono hover:border-[#00d4ff44] hover:text-[#e0e0e0] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={scrollPosition >= maxScroll - 10}
            className="px-6 py-2 border border-[#1f1f1f] rounded-[2px] text-[11px] text-[#444] font-mono hover:border-[#00d4ff44] hover:text-[#e0e0e0] transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mt-4">
          <span className="text-[9px] text-[#333] font-mono tracking-[0.1em]">
            {CAROUSEL_IMAGES.length} screens · scroll to explore
          </span>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}