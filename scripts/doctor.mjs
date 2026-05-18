import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

const requiredFiles = [
  'README.md',
  'AGENTS.md',
  'OCCUPATION_CONTRACT.md',
  'tracks/ai-frontend-architect.md',
  'rubrics/ai-frontend-architect.json',
  'templates/profile.example.yml',
  'examples/ai-frontend-architect/sample-profile.yml',
];

const requiredScripts = [
  'scripts/init-profile.mjs',
  'scripts/doctor.mjs',
  'scripts/demo-ai-frontend-architect.mjs',
  'scripts/run-profile-audit.mjs',
  'scripts/generate-role-gap-analysis.mjs',
  'scripts/generate-portfolio-plan.mjs',
  'scripts/generate-github-growth-plan.mjs',
  'scripts/generate-interview-story-bank.mjs',
  'scripts/generate-weekly-plan.mjs',
];

let ok = true;

console.log('Occupation-Ops doctor\n');

console.log('--- Core files ---\n');
for (const file of requiredFiles) {
  const exists = existsSync(join(root, file));
  console.log(`${exists ? 'OK  ' : 'MISS'} ${file}`);
  if (!exists) ok = false;
}

console.log('\n--- Scripts ---\n');
for (const script of requiredScripts) {
  const exists = existsSync(join(root, script));
  console.log(`${exists ? 'OK  ' : 'MISS'} ${script}`);
  if (!exists) ok = false;
}

console.log('\n--- Output directory ---\n');
const outputExists = existsSync(join(root, 'output'));
console.log(`${outputExists ? 'OK  ' : 'MISS'} output/`);
if (!outputExists) ok = false;

console.log('\n--- System ---\n');
console.log('API keys required:         no');
console.log('Automatic applications:    no');
console.log('Tracker or scanner:        no');
console.log('Proof scoring rubrics:     yes');
console.log('JSON output bundle:        yes');
console.log('HTML proof viewer:         yes');
console.log('Truthfulness guardrails:   enabled by rubric and docs');

console.log('\n--- Available commands ---\n');
console.log('  npm run init               - create profile.yml from template');
console.log('  npm run audit:profile      - generate profile audit md/json/html');
console.log('  npm run gap:role           - generate flagship proof roadmap dossier');
console.log('  npm run portfolio:plan     - generate portfolio project briefs');
console.log('  npm run github:growth      - generate GitHub growth checklist');
console.log('  npm run interview:stories  - generate interview story prompts');
console.log('  npm run plan:weekly        - generate weekly shipping plan');
console.log('  npm run demo:ai-frontend   - generate the sample flagship bundle');
console.log('  npm run doctor             - check repo health');
console.log('  npm test                   - run fixture and parity tests');

process.exit(ok ? 0 : 1);
