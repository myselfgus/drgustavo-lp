# Repository Guidelines

## Project Structure & Module Organization
- `src/components`, `src/layouts`, and `src/pages` orchestrate Astro views; mirror existing PascalCase imports when introducing new modules.
- Author content in `src/content`; blog entries feed search handlers in `functions/api/blog` and require frontmatter (`title`, `excerpt`, `tags`).
- Edge behaviour lives in `functions/` (`_middleware.ts`, `api/chat.ts`, `api/cal-webhook.ts`); align bindings with `wrangler.jsonc` before deploying.
- Static assets stay in `public/`; treat `dist/` as disposable build output.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — launch Astro on `localhost:4321` with hot reload.
- `npm run build` — runs `astro check` and emits optimized assets plus `_worker.js` in `dist/`.
- `npm run preview` — serve the production bundle for regression passes.
- `npm run deploy` — build then publish via Wrangler using this repo's configuration.
- `npx wrangler dev dist/_worker.js/index.js` — simulate the Worker locally when debugging APIs or middleware.

## Coding Style & Naming Conventions
- Follow two-space indentation, single quotes, and TypeScript-first utilities (`const` + explicit exports) in `src/lib`.
- Name Astro components in PascalCase (`Hero.astro`), routes in kebab-case (`src/pages/publicacoes.astro`), and helper modules in lowerCamelCase (`utils.ts`).
- Keep global and tokenized CSS in `src/styles`; reuse declared CSS variables for color, spacing, and breakpoints.

## Testing Guidelines
- There is no dedicated test runner yet; rely on `npm run build` for compile-time checks and preview the build after major changes.
- Manually verify homepage sections, Cal.com scheduling, and Worker endpoints (`/api/chat`, `/api/blog/search`) before merging.
- If you add automated tests, colocate them in `functions/__tests__` or `src/__tests__`, update `package.json` scripts, and ensure CI instructions live in this guide.

## Commit & Pull Request Guidelines
- Use concise, capitalized, imperative subjects (e.g., `Refine hero animations`), mirroring the existing `Revise README with project overview and structure` style; expand details in the body when needed.
- Keep unrelated changes out of the same commit, especially separating content updates from logic changes.
- PRs should link issues or TODOs, outline user impact, include manual test notes, and attach screenshots for UI tweaks.
- Call out new environment variables or Wrangler bindings so reviewers can reproduce with `npm run preview`.

## Deployment & Secrets
- Maintain `.env` based on `.env.example`; never commit keys—load secrets via Wrangler or CI secrets stores.
- Before `npm run deploy`, confirm `wrangler.jsonc` has the correct `account_id`, re-run `npm run build`, and verify `dist/_worker.js` is refreshed.
