// Names that machine translation must leave alone (browsers translate "Cairn" into "Ometto").
// protect() escapes a plain string and wraps each name in <span translate="no">, for set:html or innerHTML.
const NAMES = [
  "Qwertic",
  "Regi Voda",
  "Cairn",
  "Dokimazo",
  "Callbell",
  "JustMe Technologies",
  "Le Wagon",
  "ThePower MBA",
  "Claude Code",
  "MCP",
  "cursorrules",
  "crrl",
  "Zapier",
  "Zoho",
  "AdonisJS",
  "PostgreSQL",
  "Next.js",
  "Rails",
  "React",
];

const pattern = new RegExp(`\\b(${NAMES.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "g");

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const protect = (text: string) => escape(text).replace(pattern, '<span translate="no">$1</span>');
