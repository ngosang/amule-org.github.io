# amule-org.github.io

Source for the aMule project landing page at [https://amule-org.github.io](https://amule-org.github.io).

Plain static HTML / CSS / JS — no build step. GitHub Pages serves this directory directly (Jekyll is disabled via `.nojekyll`).

## Layout

| File | What it is |
| ---- | ---------- |
| [`index.html`](index.html) | The landing page itself |
| [`style.css`](style.css) | Single stylesheet, dark by default with `prefers-color-scheme: light` support |
| [`lightbox.js`](lightbox.js) | Vanilla-JS modal for the screenshots gallery (keyboard nav + captions) |
| [`assets/`](assets/) | Icons (PNG + SVG) and screenshots |

## Editing

Open `index.html` in a browser to preview, or run a local HTTP server for proper relative paths:

```sh
python3 -m http.server 8000
# then http://127.0.0.1:8000/
```

Push to `master` and GitHub Pages re-deploys within a minute.

## Useful links

* aMule source code: [github.com/amule-org/amule](https://github.com/amule-org/amule)
* Latest release: [github.com/amule-org/amule/releases/latest](https://github.com/amule-org/amule/releases/latest)
* Wiki: [github.com/amule-org/amule/wiki](https://github.com/amule-org/amule/wiki)
* Discussions: [github.com/amule-org/amule/discussions](https://github.com/amule-org/amule/discussions)
