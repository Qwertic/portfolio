"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + windowHeight;

      if (documentHeight - scrollBottom < 50) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showFooter && (
        <motion.footer
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 z-50 w-full py-2 sm:py-4 text-center backdrop-blur-sm"
        >
          <div className="container mx-auto">
            <p className="text-xs sm:text-sm">
              {new Date().getFullYear()} Made with ❤️ and AI 🤖 by{" "}
              <Link
                href="https://github.com/qwertic"
                target="_blank"
                rel="noopener noreferrer"
              >
                @qwertic
              </Link>
            </p>
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  );
}
