import { existsSync } from 'node:fs';
import { join } from 'node:path';

const required = [
  'README.md',
  'AGENTS.md',
  'OCCUPATION_CONTRACT.md',
  'tracks/ai-frontend-architect.md',
  'modes/profile-audit.md',
  'templates/profile.example.yml',
  'examples/ai-frontend-architect/sample-profile.yml'
];

let ok = true;

console.log('Occupation-Ops doctor\n');

for (const file of required) {
  const exists = existsSync(join(process.cwd(), file));
  console.log(`${exists ? 'OK  ' : 'MISS'} ${file}`);
  if (!exists) ok = false;
}

console.log('\nMVP status: file-based career operating system');
console.log('API keys required: no');
console.log('Automatic applications: no');
console.log('Truthfulness guardrails: enabled by docs');

process.exit(ok ? 0 : 1);
