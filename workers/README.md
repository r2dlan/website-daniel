# Contact Worker

This worker receives the contact form submission and forwards it to the mail provider.

## Locale Router

The root path `/` is routed by Cloudflare to either `/de/` or `/en/`.

- DACH countries (`AT`, `CH`, `DE`, `LI`, `LU`) → `/de/`
- everything else → `/en/`
- if no country information is available, English is the fallback

## Expected environment variables

- `CONTACT_TO` — destination inbox
- `CONTACT_FROM` — verified sender address
- `MAIL_API_KEY` — API key for the mail provider

## Frontend endpoint

Set `PUBLIC_CONTACT_ENDPOINT` in your site environment to the worker URL, for example:

`https://your-worker.example.workers.dev/contact`

## Pages deployment

The website itself is deployed via Cloudflare Pages. The Pages project name is provided to the deployment workflow via the `CLOUDFLARE_PAGES_PROJECT_NAME` secret.
