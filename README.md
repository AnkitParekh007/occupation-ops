# Occupation-Ops

## Proof before applying for AI/frontend pivots

Occupation-Ops is a local-first proof engine for developers who need stronger
public evidence before they apply.

It helps an AI/frontend candidate turn current work into:

- recruiter-readable positioning
- public proof inventory
- role-gap scorecards
- GitHub rewrite guidance
- portfolio project briefs
- interview-safe story maps
- weekly proof-shipping plans

It is intentionally **not** a tracker, scanner, or mass-apply system.

```text
profile.yml
  -> proof audit
  -> role scorecard
  -> proof backlog
  -> GitHub rewrite
  -> project briefs
  -> interview map
  -> weekly shipping plan
```

## Why this exists

Many candidates do not lose because they applied too slowly. They lose because
their public proof is too thin, too vague, or too hard to scan in 30 seconds.

Occupation-Ops focuses on that pre-application problem:

- clearer role positioning
- stronger proof artifacts
- better recruiter scan readiness
- honest mocked-vs-real boundaries
- credible interview narratives

## What makes it different

- **Proof-first**: optimize for stronger public evidence before more outreach.
- **Local-first**: file-based workflow, no SaaS, no API key required.
- **Truthful by design**: guardrails push against fake metrics and inflated claims.
- **Structured outputs**: every core workflow now emits Markdown, JSON, and HTML.
- **Flagship dossier**: one coherent proof roadmap instead of disconnected reports.

See [When To Use Occupation-Ops Vs Job Search Pipeline Tools](docs/positioning-vs-job-search-tools.md).

Canonical public docs and launch site:

- [Occupation-Ops website](https://ankitparekh007.github.io/occupation-ops/)
- [Quick Start](https://ankitparekh007.github.io/occupation-ops/docs/quick-start)
- [CLI Commands](https://ankitparekh007.github.io/occupation-ops/docs/cli-commands)
- [Sample Dossier](https://ankitparekh007.github.io/occupation-ops/docs/sample-dossier)

## Quick start

```bash
git clone https://github.com/AnkitParekh007/occupation-ops.git
cd occupation-ops
npm install
npm run init
npm run gap:role
```

Then open the generated dossier:

- `output/role-gap-analysis.md`
- `output/role-gap-analysis.json`
- `output/role-gap-analysis.html`

For the sample flagship workflow:

```bash
npm run demo:ai-frontend
```

That generates the demo bundle:

- `output/ai-frontend-proof-roadmap-demo.md`
- `output/ai-frontend-proof-roadmap-demo.json`
- `output/ai-frontend-proof-roadmap-demo.html`

## Core commands

| Command | What it produces |
| --- | --- |
| `npm run init` | Creates `profile.yml` from the example template |
| `npm run audit:profile` | `output/profile-audit.{md,json,html}` |
| `npm run gap:role` | `output/role-gap-analysis.{md,json,html}` flagship proof dossier |
| `npm run portfolio:plan` | `output/portfolio-project-plan.{md,json,html}` |
| `npm run github:growth` | `output/github-growth-plan.{md,json,html}` |
| `npm run interview:stories` | `output/interview-story-bank.{md,json,html}` |
| `npm run plan:weekly` | `output/weekly-proof-plan.{md,json,html}` |
| `npm run demo:ai-frontend` | Sample AI Frontend Architect dossier bundle |
| `npm run doctor` | Repo health and command surface check |
| `npm test` | Fixture and output regression tests |

## The flagship workflow

The AI Frontend Architect path is the wedge. It produces a complete proof
roadmap for candidates repositioning into:

- AI Frontend Engineer
- Angular Architect
- Copilot UI Engineer

The flagship dossier includes:

- proof inventory
- role-gap scorecard
- public-proof metrics
- prioritized backlog
- GitHub headline rewrite
- README improvement checklist
- portfolio project briefs
- interview story map
- weekly shipping plan
- artifact validators

Start here:

- [AI Frontend Architect Track](tracks/ai-frontend-architect.md)
- [Sample profile](examples/ai-frontend-architect/sample-profile.yml)
- [Before vs after example](examples/ai-frontend-architect/before-vs-after.md)
- [Sample flagship report](examples/reports/sample-ai-frontend-proof-roadmap.md)
- [Architecture](docs/ARCHITECTURE.md)

## Supported tracks

- [AI Frontend Architect](tracks/ai-frontend-architect.md)
- [Frontend Engineer](tracks/frontend-engineer.md)
- [Full-Stack AI Engineer](tracks/full-stack-ai-engineer.md)
- [Angular Architect](examples/angular-architect/sample-profile.yml)

The repo still includes earlier generic tracks, but the product focus is depth
for AI/frontend pivots before breadth.

## Output model

Each workflow uses:

```text
profile.yml + rubric + mode -> dossier data -> Markdown + JSON + HTML
```

This makes Occupation-Ops useful for both humans and lightweight local viewers.

## What this is not

- not a recruiter CRM
- not a portal scanner
- not an ATS bypass tool
- not a resume fakery generator
- not an auto-apply bot
- not a promise of interviews or offers

## Truthfulness rules

- Do not imply production usage unless public proof supports it.
- Label mock services and planned work explicitly.
- Do not invent metrics, user counts, or open-source outcomes.
- Only ship claims you can defend in a recruiter screen or interview.

See [Ethics](docs/ethics.md) and [Occupation Contract](OCCUPATION_CONTRACT.md).

## Docs

- Public product docs: [ankitparekh007.github.io/occupation-ops](https://ankitparekh007.github.io/occupation-ops/)
- Repo-maintainer docs in this repo:
- [Docs README](docs/README.md)
- [Setup](docs/SETUP.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Workflow Contract](docs/workflow-contract.md)
- [Good First Issues](docs/good-first-issues.md)
- [Competitive Positioning](docs/positioning-vs-job-search-tools.md)

## Attribution

Occupation-Ops is intentionally positioned as a proof-before-applying system.
It may live in the same category as broader AI-assisted career tools, but it
does not claim those tools' author story, community metrics, tracker logic, or
job-search automation surface.
