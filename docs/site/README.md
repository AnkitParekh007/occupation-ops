# Occupation-Ops Landing Page

Static landing page for the Occupation-Ops project.

File: `docs/site/index.html`

No build step. No framework. No external paid dependencies.
Plain HTML, CSS, and a small vanilla JS tab switcher.

---

## Preview locally

Open the file directly in a browser:

```bash
# macOS
open docs/site/index.html

# Linux
xdg-open docs/site/index.html
```

On Windows, double-click `docs/site/index.html` in Explorer, or right-click
and choose Open with browser.

Or serve it with any static file server:

```bash
# Node.js (npx, no install needed)
npx serve docs/site

# Python 3
python -m http.server 8080 --directory docs/site
```

Then open `http://localhost:8080` in a browser.

---

## Publish with GitHub Pages

### Option 1: Publish from docs/site

1. Go to the repository on GitHub.
2. Open **Settings** -> **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Set branch to `main` and folder to `/docs`.
5. Click **Save**.

### Option 2: Publish from a `gh-pages` branch

```bash
git checkout -b gh-pages
cp docs/site/index.html index.html
git add index.html
git commit -m "chore: add GitHub Pages root"
git push origin gh-pages
```

---

## Customize before launch

Before making the page public, review and update:

1. **GitHub URL** - search for `AnkitParekh007/occupation-ops` and replace it
   if the repo URL changes.
2. **Hero copy** - describe Occupation-Ops as a proof-before-applying engine,
   not a tracker or scanner.
3. **Badge text** - keep it aligned with the current product claim: local-first,
   no API keys required, proof-first.
4. **Meta description** - match the top-level README positioning.
5. **Truthfulness check** - do not publish claims the CLI does not actually
   support.

---

## Design notes

- Color scheme uses CSS custom properties with automatic light/dark support.
- Responsive layout uses CSS grid and flexbox with fluid type.
- Zero JavaScript frameworks.
- No tracking scripts, analytics, or third-party embeds.
