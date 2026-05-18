import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { slugify } from './profile.mjs';

const defaultRubric = 'ai-frontend-architect';

export function loadRubric(targetOccupation) {
  const slug = slugify(targetOccupation) || defaultRubric;
  const candidates = [slug, defaultRubric];

  for (const candidate of candidates) {
    const filePath = join(process.cwd(), 'rubrics', `${candidate}.json`);
    try {
      const rubric = JSON.parse(readFileSync(filePath, 'utf8'));
      return { rubric, slug: candidate, filePath };
    } catch {
      continue;
    }
  }

  throw new Error(`No rubric found for ${targetOccupation}`);
}
