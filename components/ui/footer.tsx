import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 w-full py-4 text-center backdrop-blur-sm">
      <div className="container mx-auto">
        <p className="text-sm">
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
    </footer>
  );
}
