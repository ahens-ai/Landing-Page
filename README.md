# ahens.ai — Website starter

A premium, original Next.js website starter for **ahens.ai**, positioned as AI Industrial Infrastructure.

The visual direction borrows only broad, non-protectable cues from the supplied references: a confident full-stack technology narrative, modular information architecture, dark technical editorial surfaces, and high-clarity motion. It does **not** copy any supplied brand assets, source code, or layout.

## Included

- Next.js App Router + TypeScript
- Responsive home, platform, solutions, insights, company, contact, privacy, terms, and 404 pages
- Original CSS-based visual systems and reduced-motion support
- Editable copy and content objects in `data/site.ts`
- Placeholder API endpoints for contact and newsletter forms
- Metadata, sitemap, robots, keyboard skip link, focus states, and semantic layout

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## First things to replace

1. **Brand truth:** Update name, email, URL and claims in `data/site.ts`.
2. **Copy:** Replace every visible use of “placeholder” with product-specific language and proof.
3. **Contact delivery:** Wire `app/api/contact/route.ts` to Resend, HubSpot, Salesforce, a database, or another approved endpoint.
4. **Newsletter delivery:** Wire `app/api/waitlist/route.ts` to your email provider, including rate limiting and bot protection.
5. **Legal copy:** Replace the placeholder `privacy` and `terms` pages with counsel-reviewed documents before launch.
6. **Analytics:** Add your approved privacy-conscious analytics and consent workflow.
7. **Media:** Add licensed photography, diagrams, demos, case-study visuals, and OG images.

## Suggested deployment

Deploy to Vercel:

```bash
npm run build
```

Set the production domain in `data/site.ts` before deploying so sitemap and metadata use the correct canonical base URL.

## Project structure

```text
app/                 Routes, metadata, API placeholders, global CSS
components/          Reusable visual and form components
data/site.ts         Single source of truth for editable starter content
public/              Add approved assets here later
```

## Design system notes

- Dark graphite ground with a warm off-white foreground and an acid-lime signal color.
- Technical visuals are generated from CSS/SVG; no external assets are necessary for the first build.
- Motion is intentionally restrained. `prefers-reduced-motion` disables non-essential animation.
- The “industrial” feeling is derived from readable layers, structured information, and system-state signals rather than generic sci-fi decoration.
