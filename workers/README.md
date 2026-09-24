# Contact Worker

This worker receives the contact form submission and forwards it to the mail provider.

## Expected environment variables

- `CONTACT_TO` — destination inbox
- `CONTACT_FROM` — verified sender address
- `MAIL_API_KEY` — API key for the mail provider

## Frontend endpoint

Set `PUBLIC_CONTACT_ENDPOINT` in your site environment to the worker URL, for example:

`https://your-worker.example.workers.dev/contact`
