import {
  TypographyH1,
  TypographyP,
  TypographyLead,
  TypographyLarge,
  TypographyInlineCode,
} from "@/components/ui/typography";
import Skills from "@/components/ui/skills";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="w-2/3 overflow-y-auto p-8">
        <div className="max-w-3xl mx-auto">
          <TypographyH1>{"I'm Regi (a.k.a Qwertic)"}</TypographyH1>
          <div className="mt-8">
            <TypographyLead>
              {"I'm a full-stack developer currently based in Italy 🍕"}
            </TypographyLead>
            <br />
            <br />
            <TypographyLarge className="mb-6">{`Tech Skills`}</TypographyLarge>
            <Skills />
            <TypographyLarge className="mt-6">{`About me`}</TypographyLarge>
            <TypographyP>{`Born in Albania, raised between Greece and Italy, grown as a curious, polyglot, creative, generalist, poliedric, accountable individual. I made a major pivot in 2020 when I decided to attend a coding bootcamp (LeWagon) in Milan, Italy, which brought me into the fantasctic and fascinating world of programming!`}</TypographyP>
            <TypographyP>
              {`I started the hard way, learning by my self but then things got better, found a mentor and the learning curve went up 📈 thankfully, many thanks to Gianluca 🙏 CTO at `}
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://callbell.eu"
              >
                Callbell
              </a>
            </TypographyP>
            <TypographyP>
              {`I'm confortable working with`}{" "}
              <TypographyInlineCode>
                Ruby on Rails, React, Postgres
              </TypographyInlineCode>{" "}
              {`and some other technologies. I'm not afraid of getting my hands dirty with tech, languages or frameworks that I don't know. Always eager to learn new things!`}{" "}
            </TypographyP>
            <TypographyP>{`Don't know what's next for me but I'm open to the endless opportunities out there. My interests range from tech to nature, philosophy, music, theatre, body expression, meditation, spirituality, travelling, culture, society and self growth. `}</TypographyP>
            <br />
            <br />
            <TypographyLarge>{`Hobbies`}</TypographyLarge>
            <TypographyP>{`I'm attracted naturally by arts, such as music, theatre, dance, in different forms and shapes. I'm attracted by humanistics, anthropology, tribalism, naturalism, society, philosophy and more. I'm a big fan of the body and mind and I practice meditation.
              I enjoy to immerse myself in nautre, and different cultures.
              `}</TypographyP>
            <br />
            <br />
            <TypographyLarge>{`Beyond Work`}</TypographyLarge>
            <TypographyP>
              {`Beyond my technical skills and hobbies, I deeply value continuous learning,
                  meaningful connections, and making a positive impact. I'm passionate about
                  fostering inclusive communities, promoting sustainability, and leveraging
                  technology to solve real-world problems. These values drive my personal and
                  professional endeavors, shaping my approach to both work and life. I also
                  value free time and self growth. Growth is not ment only for the future, but
                  for the present. We grow by learning new things, experiencing new things and
                  helping each other to not only survive, but also thrive. Not only related to
                  professional growth, but also related to personal, interior and spiritual
                  growth. `}
            </TypographyP>
          </div>
        </div>
      </div>

      {/* Fixed right column (1/3 width) */}
      <div className="w-1/3 fixed right-0 my-auto h-screen p-8 overflow-y-auto">
        <div className="flex-shrink-0 mb-8 shadow-2xl shadow-blue-500/20">
          <Image
            src="/logo.png"
            alt="Profile picture"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <h2 className="text-xl font-semibold mb-4">Connect with me:</h2>
        <ul className="space-y-2 text-gray-400">
          <li>
            <a
              className="flex items-center hover:text-gray-200"
              href="https://github.com/qwertic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-logo.svg"
                alt="Github"
                width={16}
                height={16}
                className="text-gray-500 mr-2"
              />
              Github
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-gray-200"
              href="https://www.linkedin.com/in/regi-voda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={16}
                height={16}
                className="text-gray-500 mr-2"
              />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-gray-200"
              href="mailto:0xQwertic@proton.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/mail.svg"
                alt="Email"
                width={16}
                height={16}
                className="text-gray-500 mr-2"
              />
              0xQwertic@proton.me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
