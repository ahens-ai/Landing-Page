import { pillars } from "@/data/site";

export function ArchitectureMap() {
  return (
    <section className="architecture-section">
      <div className="architecture-intro">
        <div>
          <p className="eyebrow">A composable operating plane</p>
          <h2>Infrastructure that makes AI operational.</h2>
        </div>
        <p>Designed as a coherent system of layers rather than a loose collection of tools. The precise product details below are intentionally placeholder content.</p>
      </div>
      <div className="architecture-map">
        <div className="architecture-radar" aria-hidden="true">
          <div className="radar-line radar-line-one" />
          <div className="radar-line radar-line-two" />
          <div className="radar-pulse" />
          <span className="radar-label label-top">EDGE</span>
          <span className="radar-label label-right">CLOUD</span>
          <span className="radar-label label-bottom">OPERATIONS</span>
          <span className="radar-center">ahens<br/>plane</span>
        </div>
        <div className="architecture-list">
          {pillars.map((pillar) => (
            <article key={pillar.index} className="architecture-card">
              <div className="architecture-number">{pillar.index}</div>
              <p className="architecture-label">{pillar.label}</p>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
