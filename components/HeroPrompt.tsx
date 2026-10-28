"use client";
import Image from "next/image";

/**
 * Appnomics hero + three-tab prompt area.
 *
 * Tabs say what you want from us (Builder, Startup, MVP). Pills say what kind of
 * product. Builder + Online store and Website are live; everything else renders
 * disabled, and the Startup and MVP tabs send visitors to the contact page.
 *
 * Builder shows three store templates as picture cards. Each card draws its own
 * illustration, so there are no image files to host. To use a real screenshot
 * instead, set `image` on that entry in TEMPLATES.
 *
 * Uses the site's existing theme colours (bg-background, text-foreground) and
 * font-sans, so there is nothing to add to globals.css.
 *
 * Wiring: pass `onSubmit` to receive { tab, pill, text }. The store questions
 * and NLP connect there.
 */

import { useId, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";

export type TabId = "builder" | "startup" | "mvp";
export type PillId = "store" | "mobile" | "website" | "saas" | "gig" | "sports" | "telehealth";
export type HeroBrief = { tab: TabId; pill: PillId | null; text: string };

type Props = {
  onSubmit?: (brief: HeroBrief) => void;
  /** Where Startup and MVP visitors go. The idea is appended as ?idea=… */
  contactHref?: string;
};

/* ---------- Copy and config: edit here ---------- */

const HEADLINE = "What will you launch?";

const TABS: { id: TabId; label: string; helper: string; placeholder: string }[] = [
  {
    id: "builder",
    label: "Builder",
    helper: "Describe it and our agents build it, starting from a tested foundation.",
    placeholder: "Describe what you want to launch…",
  },
  {
    id: "startup",
    label: "Startup",
    helper: "From first idea to something investors take seriously. Built with you.",
    placeholder: "Tell us about your startup idea…",
  },
  {
    id: "mvp",
    label: "MVP",
    helper: "A focused first version you can put in front of real users.",
    placeholder: "What should your first version do…",
  },
];

const PILLS: Record<PillId, { label: string; icon: ReactNode }> = {
  store: { label: "Online store", icon: <path d="M4 9l1.5-5h13L20 9M4 9v1a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0V9M5 12v8h14v-8M10 20v-5h4v5" /> },
  mobile: { label: "Mobile app", icon: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></> },
  website: { label: "Website", icon: <><rect x="3" y="4.5" width="18" height="15" rx="2.5" /><path d="M3 9h18" /></> },
  saas: { label: "SaaS", icon: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" /> },
  gig: { label: "Gig app", icon: <><rect x="3" y="7.5" width="18" height="12" rx="2" /><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 13h18" /></> },
  sports: { label: "Sports app", icon: <path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M10 17h4M8.5 20h7" /> },
  telehealth: { label: "Telehealth", icon: <path d="M12 20s-8-4.6-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20zM7 12h3l1.5-2.5 2 4L15 12h2" /> },
};

const PILL_ORDER: Record<TabId, PillId[]> = {
  builder: ["store", "mobile", "website", "saas", "gig", "sports", "telehealth"],
  startup: ["mobile", "saas", "telehealth", "sports", "gig", "store", "website"],
  mvp: ["mobile", "saas", "telehealth", "sports", "gig", "store", "website"],
};

/** Pills that actually work, per tab. Everything else is disabled. */
const LIVE: Record<TabId, PillId[]> = { builder: ["store", "website"], startup: [], mvp: [] };

const STORE_PLACEHOLDER = "Describe the store you want to launch, like a handmade ceramics shop…";

type Example = { label: string; text: string };

/** Text chips for the Startup and MVP tabs. */
const FOUNDER_EXAMPLES: Example[] = [
  { label: "Coaching app", text: "A mobile app that helps independent fitness coaches manage clients and sessions" },
  { label: "Telehealth app", text: "A telehealth app for independent practitioners to see patients by video" },
  { label: "Gig marketplace", text: "A marketplace app that connects local gig workers with nearby jobs" },
  { label: "Team stats app", text: "A sports app that tracks team schedules, stats and standings" },
  { label: "Agency dashboard", text: "A SaaS dashboard that shows a small agency its projects and revenue" },
  { label: "App proposal", text: "A project proposal for a new mobile app, with goals, timeline, resources and budget" },
];

const EXAMPLES_SHOWN = 3;

/* ---------- Template illustrations (original drawings, no image files) ---------- */

const artProps = {
  viewBox: "0 0 320 240",
  preserveAspectRatio: "xMidYMid slice",
  className: "h-full w-full",
  "aria-hidden": true,
} as const;

function CeramicsArt() {
  const speckles: [number, number][] = [[62, 138], [78, 150], [96, 134], [70, 168], [100, 162], [88, 178], [58, 156]];
  return (
    <svg {...artProps}>
      <rect width="320" height="240" fill="#ead9c6" />
      <rect y="192" width="320" height="48" fill="#d9c1a6" />
      <rect y="190" width="320" height="6" fill="#c7a98a" />
      {/* mug */}
      <path d="M116 130h12a17 17 0 0 1 0 36h-12" fill="none" stroke="#b4644a" strokeWidth="10" strokeLinecap="round" />
      <rect x="46" y="112" width="70" height="80" rx="12" fill="#b4644a" />
      <ellipse cx="81" cy="113" rx="35" ry="7" fill="#8f4a35" />
      {speckles.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" fill="#f3e4d3" />
      ))}
      {/* bowl */}
      <path d="M150 150h112c0 30-24 44-56 44s-56-14-56-44z" fill="#f2e8dc" />
      <ellipse cx="206" cy="150" rx="56" ry="9" fill="#d8c3aa" />
      <ellipse cx="206" cy="151" rx="47" ry="6" fill="#e9d7c1" />
      {/* bud vase with dried stems */}
      <path d="M287 92C287 72 282 58 276 46M287 92C288 72 296 60 304 52M287 92C287 76 287 62 287 40" fill="none" stroke="#8a6f4a" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="276" cy="43" rx="4.5" ry="9" transform="rotate(-18 276 43)" fill="#c58b4a" />
      <ellipse cx="305" cy="49" rx="4.5" ry="9" transform="rotate(24 305 49)" fill="#c58b4a" />
      <ellipse cx="287" cy="34" rx="4.5" ry="9" fill="#c58b4a" />
      <path d="M282 92h10v20c14 9 18 30 18 48v32h-46v-32c0-18 4-39 18-48z" fill="#6f7d6a" />
    </svg>
  );
}

function BoutiqueArt() {
  return (
    <svg {...artProps}>
      <rect width="320" height="240" fill="#e5dde6" />
      <rect y="204" width="320" height="36" fill="#d3c7d6" />
      <path d="M20 40H300" stroke="#7d6f84" strokeWidth="4" strokeLinecap="round" />
      {/* dress 1 */}
      <path d="M110 40v6M110 46L80 66h60z" fill="none" stroke="#5b4d63" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M92 66h36l8 26-14 14 20 92H78l20-92-14-14z" fill="#7b3f61" />
      <path d="M99 108h22" stroke="#5d2d49" strokeWidth="3" strokeLinecap="round" />
      {/* dress 2 */}
      <path d="M210 40v6M210 46l-30 20h60z" fill="none" stroke="#5b4d63" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M192 66h36l8 26-14 14 20 92H178l20-92-14-14z" fill="#dba596" />
      <path d="M199 108h22" stroke="#b9786a" strokeWidth="3" strokeLinecap="round" />
      {/* folded knits */}
      <rect x="20" y="186" width="54" height="18" rx="3" fill="#a9b8a5" />
      <rect x="20" y="168" width="54" height="18" rx="3" fill="#e6cfae" />
      <rect x="20" y="150" width="54" height="18" rx="3" fill="#6f7a96" />
      {/* tote */}
      <path d="M270 158c0-26 24-26 24 0" fill="none" stroke="#a89677" strokeWidth="4" strokeLinecap="round" />
      <rect x="262" y="156" width="40" height="48" rx="4" fill="#c8b79d" />
    </svg>
  );
}

function PlantsArt() {
  const big = [-62, -38, -14, 10, 34, 58];
  const small = [-65, -35, -10, 12, 38, 64];
  const vineLeaves: [number, number, number][] = [[237, 150, -30], [241, 178, 25], [256, 162, 30], [254, 190, -25], [268, 150, -35], [266, 172, 20]];
  return (
    <svg {...artProps}>
      <rect width="320" height="240" fill="#dce6d9" />
      <rect y="206" width="320" height="34" fill="#c9d7c4" />
      {/* big plant */}
      {big.map((a, i) => (
        <ellipse key={a} cx="90" cy="108" rx="14" ry="44" transform={`rotate(${a} 90 152)`} fill={i % 2 ? "#5b9a6b" : "#3f7a52"} />
      ))}
      <path d="M58 164h64l-8 42H66z" fill="#c0714f" />
      <rect x="52" y="150" width="76" height="14" rx="5" fill="#cf8461" />
      {/* succulent */}
      {small.map((a, i) => (
        <ellipse key={a} cx="183" cy="164" rx="7" ry="17" transform={`rotate(${a} 183 180)`} fill={i % 2 ? "#6fa27f" : "#86b394"} />
      ))}
      <path d="M164 188h38l-5 18h-28z" fill="#e6d8c0" />
      <rect x="160" y="178" width="46" height="10" rx="4" fill="#efe4d0" />
      {/* hanging planter */}
      <path d="M240 0l14 104M268 0l-14 104M254 0v104" fill="none" stroke="#a58c6a" strokeWidth="2" />
      <path d="M240 134C234 156 242 176 236 198M252 134C256 160 250 184 256 204M264 134C270 152 264 172 270 190" fill="none" stroke="#4b8a5f" strokeWidth="3" strokeLinecap="round" />
      {vineLeaves.map(([x, y, r], i) => (
        <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="7" ry="3.8" transform={`rotate(${r} ${x} ${y})`} fill={i % 2 ? "#5b9a6b" : "#3f7a52"} />
      ))}
      <path d="M232 106h44l-6 28h-32z" fill="#b88a5e" />
      <rect x="230" y="100" width="48" height="8" rx="3" fill="#c99d70" />
    </svg>
  );
}

type Template = { id: string; label: string; caption: string; text: string; art: ReactNode; image?: string, demoUrl?: string };

const TEMPLATES: Template[] = [
  { id: "fernhollow", label: "Fernhollow", caption: "Handmade goods", text: "A handmade ceramics store with mugs, bowls and custom engraving", image: "/images/fernhollow-store-template.png", art: <CeramicsArt />, demoUrl: "https://fernhollow.store" },
  { id: "boutique", label: "Alder & Vale", caption: "Designer fashion", text: "A boutique clothing shop with seasonal drops and local pickup", image: "/images/aldervale-template.png", art: <BoutiqueArt />, demoUrl: "https://aldervale.appnomics.live"},
  { id: "art", label: "Studio Avant", caption: "Art and portfolio", text: "A portfolio and shop for a painter", image: "/images/avant-store-template.png", art: <PlantsArt />, demoUrl: "https://studioavant.appnomics.live" },
];

const WEBSITE_TEMPLATES: Template[] = [
  {
    id: "website-mvp",
    label: "Ksandra",
    caption: "MVP",
    demoUrl: "https://ksandra-ai.netlify.app/",
    text: "A website for my MVP with a product overview, features, pricing and a signup form",
    art: <div className="flex h-full flex-col justify-center gap-3 bg-emerald-50 p-5 text-emerald-950 sm:p-8"><span className="text-[10px] font-mono">YOUR PRODUCT</span><span className="text-lg leading-tight sm:text-2xl">An idea.<br />A first launch.</span><span className="h-2 w-3/4 bg-emerald-900/15" /><span className="h-6 w-1/2 rounded bg-emerald-800" /></div>,
  },
  {
    id: "website-portfolio",
    label: "Studio Avant",
    caption: "Portfolio",
    demoUrl: "https://studioavant.appnomics.live/",
    text: "A personal portfolio website with selected projects, an about section and a contact form",
    art: <div className="flex h-full flex-col justify-center gap-3 bg-sky-50 p-5 text-sky-950 sm:p-8"><span className="text-[10px] font-mono">SELECTED WORK</span><span className="text-lg leading-tight sm:text-2xl">Made with<br />purpose.</span><div className="grid grid-cols-2 gap-2"><span className="h-10 bg-sky-200" /><span className="h-10 bg-rose-200" /></div></div>,
  },
  {
    id: "website-resume",
    label: "Resume / Personal site",
    caption: "Resume / Personal site",
    text: "A professional resume website with my experience, skills, education and contact details",
    art: <div className="flex h-full flex-col justify-center gap-3 bg-neutral-100 p-5 text-neutral-900 sm:p-8"><span className="text-[10px] font-mono">YOUR NAME</span><span className="text-lg leading-tight sm:text-2xl">Experience<br />that matters.</span><span className="h-2 w-full bg-neutral-300" /><span className="h-2 w-3/4 bg-neutral-300" /><span className="h-2 w-1/2 bg-neutral-300" /></div>,
  },
];

/* ---------- Small pieces ---------- */

function Icon({ children, className = "h-6 w-6" }: { children: ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

/* ---------- Component ---------- */

export default function HeroPrompt({ onSubmit, contactHref = "/contact" }: Props) {
  const uid = useId();
  const [tab, setTab] = useState<TabId>("builder");
  const [pill, setPill] = useState<PillId | null>("store");
  const [text, setText] = useState("");
  const [template, setTemplate] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [round, setRound] = useState(0);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const boxRef = useRef<HTMLTextAreaElement>(null);

  const current = TABS.find((t) => t.id === tab)!;
  const live = LIVE[tab];
  const isBuilder = tab === "builder";
  const storeSelected = isBuilder && pill === "store";
  const websiteSelected = isBuilder && pill === "website";
  const templates = websiteSelected ? WEBSITE_TEMPLATES : TEMPLATES;

  const shown = Array.from({ length: EXAMPLES_SHOWN }, (_, i) => FOUNDER_EXAMPLES[(round * EXAMPLES_SHOWN + i) % FOUNDER_EXAMPLES.length]);
  const placeholder = storeSelected ? STORE_PLACEHOLDER : websiteSelected ? "Describe the website you want to launch…" : current.placeholder;

  function selectTab(next: TabId, focus = false) {
    setTab(next);
    setPill(LIVE[next][0] ?? null);
    setTemplate(null);
    setStatus("");
    setRound(0);
    if (focus) tabRefs.current[next]?.focus();
  }

  function onTabKey(e: KeyboardEvent<HTMLButtonElement>) {
    const i = TABS.findIndex((t) => t.id === tab);
    let n = -1;
    if (e.key === "ArrowRight") n = (i + 1) % TABS.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = TABS.length - 1;
    if (n < 0) return;
    e.preventDefault();
    selectTab(TABS[n].id, true);
  }

  function togglePill(id: PillId) {
    if (!live.includes(id)) return;
    setPill((p) => (p === id ? null : id));
    setTemplate(null);
    setStatus("");
  }

  function fillPrompt(value: string) {
    setText(value);
    setStatus("");
    boxRef.current?.focus();
  }

  function submit() {
    const value = text.trim();
    if (!value) {
      setStatus("Add a sentence about your idea first.");
      boxRef.current?.focus();
      return;
    }
    onSubmit?.({ tab, pill, text: value });
    setStatus(websiteSelected ? "Thanks. Website setup is opening soon." : "Thanks. Store setup is opening soon.");
  }

  const contactLink = `${contactHref}${contactHref.includes("?") ? "&" : "?"}idea=${encodeURIComponent(text.trim())}`;
  const buttonClass = `inline-flex shrink-0 items-center rounded-xl border border-foreground/25 bg-transparent px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background ${focusRing}`;

  return (
    <section aria-labelledby={`${uid}-title`} className="mx-auto w-full max-w-3xl px-4 pb-16 pt-32 text-center sm:pt-40">
      <h1 id={`${uid}-title`} className="text-balance text-3xl leading-[1.04] sm:text-5xl">
        {HEADLINE}
      </h1>

      {/* Tabs */}
      <div role="tablist" aria-label="What do you want from us?" className="mx-auto mt-10 inline-flex rounded-full bg-foreground/[0.06] p-1">
        {TABS.map((t) => {
          const active = t.id === tab;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[t.id] = el;
              }}
              id={`${uid}-tab-${t.id}`}
              role="tab"
              type="button"
              aria-selected={active}
              aria-controls={`${uid}-panel`}
              tabIndex={active ? 0 : -1}
              onClick={() => selectTab(t.id)}
              onKeyDown={onTabKey}
              className={`rounded-full px-5 py-2 text-sm transition-colors sm:px-6 ${focusRing} ${
                active ? "bg-white text-foreground shadow-sm" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${tab}`} className="mt-5">
        {/* Prompt card */}
        <div className="rounded-3xl border border-foreground/10 bg-white p-5 text-left transition-colors focus-within:border-foreground/30 sm:p-6">
          <label htmlFor={`${uid}-prompt`} className="sr-only">
            Describe your idea
          </label>
          <textarea
            id={`${uid}-prompt`}
            ref={boxRef}
            value={text}
            rows={2}
            placeholder={placeholder}
            onChange={(e) => {
              setText(e.target.value);
              if (status) setStatus("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && isBuilder) {
                e.preventDefault();
                submit();
              }
            }}
            className="field-sizing-content block max-h-64 min-h-[4.5rem] w-full resize-none bg-transparent text-xl leading-snug text-foreground outline-none placeholder:text-foreground/35 sm:text-2xl"
          />
          <div className="mt-4 flex items-center justify-between gap-4">
            <p role="status" aria-live="polite" className="min-h-5 text-sm text-foreground/60">
              {status}
            </p>
            {isBuilder ? (
              <button type="button" onClick={submit} className={buttonClass}>
                Let’s go <span aria-hidden="true">&nbsp;→</span>
              </button>
            ) : (
              <a href={contactLink} className={buttonClass}>
                Talk to us <span aria-hidden="true">&nbsp;→</span>
              </a>
            )}
          </div>
        </div>
        <p className="mt-3 text-left text-sm text-foreground/60">{current.helper}</p>

        {/* Pills: wrap and centre at every width */}
        <div role="group" aria-label="What are you making?" className="mt-8 flex flex-wrap justify-center gap-x-3 gap-y-4">
          {PILL_ORDER[tab].map((id) => {
            const p = PILLS[id];
            const enabled = live.includes(id);
            const selected = pill === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={enabled ? selected : undefined}
                aria-disabled={!enabled}
                aria-label={enabled ? p.label : `${p.label}, coming soon`}
                title={enabled ? undefined : "Coming soon"}
                onClick={() => togglePill(id)}
                className={`flex w-[4.5rem] shrink-0 flex-col items-center gap-2 rounded-2xl text-center min-[380px]:w-20 ${focusRing} ${enabled ? "" : "cursor-not-allowed"}`}
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl border transition-colors ${
                    selected && enabled
                      ? "border-foreground bg-foreground text-background"
                      : enabled
                        ? "border-foreground/10 bg-white text-foreground hover:border-foreground/40"
                        : "border-foreground/10 bg-white/50 text-foreground/35"
                  }`}
                >
                  <Icon>{p.icon}</Icon>
                </span>
                <span className={`text-xs leading-tight ${enabled ? "text-foreground" : "text-foreground/40"}`}>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Templates */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-foreground/60">
          <span>Start with a template</span>
          {!isBuilder && (
            <button
              type="button"
              aria-label="Show different templates"
              onClick={() => setRound((r) => r + 1)}
              className={`grid h-8 w-8 place-items-center rounded-full text-foreground/60 transition-colors hover:bg-foreground/[0.06] hover:text-foreground ${focusRing}`}
            >
              <Icon className="h-4 w-4">
                <path d="M20 11a8 8 0 0 0-14.5-4M4 5v3.5h3.5M4 13a8 8 0 0 0 14.5 4M20 19v-3.5h-3.5" />
              </Icon>
            </button>
          )}
        </div>

        {isBuilder ? (
          <ul data-testid="templates" className="mx-auto mt-4 grid max-w-6xl grid-cols-3 gap-2 sm:gap-4">
            {templates.map((t) => {
              const selected = template === t.id;
              return (
                <li key={t.id} className="min-w-0">
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      setTemplate(t.id);
                      fillPrompt(t.text);
                    }}
                    className={`group block w-full rounded-2xl text-left ${focusRing}`}
                  >
                    <span
                      className={`block aspect-[4/3] overflow-hidden rounded-2xl border bg-white transition-colors ${
                        selected ? "border-foreground" : "border-foreground/10 group-hover:border-foreground/40"
                      }`}
                    >
                      {t.image ?
                        <Image
                          className="h-full w-full object-cover"
                          src={t.image}
                          alt=""
                          height={400}
                          width={400}
                        /> :
                        t.art}
                    </span>
                    <span className="mt-4 block truncate text-sm text-foreground">{t.caption}</span>
                    {/* <span className="block truncate text-sm text-foreground/50">{t.caption}</span> */}
                  </button>
                  {t.demoUrl && (
                    <a
                      href={t.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="block text-left underline-offset-4 hover:underline text-xs"
                    >
                      {t.label} ↗
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <ul data-testid="chips" className="mt-3 flex flex-wrap justify-center gap-2">
            {shown.map((ex) => (
              <li key={ex.label}>
                <button
                  type="button"
                  onClick={() => fillPrompt(ex.text)}
                  className={`rounded-xl border border-foreground/10 bg-white px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground/40 ${focusRing}`}
                >
                  {ex.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}