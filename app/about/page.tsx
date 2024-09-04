import {
  TypographyH1,
  TypographyP,
  TypographyLead,
  TypographyLarge,
  TypographyInlineCode,
} from "@/components/ui/typography";
import Skills from "@/components/ui/skills";
import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/ui/socials";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-3xl mx-auto">
          <TypographyH1 className="text-3xl sm:text-4xl lg:text-5xl">
            {"I'm Regi (a.k.a Qwertic)"}
          </TypographyH1>
          <div className="mt-4 sm:mt-6 lg:mt-8">
            <TypographyLead className="text-lg sm:text-xl lg:text-2xl">
              {"I'm a full-stack developer currently based in Italy 🍕"}
            </TypographyLead>
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <TypographyLarge className="mb-4 sm:mb-5 lg:mb-6">{`Tech Skills`}</TypographyLarge>
              <Skills />
              <TypographyLarge className="mt-6 sm:mt-8 lg:mt-10">{`About me`}</TypographyLarge>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">{`Born in Albania, raised between Greece and Italy, grown as a curious, polyglot, creative, generalist, poliedric, accountable individual. I made a major pivot in 2020 when I decided to attend a coding bootcamp (LeWagon) in Milan, Italy, which brought me into the fantastic and fascinating world of programming!`}</TypographyP>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`I started the hard way, learning by myself, but then things got better. I found a mentor and the learning curve went up 📈 thankfully, many thanks to Gianluca 🙏 CTO at `}
                <Link
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://callbell.eu"
                >
                  Callbell
                </Link>
              </TypographyP>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`I'm comfortable working with`}{" "}
                <TypographyInlineCode>
                  Ruby on Rails, React, Postgres
                </TypographyInlineCode>{" "}
                {`and some other technologies. I'm not afraid of getting my hands dirty with tech, languages, or frameworks that I don't know. Always eager to learn new things!`}{" "}
              </TypographyP>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">{`Don't know what's next for me but I'm open to the endless opportunities out there.`}</TypographyP>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <TypographyLarge>{`Interests`}</TypographyLarge>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">{`I'm naturally attracted to arts, such as music, theatre, and dance, in different forms and shapes. I'm drawn to humanities, anthropology, tribalism, society, philosophy, and more. I'm a big fan of the body and mind, and I practice meditation.
                I enjoy immersing myself in nature and different cultures.
                `}</TypographyP>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <TypographyLarge>{`Beyond Work`}</TypographyLarge>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`Beyond my technical skills and hobbies, I deeply value continuous learning,
                    meaningful connections, and making a positive impact. I'm passionate about
                    fostering inclusive communities, promoting sustainability, and leveraging
                    technology to solve real-world problems. These values drive my personal and
                    professional endeavors, shaping my approach to both work and life. I also
                    value free time and self-growth. Growth is not just for the future, but
                    for the present. We grow by learning new things, experiencing new things and
                    helping each other to not only survive, but also thrive. We grow in different
                    ways, professionally and personally, spiritually and mentally, physically and
                    emotionally. `}
              </TypographyP>
            </div>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="w-full lg:w-1/3 lg:fixed lg:right-0 lg:h-screen p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="flex-shrink-0 mb-6 sm:mb-8 shadow-2xl shadow-blue-500/20">
          <Image
            src="/logo.png"
            alt="Profile picture"
            width={400}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <Socials />
      </div>
    </div>
  );
}
