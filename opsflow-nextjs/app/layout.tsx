import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpsFlow Advisory — Supply Chain Excellence for EMEA",
  description: "Supply chain advisory for companies across EMEA. Planning Excellence, Inventory Optimisation, Supply Risk & Distribution Planning. MIT-certified. 17 years EMEA & LATAM.",
  metadataBase: new URL("https://opsflow-advisory.ch"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
