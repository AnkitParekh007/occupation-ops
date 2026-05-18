import { join } from 'node:path';
import { buildProofDossier } from './lib/proof-engine.mjs';
import { renderFlagshipMarkdown, writeOutputBundle } from './lib/renderers.mjs';

const dossier = buildProofDossier(join('examples', 'ai-frontend-architect', 'sample-profile.yml'));
const markdown = renderFlagshipMarkdown(dossier);
const paths = writeOutputBundle('ai-frontend-proof-roadmap-demo', dossier, markdown);

console.log(`Flagship demo dossier generated:
- ${paths.markdownPath}
- ${paths.jsonPath}
- ${paths.htmlPath}`);
