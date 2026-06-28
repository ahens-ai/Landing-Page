"use client";

import { useMemo, useState } from "react";
import { pillars } from "@/data/site";

export function ArchitectureMap() {
  const [activeIndex, setActiveIndex] = useState(pillars[0].index);
  const activePillar = useMemo(
    () => pillars.find((pillar) => pillar.index === activeIndex) ?? pillars[0],
    [activeIndex],
  );

  return (
    <section className="architecture-section" aria-labelledby="architecture-title">
      <div className="architecture-intro">
        <div>
          <p className="eyebrow">A composable operating plane</p>
          <h2 id="architecture-title">Infrastructure that makes AI operational.</h2>
        </div>
        <p>
          Designed as a coherent system of layers rather than a loose collection of tools. The precise
          product details below are intentionally placeholder content.
        </p>
      </div>
      <div className="architecture-system" data-active={activePillar.layer}>
        <div className="architecture-diagram" aria-hidden="true">
          <div className="architecture-diagram-grid" />
          <svg viewBox="0 0 720 560" fill="none" preserveAspectRatio="xMidYMid meet">
            <path className="architecture-flow architecture-flow-signal" d="M96 388C184 337 252 327 334 280C426 228 514 207 624 172" />
            <path className="architecture-flow architecture-flow-intelligence" d="M96 280C185 280 253 280 334 280C430 280 520 280 624 280" />
            <path className="architecture-flow architecture-flow-assurance" d="M96 172C178 224 252 235 334 280C421 328 509 357 624 388" />
            <circle cx="334" cy="280" r="116" />
            <circle cx="334" cy="280" r="210" />
          </svg>
          {pillars.map((pillar) => (
            <div className={`architecture-layer architecture-layer-${pillar.layer}`} key={pillar.index}>
              <span>{pillar.label}</span>
              <i />
            </div>
          ))}
          <div className="architecture-hub">
            <strong>ahens</strong>
            <span>operating plane</span>
          </div>
        </div>
        <div className="architecture-controls">
          <div className="architecture-card-list" role="list">
            {pillars.map((pillar) => (
              <button
                className="architecture-card"
                type="button"
                key={pillar.index}
                aria-pressed={activePillar.index === pillar.index}
                aria-controls="architecture-panel"
                onClick={() => setActiveIndex(pillar.index)}
                onFocus={() => setActiveIndex(pillar.index)}
                onPointerEnter={() => setActiveIndex(pillar.index)}
              >
                <span className="architecture-number">{pillar.index}</span>
                <span className="architecture-label">{pillar.label}</span>
                <span className="architecture-card-copy">
                  <strong>{pillar.title}</strong>
                  <span>{pillar.body}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="architecture-panel" id="architecture-panel" aria-live="polite">
            <p>{activePillar.state}</p>
            <div>
              {activePillar.flow.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
