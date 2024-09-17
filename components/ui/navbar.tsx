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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    link: "/notes",
  },
];
let path = "";

if (isBrowser) {
  path = window.location.pathname;
}

const DropdownNavigation = ({
  activeLink,
  setActiveLink,
}: {
  activeLink: string;
  setActiveLink: (link: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image
            src={"/menu.svg"}
            alt="Menu icon"
            className="h-6 w-6"
            width={24}
            height={24}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {links.map((link) => (
          <DropdownMenuItem key={link.link}>
            <Link
              href={link.link}
              className={activeLink === link.link ? "font-bold" : ""}
              onClick={() => {
                setActiveLink(link.link);
                setOpen(false);
              }}
            >
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <Button className="w-full" onClick={() => setOpen(false)}>
            Download CV
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

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
          <Image
            className="rounded-full border border-gray-800"
            src="/logo.png"
            alt="Qwertic"
            width={32}
            height={32}
          />
          Qwertic
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <div key={link.link} className="relative">
              <Link
                href={link.link}
                className={
                  activeLink === link.link
                    ? "text-sm font-bold text-foreground hover:text-gray-200"
                    : "text-sm font-medium text-muted-foreground transition-colors hover:text-gray-200"
                }
                onClick={() => setActiveLink(link.link)}
                prefetch={false}
              >
                {link.label}
              </Link>
              {activeLink === link.link && (
                <>
                  <div className="top-6 left-0 right-0 bottom-0 h-1 bg-gray-800 rounded-full" />
                  <div className="absolute top-6 z-10 left-0 right-0 bottom-0 h-1 bg-gray-200 rounded-full" />
                </>
              )}
            </div>
          ))}

          <Button>Download CV</Button>
        </nav>
        <div className="md:hidden">
          <DropdownNavigation
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
      </div>
    </header>
  );
}
