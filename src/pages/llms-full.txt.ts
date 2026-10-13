// The whole page as plain text for language models and answer engines, built from the same data the page renders.
import type { APIRoute } from "astro";
import { EMAIL, LINKEDIN, GITHUB, CV_PATH, BOOKING_URL, work, experience, extras, tools, statusLabel } from "../data/site";
import { across, layers, sourceLabel } from "../data/decisions";
import { START, questions, outcomes } from "../data/explorer";
import { faq } from "../data/faq";

const list = (items: string[]) => items.map((i) => `- ${i}`).join("\n");

export const GET: APIRoute = ({ site }) => {
  const base = site!.href.replace(/\/$/, "");
  const q = new Map(questions.map((x) => [x.id, x]));
  const o = new Map(outcomes.map((x) => [x.id, x]));

  // Walk the explorer tree depth-first so each recommendation sits under the answers that lead to it.
  const tree: string[] = [];
  const walk = (id: string, depth: number) => {
    const question = q.get(id);
    const pad = "  ".repeat(depth);
    if (question) {
      tree.push(`${pad}- ${question.ask}`);
      question.choices.forEach((c) => {
        tree.push(`${pad}  - If: ${c.label}`);
        walk(c.next, depth + 2);
      });
      return;
    }
    const out = o.get(id);
    if (out) tree.push(`${pad}- Recommendation: ${out.verdict}. ${out.title} ${out.why}`);
  };
  walk(START, 0);

  const body = `# Qwertic (Regi Voda): full text

> Regi Voda, known as Qwertic, is an AI lead across the full stack, based in Italy and working remotely (hybrid possible from Milan). He knows what to build with AI, how, and when not to, and takes AI features from first experiment to production, from the database to the model. This file mirrors ${base}/ in plain text.

## Contact

- Book a call: ${BOOKING_URL}
- Email: ${EMAIL}
- LinkedIn: ${LINKEDIN}
- GitHub: ${GITHUB}
- CV (PDF): ${base}${CV_PATH}

## Questions

${faq.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Should this use AI? (decision tree)

A hand-written decision tree. It uses no model, because it doesn't need one.

${tree.join("\n")}

### Every recommendation in detail

${outcomes
  .map(
    (x) => `#### ${x.verdict}: ${x.title}

${x.why}

What I'd build:
${list(x.build)}

Guardrails:
${list(x.guardrails)}

How I'd check it:
${list(x.evaluate)}

Layers: ${x.layers.join(", ")}`,
  )
  .join("\n\n")}

## Where AI belongs (rules by layer)

Each rule comes from client work and my own projects unless marked.

### Across the system

${list(across.map((d) => d.rule + (d.source === "both" ? "" : ` (${sourceLabel[d.source]})`)))}

${layers
  .map((l) => `### ${l.id}: ${l.name}\n\n${list(l.decisions.map((d) => d.rule + (d.source === "both" ? "" : ` (${sourceLabel[d.source]})`)))}`)
  .join("\n\n")}

## Work

${work
  .map(
    (w) => `### ${w.title}

${w.context}, ${w.when}. Status: ${statusLabel[w.status]}. Layers: ${w.layers.join(", ")}.${w.href ? ` Link: ${w.href}` : ""}

${w.summary}
${w.facts.length ? "\n" + list(w.facts) : ""}${w.parts ? "\n" + w.parts.map((p) => `- ${p.title}: ${p.text}`).join("\n") : ""}`,
  )
  .join("\n\n")}

## Open source and tools

${list(tools.map((t) => `${t.name}: ${t.what} (${t.meta})${t.href ? ` ${t.href}` : ""}`))}

## Experience

${list([...experience, ...extras].map((e) => `${e.when}, ${e.where}: ${e.what}`))}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
