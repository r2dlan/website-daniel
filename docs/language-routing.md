# Language Routing

## Ziel

Die Webseite soll Deutsch und Englisch unterstützen.

## Verhalten

- **DACH** → Deutsch als Standard
- **Sonstige Regionen** → Englisch als Fallback
- Sprache soll zusätzlich manuell auswählbar bleiben

## Vorschlag für späteres Cloudflare-Routing

- Regionserkennung über Cloudflare
- Weiterleitung auf passende Sprachversion
- Fallback auf Englisch, wenn keine DACH-Region erkannt wird

## Projektstruktur

- `/de` bzw. `/` für Deutsch
- `/en` für Englisch
- Blog ebenfalls sprachgetrennt
