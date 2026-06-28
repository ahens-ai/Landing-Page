import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { insights } from "@/data/site";

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Signal from the systems that matter." copy="A placeholder editorial surface for technical notes, operating principles, field lessons, product thinking, and company announcements." />
      <section className="insights-page"><Container>
        <div className="feature-insight"><div className="feature-insight-visual"><div className="feature-line"/><div className="feature-line"/><div className="feature-line"/><span>01</span></div><div><p className="eyebrow">Featured / Placeholder</p><h2>What it takes to turn intelligence into infrastructure.</h2><p>Use this featured slot for a flagship point of view, launch narrative, or an essay that establishes the company’s unique worldview.</p><button className="button button-ghost" type="button">Read placeholder <span>↗</span></button></div></div>
        <div className="article-grid">{insights.concat(insights).map((insight, index) => <article className="article-card" key={`${insight.title}-${index}`}><p>{insight.category} <span>·</span> {insight.date}</p><h3>{insight.title}</h3><div className="article-card-footer"><span>Read more</span><span>↗</span></div></article>)}</div>
      </Container></section>
    </>
  );
}
