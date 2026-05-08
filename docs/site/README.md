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

### Option 1: Publish from docs/site (recommended)

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Set branch to `main` and folder to `/docs`.
5. Click **Save**.
6. GitHub Pages will serve from `https://ankitparekh007.github.io/occupation-ops/`.

Note: GitHub Pages serves the `docs/` directory. The page will be at
`/site/index.html` unless you move `index.html` directly into `docs/`.

To serve from the root of `docs/`, move the file:

```bash
cp docs/site/index.html docs/index.html
```

Then set the Pages source folder to `/docs` and the page will be at:

```
https://ankitparekh007.github.io/occupation-ops/
```

### Option 2: Publish from a gh-pages branch

```bash
git checkout -b gh-pages
cp docs/site/index.html index.html
git add index.html
git commit -m "chore: add GitHub Pages root"
git push origin gh-pages
```

Then set Pages source to the `gh-pages` branch, root folder.

### Option 3: Use the included workflow

If you add a GitHub Actions workflow, publish with:

```yaml
- name: Deploy to GitHub Pages
  uses: actions/upload-pages-artifact@v3
  with:
    path: docs/site
```

---

## Customize before launch

Before making the page public, review and update:

1. **GitHub URL** — search for `AnkitParekh007/occupation-ops` and replace
   with your actual repo URL if different.

2. **Badge text** — the hero badge says `v0.1.0 · Local-first · No API keys
   required`. Update the version number when releasing.

3. **Meta description** — the `<meta name="description">` tag in `<head>`
   is used by search engines and link previews. Update it to match your
   final positioning copy.

4. **Nav and footer links** — verify all `href` values point to the correct
   live URLs before publishing.

5. **Truthfulness check** — review every claim on the page against what the
   v0.1.0 CLI actually produces. Do not publish claims the tool does not
   yet support.

---

## Design notes

- Color scheme uses CSS custom properties with automatic light/dark support
  via `prefers-color-scheme`.
- Responsive layout uses CSS grid and flexbox with `clamp()` for fluid type.
- Zero JavaScript frameworks. The only JS is a 15-line tab switcher.
- All fonts are system fonts — no external font requests.
- No tracking scripts, analytics, or third-party embeds.
