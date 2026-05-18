# CLI Reference

Occupation-Ops is a local-first proof-before-applying CLI. Every command is
designed to produce a concrete artifact or a review step that improves public
proof before more job applications are sent.

## Core commands

### `npm run init`

Creates `profile.yml` from `templates/profile.example.yml`.

Use this first when setting up the repo locally.

### `npm run audit:profile`

Generates a profile audit bundle:

- `output/profile-audit.md`
- `output/profile-audit.json`
- `output/profile-audit.html`

Use this to inspect current strengths, gaps, and proof metrics before running
the full flagship dossier.

### `npm run gap:role`

Generates the flagship proof roadmap bundle:

- `output/role-gap-analysis.md`
- `output/role-gap-analysis.json`
- `output/role-gap-analysis.html`

This is the canonical Occupation-Ops workflow. It combines rubric scoring,
validators, backlog items, project briefs, and a weekly plan into one coherent
artifact.

### `npm run report:flagship`

Alias for `npm run gap:role`.

## Proof-building commands

### `npm run portfolio:plan`

Generates:

- `output/portfolio-project-plan.md`
- `output/portfolio-project-plan.json`
- `output/portfolio-project-plan.html`

Use this after the flagship dossier to convert the highest-value gaps into
buildable proof projects.

### `npm run github:growth`

Generates:

- `output/github-growth-plan.md`
- `output/github-growth-plan.json`
- `output/github-growth-plan.html`

Use this to improve the GitHub profile headline, README framing, and
recruiter-readable proof surfaces.

### `npm run interview:stories`

Generates:

- `output/interview-story-bank.md`
- `output/interview-story-bank.json`
- `output/interview-story-bank.html`

Use this to create interview-safe prompts grounded in real proof artifacts and
actual project decisions.

### `npm run plan:weekly`

Generates:

- `output/weekly-proof-plan.md`
- `output/weekly-proof-plan.json`
- `output/weekly-proof-plan.html`

Use this to turn the proof backlog into one focused week of visible execution.

## Demo and maintenance

### `npm run demo:ai-frontend`

Generates the sample AI Frontend Architect proof roadmap bundle from the example
profile. Use it to inspect the product path without editing local data first.

### `npm run doctor`

Checks the repository for required files and confirms the supported workflow
surface.

### `npm test`

Runs the current test suite, including proof dossier fixture and output parity
checks.

## Recommended first sequence

1. `npm run init`
2. `npm run audit:profile`
3. `npm run gap:role`
4. `npm run github:growth`
5. `npm run plan:weekly`

The product is intentionally narrow: improve public proof first, then use those
better surfaces in the market.
