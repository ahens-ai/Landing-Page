import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ArchitectureMap } from "@/components/ArchitectureMap";

type PlatformComponent = { title: string; body: string; tags: string[] };

const components: PlatformComponent[] = [
  { title: "Signal fabric", body: "Ingest, normalize, and contextualize the data that decisions depend on.", tags: ["Connectors", "Event streams", "Data contracts"] },
  { title: "Intelligence runtime", body: "Coordinate models and agentic workflows with policy, context, and recoverability.", tags: ["Model routing", "Agent controls", "Workflow logic"] },
  { title: "Control surface", body: "Provide operators with visible system state, permissions, evidence, and intervention points.", tags: ["Audit trails", "Human review", "Observability"] },
  { title: "Deployment plane", body: "Move intelligence across cloud, private, and edge environments without losing operational visibility.", tags: ["Environment-aware", "Versioned", "Resilient"] },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero eyebrow="The ahens platform" title="A common operating plane for industrial intelligence." copy="Placeholder product page: establish the platform architecture, then replace these blocks with precise capabilities, integrations, benchmarks, and proof points." />
      <Container><ArchitectureMap /></Container>
      <section className="platform-components"><Container>
        <div className="section-heading"><p className="eyebrow">Four connected components</p><h2>Designed to be modular. Intended to behave as one.</h2></div>
        <div className="component-grid">
          {components.map((component, index) => <article className="component-card" key={component.title}>
            <span className="component-number">0{index + 1}</span><div className="component-diagram" aria-hidden="true"><i /><i /><i /></div>
            <h3>{component.title}</h3><p>{component.body}</p><div>{component.tags.map((tag) => <span className="micro-tag" key={tag}>{tag}</span>)}</div>
          </article>)}
        </div>
      </Container></section>
      <section className="dark-callout"><Container><div><p className="eyebrow">Designed for composability</p><h2>Start with the layer that unblocks you. Expand into the system that compounds.</h2></div><Link className="button button-light" href="/contact">Discuss your architecture <span>↗</span></Link></Container></section>
    </>
  );
}
