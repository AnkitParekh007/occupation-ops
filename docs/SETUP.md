# Setup

## Requirements

- Node.js 20 or newer
- npm
- A local profile file based on `templates/profile.example.yml`

No API keys are required for the MVP scripts.

## Install

```bash
npm install
npm run doctor
```

## Create Your Profile

```bash
copy templates\profile.example.yml profile.yml
```

Edit `profile.yml` with your own target role, current links, proof projects,
skills, constraints, and weekly availability.

## Run The MVP Workflows

```bash
npm run audit:profile
npm run plan:weekly
```

## Recommended First Workflow

1. Pick a target track from `tracks/`.
2. Fill `profile.yml`.
3. Run the profile audit.
4. Read the gap analysis prompts.
5. Create a weekly plan.
6. Build or improve one proof asset.
