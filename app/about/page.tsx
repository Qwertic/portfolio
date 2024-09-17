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
            {"Hello, I'm Regi (aka Qwertic)"}
          </TypographyH1>
          <div className="mt-4 sm:mt-6 lg:mt-8">
            <TypographyLead className="text-lg sm:text-xl lg:text-2xl">
              {"I'm a full-stack developer currently based in Italy 🍕"}
            </TypographyLead>
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <TypographyLarge className="mb-4 sm:mb-5 lg:mb-6">{`Tech Skills`}</TypographyLarge>
              <Skills />
              <TypographyLarge className="mt-6 sm:mt-8 lg:mt-10">{`My Journey`}</TypographyLarge>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`Life, to me, is a tapestry of experiences. Born in Albania, raised between Greece and Italy, I've grown into a curious, polyglot, creative, and multifaceted individual. In 2020, I took a leap into the fascinating world of programming by attending a coding bootcamp (LeWagon) in Milan, Italy. It was a pivotal moment that opened up a new path in my life.`}
              </TypographyP>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`My learning journey started the hard way, but things got better when I found a mentor. Many thanks to Gianluca 🙏, CTO at `}
                <Link
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://callbell.eu"
                >
                  Callbell
                </Link>
                {`, who helped accelerate my growth in this field.`}
              </TypographyP>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`I'm comfortable working with `}
                <TypographyInlineCode>
                  Ruby on Rails, React, Postgres
                </TypographyInlineCode>
                {`, and I'm always eager to learn new technologies. The beauty of this journey lies in its unpredictability, and I'm excited about the endless possibilities ahead.`}
              </TypographyP>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <TypographyLarge>{`Beyond the Code`}</TypographyLarge>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`I'm naturally drawn to the arts - music, theatre, and dance in their various forms. The humanities fascinate me, from anthropology and philosophy to the intricacies of society and tribalism. I'm a firm believer in the mind-body connection and practice meditation regularly.`}
              </TypographyP>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`Nature and diverse cultures captivate me, offering endless opportunities for learning and growth. I believe there are so many lives we can live within one lifetime, so many paths to explore. This realization drives me to share my journey and experiences.`}
              </TypographyP>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <TypographyLarge>{`Personal Growth and Expression`}</TypographyLarge>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`As someone on the neurodivergent spectrum, expressing my thoughts and feelings hasn't always been easy. Writing has become my most effective tool for articulating and processing my inner world. This website is a step towards vulnerability and sharing my authentic self.`}
              </TypographyP>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`I deeply value continuous learning, meaningful connections, and making a positive impact. My goal is to foster inclusive communities, promote sustainability, and leverage technology to solve real-world problems. These values drive both my personal and professional endeavors.`}
              </TypographyP>
              <TypographyP className="mt-2 text-sm sm:text-base lg:text-lg">
                {`Remember, growth isn't just for the future - it's for the present. We grow by learning, experiencing, and helping each other not just survive, but thrive. Whether it's professionally, personally, spiritually, or emotionally, I'm committed to this journey of growth and self-expression.`}
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
