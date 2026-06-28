import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

const principles = [
  ["01", "Build for consequence", "The most valuable systems are not decorative. They make difficult work safer, clearer, and more reliable."],
  ["02", "Make complexity legible", "We believe excellent infrastructure reveals the state of the system without demanding that every operator become an expert."],
  ["03", "Earn trust in operation", "Trust is not a claim in a deck. It is evidence produced continuously through observability, controls, and clear responsibility."],
];

export default function CompanyPage() {
  return (
    <>
      <PageHero eyebrow="Company" title="We are building the infrastructure layer for AI in the physical, operational world." copy="This is intentionally a concise placeholder company narrative. Add the founding story, leadership, locations, milestones, and hiring details when ready." />
      <section className="principles-section"><Container><div className="section-heading split-heading"><div><p className="eyebrow">How we think</p><h2>Technology becomes durable when it respects the work around it.</h2></div><p>ahens is imagined as a team that combines systems thinking, product design, AI engineering, and real-world operational empathy.</p></div><div className="principle-list">{principles.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></Container></section>
      <section className="company-visual"><Container><div className="company-schematic"><span className="company-labelline label-a">CLEAR SYSTEMS</span><span className="company-labelline label-b">LONG-TERM THINKING</span><span className="company-labelline label-c">RESPONSIBLE ACTION</span><div className="company-core">ahens<small>AI INDUSTRIAL INFRASTRUCTURE</small></div><div className="company-orbit company-orbit-a"/><div className="company-orbit company-orbit-b"/></div></Container></section>
      <section className="dark-callout"><Container><div><p className="eyebrow">Stay close</p><h2>We are starting with a point of view. The details will become the work.</h2></div><Link className="button button-light" href="/contact">Get in touch <span>↗</span></Link></Container></section>
    </>
  );
}
