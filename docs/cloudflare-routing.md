# Cloudflare Routing Vorbereitung

## Ziel

Später soll Cloudflare anhand der Region die passende Sprache wählen.

## Gedanke

- DACH-Region → Deutsch
- Rest der Welt → Englisch
- Manuelle Sprachwahl bleibt immer möglich

## Aktueller Stand

- Deutsch liegt unter `/de/`
- Englisch liegt unter `/en/`
- Startseite kann später per Cloudflare weiterleiten

## Nächster Schritt später

- `request.cf.country` auswerten
- Root-Request auf passende Sprachroute lenken
- Manuelle Sprachwahl respektieren

## Technische Logik

- `AT`, `CH`, `DE`, `LI`, `LU` → `/de/`
- alles andere → `/en/`
- manuelle Auswahl über `?lang=de` oder `?lang=en` bleibt möglich
