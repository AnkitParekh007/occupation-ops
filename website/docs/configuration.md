---
id: configuration
title: Configuration
sidebar_position: 4
description: How profile.yml drives the proof workflow.
---

# Configuration

Occupation-Ops currently uses `profile.yml` as the main user input.

## Input model

The workflow is intentionally simple:

```text
profile.yml + rubric + mode -> dossier data -> Markdown + JSON + HTML
```

## What belongs in profile.yml

- role target
- technical strengths
- public links
- portfolio projects
- claims you can defend
- gaps you already know about

## Configuration philosophy

The repo does **not** use a large multi-file user data model yet. That is intentional.

The priority right now is:

- fast local setup
- stable structured outputs
- easy iteration on proof narratives
- low contributor overhead

## Related docs

- [Tracks and Rubrics](./tracks-and-rubrics)
- [Scoring and Validators](./scoring-and-validators)
- [Architecture](./architecture)
