"use client";

import { useState } from "react";
import Image from "next/image";

const BUILD_PATHS = ["All", "Builder", "MVP", "Startup"] as const;
const CATEGORIES = ["Website", "Online store", "Mobile app", "SaaS", "Gig app", "Sports app", "Telehealth"] as const;
type BuildPath = Exclude<(typeof BUILD_PATHS)[number], "All">;
type Category = (typeof CATEGORIES)[number];

type GalleryApp = {
  name: string;
  path: BuildPath;
  categories: Category[];
  tags: string[];
  description: string;
  liveUrl?: string;
  image?: string;
  idea?: string;
  sitePack?: "waitlist" | "showcase" | "local";
};

const APPS: GalleryApp[] = [
  {
    name: "Fernhollow", path: "Builder", categories: ["Online store"], tags: ["Commerce"],
    description: "A handmade ceramics store with mugs, bowls and custom engraving.",
    liveUrl: "https://fernhollow.store", image: "/images/fernhollow-store-template.png",
    idea: "A handmade ceramics store with mugs, bowls and custom engraving",
  },
  {
    name: "Alder & Vale", path: "Builder", categories: ["Online store"], tags: ["Commerce"],
    description: "A boutique clothing shop with seasonal drops and local pickup.",
    liveUrl: "https://aldervale.appnomics.live", image: "/images/aldervale-template.png",
    idea: "A boutique clothing shop with seasonal drops and local pickup",
  },
  {
    name: "Studio Avant", path: "Builder", categories: ["Website", "Online store"], tags: ["Art & Design"],
    description: "A portfolio and shop for an artist.",
    liveUrl: "https://studioavant.appnomics.live", image: "/images/avant-store-template.png",
    idea: "A portfolio and shop for a painter",
  },
  {
    name: "Ksandra", path: "Builder", categories: ["Website"], tags: ["Waitlist"],
    description: "A live waitlist website: a starting point for introducing your product and collecting signups.",
    liveUrl: "https://ksandra.appnomics.live/",
    idea: "A waitlist website for my product, with a product overview, features and a signup form.",
  },
  {
    name: "Tidewell Ring", path: "Builder", categories: ["Website"], tags: ["Waitlist"],
    description: "A product waitlist website built with Builder.",
    liveUrl: "https://tidewell-ring.appnomics.live/",
    idea: "A waitlist website for my product, with a product overview, features and a signup form.",
  },
  {
    name: "DispatchOS Waitlist", path: "Builder", categories: ["Website"], tags: ["Marketing", "Waitlist"],
    description: "The waitlist site for DispatchOS, built with Builder.",
    liveUrl: "https://dispatchos-waitlist.appnomics.live",
    idea: "A waitlist website for my product, with a product overview, features and a signup form.",
  },
  {
    name: "CurryLeaf", path: "Builder", categories: ["Website"], tags: ["Restaurant"],
    description: "A restaurant website with a menu, the restaurant's story, a gallery, and ways to book or order.",
    liveUrl: "https://curryleaf.appnomics.live",
    idea: "A website for my restaurant, with the menu, our story, a gallery and ways to book or order.",
    sitePack: "local",
  },
  {
    name: "InstaRoom", path: "MVP", categories: ["SaaS", "Telehealth"], tags: ["Healthcare"],
    description: "On-demand virtual appointment booking for independent practitioners, with scheduling, payments and calendar sync.",
    liveUrl: "https://getinstaroom.com/",
  },
  {
    name: "DispatchOS", path: "MVP", categories: ["SaaS"], tags: ["AI & Workflows", "Marketing"],
    description: "Turns the work you are already doing into a coherent story your market can understand.",
    liveUrl: "https://dispatchos.dev/",
  },
  {
    name: "MediaDance", path: "MVP", categories: ["SaaS"], tags: ["Infrastructure", "Beta"],
    description: "A media processing pipeline with background jobs, storage and a client-facing usage dashboard.",
  },
  {
    name: "PlaySquares", path: "Startup", categories: ["Mobile app", "Sports app"], tags: ["SportsTech"],
    description: "A mobile app for live scoring, winner notifications and custom leaderboards.",
    liveUrl: "https://playsquares.webflow.io/",
  },
];

export default function Gallery() {
  const [path, setPath] = useState<(typeof BUILD_PATHS)[number]>("All");
  const [category, setCategory] = useState<Category | null>(null);
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const available = APPS.filter((app) => path === "All" || app.path === path);
  const results = available.filter((app) =>
    (!category || app.categories.includes(category)) &&
    [app.name, app.description, app.path, ...app.categories, ...app.tags].join(" ").toLowerCase().includes(search)
  );

  function reset() {
    setPath("All");
    setCategory(null);
    setQuery("");
  }

  return (
    <div className="mx-auto max-w-[1100px] px-6 pb-32 pt-32 font-sans">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-[clamp(36px,5vw,56px)] leading-tight">Anything&apos;s possible.</h1>
        <p className="mx-auto max-w-2xl text-lg text-[#555]">
          Explore apps built with Builder and products shipped with our engineering team.
          Find inspiration, try a live example, or start with a proven idea.
        </p>
        <a
          href="mailto:info@appnomics.dev?subject=Appnomics%20Gallery%20submission"
          className="mt-6 inline-block rounded-lg bg-[#171717] px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-[#087a50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087a50]"
        >
          Add your app
        </a>
      </header>

      <div className="mb-6 flex flex-col gap-5 border-b border-[#d8d8d8] sm:flex-row sm:items-end sm:justify-between">
        <div role="group" aria-label="Build path" className="flex">
          {BUILD_PATHS.map((value) => (
            <button
              key={value} type="button" aria-pressed={path === value}
              onClick={() => { setPath(value); setCategory(null); }}
              className={`border-b-2 px-4 py-4 text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087a50] sm:text-lg ${
                path === value ? "border-[#171717] text-[#171717]" : "border-transparent text-[#555] hover:text-[#171717]"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
        <label className="mb-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2">
          <svg aria-hidden="true" className="h-5 w-5 text-[#555]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" />
          </svg>
          <span className="sr-only">Search gallery</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)}
            placeholder="Search apps" className="min-w-0 w-full bg-transparent text-sm outline-offset-4 sm:w-48" />
        </label>
      </div>

      <div role="group" aria-label="App type" className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((value) => {
          const count = available.filter((app) => app.categories.includes(value)).length;
          if (!count) return null;
          return (
            <button key={value} type="button" aria-pressed={category === value}
              onClick={() => setCategory(category === value ? null : value)}
              className={`rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087a50] ${
                category === value ? "bg-[#171717] text-white" : "bg-white text-[#555] hover:bg-[#e3ebe6]"
              }`}>
              {value} <span className="ml-1 text-xs">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="mb-6 flex items-center justify-between gap-4">
        <p role="status" className="text-sm text-[#555]">{results.length} {results.length === 1 ? "app" : "apps"}</p>
        {(path !== "All" || category || query) && (
          <button type="button" onClick={reset} className="text-sm text-[#087a50] underline underline-offset-4">Clear filters</button>
        )}
      </div>

      {results.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((app) => (
            <article key={app.name} className="flex flex-col overflow-hidden rounded-[20px] bg-white">
              {app.image ? (
                <div className="relative aspect-[4/3]">
                  <Image src={app.image} alt={`${app.name} app preview`} fill sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
              ) : (
                <div aria-hidden="true" className="flex aspect-[4/3] flex-col justify-center gap-4 bg-[#edf3ef] p-8 text-[#171717]">
                  <span className="font-mono text-xs uppercase tracking-widest">{app.categories[0]}</span>
                  <span className="text-3xl font-medium tracking-tight">{app.name}</span>
                  <div className="h-1.5 w-2/3 rounded-full bg-[#087a50]/20" />
                  <div className="h-1.5 w-1/2 rounded-full bg-[#087a50]/10" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#edf3ef] px-3 py-1 text-xs text-[#087a50]">
                    {app.path === "Builder" ? "Self-serve Builder" : `Engineering Partner · ${app.path}`}
                  </span>
                  {app.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f5f5f5] px-3 py-1 text-xs text-[#555]">{tag}</span>)}
                </div>
                <h3 className="mb-2 text-xl font-medium tracking-tight">{app.name}</h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#555]">{app.description}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-3 text-sm">
                  {app.liveUrl && <a href={app.liveUrl} target="_blank" rel="noreferrer" className="text-[#555] underline underline-offset-4">View live {app.name === "PlaySquares" ? "site" : "app"} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>}
                  {app.idea && <a href={`https://builder.appnomics.dev/?${app.categories.includes("Online store") ? "" : "kind=site&"}${app.sitePack ? `pack=${app.sitePack}&` : ""}idea=${encodeURIComponent(app.idea)}`}
                    className="text-[#087a50] underline underline-offset-4">Start with this idea <span aria-hidden="true">→</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[20px] bg-white p-12 text-center">
          <h2 className="mb-3 text-xl">No matching apps.</h2>
          <p className="mb-5 text-[#555]">Try another app type or search term.</p>
          <button type="button" onClick={reset} className="rounded-lg bg-[#171717] px-5 py-2 text-sm text-white">Reset gallery</button>
        </div>
      )}
      <section aria-labelledby="gallery-cta-title" className="mt-20 rounded-[20px] bg-[#ffdd66] px-6 py-14 text-center sm:px-12 sm:py-16">
        <h2 id="gallery-cta-title" className="text-[32px] font-medium leading-tight tracking-tight sm:text-[42px]">
          Your idea could be next.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#555]">
          Start a conversation with Scout and turn your idea into something live.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://builder.appnomics.dev"
            className="w-full rounded-lg bg-[#171717] px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-[#087a50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087a50] sm:w-auto"
          >
            Start building
          </a>
          <a
            href="mailto:rupesh@appnomics.dev"
            className="w-full rounded-lg border border-[#bbb] px-6 py-3 text-sm font-medium text-[#171717] no-underline transition-colors hover:border-[#087a50] hover:text-[#087a50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087a50] sm:w-auto"
          >
            Talk about your product
          </a>
        </div>
      </section>
    </div>
  );
}
