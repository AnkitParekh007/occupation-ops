---
id: cli-commands
title: CLI Commands
description: Reference for the Occupation-Ops command surface and its output bundles.
---

# CLI Commands

The CLI is the product surface. Each command should produce a concrete artifact, not vague console text.

## Core commands

| Command | Output |
| --- | --- |
| `npm run init` | Creates `profile.yml` from the example template |
| `npm run doctor` | Health check for the repo command surface |
| `npm run audit:profile` | `output/profile-audit.{md,json,html}` |
| `npm run gap:role` | `output/role-gap-analysis.{md,json,html}` |
| `npm run report:flagship` | Alias for the flagship role-gap dossier |
| `npm run portfolio:plan` | `output/portfolio-project-plan.{md,json,html}` |
| `npm run github:growth` | `output/github-growth-plan.{md,json,html}` |
| `npm run interview:stories` | `output/interview-story-bank.{md,json,html}` |
| `npm run plan:weekly` | `output/weekly-proof-plan.{md,json,html}` |
| `npm run demo:ai-frontend` | Demo AI Frontend Architect dossier bundle |
| `npm test` | Regression tests and fixture checks |

## Recommended workflow

```bash
npm run init
npm run gap:role
npm run github:growth
npm run plan:weekly
```

## Output convention

The current convention is:

- Markdown for human review
- JSON for structured downstream use
- HTML for local presentation

That convention is important because it keeps the repo useful both as a terminal tool and as a lightweight documentation product.
