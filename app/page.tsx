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
    <main className="flex w-full flex-col items-center justify-between p-24">
      <div className="h-[60vh] relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <HeroBoxes />
        <p className="text-white text-2xl z-20">Hello 👋 it&apos;s me</p>
        <h1 className={cn("text-8xl text-white relative z-20")}>Qwertic</h1>
        <FlipWords
          words={[
            "Fullstack Developer",
            "AI Enthusiast",
            "A little bit of this",
            "A little bit of that",
          ]}
        />
        <div className="flex items-center justify-between">
          <Button className="mt-4 mr-4 z-20" asChild>
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
          <Button className="mt-4 z-20" variant="outline" asChild>
            <Link href="/about">Read about me</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
