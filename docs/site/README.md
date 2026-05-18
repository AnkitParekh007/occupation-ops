# Occupation-Ops Site

The GitHub Pages landing page now lives at:

- `docs/index.html`

`docs/site/index.html` remains only as a redirect so older links do not break.

## Preview locally

```bash
# from the repo root
python -m http.server 8080 --directory docs
```

Then open:

- `http://localhost:8080/`

## Publish with GitHub Pages

1. Go to repository **Settings** -> **Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Choose branch `main`.
4. Choose folder `/docs`.
5. Save.

The site will publish from `docs/index.html` directly.

## Design intent

- warm editorial visual system
- proof-first product story
- strong terminal and dossier preview
- static HTML/CSS only
- no build step and no framework dependency
