# amule-org.github.io

Source for the aMule project website at [https://amule-org.github.io](https://amule-org.github.io).

The site is built with [Docusaurus v3](https://docusaurus.io/) and is internationalized (i18n).

## Requirements

[Node.js](https://nodejs.org/) 18 or later and npm.

## Working locally

Install dependencies:

```sh
npm install
```

Serve the full site locally at `http://localhost:3000` (English):

```sh
npm run start
```

Serve the Spanish locale at `http://localhost:3000/es/`:

```sh
npm run start -- --locale es
```

Build the complete site into `build/`:

```sh
npm run build
```

Remove the build output:

```sh
npm run clear
```

## Adding a new language

1. **Register the locale** in `docusaurus.config.ts`:

   ```ts
   i18n: {
     defaultLocale: 'en',
     locales: ['en', 'es', 'fr'],   // add your locale code here
     localeConfigs: {
       fr: {label: 'Français'},
     },
   },
   ```

2. **Generate the translation files** for the landing page:

   ```sh
   npm run write-translations -- --locale fr
   ```

   This creates `i18n/fr/code.json` with all translatable strings from the site's React components. Translate the `message` field of each entry.

3. **Translate the documentation** by creating Markdown files under `i18n/fr/docusaurus-plugin-content-docs/current/`, mirroring the structure of `docs/`:

   ```
   i18n/fr/
   ├── code.json
   └── docusaurus-plugin-content-docs/current/
       ├── current.json            # sidebar label translations
       ├── index.md
       └── user-guide/
           └── getting-started.md
   ```

   `current.json` translates sidebar category labels. Run the following to generate it with the default English values pre-filled:

   ```sh
   npm run write-translations -- --locale fr
   ```

4. **Preview the new locale** locally:

   ```sh
   npm run start -- --locale fr
   ```

## Useful links

* aMule source code: [github.com/amule-org/amule](https://github.com/amule-org/amule)
* Latest release: [github.com/amule-org/amule/releases/latest](https://github.com/amule-org/amule/releases/latest)
* Wiki: [github.com/amule-org/amule/wiki](https://github.com/amule-org/amule/wiki)
* Discussions: [github.com/amule-org/amule/discussions](https://github.com/amule-org/amule/discussions)
