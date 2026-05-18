# amule-org.github.io

Source for the aMule project website at [https://amule-org.github.io](https://amule-org.github.io).

The site is built with [Hugo](https://gohugo.io) using the [Docsy](https://www.docsy.dev) theme:

- **Landing page** — custom Hugo template (`layouts/index.html`) using Go template syntax, with all text in `i18n/` files and structured data in `data/`
- **Documentation** — Markdown sources under `content/en/docs/` and `content/es/docs/`, rendered with Docsy's documentation layout (sidebar, search, dark/light mode)

A single `hugo build` produces the complete multilingual site. A single `hugo server` serves both the landing page and the documentation locally.

Deployment is handled automatically by GitHub Actions on every push to `master`.

## Repository layout

```
├── .github/workflows/deploy.yml   # CI/CD: builds and deploys to GitHub Pages
├── content/
│   ├── en/                        # English content
│   │   ├── _index.md              # Homepage front matter
│   │   └── docs/                  # English documentation → /docs/
│   └── es/                        # Spanish content
│       ├── _index.md              # Homepage front matter (ES)
│       └── docs/                  # Spanish documentation → /es/docs/
├── data/
│   └── downloads.yaml             # Download URLs and version number
├── i18n/
│   ├── en.yaml                    # English UI strings (landing page)
│   └── es.yaml                    # Spanish UI strings (landing page)
├── layouts/
│   └── index.html                 # Custom landing page template
├── static/
│   ├── assets/                    # aMule icon, platform SVGs, screenshots
│   ├── css/style.css              # Landing page styles
│   ├── docs/assets/               # Documentation screenshots
│   └── js/lightbox.js             # Screenshot lightbox
├── go.mod                         # Hugo module definition
├── go.sum                         # Module checksums
├── hugo.toml                      # Hugo + Docsy configuration
├── package.json                   # Node.js dependencies (PostCSS for Docsy)
└── package-lock.json              # Locked Node.js dependency versions (npm)
```

## Requirements

- [Hugo extended](https://gohugo.io/installation/) ≥ 0.157.0 — the **extended** variant is required for Docsy's SCSS processing
- [Go](https://go.dev/dl/) ≥ 1.12 — required for Hugo module downloads
- [Node.js](https://nodejs.org/) ≥ 22 — required for PostCSS (Docsy's CSS pipeline). Node.js 22+ is needed because Hugo uses Node's permission model (`--permission`) when running PostCSS scripts.

Quick install for Hugo on Linux (replace `VERSION` with the latest from the [releases page](https://github.com/gohugoio/hugo/releases)):

```sh
# Example — check the releases page for the latest version
curl -sL https://github.com/gohugoio/hugo/releases/download/vVERSION/hugo_extended_VERSION_linux-amd64.tar.gz \
  | tar -xz hugo && mv hugo ~/.local/bin/
```

## Working locally

Install Node.js dependencies (PostCSS, required by Docsy):

```sh
make install
# equivalent to: npm install
```

Serve the full site (landing page + docs in EN and ES) locally at `http://127.0.0.1:1313`:

```sh
make serve
# equivalent to: hugo server --disableFastRender
```

Build the complete site into `public/`:

```sh
make build
# equivalent to: hugo --minify
```

Remove the build output:

```sh
make clean
```

## URL structure

| URL | Content |
|---|---|
| `/` | English landing page |
| `/es/` | Spanish landing page |
| `/docs/` | English documentation |
| `/es/docs/` | Spanish documentation |

## Adding content

- **New documentation page (EN):** add a `.md` file under `content/en/docs/`; add the Spanish translation under the same relative path in `content/es/docs/`
- **New UI string:** add the key in `i18n/en.yaml` and `i18n/es.yaml`, then reference it in `layouts/index.html` with `{{ i18n "key" }}`
- **Update download version:** edit `data/downloads.yaml`

## Deployment

Push to `master` and GitHub Actions will:

1. Install Go (for Hugo module downloads)
2. Install Hugo extended
3. Install Node.js dependencies with `pnpm install`
4. Run `hugo --minify` — produces the complete site in `public/`
5. Deploy `public/` directly to GitHub Pages

> **Note:** GitHub Pages must be configured to deploy from **GitHub Actions** (not from a branch).
> Go to **Settings → Pages → Source** and select **GitHub Actions**.

## Useful links

- aMule source code: [github.com/amule-org/amule](https://github.com/amule-org/amule)
- Latest release: [github.com/amule-org/amule/releases/latest](https://github.com/amule-org/amule/releases/latest)
- Wiki: [github.com/amule-org/amule/wiki](https://github.com/amule-org/amule/wiki)
- Discussions: [github.com/amule-org/amule/discussions](https://github.com/amule-org/amule/discussions)
