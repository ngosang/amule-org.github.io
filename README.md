# amule-org.github.io

Source for the aMule project website at [https://amule-org.github.io](https://amule-org.github.io).

The entire site is managed by [MkDocs](https://www.mkdocs.org/) using `site/` as the source directory:

- **Landing page** — plain static HTML/CSS/JS at `site/` root, copied as-is to the output
- **Documentation** — Markdown sources under `site/docs/`, published at `/docs/`

A single `mkdocs build` produces the complete site. A single `mkdocs serve` serves both the landing page and the documentation locally.

Deployment is handled automatically by GitHub Actions on every push to `master`.

## Repository layout

```
├── .github/workflows/deploy.yml   # CI/CD: builds and deploys to GitHub Pages
├── site/                          # MkDocs docs_dir (source of truth)
│   ├── index.html                 # Landing page (copied as-is to output root)
│   ├── style.css
│   ├── lightbox.js
│   ├── assets/
│   └── docs/                      # MkDocs Markdown sources → published at /docs/
│       ├── index.md
│       └── getting-started/
│           ├── installation.md
│           └── configuration.md
├── .gitignore
├── Makefile
├── mkdocs.yml                     # MkDocs configuration (docs_dir: site, site_dir: public)
├── pyproject.toml                 # Python project (uv)
└── uv.lock
```

## Requirements

The build requires [uv](https://docs.astral.sh/uv/). Install it with:

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Or via pip:

```sh
pip install uv
```

## Working locally

Install dependencies:

```sh
make install
# equivalent to: uv sync
```

Serve the full site (landing page + docs) locally at `http://127.0.0.1:8000`:

```sh
make serve
# equivalent to: uv run mkdocs serve
```

Build the complete site into `public/`:

```sh
make build
# equivalent to: uv run mkdocs build
```

Remove the build output:

```sh
make clean
```

## Deployment

Push to `master` and GitHub Actions will:

1. Install dependencies with `uv sync`
2. Run `uv run mkdocs build` — produces the complete site in `public/`
3. Deploy `public/` directly to GitHub Pages

> **Note:** GitHub Pages must be configured to deploy from **GitHub Actions** (not from a branch).
> Go to **Settings → Pages → Source** and select **GitHub Actions**.

## Useful links

* aMule source code: [github.com/amule-org/amule](https://github.com/amule-org/amule)
* Latest release: [github.com/amule-org/amule/releases/latest](https://github.com/amule-org/amule/releases/latest)
* Wiki: [github.com/amule-org/amule/wiki](https://github.com/amule-org/amule/wiki)
* Discussions: [github.com/amule-org/amule/discussions](https://github.com/amule-org/amule/discussions)
