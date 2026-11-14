/**
 * Screenshots live in public/docs/builder/. Set available to true once the file is there;
 * until then the slot renders nothing, so the page ships without broken images.
 */
export const SHOTS = {
  scout: { file: "01-scout-first-message.png", alt: "Scout's first message and the first answer in the Builder chat", available: false },
  plan: { file: "02-interview-page-plan.png", alt: "Scout asking an interview question, with the page plan shown as sections to switch on or off", available: false },
  brief: { file: "03-brief-panel.png", alt: "The brief in the side panel, with drafted wording and unconfirmed claims flagged", available: false },
  build: { file: "04-build-in-progress.png", alt: "The build in progress", available: false },
  ready: { file: "05-ready-card.png", alt: "The ready card with the live address and the Check these before you share it list", available: false },
  change: { file: "06-change-plan.png", alt: "Scout's plan for a change, with a title, bullet points and the Make this change button", available: false },
  preview: { file: "07-design-preview.png", alt: "A design preview with before and after pictures and the Approve and publish, Ask for changes and Remove this change buttons", available: false },
  publishing: { file: "08-making-permanent.png", alt: "The card after approval, saying checks passed and the change is being made permanent, with a second request waiting behind it", available: false },
  live: { file: "09-live-change-undo.png", alt: "A live change with the Open your live site link and the red Undo this change button", available: false },
  restaurantPlan: { file: "10-restaurant-plan-card.png", alt: "Scout's plan card for a restaurant site, listing the sections, with empty ones marked as placeholders", available: false },
  restaurantReady: { file: "11-restaurant-ready-card.png", alt: "The ready card for a restaurant site with the live address and the Check these before you share it list", available: false },
  restaurantPlaceholders: { file: "12-restaurant-placeholders.png", alt: "A new restaurant site showing coming soon blocks, Dish 1 to Dish 4 cards and Photo tiles", available: false },
  menuAttach: { file: "13-menu-file-attach.png", alt: "The Builder chat after a menu spreadsheet was attached, with Scout's summary of the sections and dishes it found", available: false },
  ownerLogin: { file: "14-owner-sign-in.png", alt: "The owner sign-in page of a restaurant site", available: false },
  ownerMenu: { file: "15-owner-menu-editor.png", alt: "The owner area menu editor with sections, dishes, prices, Hide boxes and Up and Down links", available: false },
  ownerUpload: { file: "16-owner-upload-preview.png", alt: "The owner area spreadsheet upload showing the preview and the Replace my menu button", available: false },
  ownerRequests: { file: "17-owner-table-requests.png", alt: "The owner area list of table requests with their status", available: false },
} as const;

export type ShotKey = keyof typeof SHOTS;

export default function Shot({ id, caption, className = "" }: { id: ShotKey; caption?: string; className?: string }) {
  const shot = SHOTS[id];
  if (!shot.available) return null;
  return (
    <figure className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/docs/builder/${shot.file}`} alt={shot.alt} loading="lazy" className="h-auto w-full rounded-[16px] border border-black/10 bg-white" />
      {caption ? <figcaption className="mt-3 text-sm text-[#555]">{caption}</figcaption> : null}
    </figure>
  );
}
