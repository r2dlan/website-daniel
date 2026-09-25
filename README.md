# www.daniel-andres.com

Personal Astro website by Daniel Andres with German/English navigation, projects, legal pages, and an embedded contact form.

## Features

- Astro with a static build
- German and English pages
- projects as Markdown content
- custom 404 page
- contact form backed by a Cloudflare Worker
- Cloudflare deployment
- GitHub Actions for CI and deployments

## Tech Stack

- [Astro](https://astro.build/)
- [Bun](https://bun.sh/)
- [Cloudflare](https://www.cloudflare.com/)
- [Vitest](https://vitest.dev/)
- [Prettier](https://prettier.io/)

## Project Structure

- `src/pages/` – pages and routes
- `src/content/projects/` – Markdown projects
- `src/components/` – reusable components
- `src/layouts/` – layouts
- `src/lib/` – helper functions and i18n
- `src/styles/` – global styles
- `workers/contact.ts` – Cloudflare Worker for the contact form
- `.github/workflows/` – CI and deployment workflows

## Development

### Requirements

- Bun `1.4.2` or compatible

### Install

```bash
bun install
```

### Start locally

```bash
bun run dev
```

### Checks

```bash
bun run format:check
bun run check
bun run build
```

### Tests

```bash
bun run test
```

## Deployment

The deployment flow builds the Astro site and publishes it through Cloudflare Pages.

```bash
bun run deploy
```

### Required Cloudflare secrets

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PAGES_PROJECT_NAME`

## Contact Form

The contact form sends data via `fetch` to a Cloudflare Worker.

### Required environment variables

- `PUBLIC_CONTACT_ENDPOINT` – worker endpoint URL
- `CONTACT_TO` – destination inbox
- `CONTACT_FROM` – verified sender address
- `MAIL_API_KEY` – API key for the mail provider

See also:

- `.env.example`
- `workers/README.md`

## Project Images

Project images live in `public/images/projects/` and are referenced from Markdown frontmatter via their public URL path.

Example:

```yaml
images:
  - src: /images/projects/example-1.jpg
    alt: Example image
    caption: Optional caption
```

## URL Behavior

The site uses consistent slash-based URLs. Internal links are written accordingly.

## License

Private project. No public license is defined.
