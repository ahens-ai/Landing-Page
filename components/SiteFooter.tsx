import Link from "next/link";
import { Container } from "./Container";
import { BrandMark } from "./BrandMark";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div>
            <BrandMark />
            <p className="footer-tagline">AI industrial infrastructure for systems that have to work in the real world.</p>
          </div>
          <div className="footer-links-grid">
            <div>
              <p>Explore</p>
              <Link href="/platform">Platform</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/insights">Insights</Link>
            </div>
            <div>
              <p>Company</p>
              <Link href="/company">About</Link>
              <Link href="/contact">Contact</Link>
              <a href="https://www.linkedin.com/company/ahens-ai/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
            <div>
              <p>Legal</p>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ahens.ai. All rights reserved.</span>
          <span>Built for clarity, not noise.</span>
        </div>
      </Container>
    </footer>
  );
}
