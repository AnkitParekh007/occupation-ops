---
id: installation
title: Installation
sidebar_position: 3
description: Environment requirements and local setup for Occupation-Ops.
---

# Installation

Occupation-Ops is intentionally lightweight.

## Requirements

- Node.js 18 or later
- npm
- a local clone of the repository

## Install dependencies

```bash
npm install
```

## Verify the environment

```bash
npm run doctor
```

This checks the repo command surface and helps catch local setup problems before generating outputs.

## Test the repo

```bash
npm test
```

Use this before opening a pull request or after changing scripts, rubrics, or output rendering.
