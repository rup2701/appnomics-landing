import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About Appnomics | Product Craft for the AGI Era",
  description:
    "Since 2013, Appnomics has built products from zero to one. We bring that product craft into the AGI era with Builder, agentic workflows, Appnomics Cloud, and human expertise.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Design for people",
    description:
      "Good software starts with understanding people and the work they need to do. Design and UX are part of the product foundation, not a finishing pass.",
  },
  {
    number: "02",
    title: "Make the hard parts easier",
    description:
      "AI can generate quickly. Architecture, integrations, data, and edge cases are what make a product dependable as real users arrive.",
  },
  {
    number: "03",
    title: "Keep human ingenuity in the loop",
    description:
      "Agents handle repeatable work; people bring context, taste, and judgment to the decisions that shape a product and its experience.",
  },
];

type ProductIconName = "sparkles" | "cloud" | "people";

const PRODUCTS: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  action: string;
  icon: ProductIconName;
}[] = [
  {
    eyebrow: "SELF-SERVE",
    title: "Builder + Scout",
    icon: "sparkles",
    description:
      "Start with a business idea. Scout helps shape the intent, while Builder and its agents turn it into a working app you can make your own.",
    href: "https://builder.appnomics.dev",
    action: "Explore Builder",
  },
  {
    eyebrow: "YOUR PRODUCT WORKSPACE",
    title: "Appnomics Cloud",
    icon: "cloud",
    description:
      "Keep the product’s roadmap, artifacts, deployments, environment details, team access, and handover together in one place.",
    href: "/#studio",
    action: "See Appnomics Cloud",
  },
  {
    eyebrow: "HUMAN-IN-THE-LOOP",
    title: "Engineering partnership",
    icon: "people",
    description:
      "When a product needs a hands-on team, we bring product and engineering experience to the architecture, workflows, and details that matter.",
    href: "mailto:rupesh@appnomics.dev",
    action: "Talk about your product",
  },
];

function ProductIcon({ name }: { name: ProductIconName }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "sparkles" ? (
        <>
          <path d="m12 3.5 1.9 5.6 5.6 1.9-5.6 1.9-1.9 5.6-1.9-5.6-5.6-1.9 5.6-1.9L12 3.5Z" />
          <path d="M19 15v5m-2.5-2.5h5" />
        </>
      ) : name === "cloud" ? (
        <>
          <path d="M7.5 18h9.2a4.3 4.3 0 0 0 .4-8.6 5.4 5.4 0 0 0-10.4-1.1A4.9 4.9 0 0 0 7.5 18Z" />
          <path d="M12 13v6m-2.5-2.5L12 19l2.5-2.5" />
        </>
      ) : (
        <>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3.5 20v-1a5.5 5.5 0 0 1 11 0v1m0-4a4.5 4.5 0 0 1 6 4" />
        </>
      )}
    </svg>
  );
}

const WORK = [
  {
    name: "InstaRoom",
    context: "Healthcare · Telehealth",
    description:
      "Virtual appointment booking for independent practitioners, with scheduling, payments, and calendar sync.",
    href: "https://getinstaroom.com/",
  },
  {
    name: "DispatchOS",
    context: "Generative AI · Marketing",
    description:
      "A product that helps turn the work you’re already doing into a coherent story your market can understand.",
    href: "https://dispatchos.dev/",
  },
  {
    name: "PlaySquares",
    context: "Mobile · SportsTech",
    description:
      "A mobile experience for live scoring, winner notifications, and custom leaderboards.",
    href: "https://playsquares.webflow.io/",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f5f5f5] text-[#171717]">
        <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-[#171717] px-6 py-32 sm:py-36">
          <Image
            src="/images/background-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-center opacity-40"
          />
          <div className="relative mx-auto max-w-[1100px]">
            <p className="mb-5 font-mono text-xs tracking-[0.18em] text-[#6ee7b7]">
              APPNOMICS · BUILDING SINCE 2013
            </p>
            <h1 className="max-w-4xl text-[#ded5ca]! text-[clamp(42px,7vw,76px)] leading-[1.04] tracking-tight">
              A decade of product craft. Built for the AGI era.
            </h1>
            <p className="mt-7 max-w-3xl text-[#ded5ca]! text-lg leading-relaxed sm:text-xl">
              We’ve spent more than a decade taking products from zero to one.
              Now we’re bringing that experience into a new way to build—with
              AI Builder, agentic workflows, and people in the loop where
              judgment matters most.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://builder.appnomics.dev"
                className="rounded-lg bg-[#ded5ca] px-6 py-3 text-sm font-medium text-[#171717] no-underline transition-colors hover:bg-white"
              >
                Explore Builder
              </a>
              <a
                href="mailto:rupesh@appnomics.dev"
                className="rounded-lg border border-[#ded5ca]/50 bg-transparent px-6 py-3 text-sm font-medium text-[#ded5ca] no-underline transition-colors hover:border-[#ded5ca] hover:bg-white/10"
              >
                Talk about your product
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="mb-4 font-mono text-xs tracking-[0.16em] text-[#087a50]">
                THE SHIFT
              </p>
              <h2 className="text-[36px] font-medium leading-tight tracking-tight sm:text-[42px]">
                When code gets easier, craft matters more.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-[#555] sm:text-lg">
              <p>
                AI changes the economics of making software. It doesn&apos;t remove
                the need to understand the people using it, make sound product
                decisions, or design an experience that feels right.
              </p>
              <p>
                We believe more of the meaningful work will happen at the
                edges: clarifying intent, shaping UX, connecting real-world
                workflows, and knowing which details will matter when a
                product meets its users.
              </p>
              <p className="font-medium text-[#171717]">
                That’s the point of view we’re building into the Appnomics
                platform—not just generating more code, but helping turn good
                ideas into thoughtful products.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 font-mono text-xs tracking-[0.16em] text-[#087a50]">
                WHAT WE’RE BUILDING
              </p>
              <h2 className="text-[36px] font-medium leading-tight tracking-tight sm:text-[42px]">
                One platform. More than one way to build.
              </h2>
            </div>
            <div className="flex flex-col gap-5 md:gap-6">
              {PRODUCTS.map((product, index) => (
                <article
                  key={product.title}
                  className={`relative flex w-full flex-col rounded-[20px] bg-[#f5f5f5] p-8 sm:p-10 md:w-[45%] md:max-w-[560px] ${
                    index % 2 === 1 ? "md:ml-auto" : ""
                  }`}
                >
                  <span className="absolute right-8 top-8 grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#087a50] sm:right-10 sm:top-10">
                    <ProductIcon name={product.icon} />
                  </span>
                  <p className="mb-4 pr-20 font-mono text-[10px] tracking-[0.14em] text-[#087a50]">
                    {product.eyebrow}
                  </p>
                  <h3 className="pr-20 text-2xl font-medium tracking-tight">
                    {product.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#555] sm:text-base">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#087a50] underline underline-offset-4"
                  >
                    {product.action} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 font-mono text-xs tracking-[0.16em] text-[#087a50]">
                WHAT GUIDES THE WORK
              </p>
              <h2 className="text-[36px] font-medium leading-tight tracking-tight sm:text-[42px]">
                Automation with intention. Craft at every layer.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {PRINCIPLES.map((principle) => (
                <article
                  key={principle.number}
                  className="rounded-[20px] bg-[#e9eeeb] p-6 sm:p-7"
                >
                  <p className="mb-8 font-mono text-xs tracking-[0.14em] text-[#087a50]">
                    {principle.number}
                  </p>
                  <h3 className="text-xl font-medium tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#555] sm:text-base">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#edf3ef] px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 font-mono text-xs tracking-[0.16em] text-[#087a50]">
                BUILT IN THE REAL WORLD
              </p>
              <h2 className="text-[36px] font-medium leading-tight tracking-tight sm:text-[42px]">
                Product craft comes from shipping.
              </h2>
              <p className="mt-4 leading-relaxed text-[#555]">
                Our experience spans consumer apps, healthcare, generative AI,
                and the infrastructure behind digital products.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {WORK.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[20px] bg-white p-6 sm:p-7"
                >
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[#087a50]">
                    {item.context}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight">
                    {item.name}
                  </h3>
                  <p className="mt-3 min-h-20 text-sm leading-relaxed text-[#555] sm:text-base">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#087a50] underline underline-offset-4"
                  >
                    Visit {item.name} <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </article>
              ))}
            </div>
            <Link
              href="/gallery"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#087a50] underline underline-offset-4"
            >
              Explore the Gallery <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="px-6 py-24 text-center sm:py-32">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 font-mono text-xs tracking-[0.16em] text-[#087a50]">
              THE NEXT CHAPTER
            </p>
            <h2 className="text-[36px] font-medium leading-tight tracking-tight sm:text-[48px]">
              Build what matters. Bring the craft with you.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#555]">
              Start with Builder, or work with us to bring your product from
              idea to launch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="https://builder.appnomics.dev"
                className="rounded-lg bg-[#171717] px-6 py-3 text-sm font-medium text-white no-underline transition-colors hover:bg-[#087a50]"
              >
                Start with Builder
              </a>
              <a
                href="mailto:rupesh@appnomics.dev"
                className="rounded-lg bg-[#edf3ef] px-6 py-3 text-sm font-medium text-[#171717] no-underline transition-colors hover:text-[#087a50]"
              >
                Book a discovery call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
