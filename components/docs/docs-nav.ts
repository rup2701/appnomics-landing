import {
  Bot,
  CreditCard,
  FileSpreadsheet,
  Hammer,
  Handshake,
  LayoutDashboard,
  Mail,
  Paperclip,
  Palette,
  PenLine,
  ShoppingBag,
  Sparkles,
  Undo2,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export type NavItem = { label: string; href: string; icon: LucideIcon; soon?: boolean };
export type NavSection = { title: string; items: NavItem[] };

/** The docs sidebar. Add a page by adding one line here, with a lucide-react icon. href is the page path without /docs (app/docs/builder is "/builder"); links are made from it in urls.ts. soon: true shows a Soon tag. */
export const DOCS_NAV: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { label: "How the builder works", href: "/builder", icon: Hammer },
      { label: "Who it's for", href: "/who-its-for", icon: Users },
    ],
  },
  {
    title: "Scout",
    items: [
      { label: "Meet Scout", href: "/scout", icon: Bot },
      { label: "Attaching files", href: "/scout/attachments", icon: Paperclip },
      { label: "Writing good requests", href: "/scout/requests", icon: PenLine },
      { label: "Previews and undo", href: "/scout/changes", icon: Undo2 },
    ],
  },
  {
    title: "Recipes",
    items: [
      { label: "Waitlist site", href: "/recipes/waitlist-site", icon: Mail },
      { label: "Product showcase", href: "/recipes/product-showcase", icon: Sparkles },
      { label: "Restaurant site", href: "/recipes/restaurant-site", icon: UtensilsCrossed },
      { label: "Online store", href: "/recipes/online-store", icon: ShoppingBag },
      { label: "Creator app", href: "/recipes/creator-app", icon: Palette, soon: true },
    ],
  },
  {
    title: "After Launch",
    items: [
      { label: "Restaurant owner area", href: "/after-launch/owner-area", icon: LayoutDashboard },
      { label: "Menu from a spreadsheet", href: "/after-launch/menu-spreadsheet", icon: FileSpreadsheet },
    ],
  },
  {
    title: "Plans",
    items: [
      { label: "Self-serve plans", href: "/plans/self-serve", icon: CreditCard },
      { label: "Engineering partner", href: "/plans/engineering-partner", icon: Handshake },
    ],
  },
];
