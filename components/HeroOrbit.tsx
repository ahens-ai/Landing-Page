"use client";

import { PointerEvent as ReactPointerEvent, useEffect, useRef } from "react";

const planeNodes = [
  { className: "signal", label: "Signal", meta: "Sources" },
  { className: "context", label: "Context", meta: "Contracts" },
  { className: "model", label: "Models", meta: "Routing" },
  { className: "assurance", label: "Assurance", meta: "Review" },
  { className: "action", label: "Action", meta: "Systems" },
];

const packets = ["ingest", "route", "verify", "commit"];

export function HeroOrbit() {
  const planeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const plane = planeRef.current;
    if (!plane) return;

    plane.dataset.visible = "true";

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        plane.dataset.visible = String(entry.isIntersecting);
      },
      { rootMargin: "180px" },
    );

    observer.observe(plane);
    return () => observer.disconnect();
  }, []);

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--plane-x", x.toFixed(3));
    event.currentTarget.style.setProperty("--plane-y", y.toFixed(3));
    event.currentTarget.style.setProperty("--plane-shift-x", `${(x * 18).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--plane-shift-y", `${(y * 14).toFixed(2)}px`);
    event.currentTarget.style.setProperty("--plane-tilt-x", `${(y * -4).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--plane-tilt-y", `${(x * 5).toFixed(2)}deg`);
  }

  function handlePointerLeave(event: ReactPointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--plane-x", "0");
    event.currentTarget.style.setProperty("--plane-y", "0");
    event.currentTarget.style.setProperty("--plane-shift-x", "0px");
    event.currentTarget.style.setProperty("--plane-shift-y", "0px");
    event.currentTarget.style.setProperty("--plane-tilt-x", "0deg");
    event.currentTarget.style.setProperty("--plane-tilt-y", "0deg");
  }

  return (
    <div
      ref={planeRef}
      className="hero-plane"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero-plane-grid" />
      <div className="hero-plane-depth hero-plane-depth-a" />
      <div className="hero-plane-depth hero-plane-depth-b" />
      <svg className="hero-plane-vector" viewBox="0 0 720 620" fill="none" preserveAspectRatio="xMidYMid meet">
        <path className="plane-backbone" d="M86 318C190 260 286 276 360 318C454 371 532 362 634 296" />
        <path className="plane-route plane-route-a" d="M94 212C184 250 228 295 315 306C421 319 472 242 626 194" />
        <path className="plane-route plane-route-b" d="M108 432C215 374 287 367 364 319C459 261 526 336 614 420" />
        <path className="plane-route plane-route-c" d="M191 123C241 220 284 266 359 318C435 371 475 429 529 505" />
        <circle className="plane-core-ring" cx="360" cy="318" r="112" />
        <circle className="plane-core-ring plane-core-ring-wide" cx="360" cy="318" r="206" />
      </svg>
      {planeNodes.map((node) => (
        <div className={`hero-plane-node hero-plane-node-${node.className}`} key={node.className}>
          <span />
          <strong>{node.label}</strong>
          <small>{node.meta}</small>
        </div>
      ))}
      <div className="hero-plane-core">
        <span>ahens</span>
        <small>operational plane</small>
      </div>
      <div className="hero-plane-packets">
        {packets.map((packet) => (
          <span className={`hero-plane-packet hero-plane-packet-${packet}`} key={packet} />
        ))}
      </div>
      <div className="hero-plane-status">
        <span />
        systems in sync
      </div>
    </div>
  );
}
