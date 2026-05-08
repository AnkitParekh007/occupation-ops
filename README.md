# Occupation-Ops

## AI Career Operating System for modern knowledge workers

Occupation-Ops helps people become more hireable before they apply.

It gives users a local, file-based workflow for profile audits, role-gap
analysis, GitHub growth, portfolio project planning, interview preparation, and
weekly execution plans.

This repository is an MVP. It is not a finished SaaS, not a job automation
platform, and not a promise of employment outcomes.

```text
profile audit
  -> role gaps
  -> proof projects
  -> positioning
  -> interview prep
  -> weekly execution
```

## Try It In 60 Seconds

```bash
git clone https://github.com/AnkitParekh007/occupation-ops.git
cd occupation-ops
npm install
npm run init
```

Then run any workflow:

```bash
npm run demo:ai-frontend      # full AI Frontend Architect sample report
npm run audit:profile         # review your profile and positioning
npm run gap:role              # role gap analysis with 7-day plan
npm run portfolio:plan        # three portfolio project plans
npm run github:growth         # GitHub profile, pins, topics, and issues
npm run interview:stories     # STAR stories, system design, guardrails
npm run plan:weekly           # weekly execution plan
npm run doctor                # check repo health and list all commands
```

`npm run init` creates `profile.yml` from the example template. Edit it with
your real name, target role, links, and proof projects before running other
commands.

To copy the template manually on Windows:

```cmd
copy templates\profile.example.yml profile.yml
```

On macOS/Linux:

```bash
cp templates/profile.example.yml profile.yml
```

## Sample Output

The flagship AI Frontend Architect demo report includes:

- Profile Score
- Target Role Fit
- Missing Proof Signals
- GitHub Profile Rewrite
- 3 Portfolio Project Ideas
- 30-Day Roadmap
- Weekly Execution Checklist
- Interview Prep Map
- Truthfulness Guardrails

Example excerpt:

```md
## Profile Score

Score: 6.5/10

Strong Angular and TypeScript direction, but the profile needs clearer public
proof around AI copilot UX, RAG citations, tool execution, and approval flows.
```

## Core Workflows

Each command generates a standalone Markdown file in `output/`. No API key
required. No internet connection required. Everything runs locally.

| Command | What it generates |
| --- | --- |
| `npm run init` | Creates `profile.yml` from the example template |
| `npm run audit:profile` | Profile and positioning review printed to terminal |
| `npm run gap:role` | `output/role-gap-analysis.md` — gaps, score, 7-day plan |
| `npm run portfolio:plan` | `output/portfolio-project-plan.md` — 3 proof project plans |
| `npm run github:growth` | `output/github-growth-plan.md` — headline, pins, topics, issues |
| `npm run interview:stories` | `output/interview-story-bank.md` — STAR stories and guardrails |
| `npm run plan:weekly` | Weekly execution plan printed to terminal |
| `npm run demo:ai-frontend` | `output/demo-ai-frontend-architect-report.md` — full sample |
| `npm run doctor` | Repo health check and full command list |

## Generated Outputs

Running the commands above produces these files:

- [output/demo-ai-frontend-architect-report.md](output/demo-ai-frontend-architect-report.md)
- [output/role-gap-analysis.md](output/role-gap-analysis.md)
- [output/portfolio-project-plan.md](output/portfolio-project-plan.md)
- [output/github-growth-plan.md](output/github-growth-plan.md)
- [output/interview-story-bank.md](output/interview-story-bank.md)

All outputs are local Markdown files. Edit them, commit them, or delete them.
They are regenerated fresh each time you run the command.

## Who This Is For

- Frontend engineers moving into AI product engineering.
- Knowledge workers who need stronger public proof before applying.
- Career coaches and mentors who want reusable audit templates.
- Open-source contributors interested in career-tech workflows.
- Developers who want a local-first career execution system.

## What This Is Not

- Not a hosted recruiting service.
- Not a mass-apply tool.
- Not a resume fakery generator.
- Not an ATS bypass product.
- Not a replacement for human review.
- Not a guarantee of interviews, offers, or hiring outcomes.

## Why Star This Repo?

- Follow a practical open-source MVP for career-readiness workflows.
- Reuse occupation tracks, workflow modes, and weekly execution plans.
- Study how AI agent workflows can support truthful career positioning.
- Contribute new tracks, templates, examples, and CLI improvements.
- Help shape an original career-tech system focused on proof before applying.

## Features

| Feature | Status | Purpose |
| --- | --- | --- |
| Profile audit | MVP | Review current public proof and positioning. |
| Role-gap analysis | MVP | Compare current proof against target role expectations. |
| GitHub growth mode | MVP | Improve profile README, repo clarity, topics, and contribution surfaces. |
| Portfolio builder | MVP | Plan role-specific proof projects. |
| Resume builder | Template | Align resume language without fake claims. |
| Interview prep | Template | Convert proof projects into interview stories. |
| Weekly plan generator | MVP | Turn strategy into one week of execution. |
| Occupation tracks | MVP | Define credible proof for different roles. |

## How It Works

```mermaid
flowchart LR
  Profile["User profile"] --> Audit["Profile audit"]
  Audit --> Gaps["Role gap analysis"]
  Gaps --> Projects["Portfolio project plan"]
  Projects --> Positioning["GitHub / LinkedIn / resume positioning"]
  Positioning --> Interview["Interview preparation"]
  Interview --> Weekly["Weekly execution plan"]
  Weekly --> Proof["Stronger public proof"]
```

## AI Frontend Architect Flagship Workflow

The first complete workflow targets AI Frontend Architect roles.

It helps a user audit current proof and build an execution plan around:

- GitHub and resume positioning
- AI copilot UI proof
- RAG citation UX
- MCP/tool execution UX
- UI-aware agents
- action approvals
- interview preparation
- weekly execution

Start here:

- [AI Frontend Architect Track](tracks/ai-frontend-architect.md)
- [Sample profile](examples/ai-frontend-architect/sample-profile.yml)
- [Sample gap analysis](examples/ai-frontend-architect/sample-gap-analysis.md)
- [Sample weekly plan](examples/ai-frontend-architect/sample-weekly-plan.md)

## Occupation Tracks

- [AI Frontend Architect](tracks/ai-frontend-architect.md)
- [Frontend Engineer](tracks/frontend-engineer.md)
- [QA Engineer](tracks/qa-engineer.md)
- [Product Manager](tracks/product-manager.md)
- [UI/UX Designer](tracks/ui-ux-designer.md)
- [Data Analyst](tracks/data-analyst.md)
- [DevOps Engineer](tracks/devops-engineer.md)

## Workflow Modes

- [Profile Audit](modes/profile-audit.md)
- [Role Gap Analysis](modes/role-gap-analysis.md)
- [GitHub Growth](modes/github-growth.md)
- [Portfolio Builder](modes/portfolio-builder.md)
- [Resume Builder](modes/resume-builder.md)
- [Interview Prep](modes/interview-prep.md)
- [Job Fit Evaluator](modes/job-fit-evaluator.md)
- [LinkedIn Optimizer](modes/linkedin-optimizer.md)
- [Weekly Career Plan](modes/weekly-career-plan.md)
- [Learning Roadmap](modes/learning-roadmap.md)

## Good First Issues

- Add a new occupation track.
- Add a sample profile for a non-frontend role.
- Improve the weekly plan generator output.
- Add JSON output to the CLI.
- Add scoring rubrics for each track.
- Add screenshots for generated sample reports.
- Add tests for the Node.js scripts.
- Improve docs for career coaches and mentors.

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md).

Near-term priorities:

- Improve role-specific scoring rubrics.
- Add JSON output from scripts.
- Add more sample profiles.
- Add screenshot examples.
- Add tests for CLI commands.
- Add a lightweight local dashboard later.

## Website / Case Study

A public case-study landing page is available in `docs/site`.

It explains the product story, workflows, commands, sample outputs, and roadmap.
Open `docs/site/index.html` directly in a browser, or publish it with GitHub
Pages. See [docs/site/README.md](docs/site/README.md) for publishing instructions.

## Attribution

Occupation-Ops is an original repositioning focused on occupation readiness,
public proof, portfolio planning, and weekly execution. It may be inspired by
the broader category of AI-assisted career operations tools, including
career-ops, but it does not claim the original project's author story, metrics,
screenshots, community links, or outcomes.

## Safety And Ethics

- Do not fake experience, metrics, employment history, or endorsements.
- Do not mass-apply or spam recruiters.
- Do not automate third-party websites against their terms.
- Always review generated career material before publishing or sending it.
- Keep private data out of git.

## Contributing

Contributions are welcome around occupation tracks, workflow modes, templates,
examples, CLI improvements, and truthfulness guardrails.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.

## License

MIT. See [LICENSE](LICENSE).
