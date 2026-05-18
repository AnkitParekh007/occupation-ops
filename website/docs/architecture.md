---
id: architecture
title: Architecture
description: High-level data flow for Occupation-Ops workflows.
---

# Architecture

Occupation-Ops keeps the architecture simple on purpose.

## Flow

```text
profile.yml + rubric + mode
  -> scoring and validation
  -> dossier data model
  -> Markdown renderer
  -> JSON renderer
  -> HTML renderer
```

## Design goals

- local-first execution
- low setup friction
- structured data before presentation
- compatibility between CLI and docs-facing surfaces

## Extension points

High-value extension points include:

- new track contracts
- new rubric schemas
- new renderers
- stronger validators
- better fixture coverage

## Repo alignment

The website documents the repo. It should not drift into promises the CLI does not support.
