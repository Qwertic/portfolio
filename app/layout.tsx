import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Qwertic's Portfolio",
  description: "Full Stack Developer, AI Enthusiast",
  referrer: "origin-when-cross-origin",
  creator: "Qwertic",
  metadataBase: new URL("https://qwertic.dev"),
  category: "technology",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "RoR",
    "Ruby on Rails",
    "Fullstack Developer",
    "Full Stack Developer",
    "Software Developer",
    "Coder",
    "Programming",
    "Svillupatore web",
    "Freelance Developer",
    "AI Developer",
    "Portfolio",
    "Remote Job",
    "NextJs Developer",
    "Rails Developer",
    "Coder",
    "React Developer",
    "LLM integrations",
    "Full remote Developer",
    "API development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Navbar />
        <main className="flex w-full mt-16 p-8 flex-wrap justify-between">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
