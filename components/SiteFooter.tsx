import Link from "next/link";
import { footerGroups, site } from "@/data/site";
import { BrandMark } from "./BrandMark";
import { Container } from "./Container";
import { NewsletterForm } from "./NewsletterForm";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-command">
          <div>
            <BrandMark />
            <p>AI industrial infrastructure for systems that need secure, governable intelligence in operation.</p>
          </div>
          <div className="footer-status">
            <span />
            <div>
              <strong>Deployment-ready architecture</strong>
              <small>Governance, observability, and trust reporting designed into the operating plane.</small>
            </div>
          </div>
        </div>

        <div className="footer-grid">
          {footerGroups.map((group) => (
            <div className="footer-column" key={group.title}>
              <p>{group.title}</p>
              {group.links.map((link) => (
                <Link href={link.href} key={`${group.title}-${link.href}`}>{link.label}</Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-signal">
          <div>
            <p className="eyebrow">The ahens signal</p>
            <h2>Architecture notes for intelligence that operates.</h2>
          </div>
          <NewsletterForm contactEmail={site.email} />
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ahens.ai. All rights reserved.</span>
          <div>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {site.social.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.href}>{item.label}</a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
