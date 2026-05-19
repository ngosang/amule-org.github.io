# amule-org.github.io

Source for the aMule project website at [https://amule-org.github.io](https://amule-org.github.io).

The site is built with [Docusaurus v3](https://docusaurus.io/) and supports English and Spanish.

## Repository layout

```
├── .github/workflows/deploy.yml          # CI/CD: builds and deploys to GitHub Pages
├── docs/                                  # English documentation (Markdown)
│   ├── index.md
│   └── user-guide/
│       └── getting-started.md
├── i18n/
│   └── es/
│       ├── code.json                      # Landing page Spanish translations
│       └── docusaurus-plugin-content-docs/current/
│           ├── index.md                   # Spanish docs home
│           └── user-guide/
│               └── getting-started.md     # Spanish getting started guide
├── src/
│   ├── css/custom.css                     # Docusaurus CSS variable overrides
│   └── pages/
│       ├── index.js                       # Landing page (React)
│       └── index.module.css               # Landing page styles
├── static/
│   └── img/                              # Images and icons
│       ├── aMule-icon.png
│       ├── screenshots/                   # GUI screenshots for landing page
│       └── docs/                          # Screenshots for documentation
├── docusaurus.config.js                   # Site configuration
├── sidebars.js                            # Documentation sidebar
├── package.json
├── .gitignore
└── Makefile
```

## Requirements

[Node.js](https://nodejs.org/) 18 or later and npm.

## Working locally

Install dependencies:

```sh
make install
# equivalent to: npm install
```

Serve the full site locally at `http://localhost:3000` (English):

```sh
make serve
# equivalent to: npm run start
```

Serve the Spanish locale at `http://localhost:3000/es/`:

```sh
npm run start -- --locale es
```

Build the complete site into `build/`:

```sh
make build
# equivalent to: npm run build
```

Remove the build output:

```sh
make clean
```

## Deployment

Push to `master` and GitHub Actions will:

1. Install dependencies with `npm ci`
2. Run `npm run build` — produces the complete site in `build/`
3. Deploy `build/` directly to GitHub Pages

> **Note:** GitHub Pages must be configured to deploy from **GitHub Actions** (not from a branch).
> Go to **Settings → Pages → Source** and select **GitHub Actions**.

## Useful links

* aMule source code: [github.com/amule-org/amule](https://github.com/amule-org/amule)
* Latest release: [github.com/amule-org/amule/releases/latest](https://github.com/amule-org/amule/releases/latest)
* Wiki: [github.com/amule-org/amule/wiki](https://github.com/amule-org/amule/wiki)
* Discussions: [github.com/amule-org/amule/discussions](https://github.com/amule-org/amule/discussions)
