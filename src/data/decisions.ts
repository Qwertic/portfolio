// "Where AI belongs": the decisions I make, by layer. Each one says where it comes from.
// Sources stay honest: each label names where the decision was actually made.

export type Source = "both" | "cairn-edtech";

export const sourceLabel: Record<Source, string> = {
  both: "Client work and own projects",
  "cairn-edtech": "Cairn and Dokimazo",
};

export type Decision = { rule: string; source: Source };

export const across: Decision[] = [
  { rule: "I start by asking whether it needs a model at all. Usually some part of it doesn't.", source: "both" },
  {
    rule: "I fix the workflow before the prompt: what people do today, what to remove, and only then what to automate.",
    source: "both",
  },
];

export const layers: { id: "LLM" | "UI" | "API" | "DB"; name: string; decisions: Decision[] }[] = [
  {
    id: "LLM",
    name: "Model",
    decisions: [
      {
        rule: "A model earns its place on unstructured input, judgement that can't be written as rules, and language as output. Not on arithmetic, lookups or anything that must be exact.",
        source: "both",
      },
      { rule: "Guardrails live outside the model: schemas, validation, permissions, refusal paths. A prompt is not a guardrail.", source: "both" },
      { rule: "Evaluation comes before scale: real cases with known answers, run on every prompt or model change.", source: "both" },
    ],
  },
  {
    id: "UI",
    name: "Interface",
    decisions: [
      { rule: "Show the source. An answer with its citation is worth more than a fluent one.", source: "both" },
      { rule: "Make uncertainty visible: drafts look like drafts, and low confidence asks a person.", source: "both" },
      { rule: "Stream long answers, and always leave a way to stop, edit, or reach a person.", source: "both" },
    ],
  },
  {
    id: "API",
    name: "Tools and pipelines",
    decisions: [
      { rule: "MCP tools stay small, clearly described, and scoped to the narrowest permission that works.", source: "cairn-edtech" },
      { rule: "Structured output is validated at every boundary, and a retry says what failed.", source: "both" },
      { rule: "Ingestion pipelines are boring on purpose: idempotent steps, logs, and a way to rerun one document.", source: "cairn-edtech" },
      { rule: "Non-deterministic code still gets tests: fixtures for the deterministic parts, evaluation sets for the rest.", source: "both" },
    ],
  },
  {
    id: "DB",
    name: "Database",
    decisions: [
      { rule: "Memory is data: it gets a schema, an owner, and a review step before agents rely on it.", source: "cairn-edtech" },
      { rule: "Every chunk keeps its provenance: where it came from, and when.", source: "cairn-edtech" },
      {
        rule: "Retrieval is hybrid by default: vectors for meaning, keywords for exact terms, access rules applied at query time.",
        source: "cairn-edtech",
      },
    ],
  },
];
