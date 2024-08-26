import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Qwertic's Portfolio",
  description: "Full Stack Developer, AI Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <Navbar />
        <main className="flex w-full mt-16 p-8 flex-wrap justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
