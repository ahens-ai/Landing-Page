import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Bring us the systems that need to work better." copy="Use this form as a polished placeholder now, then connect the endpoint to Resend, HubSpot, Salesforce, Notion, or your preferred lead workflow." />
      <section className="contact-section"><Container><div className="contact-layout"><div className="contact-aside"><div className="contact-diagram"><span/><span/><span/><span/><i/></div><p className="eyebrow">Direct line</p><a href={`mailto:${site.email}`}>{site.email}</a><p>For partnerships, early access, design partners, or work in progress.</p><div className="contact-availability"><span/><p>Open to carefully chosen conversations.</p></div></div><ContactForm /></div></Container></section>
    </>
  );
}
