import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { solutions } from "@/data/site";

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="AI that moves through the work, not around it." copy="This page uses placeholder solution narratives. Align them later to priority verticals, buyer journeys, outcomes, and customer proof." />
      <section className="solution-detail-section"><Container>
        {solutions.map((solution, index) => <article className="solution-detail" key={solution.title}>
          <div className="solution-detail-number">0{index + 1}</div>
          <div><p className="eyebrow">{solution.subtitle}</p><h2>{solution.title}</h2><p className="solution-detail-copy">{solution.copy}</p></div>
          <div className="outcome-list"><p>Potential outcomes</p>{solution.outcomes.map((outcome) => <span key={outcome}>↗ {outcome}</span>)}</div>
        </article>)}
      </Container></section>
      <section className="proof-section"><Container><div className="proof-window"><div className="proof-window-bar"><span/><span/><span/><p>OPERATIONS / SAMPLE VIEW</p></div><div className="proof-grid"><div className="proof-card emphasis"><span>98.4%</span><p>Placeholder system confidence</p></div><div className="proof-card"><span>06</span><p>Connected operational domains</p></div><div className="proof-card"><span>2.1s</span><p>Median decision loop</p></div><div className="proof-card wide"><p>Replace with real proof: integration time, team time saved, response quality, deployment footprint, or customer outcome.</p></div></div></div></Container></section>
      <section className="dark-callout"><Container><div><p className="eyebrow">Your environment is not generic</p><h2>We will shape the operating plane around your reality.</h2></div><Link className="button button-light" href="/contact">Start a conversation <span>↗</span></Link></Container></section>
    </>
  );
}
