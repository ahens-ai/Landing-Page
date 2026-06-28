import type { ReactNode } from "react";
import { Container } from "./Container";

export function PageHero({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <Container>
        <div className="page-hero-grid">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
          <div className="page-hero-side">
            <p>{copy}</p>
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
