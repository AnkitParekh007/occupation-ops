# AGENTS.md

This file defines how AI agents should work inside Occupation-Ops.

## Product Intent

Occupation-Ops is an AI Career Operating System. It helps users improve career
readiness before applying by auditing their public proof, finding role gaps,
planning portfolio projects, improving positioning, preparing interviews, and
creating weekly execution plans.

## Agent Rules

- Do not invent experience, employment, education, certifications, metrics, or
  endorsements.
- Do not claim a user has built, shipped, led, or contributed to something
  unless the supplied profile proves it.
- Do not submit applications or send messages automatically.
- Do not store secrets, tokens, private resumes, or personal data in git.
- Prefer concrete, reviewable outputs: checklists, gap tables, project plans,
  README copy, interview topics, and weekly plans.
- Keep recommendations occupation-specific and evidence-based.

## Recommended Agent Flow

1. Read `OCCUPATION_CONTRACT.md`.
2. Read the user's profile file, usually `profile.yml`.
3. Select a track from `tracks/`.
4. Select one or more modes from `modes/`.
5. Generate outputs from `templates/`.
6. Clearly label assumptions and TODOs.

## Output Standard

Every generated career artifact should answer:

- What role is this targeting?
- What proof already exists?
- What proof is missing?
- What should be built next?
- What can be said truthfully now?
- What should not be claimed yet?
