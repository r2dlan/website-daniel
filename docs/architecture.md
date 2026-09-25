# Architektur

## Ziel

Persönliche Astro-Webseite mit statischem Build, zweisprachigen Seiten, Markdown-Projekten, Bilder-Support und Cloudflare-Deployment.

## Aktuelle Struktur

- `src/pages/` — Seiten und Routing
- `src/layouts/` — globale Layouts
- `src/components/` — wiederverwendbare UI-Bausteine
- `src/content/projects/` — Projektbeiträge als Markdown
- `src/content.config.ts` — Content-Collection-Schema
- `src/lib/` — Hilfsfunktionen, Routing, i18n, Markdown-Helper
- `src/styles/` — globale Styles
- `public/` — statische Dateien und Bilder
- `workers/` — Cloudflare Worker für das Kontaktformular
- `.github/workflows/` — CI, Deploy und Worker-Check
- `.opencode/` — OpenCode-Agenten und Arbeitskontext

## Leitlinien

- Content möglichst zentral und wiederverwendbar halten
- UI-Texte über `src/lib/i18n.ts` pflegen
- Projekte als Markdown mit optionalen Bildern ablegen
- Kontaktformular über Worker statt direkter Mail-Logik im Frontend lösen
- Änderungen vor Deploy und Merge prüfen
