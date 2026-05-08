import { existsSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dest = join(root, 'profile.yml');
const source = join(root, 'templates', 'profile.example.yml');

console.log('Occupation-Ops init\n');

if (existsSync(dest)) {
  console.log('profile.yml already exists — skipping copy.');
  console.log('Edit profile.yml to update your candidate profile.\n');
} else {
  if (!existsSync(source)) {
    console.error('ERROR: templates/profile.example.yml not found.');
    process.exit(1);
  }
  copyFileSync(source, dest);
  console.log('Created profile.yml from templates/profile.example.yml.');
  console.log('Open profile.yml and fill in your real name, target role, links, and proof projects.\n');
}

console.log('Next steps:\n');
console.log('  npm run audit:profile       — review your profile and positioning');
console.log('  npm run gap:role            — generate a role gap analysis');
console.log('  npm run portfolio:plan      — generate portfolio project ideas');
console.log('  npm run github:growth       — generate a GitHub growth plan');
console.log('  npm run interview:stories   — generate an interview story bank');
console.log('  npm run plan:weekly         — generate a weekly execution plan');
console.log('  npm run demo:ai-frontend    — run the AI Frontend Architect demo');
