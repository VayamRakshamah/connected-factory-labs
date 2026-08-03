# Security Policy

## Reporting

Please report a suspected vulnerability privately to the email configured in `src/config/site.ts`. Do not open a public issue containing exploitation steps, personal information, credentials, or production endpoints.

## Supported version

Security fixes target the current `main` branch. Keep Next.js and other dependencies updated and review automated dependency alerts before deployment.

## Operational guidance

- Never commit `.env` files or Formspree configuration.
- Keep industrial monitoring read-only unless a separately reviewed control requirement exists.
- Use TLS, least-privilege access, unique device identities, and network separation in real deployments.
- Treat the website demo as simulated; it is not an industrial control interface.
