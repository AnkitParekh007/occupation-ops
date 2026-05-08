import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const profilePath = process.argv[2] || 'profile.yml';
const fallbackPath = 'templates/profile.example.yml';
const fileToRead = existsSync(join(process.cwd(), profilePath)) ? profilePath : fallbackPath;
const raw = readFileSync(join(process.cwd(), fileToRead), 'utf8');

const findLine = (key) => raw
  .split(/\r?\n/)
  .find((line) => line.startsWith(`${key}:`))
  ?.split(':')
  .slice(1)
  .join(':')
  .trim();

const name = findLine('name') || 'Unknown candidate';
const target = findLine('target_occupation') || 'Unknown occupation';
const positioning = findLine('current_positioning') || 'No positioning provided';

console.log('# Profile Audit\n');
console.log(`Profile source: ${fileToRead}`);
console.log(`Candidate: ${name}`);
console.log(`Target occupation: ${target}`);
console.log(`Current positioning: ${positioning}\n`);

console.log('## 30-Second Recruiter Impression\n');
console.log(`This profile should make ${target} obvious quickly. If the profile README, resume headline, portfolio hero, and pinned projects do not all reinforce that occupation, tighten them first.\n`);

console.log('## Strengths To Surface\n');
console.log('- Existing proof projects');
console.log('- Target-role language');
console.log('- Public links');
console.log('- Weekly execution capacity\n');

console.log('## Gaps To Check\n');
console.log('- Are screenshots visible?');
console.log('- Are demos deployed?');
console.log('- Are claims clearly separated from planned work?');
console.log('- Do repo READMEs explain what each project proves?');
console.log('- Are interview topics mapped to proof projects?\n');

console.log('## Next Actions\n');
console.log('1. Rewrite profile headline around the target occupation.');
console.log('2. Pin the strongest proof repos first.');
console.log('3. Add one screenshot or demo link.');
console.log('4. Add a 30-day roadmap.');
console.log('5. Draft interview talking points from existing proof.');
console.log('\nTip: run `npm run demo:ai-frontend` for a complete sample report.');
