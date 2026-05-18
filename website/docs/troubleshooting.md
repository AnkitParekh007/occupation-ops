---
id: troubleshooting
title: Troubleshooting
description: Common setup and output issues when running Occupation-Ops locally.
---

# Troubleshooting

## `npm install` fails

- Make sure you are on Node.js 18 or later.
- Retry from a clean clone before debugging local workspace drift.

## `npm run gap:role` falls back to an example profile

The tool will use the example template if your local `profile.yml` is missing. Run:

```bash
npm run init
```

Then edit `profile.yml` with your actual inputs.

## The output feels too generic

The most common cause is weak input specificity. Tighten:

- `current_positioning`
- `current_proof`
- strong skills
- public links

## The HTML report looks good but the proof is still weak

That is expected if the current public evidence is weak. The report presentation is not the same thing as stronger underlying proof.

## Website build issues

Inside `website/`:

```bash
npm ci
npm run typecheck
npm run build
```
