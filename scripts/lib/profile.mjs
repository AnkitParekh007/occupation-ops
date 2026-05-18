import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function parseScalar(value) {
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?\d+$/.test(value)) return Number(value);
  return value;
}

function setNestedValue(root, path, value) {
  let current = root;

  for (let index = 0; index < path.length - 1; index += 1) {
    const key = path[index];
    if (!(key in current) || typeof current[key] !== 'object' || current[key] === null) {
      current[key] = {};
    }
    current = current[key];
  }

  current[path.at(-1)] = value;
}

function parseSimpleYaml(raw) {
  const root = {};
  const stack = [{ indent: -1, container: root, path: [] }];
  const lines = raw.split(/\r?\n/);

  for (const [lineIndex, originalLine] of lines.entries()) {
    const trimmed = originalLine.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const indent = originalLine.match(/^ */)?.[0].length ?? 0;

    while (stack.length > 1 && indent <= stack.at(-1).indent) {
      stack.pop();
    }

    const current = stack.at(-1);

    if (trimmed.startsWith('- ')) {
      const value = parseScalar(trimmed.slice(2).trim());
      if (!Array.isArray(current.container)) {
        throw new Error(`Invalid YAML list placement near line: ${originalLine}`);
      }
      current.container.push(value);
      continue;
    }

    const separatorIndex = trimmed.indexOf(':');
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const nextPath = [...current.path, key];

    if (rawValue) {
      setNestedValue(root, nextPath, parseScalar(rawValue));
      continue;
    }

    const nextLineIsList = lines
      .slice(lineIndex + 1)
      .find((candidate) => candidate.trim())
      ?.trim()
      .startsWith('- ');

    const value = nextLineIsList ? [] : {};
    setNestedValue(root, nextPath, value);
    stack.push({ indent, container: value, path: nextPath });
  }

  return root;
}

export function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function loadProfile(profileArg) {
  const root = process.cwd();
  const requested = profileArg ? join(root, profileArg) : join(root, 'profile.yml');
  const fallback = join(root, 'templates', 'profile.example.yml');
  const filePath = existsSync(requested) ? requested : fallback;
  const raw = readFileSync(filePath, 'utf8');
  const profile = parseSimpleYaml(raw);

  return {
    raw,
    filePath,
    source: filePath.replace(`${root}\\`, '').replace(`${root}/`, ''),
    profile: {
      name: profile.name || 'Example Candidate',
      targetOccupation: profile.target_occupation || 'AI Frontend Architect',
      targetRoles: profile.target_roles || [],
      weeklyHours: Number(profile.weekly_hours || 6),
      links: profile.links || {},
      currentPositioning: profile.current_positioning || 'Not specified.',
      currentProof: profile.current_proof || [],
      strongSkills: profile.skills?.strong || [],
      developingSkills: profile.skills?.developing || [],
      constraints: profile.constraints || [],
    },
  };
}
