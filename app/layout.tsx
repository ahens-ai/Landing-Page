import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ahens.ai — AI Industrial Infrastructure", template: "%s | ahens.ai" },
  description: site.description,
  applicationName: site.name,
  keywords: ["AI infrastructure", "industrial AI", "AI operations", "agentic workflows"],
  openGraph: {
    title: "ahens.ai — AI Industrial Infrastructure",
    description: site.description,
    type: "website",
    siteName: site.name,
  },
  twitter: { card: "summary_large_image", title: "ahens.ai — AI Industrial Infrastructure", description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
