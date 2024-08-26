"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9AibHqbr4n2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react"; // Add useState and useEffect
import { isBrowser } from "framer-motion";

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Works",
    link: "/works",
  },
  {
    label: "Notes",
    link: "#",
  },
];
let path = "";

if (isBrowser) {
  path = window.location.pathname;
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(path);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-lg font-bold flex items-center gap-2"
          prefetch={false}
        >
          <Image src="/logo-2.svg" alt="Qwertic" width={20} height={20} />
          Qwertic
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          {links.map((link) => (
            <div key={link.link} className="relative">
              {" "}
              <Link
                href={link.link}
                className={
                  activeLink === link.link
                    ? "text-sm font-medium text-foreground hover:text-gray-200"
                    : "text-sm font-medium text-muted-foreground transition-colors hover:text-gray-200"
                }
                onClick={() => setActiveLink(link.link)}
                prefetch={false}
              >
                {link.label}
              </Link>
              {activeLink === link.link && (
                <div className="absolute top-6 left-0 right-0 bottom-0 h-1 bg-gray-200" />
              )}
            </div>
          ))}
          <Button>Download CV</Button>
        </nav>
      </div>
    </header>
  );
}
