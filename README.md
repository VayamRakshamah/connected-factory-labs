# Connected Factory Labs

A production-ready B2B website for an industrial IoT, automation dashboard, and connected-machine application practice. It uses the Next.js App Router, TypeScript, Tailwind CSS, accessible reusable components, React Hook Form, Zod, Vitest, and Playwright.

The public content intentionally avoids invented customers, testimonials, certifications, savings, and deployment claims. Demo telemetry is explicitly simulated.

## Prerequisites

- Node.js 20.9 or later (Node.js 22 is used in CI)
- npm 10 or later

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

| Variable             | Required                | Purpose                                                                  |
| -------------------- | ----------------------- | ------------------------------------------------------------------------ |
| `FORMSPREE_ENDPOINT` | Production contact form | Server-side Formspree endpoint, such as `https://formspree.io/f/your-id` |

Do not commit `.env.local` or production values. Without an endpoint, valid development submissions are logged using safe project metadata only. Production returns a configuration error until Formspree is configured.

## Commands

```bash
npm run dev          # local development
npm run format       # format files
npm run format:check # verify formatting
npm run lint         # ESLint
npm test             # Vitest unit tests
npm run test:e2e     # Playwright browser tests
npm run build        # production build
npm start            # serve the production build
```

Install local browser engines once with `npx playwright install chromium firefox webkit` if they are not already available.

## Company information

Edit `src/config/site.ts`. It is the single source of truth for:

- company and short names;
- tagline and description;
- founder name, biography, and company story;
- email, phone, WhatsApp, and address;
- production domain;
- LinkedIn, GitHub, demo, and booking links.

Before launch, replace every temporary contact value, the founder placeholder, final domain, social links, GitHub demo repository, and deployed demo URL.

Detailed reusable copy lives in `src/content/site-content.ts`. Add services, solution packages, industries, process steps, or FAQs by extending the relevant typed collection. Reuse existing card and section components so spacing and accessibility remain consistent.

## Contact form and Formspree

The browser validates with React Hook Form and the shared Zod schema. `POST /api/contact` validates again and forwards accepted JSON to Formspree. The endpoint value is never sent to the browser.

1. Create a Formspree form.
2. Copy its endpoint into `FORMSPREE_ENDPOINT` locally and in the hosting environment.
3. Configure the destination email and spam settings in Formspree.
4. Submit a real enquiry from the deployment and confirm delivery.

To use another provider, retain the shared schema and replace only the provider call inside the server route. Keep credentials server-side.

## Vercel deployment from GitHub

1. Push this repository to GitHub and merge the feature pull request into `main`.
2. In Vercel, choose **Add New → Project** and import the GitHub repository.
3. Keep Framework Preset as Next.js, build command as `npm run build`, and output settings at their defaults.
4. Add `FORMSPREE_ENDPOINT` under Project Settings → Environment Variables for Production and Preview.
5. Deploy. Vercel will create preview deployments for pull requests and update production from `main`.

### Custom domain

Add the domain in Vercel Project Settings → Domains, apply the DNS records Vercel provides, then change `domain` in `src/config/site.ts`. Rebuild so canonical, sitemap, Open Graph, and structured-data URLs use the final domain.

## Netlify deployment

Import the GitHub repository in Netlify, select the Next.js framework defaults, use `npm run build`, and add `FORMSPREE_ENDPOINT` in Site configuration → Environment variables. Netlify’s current Next.js adapter handles the server route.

## Normal Node hosting

```bash
npm ci
npm run build
FORMSPREE_ENDPOINT=https://formspree.io/f/your-id npm start
```

Run behind an HTTPS reverse proxy and a process supervisor. The host must support Node.js server processes and environment variables.

## Static export and GitHub Pages

The default project is not a static export because `/api/contact` performs secure server-side forwarding. For a static-only fork:

1. Change the form to submit directly to the public Formspree endpoint.
2. Remove `src/app/api/contact/route.ts`.
3. Set `output: "export"` in `next.config.ts` and configure `basePath`/`assetPrefix` when deploying below a repository subpath.
4. Run `npm run build`; publish the generated `out` directory with GitHub Actions.

Direct Formspree submission makes the endpoint visible in browser code. Re-run the full tests after changing form behaviour.

## SEO checklist

- Replace the temporary production domain and contact details.
- Verify every page title and description against final positioning.
- Confirm `/sitemap.xml`, `/robots.txt`, canonical URLs, social card, and JSON-LD on production.
- Add the domain to Google Search Console and submit the sitemap.
- Check Open Graph previews after deployment.

## Accessibility checklist

- Test keyboard navigation, focus order, skip link, menu, FAQ, and form errors.
- Verify at 320px, mobile, tablet, laptop, and large desktop widths.
- Check contrast after any brand-colour change.
- Retain reduced-motion handling and semantic headings.
- Test current Chrome, Safari, Firefox, and Edge before launch.

## Deployment checks

Run `npm run format:check`, `npm run lint`, `npm test`, `npm run build`, and `npm run test:e2e`. GitHub Actions repeats these checks for pull requests and `main`.

## Known limitations

- Company, founder, contact, social, repository, and deployment values are placeholders until finalized.
- Demo telemetry is local and simulated; it does not connect to a real industrial system.
- Formspree delivery needs external configuration and should be verified after deployment.
- Legal pages are general website text, not jurisdiction-specific legal advice.
- Static export requires the form changes described above.

## Licence and participation

Released under the [MIT License](LICENSE). See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
