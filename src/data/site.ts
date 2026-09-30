// Contact. Leave BOOKING_URL empty until a scheduling link exists;
// the "Book a call" button then falls back to an email with a call subject.
export const EMAIL = "0xQwertic@proton.me";
export const BOOKING_URL = "";
export const LINKEDIN = "https://www.linkedin.com/in/regi-voda";
export const GITHUB = "https://github.com/Qwertic";
// Drop a PDF at public/Regi_Voda_CV.pdf and the CV link appears.
export const CV_PATH = "/Regi_Voda_CV.pdf";

export const bookingHref =
  BOOKING_URL ||
  `mailto:${EMAIL}?subject=${encodeURIComponent("Call request from qwertic.xyz")}`;

export type Status = "firing" | "prep" | "served";

export const statusLabel: Record<Status, string> = {
  firing: "Firing",
  prep: "In prep",
  served: "Served",
};

export const statusNote: Record<Status, string> = {
  firing: "live now",
  prep: "in progress",
  served: "shipped",
};

export type Ticket = {
  id: string;
  no: string;
  title: string;
  table: string;
  when: string;
  status: Status;
  stations: string[];
  lines: string[];
};

export const tickets: Ticket[] = [
  {
    id: "assistant",
    no: "241",
    title: "AI assistant",
    table: "EdTech credentialing platform",
    when: "2024 - now",
    status: "firing",
    stations: ["LLM", "API", "UI"],
    lines: [
      "Reads the documents users upload: PDF, DOCX, XML",
      "LLM extraction into structured data",
      "Human review before anything reaches a verified record",
      "AdonisJS and PostgreSQL API, Next.js frontends, TDD-first",
    ],
  },
  {
    id: "memory",
    no: "242",
    title: "Agent memory",
    table: "Own project",
    when: "In progress",
    status: "prep",
    stations: ["LLM", "Tooling"],
    lines: [
      "MCP server for coding agents",
      "One shared, searchable knowledge base across agents",
      "A human reviews what gets written",
      "Not public yet",
    ],
  },
  {
    id: "chat",
    no: "203",
    title: "Core chat module",
    table: "Callbell",
    when: "2020 - 2024",
    status: "served",
    stations: ["API", "UI"],
    lines: [
      "The platform's core customer-messaging feature",
      "Millions of messages a day",
      "Reliability through testing and bug prevention",
    ],
  },
  {
    id: "crm",
    no: "204",
    title: "CRM, from scratch",
    table: "Callbell",
    when: "2020 - 2024",
    status: "served",
    stations: ["DB", "API", "UI"],
    lines: [
      "Designed and built in Rails and React",
      "Replaced WhatsApp contact lists and third-party CRMs",
      "Every lead in one view, with notes and team handoffs",
      "Used daily across multiple teams",
    ],
  },
  {
    id: "api",
    no: "205",
    title: "Public API",
    table: "Callbell",
    when: "2020 - 2024",
    status: "served",
    stations: ["API"],
    lines: [
      "Co-designed the Rails API partners build on",
      "Then its first consumer: the Zapier and Zoho integrations",
    ],
  },
];

export const stations = [
  {
    name: "Database",
    items: ["PostgreSQL schema design and migrations", "Redis", "Vector stores"],
  },
  {
    name: "API",
    items: ["Ruby on Rails, AdonisJS, Node and Bun", "REST and OpenAPI design", "A public API partners integrate against"],
  },
  {
    name: "Frontend",
    items: ["React, Next.js, Astro", "Design systems: rebuilt Callbell's UI and component library", "React Native"],
  },
  {
    name: "LLM",
    items: ["Assistants and agents in production", "RAG, structured output, validation", "Human-in-the-loop review", "MCP, Vercel AI SDK, OpenAI Agents"],
  },
  {
    name: "Tooling",
    items: ["Claude Code every day, with my own skills", "TDD", "Docker, AWS, GitHub Actions, Turborepo"],
  },
];

export const record = [
  { when: "2024 - now", where: "Freelance, remote", what: "AI features and full-stack product for clients." },
  { when: "2020 - 2024", where: "Callbell, remote", what: "Software developer across the stack. Chat, CRM, public API, frontend rebuild." },
  { when: "2019 - 2020", where: "JustMe Technologies, Paris", what: "Sole developer on an EU Horizon-funded MVP, architecture to release." },
  { when: "2019", where: "Freelance, Milan", what: "First client projects after the Le Wagon bootcamp." },
  { when: "2011 - 2019", where: "Professional kitchens", what: "Eight years as a chef. Where the habit of shipping under pressure comes from." },
];

export const tools = [
  {
    name: "cursorrules",
    what: "Curated rule configs for AI-assisted coding.",
    meta: "26 stars, 6 forks",
    href: "https://github.com/Qwertic/cursorrules",
  },
  {
    name: "crrl",
    what: "A CLI for managing those rule files.",
    meta: "17 stars, 2 forks",
    href: "https://github.com/Qwertic/crrl",
  },
  {
    name: "Claude Code skills",
    what: "Reusable agent workflows for my own engineering practice.",
    meta: "Daily use",
    href: "",
  },
  {
    name: "Agent memory",
    what: "Shared memory for coding agents, with human review.",
    meta: "In progress",
    href: "",
  },
];
