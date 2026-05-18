import { buildProofDossier } from './lib/proof-engine.mjs';
import { writeOutputBundle } from './lib/renderers.mjs';

const dossier = buildProofDossier(process.argv[2]);

const markdown = [
  '# Profile Audit',
  '',
  `Profile source: ${dossier.source}`,
  '',
  `Candidate: ${dossier.profile.name}`,
  `Target occupation: ${dossier.profile.targetOccupation}`,
  '',
  '## 30-Second Recruiter Impression',
  '',
  `${dossier.summary.positioning}`,
  '',
  `Current proof score: ${dossier.summary.scoreTen}/10.`,
  '',
  '## Strongest Supported Signals',
  '',
  ...dossier.summary.strengths.map((item) => `- ${item}`),
  '',
  '## Gaps To Tighten First',
  '',
  ...dossier.backlog.slice(0, 5).map((item) => `${item.priority}. ${item.nextAction}`),
  '',
  '## Public Proof Metrics',
  '',
  `- Proof density: ${dossier.metrics.proofDensity}/100`,
  `- Claim support ratio: ${dossier.metrics.claimSupportRatio}/100`,
  `- Portfolio clarity: ${dossier.metrics.portfolioClarity}/100`,
  `- Recruiter scan readiness: ${dossier.metrics.recruiterScanReadiness}/100`,
  '',
  '## Next Commands',
  '',
  '- `npm run gap:role` - generate the flagship proof roadmap dossier',
  '- `npm run github:growth` - extract the GitHub positioning plan',
  '- `npm run plan:weekly` - generate the weekly shipping plan',
  '',
  '## Truthfulness Guardrail',
  '',
  'Only publish claims you can defend from public proof or real project decisions.',
  '',
].join('\n');

const paths = writeOutputBundle('profile-audit', dossier, markdown);

console.log(`Profile audit generated:
- ${paths.markdownPath}
- ${paths.jsonPath}
- ${paths.htmlPath}`);
