# joshuaheller.de

Persönliche Personal-Branding-Site für Joshua Heller (AI Engineer & Fractional CIO, Founder TAISC).
Statisch gebaut mit **Astro + Tailwind CSS v4**, SEO-optimiert, im TAISC-Brand-Stil.

## Stack

- **Astro 5** — statisches Rendering, top SEO, schnell (analog wernerstrauch.com)
- **Tailwind CSS v4** (`@tailwindcss/vite`) mit Brand-Tokens in `src/styles/global.css`
- **MDX/Markdown Content Collections** für Blog & KI-Glossar
- **astro-icon** + Lucide für Icons
- **@astrojs/sitemap** für `sitemap-index.xml`
- Self-hosted **Inter** (`@fontsource-variable/inter`) — DSGVO-konform, keine Google-Fonts-Requests

## Entwicklung

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # statisches Output nach dist/
pnpm preview  # Build lokal ansehen
```

## Struktur

```
src/
├── components/        # Header (Mega-Menu), Footer, Hero, Stats, Faq, Cta, Steps, LogoWall, Placeholder, Seo
├── content/
│   ├── blog/          # Markdown-Artikel (3 Cornerstone-Artikel)
│   └── ki-glossar/    # Markdown-Glossareinträge (FDE, RAG, Fractional CIO)
├── content.config.ts  # Collection-Schemas
├── layouts/Layout.astro
├── pages/             # Alle Seiten (siehe Sitemap)
├── site.ts            # Zentrale Daten: Nav, Services, Stats, Kunden
└── styles/global.css  # Brand-Tokens & Utilities
```

## Seiten

`/` · `/ueber-mich` · `/forward-deployed-engineer` · `/fractional-caio` · `/mvp` ·
`/ki-workshop` · `/ki-sparring` · `/leistungen` · `/kontakt` · `/blog` (+ Artikel) ·
`/ki-glossar` (26 Einträge) · `/impressum` · `/datenschutz`

## SEO

- Pro Seite: `<title>`, Meta-Description, Canonical, Open Graph, Twitter Card (`src/components/Seo.astro`)
- JSON-LD: `Person` (global), `Service` (Service-Seiten), `Article` (Blog), `FAQPage` (FAQ-Blöcke), `DefinedTerm` (Glossar)
- `robots.txt` + Sitemap, `<html lang="de">`

## Brand

Adaptiert aus dem TAISC-Brand-System: Electric Blue `#0000FF` als Primärfarbe, Anthrazit-Ink,
dezente Cyan/Purple-Gradient-Blobs, Glassmorphism-Cards, Pill-Buttons, viel Weißraum.

## Assets

Echte Fotos (`src/assets/joshua/`, via `astro:assets` zu WebP optimiert) und echte Kunden- bzw.
Partner-Logos (`public/images/logos/`) sind eingebunden. Das Kontaktformular ist self-contained
(mailto-Entwurf, kein externer Dienst).

Noch offen:

- **OG-Images** pro Seite → `public/og/de/og-{slug}.png` (Default `og-default.png` referenziert, noch nicht erstellt)
- **Favicon** final (aktuell generisches blaues „J")
- **Recht:** Impressum-Daten (HRB, Anschrift, USt-IdNr.) füllen, Datenschutzerklärung anwaltlich finalisieren
- **Kunden-Freigabe** für Logo-Wand (NDA-sensible Kunden ausgenommen)
- **Blog-Cover** sind weiterhin Platzhalter (`Placeholder.astro`)
- **Referenzen / Use-Cases:** Beispielprojekte als Success-Stories ergänzen (Inhalte folgen von Joshua)

Noch nicht gebaut (spätere Sprints lt. Spec): interaktive Tools (Token-Rechner, AI-Readiness-Audit,
RAG-vs-Fine-Tuning), englische Version, „Frage Joshua"-RAG-Chatbot.

## Deployment

Statisches `dist/` → Vercel oder Cloudflare Pages. `site` in `astro.config.mjs` steht auf `https://joshuaheller.de`.
