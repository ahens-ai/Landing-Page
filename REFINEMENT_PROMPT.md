# LLM Refinement Prompt — ahens.ai visual & motion upgrade

You are a senior creative technologist, award-winning digital product designer, and frontend performance engineer. You are working **inside an existing Next.js 15 + React 19 + TypeScript website repository** for **ahens.ai**, an early-stage company positioned as **AI Industrial Infrastructure**.

The existing website is a polished starter. It has an original dark technical editorial aesthetic, responsive layouts, CSS/SVG abstract visuals, placeholder copy, global styles, and routes for Home, Platform, Solutions, Insights, Company, Contact, Privacy, and Terms.

Your job is **not** to replace the site with a generic SaaS template or to write a concept-only response. Inspect the existing repository and improve it directly. Preserve the current information architecture and route structure while making the site feel materially more intentional, memorable, and technically alive.

---

## Reference direction — translate, do not copy

The desired feeling is at the intersection of:

- **Clear full-stack systems storytelling:** Large, declarative editorial headlines; modular sections; visual architectures that make an abstract platform feel tangible; strong navigational hierarchy.
- **Industrial AI credibility:** Quiet confidence, operational systems, real-world constraints, coordination, control, traceability, resilience, and performance.
- **Premium technical craft:** Responsive, restrained animation; compositional whitespace; precise typography; visual evidence of systems working.

Do **not** clone, reproduce, scrape, copy, or closely imitate any third-party website, branding, logo, video, illustration, proprietary layout, or text. Produce an original design system for ahens.ai.

---

## Core brand thesis

**ahens makes intelligence operational.**

It should feel like the infrastructure layer that coordinates signals, models, people, and critical workflows. The site must not look like a generic chatbot, a crypto dashboard, or a random “AI agent” landing page.

Suggested tonal anchors:

- serious but optimistic
- industrial but elegant
- intelligent, never mystical
- engineered, never over-designed
- dynamic, never noisy
- operational, not “futuristic wallpaper”

---

## Highest-priority deliverable

Make the landing page’s visual narrative substantially better through a sequence of original, performant, accessible visualizations:

1. **Hero — “Intelligence that operates.”**
   - Retain the strong hero copy.
   - Upgrade the existing hero visual into a living “operational plane.”
   - Use one of these original visual motifs: a mesh of flowing signal packets moving between reliable nodes; a layered operations map; an abstract field-to-cloud topology; a kinetic decision lattice.
   - The hero should respond subtly to pointer position on desktop, but it must still look excellent and complete on touch devices.
   - Do not use a large decorative 3D asset by default. First prefer Canvas 2D, SVG, CSS, or WebGL only when its visual gain justifies the complexity.
   - Make the first viewport instantly legible and usable; do not hide the headline behind a loader.

2. **Architecture visualization — “A composable operating plane.”**
   - Turn the three layers (Signal, Intelligence, Assurance) into an explanatory interactive system.
   - On hover/focus, isolate a layer and illuminate its data flow, with a small explanatory panel.
   - On mobile, use stacked cards and lightweight entrance transitions rather than an unusable miniature diagram.
   - Ensure the same information is fully accessible without pointer interaction.

3. **Capability section — “Connect / Orchestrate / Observe.”**
   - Make each card feel like a different system state, not three identical boxes.
   - Add carefully timed, low-amplitude micro-animation: packets arriving for Connect; decision branches resolving for Orchestrate; telemetry traces stabilising for Observe.
   - Do not animate continuously at high intensity. Use pauses and calm idle states.

4. **Solutions section — prove movement from inputs to outcomes.**
   - Replace generic card decorations with a small data-flow visual per solution.
   - Make each visual semantically relevant:
     - Industrial Operations: sensor or fleet signals becoming actionable work.
     - Enterprise Knowledge: secure sources becoming grounded answer paths.
     - Autonomous Workflows: policy gates around controlled actions.

5. **Final CTA — an arrival state.**
   - The final section should feel like the infrastructure is ready to connect: a contained active system with minimal human-readable state markers.

---

## Engineering requirements

1. **Preserve the current stack.**
   - Next.js App Router, TypeScript, React 19.
   - Do not downgrade packages or convert to a different framework.
   - Avoid adding a dependency unless it materially improves the final build.

2. **Preferred animation approach.**
   - Use CSS keyframes, SVG animation, and the Web Animations API for simple choreography.
   - Use Motion / Framer Motion only if it makes page transitions, scroll-linked behavior, or orchestrated interaction notably easier and stays lean.
   - Use `requestAnimationFrame` only for animation loops that truly need it; pause loops when the page is hidden.
   - Use `IntersectionObserver` so expensive visual loops only run while sections are in or near the viewport.
   - Respect `prefers-reduced-motion: reduce`. In reduced-motion mode, preserve hierarchy and state changes but remove continuous motion, parallax, and large transforms.

3. **Performance budget.**
   - Do not autoplay heavy video.
   - Do not add uncompressed image assets.
   - Keep hero interactions responsive on ordinary 2022+ laptops and mid-tier Android phones.
   - Avoid layout thrashing. Animate `transform` and `opacity`, not layout properties.
   - Avoid dynamically importing a massive 3D library for a purely decorative effect.
   - Maintain a calm idle CPU/GPU footprint.

4. **Accessibility.**
   - Every interactive visual requires keyboard access and a clear focus state.
   - Do not convey meaning using color alone.
   - Preserve readable color contrast.
   - Give non-semantic decoration `aria-hidden="true"`.
   - Use meaningful labels, region landmarks, and respect reduced motion.

5. **Responsive behavior.**
   - Test and fix 360px, 768px, 1024px, 1440px, and ultra-wide widths.
   - Never make mobile users pinch-zoom an architecture diagram.
   - Avoid content overflow / horizontal scroll.
   - Use touch-safe targets.

6. **Code quality.**
   - Decompose complex visuals into reusable components.
   - Use TypeScript types; no `any`.
   - Keep data and copy separate from visualization code.
   - Do not erase working contact / newsletter form behavior.
   - Preserve metadata, sitemap, robots, and current accessibility features.
   - Remove dead code; keep lint and typecheck clean.

---

## Visual system upgrade

Refine—not blindly replace—the visual language:

- Keep the dark graphite / warm off-white / acid-lime signal family, but improve token naming and provide coherent states for hover, focus, disabled, and selected.
- Use strong, editorial typography with a generous display scale and tight, polished responsive interpolation via `clamp()`.
- Improve texture using subtle grain, grids, hard-edged geometry, thin rules, and calibrated glow. Avoid excessive blurred blobs and arbitrary glassmorphism.
- Make animation communicate **flow**, **routing**, **verification**, and **operational health**.
- Establish a spacing rhythm and ensure every section has a strong entrance and exit.

---

## Content limitations

The copy remains placeholder in many places. Do not invent customers, funding, security certifications, performance benchmarks, partnerships, deployment statistics, or compliance claims. You may improve phrasing, but any unverified material must remain visibly framed as illustrative / placeholder.

---

## Acceptance checklist

Before you finish, verify all of the following:

- [ ] `npm run typecheck` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] The hero is readable and excellent before any animation begins.
- [ ] All visualizations degrade gracefully on mobile and reduced-motion settings.
- [ ] Navigation, contact form, newsletter form, and legal routes still work.
- [ ] No copied visual assets, text, logos, or layouts from third-party reference sites.
- [ ] No generic dashboard-UI drift.
- [ ] Desktop and mobile feel like the same brand, not separate designs.
- [ ] The home page now tells a compelling visual story from signal → intelligence → assurance → action.

When finished, provide:

1. A concise summary of the improvements made.
2. A file-by-file change list.
3. Any dependencies added and why.
4. Exact commands run and their results.
5. A short “next design iteration” list identifying the highest-value unfinished refinements.
