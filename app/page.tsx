import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowLink } from "@/components/ArrowLink";
import { HeroOrbit } from "@/components/HeroOrbit";
import { ArchitectureMap } from "@/components/ArchitectureMap";
import { NewsletterForm } from "@/components/NewsletterForm";
import { capabilities, insights, solutions } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Container className="hero-container">
          <div className="hero-copy">
            <div className="status-pill"><span /> AI INDUSTRIAL INFRASTRUCTURE</div>
            <h1>Intelligence that <em>operates.</em></h1>
            <p className="hero-lede">ahens is the operational plane for bringing AI into systems where reliability, context, and accountability matter.</p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">Build with ahens <span aria-hidden="true">↗</span></Link>
              <Link href="/platform" className="button button-ghost">Explore the platform <span aria-hidden="true">↓</span></Link>
            </div>
            <p className="hero-note">Placeholder positioning and capabilities. Replace with the exact product narrative when available.</p>
          </div>
          <HeroOrbit />
        </Container>
      </section>

      <section className="statement-section">
        <Container>
          <p className="eyebrow">Built for the systems beneath the interface</p>
          <div className="statement-grid">
            <h2>AI should create <span>operational advantage</span>, not another layer of complexity.</h2>
            <p>We are designing a place where data, models, people, and critical workflows can work as one coordinated industrial system.</p>
          </div>
          <div className="statement-ticker" aria-label="Key system principles">
            <span>CONNECTED</span><i /> <span>COMPOSABLE</span><i /> <span>OBSERVABLE</span><i /> <span>GOVERNED</span><i /> <span>REAL-WORLD READY</span>
          </div>
        </Container>
      </section>

      <Container><ArchitectureMap /></Container>

      <section className="capabilities-section">
        <Container>
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Core capabilities</p><h2>From raw signals to accountable action.</h2></div>
            <p>Each layer is designed to make intelligence more useful where it counts: across people, software, assets, and operations.</p>
          </div>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.id}>
                <div className="capability-top"><span>{capability.id}</span><span>{capability.eyebrow}</span></div>
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
                <div className="capability-tags">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <ArrowLink href="/platform">Explore layer</ArrowLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="solutions-section">
        <Container>
          <div className="section-heading"><p className="eyebrow">Where it compounds</p><h2>Infrastructure for decisions that cannot afford to drift.</h2></div>
          <div className="solution-grid">
            {solutions.map((solution, index) => (
              <article className={`solution-card solution-card-${index + 1}`} key={solution.title}>
                <div className="solution-visual" aria-hidden="true"><span /><span /><span /><span /></div>
                <p className="solution-index">0{index + 1}</p>
                <h3>{solution.title}</h3>
                <p>{solution.copy}</p>
                <div className="solution-outcomes">{solution.outcomes.map((outcome) => <span key={outcome}>↗ {outcome}</span>)}</div>
                <ArrowLink href="/solutions">View solution</ArrowLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="insight-section">
        <Container>
          <div className="section-heading inline-heading"><div><p className="eyebrow">Signal / 01</p><h2>Notes from the edge of intelligence.</h2></div><ArrowLink href="/insights">View all insights</ArrowLink></div>
          <div className="insight-list">
            {insights.map((insight) => (
              <Link href="/insights" className="insight-row" key={insight.title}>
                <span className="insight-category">{insight.category}</span>
                <div><h3>{insight.title}</h3><p>{insight.blurb}</p></div>
                <span className="insight-date">{insight.date}</span>
                <span className="insight-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="newsletter-section">
        <Container>
          <div className="newsletter-panel">
            <div><p className="eyebrow">The ahens signal</p><h2>Get the thinking behind infrastructure that endures.</h2></div>
            <div><p>A low-frequency placeholder newsletter for operators, builders, and teams bringing AI into consequential environments.</p><NewsletterForm /></div>
          </div>
        </Container>
      </section>
    </>
  );
}
