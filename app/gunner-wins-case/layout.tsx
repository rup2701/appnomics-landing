import type { Metadata } from "next";
import { SITE_ORIGIN } from "@/components/docs/urls";

const title = "GunnerWins Case Study | Appnomics";
const description = "A sports prediction platform with subscription tiers, live feed ingestion, and a picks leaderboard.";
const url = `${SITE_ORIGIN}/gunner-wins-case`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
