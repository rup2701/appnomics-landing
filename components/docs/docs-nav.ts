import {
  Bot,
  CreditCard,
  FileSpreadsheet,
  Hammer,
  Handshake,
  LayoutDashboard,
  Mail,
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

/** The docs sidebar. Add a page by adding one line here, with a lucide-react icon. soon: true shows a Soon tag. */
export const DOCS_NAV: NavSection[] = [
  {
    title: "Get Started",
    items: [
      { label: "How the builder works", href: "/docs/builder", icon: Hammer },
      { label: "Who it's for", href: "/docs/who-its-for", icon: Users },
    ],
  },
  {
    title: "Recipes",
    items: [
      { label: "Waitlist site", href: "/docs/recipes/waitlist-site", icon: Mail },
      { label: "Product showcase", href: "/docs/recipes/product-showcase", icon: Sparkles },
      { label: "Restaurant site", href: "/docs/recipes/restaurant-site", icon: UtensilsCrossed },
      { label: "Online store", href: "/docs/recipes/online-store", icon: ShoppingBag },
      { label: "Creator app", href: "/docs/recipes/creator-app", icon: Palette, soon: true },
    ],
  },
  {
    title: "After Launch",
    items: [
      { label: "Restaurant owner area", href: "/docs/after-launch/owner-area", icon: LayoutDashboard },
      { label: "Menu from a spreadsheet", href: "/docs/after-launch/menu-spreadsheet", icon: FileSpreadsheet },
    ],
  },
  {
    title: "Scout",
    items: [
      { label: "Meet Scout", href: "/docs/scout", icon: Bot },
      { label: "Writing good requests", href: "/docs/scout/requests", icon: PenLine },
      { label: "Previews and undo", href: "/docs/scout/changes", icon: Undo2 },
    ],
  },
  {
    title: "Plans",
    items: [
      { label: "Self-serve plans", href: "/docs/plans/self-serve", icon: CreditCard },
      { label: "Engineering partner", href: "/docs/plans/engineering-partner", icon: Handshake },
    ],
  },
];
