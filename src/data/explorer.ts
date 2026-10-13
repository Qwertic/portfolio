// "Should this use AI?" A hand-written decision tree. No model runs here, on purpose.
// Edit freely: questions point to other questions or to outcomes by id.

export type Layer = "LLM" | "UI" | "API" | "DB";

export type Question = {
  id: string;
  ask: string;
  choices: { label: string; next: string }[];
};

export type Outcome = {
  id: string;
  verdict: string; // short label, shown in small caps
  title: string;
  why: string;
  build: string[];
  guardrails: string[];
  evaluate: string[];
  layers: Layer[];
};

export const START = "goal";

export const questions: Question[] = [
  {
    id: "goal",
    ask: "What should the feature do?",
    choices: [
      { label: "Answer questions from our documents or data", next: "docs-size" },
      { label: "Pull fields out of messy input: emails, PDFs, forms", next: "extract-format" },
      { label: "Take actions in other tools for a user", next: "act-undo" },
      { label: "Draft or summarise text", next: "draft-reader" },
      { label: "Decide or calculate something exact: prices, eligibility, totals", next: "exact-rule" },
    ],
  },
  {
    id: "docs-size",
    ask: "How much material is there?",
    choices: [
      { label: "A few pages, and it rarely changes", next: "o-context" },
      { label: "Too much to read in one go, or it changes often", next: "docs-terms" },
    ],
  },
  {
    id: "docs-terms",
    ask: "How do people ask?",
    choices: [
      { label: "With exact terms: codes, names, IDs", next: "o-search" },
      { label: "In their own words", next: "o-rag" },
    ],
  },
  {
    id: "extract-format",
    ask: "Does the input always follow the same template?",
    choices: [
      { label: "Yes, same layout every time", next: "o-parser" },
      { label: "No, it varies", next: "extract-cost" },
    ],
  },
  {
    id: "extract-cost",
    ask: "What does a wrong field cost?",
    choices: [
      { label: "Little, it gets corrected later", next: "o-structured" },
      { label: "Money, compliance or trust", next: "o-extract-review" },
    ],
  },
  {
    id: "act-undo",
    ask: "Can every action be undone?",
    choices: [
      { label: "Yes", next: "act-steps" },
      { label: "No, some are final: sending, paying, deleting", next: "o-confirm" },
    ],
  },
  {
    id: "act-steps",
    ask: "How many steps does a task take?",
    choices: [
      { label: "One or two, always the same", next: "o-tool-call" },
      { label: "Several, and the order depends on what it finds", next: "o-agent" },
    ],
  },
  {
    id: "draft-reader",
    ask: "Who reads the result first?",
    choices: [
      { label: "Someone on the team", next: "o-draft" },
      { label: "A customer, directly", next: "o-draft-review" },
    ],
  },
  {
    id: "exact-rule",
    ask: "Could you write the rule down?",
    choices: [
      { label: "Yes, even if it is long", next: "o-no-ai" },
      { label: "No, it takes judgement", next: "exact-cost" },
    ],
  },
  {
    id: "exact-cost",
    ask: "What does a wrong answer cost?",
    choices: [
      { label: "Little, and it is easy to spot", next: "o-classifier" },
      { label: "A lot", next: "o-person" },
    ],
  },
];

export const outcomes: Outcome[] = [
  {
    id: "o-no-ai",
    verdict: "No model",
    title: "Write the rule in code.",
    why: "If the rule can be written down, code is cheaper, faster, testable and right every time. A model would only add a way to be wrong.",
    build: ["The rule as plain, tested code", "A table or config for the parts that change"],
    guardrails: ["Unit tests for every edge case the business knows about"],
    evaluate: ["The test suite. Nothing probabilistic to measure."],
    layers: ["API", "DB"],
  },
  {
    id: "o-context",
    verdict: "No retrieval",
    title: "Put the material in the prompt.",
    why: "A few stable pages fit in context. Retrieval would add moving parts without adding answers.",
    build: ["The documents in the system prompt, versioned with the code", "An answer format that quotes the page it used"],
    guardrails: ["Answer only from the provided text", "Say so plainly when the answer is not there"],
    evaluate: ["Twenty real questions with known answers, run on every prompt change"],
    layers: ["LLM", "UI"],
  },
  {
    id: "o-search",
    verdict: "Search first",
    title: "Start with good search, maybe no model at all.",
    why: "Exact terms are what keyword and database search do best. A model can summarise the results later, if people actually need that.",
    build: ["Full-text search in the database you already have", "Filters for the fields people use"],
    guardrails: ["Show the source records, never a paraphrase alone"],
    evaluate: ["Did the right record come back in the top three?"],
    layers: ["DB", "API", "UI"],
  },
  {
    id: "o-rag",
    verdict: "Retrieval",
    title: "Retrieval with citations.",
    why: "When the answer lives in your data and changes faster than a model could learn it, retrieve the right passages and let the model answer from them.",
    build: [
      "Ingestion that chunks, cleans and keeps the source of every passage",
      "Hybrid search: vectors for meaning, keywords for exact terms",
      "Answers that cite the passages they used",
    ],
    guardrails: ["Answer only from retrieved text", "Refuse when nothing relevant comes back", "Access rules applied at retrieval, not after"],
    evaluate: ["A question set with expected sources: was the right passage retrieved?", "Is every claim in the answer supported by a cited passage?"],
    layers: ["LLM", "API", "DB", "UI"],
  },
  {
    id: "o-parser",
    verdict: "No model",
    title: "Write a parser.",
    why: "A fixed template is a format, not a language problem. A parser is exact and costs nothing to run.",
    build: ["A parser for the template", "An alert when a document does not match it"],
    guardrails: ["Reject what does not parse instead of guessing"],
    evaluate: ["A folder of real documents as fixtures in the tests"],
    layers: ["API"],
  },
  {
    id: "o-structured",
    verdict: "Structured output",
    title: "Extract into a schema and validate it.",
    why: "Varied input needs a model to read it, but the output can still be held to a strict shape.",
    build: ["A typed schema for every field", "Structured output from the model", "Validation, with a retry that explains what failed"],
    guardrails: ["Nothing enters the database without passing the schema"],
    evaluate: ["Field-level accuracy on a labelled sample, tracked over time"],
    layers: ["LLM", "API", "DB"],
  },
  {
    id: "o-extract-review",
    verdict: "Person in the loop",
    title: "The model extracts, a person approves what matters.",
    why: "When a wrong field costs money or trust, speed comes from the model and certainty from a review step.",
    build: ["Structured extraction with a confidence signal per field", "A review screen showing the source next to each value"],
    guardrails: ["Low-confidence or high-stakes fields always go to review", "Every approval is logged"],
    evaluate: ["How often reviewers change a value, by field"],
    layers: ["LLM", "UI", "API", "DB"],
  },
  {
    id: "o-confirm",
    verdict: "Person in the loop",
    title: "The assistant proposes, the person confirms.",
    why: "An action that cannot be undone should never depend on a model being right. Let it prepare everything, and let a person press the button.",
    build: ["Tools exposed over MCP with the narrowest permissions that work", "A confirmation step that shows exactly what will happen"],
    guardrails: ["Final actions require an explicit confirmation", "Spending and rate limits per user"],
    evaluate: ["How often proposals are accepted unchanged", "Every refused proposal reviewed"],
    layers: ["LLM", "UI", "API"],
  },
  {
    id: "o-tool-call",
    verdict: "Tool call, not an agent",
    title: "One function call is enough.",
    why: "A fixed one or two step task does not need an agent loop. A single tool call is easier to test and to trust.",
    build: ["One well-described tool", "The model picks the arguments, code does the rest"],
    guardrails: ["Validate the arguments before running anything"],
    evaluate: ["A fixed set of requests with the expected call and arguments"],
    layers: ["LLM", "API"],
  },
  {
    id: "o-agent",
    verdict: "Agent",
    title: "An agent with tools, budgets and a log.",
    why: "When the next step depends on what the last one found, an agent loop earns its cost.",
    build: ["Tools over MCP, each small and clearly described", "Shared memory so it does not rediscover what the team knows", "A visible trace of every step"],
    guardrails: ["Step and cost budgets", "Read-only by default, write tools opt-in"],
    evaluate: ["Task success on a set of real scenarios", "Steps and cost per task, watched for drift"],
    layers: ["LLM", "API", "DB", "UI"],
  },
  {
    id: "o-draft",
    verdict: "Draft",
    title: "A model drafts, a person edits.",
    why: "For text the team reads first, a good draft saves time and the editor catches what it gets wrong.",
    build: ["Streaming drafts inside the tool people already use", "Clear marking that it is a draft"],
    guardrails: ["Nothing leaves the team without a person sending it"],
    evaluate: ["How much of the draft survives editing"],
    layers: ["LLM", "UI"],
  },
  {
    id: "o-draft-review",
    verdict: "Templates first",
    title: "Templates first, the model fills the gaps.",
    why: "Customers should get answers you have approved. Templates carry the facts; the model adapts tone and fills in what changes.",
    build: ["Approved templates for the common cases", "Model fills marked slots only", "Review before send while trust builds"],
    guardrails: ["No prices, promises or policy written by the model", "A path to a person, always visible"],
    evaluate: ["Review edits and customer replies, read weekly"],
    layers: ["LLM", "UI", "DB"],
  },
  {
    id: "o-classifier",
    verdict: "Classifier",
    title: "A model classifies, with a threshold and a fallback.",
    why: "When errors are cheap and visible, a model can make the call, as long as it knows when to step back.",
    build: ["A classification prompt or small model with a confidence score", "A fallback rule below the threshold"],
    guardrails: ["Below the threshold, the rule or a person decides"],
    evaluate: ["Precision and recall on a labelled set, before and after every change"],
    layers: ["LLM", "API"],
  },
  {
    id: "o-person",
    verdict: "Person decides",
    title: "The model suggests, a person decides.",
    why: "Judgement with real consequences stays with a person. The model can gather the facts and explain its suggestion.",
    build: ["A suggestion with the reasons and sources behind it", "A decision screen built around the person, not the model"],
    guardrails: ["The model never decides alone", "Every decision and override recorded"],
    evaluate: ["Agreement between suggestion and decision, and why they differ"],
    layers: ["LLM", "UI", "DB"],
  },
];
