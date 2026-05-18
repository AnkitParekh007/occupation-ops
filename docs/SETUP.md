# Setup

## Requirements

- Node.js 20 or newer
- npm
- a truthful `profile.yml`

No API keys are required.

## Install

```bash
npm install
npm run doctor
```

## Create your profile

```bash
npm run init
```

That creates `profile.yml` from `templates/profile.example.yml`.

Fill in:

- target occupation
- target roles
- public links
- current proof artifacts
- strongest skills
- developing skills
- truthfulness constraints

## Run the flagship workflow

```bash
npm run gap:role
```

Open:

- `output/role-gap-analysis.md`
- `output/role-gap-analysis.json`
- `output/role-gap-analysis.html`

## Recommended sequence

1. Fill `profile.yml`.
2. Run `npm run audit:profile`.
3. Run `npm run gap:role`.
4. Review the backlog and validators.
5. Run `npm run github:growth` and `npm run plan:weekly`.
6. Ship one stronger public proof artifact.

## Demo workflow

```bash
npm run demo:ai-frontend
```

This generates the sample AI Frontend Architect dossier bundle from the example
profile so contributors can inspect the full product path without editing local
data first.
