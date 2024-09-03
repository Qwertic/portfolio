import { HeroBoxes } from "@/components/ui/hero-boxes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flipWords";
import Image from "next/image";

const message =
  "Hello Qwertic, I'm reaching you out from your website, can we talk?";
const wamiLink = `https://wa.me/${
  process.env.PHONE_NUMBER
}?text=${encodeURIComponent(message)}`;

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between p-4 sm:p-8 md:p-16 lg:p-24">
      <div className="min-h-[60vh] relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <HeroBoxes />
        <p className="text-foreground text-lg sm:text-xl md:text-2xl z-20 mb-2 sm:mb-4">
          Hello 👋 it&apos;s me
        </p>
        <h1
          className={cn(
            "text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground relative z-20 mb-2 sm:mb-4"
          )}
        >
          Qwertic
        </h1>
        <div className="z-20 mb-4 sm:mb-6">
          <FlipWords
            words={[
              "Fullstack Developer",
              "AI Enthusiast",
              "A little bit of this",
              "A little bit of that",
            ]}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-20">
          <Button className="w-full sm:w-auto" asChild>
            <Link href={wamiLink} target="_blank" rel="noopener noreferrer">
              <Image
                src="/wa-logo.svg"
                alt="WhatsApp"
                width={16}
                height={16}
                className="text-gray-500 mr-2"
              />
              Send me a message
            </Link>
          </Button>
          <Button className="w-full sm:w-auto" variant="outline" asChild>
            <Link href="/about">Read about me</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
