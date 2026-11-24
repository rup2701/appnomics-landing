export const BUILD_PATHS = ["All", "Builder", "MVP", "Startup"] as const;
export const CATEGORIES = ["Website", "Online store", "Mobile app", "SaaS", "Gig app", "Sports app", "Telehealth"] as const;
type BuildPath = Exclude<(typeof BUILD_PATHS)[number], "All">;
export type Category = (typeof CATEGORIES)[number];

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

export const APPS: GalleryApp[] = [
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
    name: "SureBetz", path: "Builder", categories: ["SaaS"], tags: ["Sports", "Marketing"],
    description: "A sports picks subscription website with daily picks for major American leagues in season.",
    liveUrl: "https://sbetz.appnomics.live",
    idea: "A product website for a sports picks subscription, with features, pricing and how it works.",
    sitePack: "showcase",
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
    name: "EZLinks", path: "MVP", categories: ["SaaS", "Mobile app"], tags: ["Developer tools"],
    description: "A deep-linking platform that handles the plumbing for links to your app.",
    liveUrl: "https://ezlinks.netlify.app/",
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
    liveUrl: "https://telehealth-marketing.vercel.app/",
  },
  {
    name: "PlaySquares", path: "Startup", categories: ["Mobile app", "Sports app"], tags: ["SportsTech"],
    description: "A mobile app for live scoring, winner notifications and custom leaderboards.",
    liveUrl: "https://playsquares.webflow.io/",
  },
];

