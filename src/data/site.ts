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

export type Status = "live" | "progress" | "shipped";

export const statusLabel: Record<Status, string> = {
  live: "Live",
  progress: "In progress",
  shipped: "Shipped",
};

export type Work = {
  title: string;
  context: string;
  when: string;
  status: Status;
  layers: string[];
  summary: string;
  facts: string[];
};

export const work: Work[] = [
  {
    title: "AI assistant",
    context: "EdTech credentialing platform",
    when: "2024 - now",
    status: "live",
    layers: ["LLM", "API", "UI"],
    summary: "The assistant at the centre of a skills and credentials platform.",
    facts: [
      "Reads the documents users upload: PDF, DOCX, XML",
      "LLM extraction into structured data",
      "Human review before anything reaches a verified record",
      "AdonisJS and PostgreSQL API, Next.js frontends, TDD-first",
    ],
  },
  {
    title: "Agent memory",
    context: "Own project",
    when: "Ongoing",
    status: "progress",
    layers: ["LLM", "Tooling"],
    summary: "An MCP server that gives coding agents one shared memory.",
    facts: ["Searchable knowledge base shared across agents", "A human reviews what gets written", "Not public yet"],
  },
  {
    title: "Core chat module",
    context: "Callbell",
    when: "2020 - 2024",
    status: "shipped",
    layers: ["API", "UI"],
    summary: "The platform's core customer-messaging feature.",
    facts: ["Millions of messages a day", "Reliability through testing and bug prevention"],
  },
  {
    title: "CRM, from scratch",
    context: "Callbell",
    when: "2020 - 2024",
    status: "shipped",
    layers: ["DB", "API", "UI"],
    summary: "Designed and built in Rails and React.",
    facts: ["Replaced WhatsApp contact lists and third-party CRMs", "Every lead in one view, with notes and team handoffs", "Used daily across multiple teams"],
  },
  {
    title: "Public API",
    context: "Callbell",
    when: "2020 - 2024",
    status: "shipped",
    layers: ["API"],
    summary: "Co-designed the Rails API partners build on.",
    facts: ["Then its first consumer: the Zapier and Zoho integrations"],
  },
];

export const stack = [
  { name: "Database", items: ["PostgreSQL schema design and migrations", "Redis", "Vector stores"] },
  { name: "API", items: ["Ruby on Rails, AdonisJS, Node and Bun", "REST and OpenAPI design"] },
  { name: "Frontend", items: ["React, Next.js, Astro", "Design systems and component libraries", "React Native"] },
  { name: "LLM", items: ["Assistants and agents in production", "RAG, structured output, validation", "Human-in-the-loop review", "MCP, Vercel AI SDK, OpenAI Agents"] },
  { name: "Tooling", items: ["Claude Code every day, with my own skills", "TDD", "Docker, AWS, GitHub Actions, Turborepo"] },
];

export const experience = [
  { when: "2024 - now", where: "Freelance, remote", what: "AI features and full-stack product for clients." },
  { when: "2020 - 2024", where: "Callbell, remote", what: "Software developer across the stack. Chat, CRM, public API, frontend rebuild." },
  { when: "2019 - 2020", where: "JustMe Technologies, Paris", what: "Sole developer on an EU Horizon-funded MVP, architecture to release." },
  { when: "2019", where: "Freelance, Milan", what: "First client projects after the Le Wagon bootcamp." },
  { when: "2011 - 2019", where: "Chef", what: "Eight years in professional kitchens before I retrained. Still how I work under pressure." },
];

export const tools = [
  { name: "cursorrules", what: "Curated rule configs for AI-assisted coding.", meta: "26 stars, 6 forks", href: "https://github.com/Qwertic/cursorrules" },
  { name: "crrl", what: "A CLI for managing those rule files.", meta: "17 stars, 2 forks", href: "https://github.com/Qwertic/crrl" },
  { name: "Claude Code skills", what: "Reusable agent workflows for my own engineering practice.", meta: "Daily use", href: "" },
  { name: "Agent memory", what: "Shared memory for coding agents, with human review.", meta: "In progress", href: "" },
];
