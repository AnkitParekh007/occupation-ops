---
id: quick-start
title: Quick Start
sidebar_position: 2
description: Fastest path to generate the flagship proof dossier locally.
---

# Quick Start

This is the fastest way to generate the flagship output bundle.

## 1. Clone and install

```bash
git clone https://github.com/AnkitParekh007/occupation-ops.git
cd occupation-ops
npm install
```

## 2. Create your profile file

```bash
npm run init
```

This creates `profile.yml`. Edit it with your actual experience, proof links, project history, and role target.

## 3. Generate the flagship dossier

```bash
npm run gap:role
```

This writes:

- `output/role-gap-analysis.md`
- `output/role-gap-analysis.json`
- `output/role-gap-analysis.html`

## 4. Open the HTML report

Open `output/role-gap-analysis.html` in your browser for the easiest review experience.

## 5. Run the sample flagship demo

```bash
npm run demo:ai-frontend
```

This generates the reference demo bundle:

- `output/ai-frontend-proof-roadmap-demo.md`
- `output/ai-frontend-proof-roadmap-demo.json`
- `output/ai-frontend-proof-roadmap-demo.html`

## What to do next

- refine `profile.yml`
- rerun `npm run gap:role`
- generate follow-up plans such as `npm run github:growth` and `npm run plan:weekly`
