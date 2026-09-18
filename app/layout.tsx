import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MowLocal Leads — Fresh Lawn-Care Leads Across NC",
  description: "Find fresh, location-aware lawn mowing leads from connected and permitted sources across North Carolina.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
