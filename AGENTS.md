# amule-org.github.io - AGENTS.md

**⚠️ EXCLUDED FOLDERS**: The following folders must be **EXCLUDED** from any analysis, reading, or modification: `node_modules/`, `build/`, `.docusaurus/`.

**⚠️ AGENTS.md** This document is for LLM use. Keep it short — preserve the format and use the minimum number of tokens.

**amule-org.github.io** is the aMule project website, built with Docusaurus v3. Internationalized (i18n).

## Main Libraries

- **Node.js**: `>=24`
- **Framework**: `@docusaurus/core`, `@docusaurus/preset-classic` (`^3.10`)
- **Language**: TypeScript (`tsx` components, `ts` config files)
- **React**: `^18`
- **Syntax highlighting**: `prism-react-renderer`
- **Search**: `@easyops-cn/docusaurus-search-local` — client-side, index built at compile time. Configured in `docusaurus.config.ts` (`themes` array). Add new locales to its `language` array when adding a new i18n locale. Search only works in the production build (`npm run build` + `npm run serve`), not in the dev server (`npm run start`).

## Architecture

**Static site**: `src/pages/index.tsx` (orchestrator) → `src/components/` (section components) → Docusaurus build → GitHub Pages.

**Key files**:
- `docusaurus.config.ts` — site config, navbar, footer, i18n locales, theme
- `sidebars.ts` — docs sidebar definition
- `src/pages/index.tsx` — homepage, composes all section components
- `src/components/<Name>/index.tsx` — one component per homepage section
- `src/components/<Name>/styles.module.css` — scoped styles per component
- `src/css/custom.css` — global CSS variable overrides (color palette)
- `docs/` — English documentation (Markdown)
- `i18n/es/` — Spanish translations (`code.json` for UI strings, mirrored `docs/` for content)
- `static/img/` — images (`aMule-icon.png`, `social-card.png`, `screenshots/`, `docs/`)

## Homepage Components

| Component | Section |
|---|---|
| `Hero` | Header with logo, version badge, CTA buttons |
| `WhatIsAMule` | Project description |
| `DownloadSection` | Platform download cards (Linux, macOS, Windows, Source) |
| `HighlightsSection` | 3.0.0 release highlights grid |
| `BenchmarkSection` | Throughput benchmark cards (vs 2.3.3 and vs eMule) |
| `ScreenshotsSection` | Screenshot grid with lightbox |
| `FeaturesSection` | Bulleted feature list |

## i18n

- Default locale: `en`. Additional locale: `es`.
- UI strings (React components): `i18n/<locale>/code.json` — each entry has `message` (translate this) and `description` (context, do not translate).
- Docs content: `i18n/<locale>/docusaurus-plugin-content-docs/current/` mirrors `docs/`.
- Sidebar labels: `i18n/<locale>/docusaurus-plugin-content-docs/current/current.json`.
- Add a new locale: register in `docusaurus.config.ts`, run `npm run write-translations -- --locale <code>`, then translate generated files.
- Update translations after English changes: run `npm run write-translations -- --locale <code>` (adds new keys, preserves existing ones), then translate new entries in `code.json` and update changed docs files manually.
- **Interpolation in `<Translate>`**: Docusaurus only supports `{varName}` placeholders — **not** `<tag>chunks</tag>` (FormatJS/react-intl syntax). For links inside translated strings use: `values={{ link: <Link to="..."><Translate id="...">text</Translate></Link> }}` with `{link}` in the message.

## Important Notes

- **Images in docs**: referenced as `/img/docs/<file>` (served from `static/`).
- **Images in components**: referenced as `/img/<file>` (served from `static/`).
- **Social card**: `static/img/social-card.png` is a placeholder; replace with a proper 1200×630 image.

## Workflow

After any code change, before completing the task:

1. Run the build: `npm run build`
2. Fix any errors or warnings introduced by the change.
