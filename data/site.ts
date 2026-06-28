export const site = {
  name: "ahens.ai",
  shortName: "ahens",
  url: "https://ahens.ai",
  email: "hello@ahens.ai",
  tagline: "AI Industrial Infrastructure",
  description:
    "Placeholder website for ahens.ai — an industrial-grade operating plane for deploying, observing, and governing AI in the real world.",
};

export const navItems = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
];

export type CapabilityVisualType = "connect" | "orchestrate" | "observe";
export type SolutionVisualType = "industrial" | "knowledge" | "workflow";
type ArchitectureLayer = "signal" | "intelligence" | "assurance";
type Capability = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  tags: string[];
  visual: CapabilityVisualType;
  state: string;
};
type Pillar = {
  index: string;
  label: string;
  layer: ArchitectureLayer;
  title: string;
  body: string;
  state: string;
  flow: string[];
};
type Solution = {
  title: string;
  subtitle: string;
  copy: string;
  outcomes: string[];
  visual: SolutionVisualType;
};

export const capabilities: Capability[] = [
  {
    id: "01",
    eyebrow: "Connect",
    title: "Bring every signal into one operational fabric.",
    copy: "Placeholder copy for connectors, data contracts, device streams, enterprise systems, and edge environments.",
    tags: ["Data connectors", "Event streams", "Edge-ready"],
    visual: "connect",
    state: "Inputs normalized into a shared context.",
  },
  {
    id: "02",
    eyebrow: "Orchestrate",
    title: "Turn models, agents, and workflows into reliable operations.",
    copy: "Placeholder copy for model routing, inference orchestration, guardrails, and cross-system automation.",
    tags: ["Model routing", "Workflow runtime", "Controls"],
    visual: "orchestrate",
    state: "Decision paths resolve through policy.",
  },
  {
    id: "03",
    eyebrow: "Observe",
    title: "Know what your intelligence is doing, everywhere.",
    copy: "Placeholder copy for telemetry, audit trails, quality monitoring, and human-in-the-loop review.",
    tags: ["Telemetry", "Auditability", "Quality"],
    visual: "observe",
    state: "Telemetry settles into reviewable evidence.",
  },
];

export const pillars: Pillar[] = [
  {
    index: "01",
    label: "Signal Layer",
    layer: "signal",
    title: "Structured input from systems that matter.",
    body: "Unify operational data, documents, telemetry, and event streams without forcing every team into one tool.",
    state: "Focus: operational signals become usable context.",
    flow: ["Capture", "Normalize", "Route"],
  },
  {
    index: "02",
    label: "Intelligence Layer",
    layer: "intelligence",
    title: "Composable models, agents, and workflows.",
    body: "Coordinate the right model or agent for each decision path with reusable policies and context.",
    state: "Focus: models and workflows coordinate around the task.",
    flow: ["Select", "Reason", "Resolve"],
  },
  {
    index: "03",
    label: "Assurance Layer",
    layer: "assurance",
    title: "Governed action with evidence built in.",
    body: "Make observability, review, permissions, and traceability part of the operating system—not an afterthought.",
    state: "Focus: action remains observable and accountable.",
    flow: ["Check", "Approve", "Trace"],
  },
];

export const solutions: Solution[] = [
  {
    title: "Industrial Operations",
    subtitle: "From machine signals to actionable intelligence.",
    copy: "Placeholder use case for manufacturing, infrastructure, maintenance, asset fleets, and control rooms.",
    outcomes: ["Faster issue triage", "Contextual operator guidance", "Repeatable workflows"],
    visual: "industrial",
  },
  {
    title: "Enterprise Knowledge",
    subtitle: "Useful answers grounded in the systems of record.",
    copy: "Placeholder use case for secure retrieval, internal copilots, documentation intelligence, and expert routing.",
    outcomes: ["Governed search", "Role-aware access", "Citable outputs"],
    visual: "knowledge",
  },
  {
    title: "Autonomous Workflows",
    subtitle: "Move from isolated AI pilots to durable execution.",
    copy: "Placeholder use case for agentic processes with human checkpoints, policies, and measurable service levels.",
    outcomes: ["Policy-controlled action", "Human review", "Operational analytics"],
    visual: "workflow",
  },
];

export const readinessMarkers = [
  { label: "Signals", state: "Listening" },
  { label: "Policies", state: "Loaded" },
  { label: "Review", state: "Available" },
  { label: "Actions", state: "Controlled" },
];

export const insights = [
  {
    category: "Field note",
    title: "AI becomes industrial when it can be operated, not merely demonstrated.",
    date: "Placeholder · 6 min read",
    blurb: "A placeholder article preview about deploying intelligence into high-consequence, real-world environments.",
  },
  {
    category: "Architecture",
    title: "The missing layer between enterprise data and reliable AI action.",
    date: "Placeholder · 8 min read",
    blurb: "A placeholder article preview about the design requirements of governed AI infrastructure.",
  },
  {
    category: "Briefing",
    title: "From dashboard sprawl to a unified decision surface.",
    date: "Placeholder · 5 min read",
    blurb: "A placeholder article preview about simplifying operations without reducing visibility.",
  },
];
