# aMule Project Website

Source for the aMule project website at [https://amule-org.github.io](https://amule-org.github.io).

The site is built with [Docusaurus](https://docusaurus.io/) and is internationalized (i18n).

## Requirements

[Node.js](https://nodejs.org/) 24 or later and npm.

## Working locally

Install dependencies:

```sh
npm install
```

Build the complete site into `build/`:

```sh
npm run build
```

Serve the complete built site locally at `http://localhost:3000` (all locales + search working):

```sh
npm run serve
```

> Use `npm run serve` instead of `npm run start` to preview the full site: it serves the production build with all languages and the local search index available. `npm run start` (dev server) is faster for component development but does not include the search index.

Serve the full site locally at `http://localhost:3000` (English):

```sh
npm run start
```

Serve the Spanish locale at `http://localhost:3000/es/`:

```sh
npm run start -- --locale es
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

   Also add the locale code to the search plugin's `language` array in the same file:

   ```ts
   themes: [
     [
       require.resolve('@easyops-cn/docusaurus-search-local'),
       {
         language: ['en', 'es', 'fr'],   // add your locale code here
         // ...
       },
     ],
   ],
   ```

   > The search plugin uses the language code for tokenization. Check the [supported languages](https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file#supported-languages) list — if your locale is not supported, omit it from the `language` array and the search index will fall back to basic tokenization.

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
