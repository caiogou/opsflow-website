import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpsFlow Advisory — Supply Chain Excellence for EMEA",
  description: "Supply chain advisory for companies across EMEA. Planning Excellence, Inventory Optimisation, Supply Risk & Distribution Planning. MIT-certified. 17 years EMEA & LATAM. Start with a free 90-min diagnostic session.",
  keywords: "supply chain consulting, S&OP, IBP, inventory optimisation, EMEA, Switzerland, supply chain advisory",
  openGraph: {
    title: "OpsFlow Advisory — Supply Chain Excellence for EMEA",
    description: "Senior supply chain advisory for companies across EMEA. Free 90-min diagnostic session to start.",
    url: "https://opsflow-advisory.ch",
    siteName: "OpsFlow Advisory",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsFlow Advisory",
    description: "Supply chain excellence for companies across EMEA.",
  },
  metadataBase: new URL("https://opsflow-advisory.ch"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
