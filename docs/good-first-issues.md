# Good First Issues

Recommended first contributions for Occupation-Ops:

## 1. Add a new role track

Create a new file in `tracks/` for a role such as:

- Platform Engineer
- Solutions Architect
- Full-Stack AI Engineer
- Technical Writer for AI tooling

Pair it with a structured rubric in `rubrics/` so the role gets scoring,
validators, and HTML output automatically.

## 2. Add a new output template

Extend `templates/` with a new report format such as:

- recruiter summary template
- proof project scorecard
- 90-day execution template

## 3. Add a markdown report theme

Create an alternate output style that improves readability for:

- recruiters
- hiring managers
- mentors
- personal weekly reviews

## 4. Add a local web preview

Build a simple local-only HTML preview for generated Markdown outputs. Keep it file-based and avoid turning the repo into SaaS.

## 5. Add a progress dashboard

Create a local progress dashboard that summarizes:

- completed outputs
- target role
- missing proof signals
- current weekly plan

## 6. Add test coverage

Add basic test coverage around the scripts in `scripts/` so contributors can refactor with more confidence.

## 7. Add a new renderer

Reuse the shared dossier data model to add another output surface such as:

- compact recruiter summary
- printable one-page proof scorecard
- multi-report local index page
