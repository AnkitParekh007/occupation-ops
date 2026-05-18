import { buildProofDossier } from './lib/proof-engine.mjs';
import { writeOutputBundle } from './lib/renderers.mjs';

const dossier = buildProofDossier(process.argv[2]);

const markdown = [
  `# Weekly Career Plan: ${dossier.profile.targetOccupation}`,
  '',
  `Theme: ${dossier.weeklyPlan.weeklyTheme}`,
  '',
  '## Outcomes',
  '',
  ...dossier.weeklyPlan.outcomes.map((item) => `- [ ] ${item}`),
  '',
  '## Daily Plan',
  '',
  '| Day | Task | Proof artifact |',
  '| --- | --- | --- |',
  ...dossier.weeklyPlan.dailyPlan.map((item) => `| ${item.day} | ${item.task} | ${item.proofArtifact} |`),
  '',
  '## End-Of-Week Review',
  '',
  '- What became more credible?',
  '- Which proof gaps remain unsupported?',
  '- What should be the next public artifact to ship?',
  '',
  '## Truthfulness Guardrail',
  '',
  'Only publish claims you can defend in a recruiter screen or technical interview.',
  '',
].join('\n');

const paths = writeOutputBundle('weekly-proof-plan', dossier, markdown);

console.log(`Weekly plan generated:
- ${paths.markdownPath}
- ${paths.jsonPath}
- ${paths.htmlPath}`);
