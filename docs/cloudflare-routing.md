# Cloudflare Routing

## Ziel

Die Webseite soll auf Cloudflare sauber ausgeliefert werden und die Sprachwahl über die Root-Route unterstützen.

## Aktueller Stand

- Deutsch unter `/de/`
- Englisch unter `/en/`
- Root-Route leitet auf Deutsch oder Englisch weiter
- manuelle Sprachwahl über `?lang=de` und `?lang=en` bleibt möglich
- alte Blog-Routen sind entfernt
- Root-Weiterleitung läuft als Cloudflare-Routing-Logik, nicht über Astro
- Fallback ohne Länderinfo ist Englisch

## Routing-Logik

- `AT`, `CH`, `DE`, `LI`, `LU` → Deutsch
- alles andere → Englisch

## Technische Umsetzung

- Sprachwahl in `src/middleware.ts`
- Root-Sprachrouting über Cloudflare-Worker-Logik in `workers/locale-router.ts`
- Canonical-/Trailing-Slash-Verhalten zentral im Routing geregelt
- 404-Seite ist projektintern umgesetzt, ohne Astro-Hinweise im UI
