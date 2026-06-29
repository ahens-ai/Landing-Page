const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://ahens.ai";

export type LinkItem = {
  label: string;
  href: string;
  description?: string;
};

export type ProductModule = {
  index: string;
  slug: string;
  name: string;
  shortName: string;
  href: string;
  eyebrow: string;
  summary: string;
  detail: string;
  capabilities: string[];
  signals: string[];
};

export type Industry = {
  slug: string;
  name: string;
  href: string;
  summary: string;
  detail: string;
  useCases: string[];
  signal: string;
};

export type Insight = {
  slug: string;
  category: string;
  title: string;
  date: string;
  blurb: string;
  body: string[];
};

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

export const site = {
  name: "ahens.ai",
  shortName: "ahens",
  url: siteUrl,
  email: "hello@ahens.ai",
  tagline: "AI Industrial Infrastructure",
  description:
    "AI industrial infrastructure for deploying secure, governable, production-grade intelligence across data, models, agents, operations, cloud, private systems, and edge environments.",
  social: [{ label: "LinkedIn", href: "https://www.linkedin.com/company/ahens-ai/" }],
};

export const productModules: ProductModule[] = [
  {
    index: "01",
    slug: "core",
    name: "Ahens Core",
    shortName: "Core",
    href: "/platform/core",
    eyebrow: "Runtime and orchestration",
    summary: "Coordinate enterprise AI workloads through one operating layer.",
    detail:
      "Ahens Core is placeholder product architecture for routing tasks, policies, model calls, agent runs, reviews, and operational handoffs through a controlled runtime.",
    capabilities: ["Execution runtime", "Workflow orchestration", "Policy-aware routing", "Operational handoff"],
    signals: ["Runtime", "Queue", "State"],
  },
  {
    index: "02",
    slug: "data-fabric",
    name: "Ahens Data Fabric",
    shortName: "Data Fabric",
    href: "/platform/data-fabric",
    eyebrow: "Operational data layer",
    summary: "Connect, normalize, retrieve, and govern the data intelligence depends on.",
    detail:
      "A placeholder data layer for secure connectors, retrieval, data contracts, lineage, and context assembly across fragmented enterprise systems.",
    capabilities: ["Secure connectors", "Retrieval pipelines", "Data contracts", "Lineage and context"],
    signals: ["Connect", "Retrieve", "Govern"],
  },
  {
    index: "03",
    slug: "models",
    name: "Ahens Models",
    shortName: "Models",
    href: "/platform/models",
    eyebrow: "Model routing and evaluation",
    summary: "Use private inference, model routing, evaluation, and observability without losing control.",
    detail:
      "A placeholder model infrastructure layer for routing requests, evaluating responses, tracking quality, and supporting private inference patterns.",
    capabilities: ["Model routing", "Private inference", "Evaluation loops", "Quality telemetry"],
    signals: ["Route", "Score", "Observe"],
  },
  {
    index: "04",
    slug: "agents",
    name: "Ahens Agents",
    shortName: "Agents",
    href: "/platform/agents",
    eyebrow: "Governed agent execution",
    summary: "Run multi-step agents that can act only inside visible, controlled workflows.",
    detail:
      "A placeholder agent layer for reliable planning, tool use, approvals, retries, and human intervention inside enterprise operations.",
    capabilities: ["Multi-step workflows", "Tool permissions", "Human checkpoints", "Recovery paths"],
    signals: ["Plan", "Check", "Act"],
  },
  {
    index: "05",
    slug: "trust",
    name: "Ahens Trust",
    shortName: "Trust",
    href: "/platform/trust",
    eyebrow: "Governance and assurance",
    summary: "Enforce identity, permissions, auditability, and policy throughout the AI system.",
    detail:
      "A placeholder trust layer for permission boundaries, policy checks, audit trails, evidence capture, and enterprise review workflows.",
    capabilities: ["Identity and access", "Policy enforcement", "Audit evidence", "Review workflows"],
    signals: ["Verify", "Approve", "Trace"],
  },
  {
    index: "06",
    slug: "edge",
    name: "Ahens Edge",
    shortName: "Edge",
    href: "/platform/edge",
    eyebrow: "Deployment plane",
    summary: "Deploy intelligence across cloud, private VPC, on-premise systems, and edge environments.",
    detail:
      "A placeholder deployment layer for environment-aware AI operations where latency, privacy, and physical context matter.",
    capabilities: ["Cloud deployment", "Private environments", "On-premise operations", "Edge coordination"],
    signals: ["Cloud", "Private", "Edge"],
  },
];

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    href: "/solutions/manufacturing",
    summary: "AI systems for production, maintenance, quality, and operational intelligence.",
    detail:
      "Placeholder solution narrative for factories, maintenance teams, quality programs, and industrial control rooms.",
    useCases: ["Production anomaly triage", "Maintenance guidance", "Quality investigation"],
    signal: "Factory to cloud topology",
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    href: "/solutions/financial-services",
    summary: "Governed intelligence for research, operations, compliance, risk, and client workflows.",
    detail:
      "Placeholder solution narrative for financial institutions that need reliable answers, auditable workflows, and controlled automation.",
    useCases: ["Research acceleration", "Compliance review", "Risk operations"],
    signal: "Policy-gated decision flow",
  },
  {
    slug: "logistics",
    name: "Logistics",
    href: "/solutions/logistics",
    summary: "Real-time visibility, decision support, routing, and operational coordination.",
    detail:
      "Placeholder solution narrative for fleets, warehouses, dispatch teams, field operations, and routing decisions.",
    useCases: ["Route exception handling", "Fleet coordination", "Operational visibility"],
    signal: "Fleet signal mesh",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    href: "/solutions/healthcare",
    summary: "Secure intelligence workflows for knowledge, operations, documentation, and support systems.",
    detail:
      "Placeholder solution narrative for secure healthcare operations. Replace with counsel-reviewed, compliant claims before launch.",
    useCases: ["Documentation support", "Operational knowledge", "Administrative workflows"],
    signal: "Secure knowledge boundary",
  },
  {
    slug: "enterprise-operations",
    name: "Enterprise Operations",
    href: "/solutions/enterprise-operations",
    summary: "Deploy intelligence across finance, sales, HR, procurement, support, and internal systems.",
    detail:
      "Placeholder solution narrative for cross-functional AI infrastructure connecting knowledge, approvals, systems, and teams.",
    useCases: ["Internal service workflows", "Procurement assistance", "Support intelligence"],
    signal: "Department operating graph",
  },
];

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
    body: "Make observability, review, permissions, and traceability part of the operating system, not an afterthought.",
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

export const developerResources = [
  {
    slug: "docs",
    title: "Documentation",
    href: "/developers/docs",
    summary: "Architecture notes, integration patterns, deployment guides, and placeholder product references.",
  },
  {
    slug: "api",
    title: "API Reference",
    href: "/developers/api",
    summary: "Illustrative endpoint structure for runtime tasks, retrieval, agents, policies, and telemetry.",
  },
  {
    slug: "sdk",
    title: "SDK",
    href: "/developers/sdk",
    summary: "TypeScript and Python-style starter patterns for connecting your systems to ahens.",
  },
  {
    slug: "quickstart",
    title: "Quickstart",
    href: "/developers/quickstart",
    summary: "A placeholder path from first connector to a governed operational workflow.",
  },
];

export const companyPages = [
  { label: "About", href: "/company/about", description: "Operating principles, founding narrative, and placeholder company story." },
  { label: "Careers", href: "/company/careers", description: "Placeholder roles and team principles for future hiring." },
  { label: "Contact", href: "/company/contact", description: "Start a design-partner or architecture conversation." },
];

export const insights: Insight[] = [
  {
    slug: "industrial-ai-needs-an-operating-layer",
    category: "Infrastructure",
    title: "Industrial AI needs an operating layer, not another isolated interface.",
    date: "Placeholder - 8 min read",
    blurb: "A placeholder article about making AI reliable across real operational systems.",
    body: [
      "Enterprise AI becomes durable when it is connected to the systems, permissions, review loops, and deployment environments around it.",
      "This placeholder article should later become a founder-level point of view with real technical detail, customer language, and proof.",
    ],
  },
  {
    slug: "agents-require-governed-execution",
    category: "Agent Systems",
    title: "Agents require governed execution before they can be trusted with real work.",
    date: "Placeholder - 7 min read",
    blurb: "A placeholder article about policy gates, intervention points, and traceable action.",
    body: [
      "Agentic systems need more than prompts. They need state, permissions, audit trails, recovery paths, and operational boundaries.",
      "Replace this placeholder with implementation notes, diagrams, and real product language when available.",
    ],
  },
  {
    slug: "private-ai-infrastructure-patterns",
    category: "Security and Governance",
    title: "Patterns for deploying intelligence across cloud, private, and edge environments.",
    date: "Placeholder - 9 min read",
    blurb: "A placeholder article about secure deployment architecture and operational context.",
    body: [
      "The deployment layer matters because AI workflows inherit the constraints of the environments where work happens.",
      "This placeholder should later include real deployment patterns, risk controls, and engineering detail.",
    ],
  },
];

export const values = [
  {
    title: "Secure by architecture",
    copy: "Keep data, permissions, inference, and execution under explicit control.",
    signal: "Identity boundary",
  },
  {
    title: "Designed for real operations",
    copy: "Move beyond prototypes into governed workflows with recoverable state.",
    signal: "Operational loop",
  },
  {
    title: "Deploy where work happens",
    copy: "Support cloud, private VPC, on-premise, and edge deployment patterns.",
    signal: "Environment plane",
  },
  {
    title: "Observable end-to-end",
    copy: "Track model, agent, data, policy, and action behavior as one system.",
    signal: "Trace spine",
  },
];

export const systemFlow = [
  "Enterprise Data",
  "Ahens Data Fabric",
  "Models and Retrieval",
  "Governed Agents",
  "Operational Actions",
  "Observability and Trust",
];

export const trustLabels = [
  "Enterprise pilot",
  "Design partner",
  "Infrastructure ecosystem",
  "Research collaborator",
  "Cloud, private, and edge ready",
];

export const metrics = [
  { value: "06", label: "Infrastructure modules" },
  { value: "05", label: "Priority industries" },
  { value: "24/7", label: "Placeholder operating posture" },
];

export const mainNav = [
  {
    label: "Platform",
    href: "/platform",
    groups: [
      { title: "Product stack", links: productModules.map((item) => ({ label: item.name, href: item.href, description: item.summary })) },
      { title: "Architecture", links: [{ label: "Platform overview", href: "/platform", description: "The operating layer for industrial AI." }] },
    ],
    featured: "Data, models, agents, trust, and deployment in one operating plane.",
  },
  {
    label: "Solutions",
    href: "/solutions",
    groups: [{ title: "Industries", links: industries.map((item) => ({ label: item.name, href: item.href, description: item.summary })) }],
    featured: "Bring governed intelligence to the environments where business actually runs.",
  },
  {
    label: "Developers",
    href: "/developers",
    groups: [{ title: "Build", links: developerResources.map((item) => ({ label: item.title, href: item.href, description: item.summary })) }],
    featured: "Use your models, your data, and your controls inside a deployable AI operating layer.",
  },
  {
    label: "Company",
    href: "/company",
    groups: [{ title: "ahens", links: companyPages }],
    featured: "A placeholder company system for teams building intelligence that operates.",
  },
];

export const footerGroups = [
  { title: "Platform", links: [{ label: "Overview", href: "/platform" }, ...productModules.map((item) => ({ label: item.shortName, href: item.href }))] },
  { title: "Solutions", links: [{ label: "Overview", href: "/solutions" }, ...industries.map((item) => ({ label: item.name, href: item.href }))] },
  { title: "Developers", links: [{ label: "Overview", href: "/developers" }, ...developerResources.map((item) => ({ label: item.title, href: item.href }))] },
  { title: "Company", links: [{ label: "Company", href: "/company" }, ...companyPages] },
  { title: "Resources", links: [{ label: "Insights", href: "/insights" }, ...insights.map((item) => ({ label: item.category, href: `/insights/${item.slug}` }))] },
  { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
];
