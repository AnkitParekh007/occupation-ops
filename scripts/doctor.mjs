import { existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

const requiredFiles = [
  'README.md',
  'AGENTS.md',
  'OCCUPATION_CONTRACT.md',
  'tracks/ai-frontend-architect.md',
  'modes/profile-audit.md',
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

const outputDir = join(root, 'output');

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
const outputExists = existsSync(outputDir);
console.log(`${outputExists ? 'OK  ' : 'MISS'} output/`);
if (!outputExists) ok = false;

console.log('\n--- System ---\n');
console.log('API keys required:         no');
console.log('Automatic applications:    no');
console.log('Truthfulness guardrails:   enabled by docs');

console.log('\n--- Available commands ---\n');
console.log('  npm run init               — create profile.yml from template');
console.log('  npm run audit:profile      — review profile and positioning');
console.log('  npm run gap:role           — generate role gap analysis');
console.log('  npm run portfolio:plan     — generate portfolio project plan');
console.log('  npm run github:growth      — generate GitHub growth plan');
console.log('  npm run interview:stories  — generate interview story bank');
console.log('  npm run plan:weekly        — generate weekly execution plan');
console.log('  npm run demo:ai-frontend   — run the AI Frontend Architect demo');
console.log('  npm run doctor             — check repo health');

process.exit(ok ? 0 : 1);
