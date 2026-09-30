import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

const SITE = "https://p2penvsync.vercel.app";
const title = "EnvSync — P2P Encrypted .env Sync for Dev Teams";
const description =
  "EnvSync is a peer-to-peer, end-to-end encrypted env sync tool for dotenv files. LAN-first, offline-first secrets management for developer teams — no server, no cloud, open source team collaboration.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title,
  description,
  keywords: [
    "env sync",
    "dotenv",
    "secrets management",
    "peer-to-peer",
    "encrypted",
    "developer tools",
    "team collaboration",
    ".env sharing",
  ],
  authors: [{ name: "RismanRJ" }],
  openGraph: { title, description, url: SITE, siteName: "EnvSync", type: "website" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EnvSync",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Linux, Windows",
  description,
  url: SITE,
  license: "https://opensource.org/licenses/MIT",
  author: { "@type": "Person", name: "RismanRJ" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
