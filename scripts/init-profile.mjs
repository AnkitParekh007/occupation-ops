import { existsSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dest = join(root, 'profile.yml');
const source = join(root, 'templates', 'profile.example.yml');

console.log('Occupation-Ops init\n');

if (existsSync(dest)) {
  console.log('profile.yml already exists - skipping copy.');
  console.log('Edit profile.yml to update your proof profile.\n');
} else {
  if (!existsSync(source)) {
    console.error('ERROR: templates/profile.example.yml not found.');
    process.exit(1);
  }
  copyFileSync(source, dest);
  console.log('Created profile.yml from templates/profile.example.yml.');
  console.log('Open profile.yml and fill in your real name, target role, links, proof projects, and truthfulness constraints.\n');
}

console.log('Next steps:\n');
console.log('  npm run audit:profile       - generate a profile audit');
console.log('  npm run gap:role            - generate the flagship proof roadmap');
console.log('  npm run portfolio:plan      - generate portfolio project briefs');
console.log('  npm run github:growth       - generate a GitHub growth plan');
console.log('  npm run interview:stories   - generate an interview story bank');
console.log('  npm run plan:weekly         - generate a weekly shipping plan');
console.log('  npm run demo:ai-frontend    - run the sample flagship workflow');
