---
id: output-bundles
title: Output Bundles
description: The dossier artifact model used across Occupation-Ops workflows.
---

# Output Bundles

The repo is moving away from isolated text reports and toward coherent bundles.

## Standard bundle shape

Each major workflow should emit:

- `.md` for direct reading and editing
- `.json` for dashboards, future viewers, and tests
- `.html` for polished local review

## Example

The flagship command:

```bash
npm run gap:role
```

generates:

- `output/role-gap-analysis.md`
- `output/role-gap-analysis.json`
- `output/role-gap-analysis.html`

## Why this matters

This bundle approach supports both:

- a developer-first CLI experience
- a website and documentation layer that can explain or preview outputs clearly

It also makes future static viewers easier to build without changing the underlying scoring logic.
