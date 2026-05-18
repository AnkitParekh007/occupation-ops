import { buildProofDossier } from './lib/proof-engine.mjs';
import { renderFlagshipMarkdown, writeOutputBundle } from './lib/renderers.mjs';

const dossier = buildProofDossier(process.argv[2]);
const markdown = renderFlagshipMarkdown(dossier);
const paths = writeOutputBundle('role-gap-analysis', dossier, markdown);

console.log(`Role gap analysis generated:
- ${paths.markdownPath}
- ${paths.jsonPath}
- ${paths.htmlPath}`);
