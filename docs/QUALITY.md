# Quality guide

## Validation commands

| Command | Purpose |
| --- | --- |
| `npm run typecheck` | Strict TypeScript project check |
| `npm run lint` | Oxlint static analysis |
| `npm run test:run` | Unit and component tests once |
| `npm run build` | Production TypeScript and Vite build |
| `npm run test:e2e` | Build plus Chromium E2E and axe checks |
| `npm run check` | Typecheck, lint, Vitest and build in order |
| `npm run lighthouse` | Local Lighthouse CI audit |

## Accessibility criteria

- One `h1` and a logical heading hierarchy.
- Semantic landmarks, lists, figures and descriptions.
- A translated first-focus skip link and visible `:focus-visible` indication.
- Keyboard-operable navigation, language selection, details and downloads.
- Spanish and English accessible names and alternative text.
- Reduced-motion support and no serious or critical axe violations.
- No horizontal page overflow at the tested 390 px mobile viewport.

## Lighthouse objectives

- Performance: 0.85 (warning threshold because measurements vary).
- Accessibility: target 0.95; deployment-quality floor 0.90.
- Best Practices: 0.90 (warning threshold).
- SEO: target 0.95; deployment-quality floor 0.90.
- Console errors, invalid HTTP status and serious resource failures are errors.

## Pre-deployment checklist

1. Install exactly from the lockfile with `npm ci`.
2. Run `npm run check`.
3. Install Chromium when needed and run `npm run test:e2e`.
4. Confirm both language versions, light/dark themes and responsive layouts.
5. Confirm resumes, FDP report, external links, metadata and public SEO files.
6. Deploy only the `dist` artifact produced by a successful quality job.
