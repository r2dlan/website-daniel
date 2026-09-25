# Language Routing

## Ziel

Die Webseite unterstützt Deutsch und Englisch und kann über die Root-Route automatisch in die passende Sprache leiten.

## Verhalten

- DACH-Region → Deutsch als Standard
- Rest der Welt → Englisch als Fallback
- manuelle Sprachwahl bleibt möglich

## Aktuelle Routen

- Deutsch: `/de/`
- Englisch: `/en/`
- Projekte: `/de/projekte/` und `/en/projects/`

## Umsetzung

- Spracherkennung in `workers/locale-router.ts`
- Sprachlinks und Pfade zentral in `src/lib/i18n.ts`
- Sprache kann weiterhin per Query `?lang=de` oder `?lang=en` gewählt werden
