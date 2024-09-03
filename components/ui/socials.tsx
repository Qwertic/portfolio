import Image from "next/image";

interface SocialLink {
  href: string;
  icon: string;
  alt: string;
  text: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/qwertic",
    icon: "/github-logo.svg",
    alt: "Github",
    text: "Github",
  },
  {
    href: "https://www.linkedin.com/in/regi-voda",
    icon: "/linkedin.svg",
    alt: "LinkedIn",
    text: "LinkedIn",
  },
  {
    href: "mailto:0xQwertic@proton.me",
    icon: "/mail.svg",
    alt: "Email",
    text: "0xQwertic@proton.me",
  },
];

export default function Socials() {
  return (
    <div className="w-full md:w-auto">
      <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
        Connect with me:
      </h2>
      <ul className="flex sm:flex-wrap flex-row sm:flex-row gap-4 md:gap-2 text-gray-400">
        {socialLinks.map((link, index) => (
          <li key={index} className="w-1/2 sm:w-auto md:w-full">
            <a
              className="flex items-center hover:text-gray-200 text-sm md:text-base"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={link.icon}
                alt={link.alt}
                width={16}
                height={16}
                className="text-gray-500 mr-2"
              />
              <span className="hidden sm:inline">{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
