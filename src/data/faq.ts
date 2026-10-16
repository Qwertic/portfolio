// Questions people (and answer engines) ask about this page. Every answer repeats facts shown elsewhere on it.
// Rendered as the visible "Questions" section and as FAQPage structured data, so the two never drift apart.
export const faq: { q: string; a: string }[] = [
  {
    q: "What does an AI lead do?",
    a: "An AI lead knows what to build with AI, how, and when not to. I take AI features from first experiment to production, from the database to the model: memory, MCP tools, ingestion pipelines, retrieval, guardrails, evaluation and the interface around them, and I help teams make those calls well.",
  },
  {
    q: "When should a product not use AI?",
    a: "When the rule can be written down. Code is cheaper, faster, testable and right every time, and a model would only add a way to be wrong. I start every project by asking whether it needs a model at all; usually some part of it doesn't.",
  },
  {
    q: "What is Cairn?",
    a: "Cairn is my own open-source project (Apache-2.0, v0.7): persistent, shared memory for coding agents, served over MCP. A person reviews what agents write before other agents can recall it, so agents find what the team already knows. It lives at cairn-kb.dev.",
  },
  {
    q: "Is Regi Voda available?",
    a: "Yes. I'm open to AI lead and senior AI engineering roles, remote from Italy or hybrid from Milan, and I take freelance work on AI features. The first call is about whether it should use AI at all.",
  },
];
