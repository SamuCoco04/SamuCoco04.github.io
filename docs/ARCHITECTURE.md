# Architecture

## Application structure

`App.tsx` composes the header, one semantic `main`, five page sections and the
footer. Shared controls live in `src/components`; section-specific presentation
and CSS live together in `src/sections`. Static project, skill and contact data
is kept in `src/data` so content contracts can be tested independently.

## Internationalisation

`src/i18n.ts` configures Spanish and English resources and detects the persisted
`portfolioLanguage` value. Components read copy through `react-i18next`.
`useDocumentMetadata` is the single owner of language-sensitive document title,
description and social metadata, while `index.html` keeps useful static defaults
for crawlers without JavaScript.

## Public assets

Vite copies `public` directly to the deployment root. Resumes and the public FDP
report remain PDFs. Project screenshots use WebP and include intrinsic dimensions;
components prefix their paths with `BASE_URL` for hosting compatibility. Icons,
the manifest, Open Graph image, robots file and sitemap also live in `public`.

## SEO

`index.html` defines canonical, Open Graph and Twitter metadata plus a JSON-LD
graph containing `Person` and `WebSite`. `robots.txt` and `sitemap.xml` expose only
the canonical public page.

## Testing and delivery

Vitest and Testing Library cover rendering, language changes, navigation, PDF
contracts and data integrity. Playwright verifies the production build, keyboard
and responsive behaviour, resources and axe accessibility in both languages.
GitHub Actions validates pull requests and gates Pages deployment behind quality
and E2E jobs.
