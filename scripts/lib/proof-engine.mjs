import { loadProfile } from './profile.mjs';
import { loadRubric } from './rubrics.mjs';

function includesKeyword(values, keywords) {
  const haystack = values.join(' ').toLowerCase();
  return keywords.some((keyword) => haystack.includes(keyword.toLowerCase()));
}

function scoreToTen(score, total) {
  if (total === 0) return 0;
  return Number(((score / total) * 10).toFixed(1));
}

function scoreToHundred(score, total) {
  if (total === 0) return 0;
  return Math.round((score / total) * 100);
}

function evaluateSignal(signal, profile) {
  const proofTexts = [
    profile.currentPositioning,
    ...profile.currentProof,
    ...profile.strongSkills,
    ...profile.developingSkills,
    ...profile.constraints,
  ];

  const evidence = [];

  if (signal.requiresLink) {
    const linkValue = profile.links?.[signal.requiresLink];
    if (linkValue) {
      evidence.push(`Found ${signal.requiresLink} link.`);
    }
  }

  if (signal.requiresTargetKeyword && profile.currentPositioning.toLowerCase().includes(signal.requiresTargetKeyword.toLowerCase())) {
    evidence.push(`Positioning names ${signal.requiresTargetKeyword}.`);
  }

  if (signal.keywords?.length && includesKeyword(proofTexts, signal.keywords)) {
    evidence.push(`Profile mentions ${signal.keywords.slice(0, 3).join(', ')}.`);
  }

  if (signal.minProofCount && profile.currentProof.length >= signal.minProofCount) {
    evidence.push(`Lists ${profile.currentProof.length} proof artifacts.`);
  }

  if (signal.minStrongSkills && profile.strongSkills.length >= signal.minStrongSkills) {
    evidence.push(`Lists ${profile.strongSkills.length} strong skills.`);
  }

  const passed = evidence.length >= (signal.threshold ?? 1);

  return {
    id: signal.id,
    label: signal.label,
    weight: signal.weight,
    passed,
    evidence,
    score: passed ? signal.weight : 0,
    gap: passed ? null : signal.gap,
    nextAction: passed ? null : signal.nextAction,
  };
}

function buildValidators(profile, rubric, signalResults) {
  const proofTexts = profile.currentProof.join(' ').toLowerCase();
  const supportedSignals = signalResults.filter((signal) => signal.passed).length;
  const metrics = {
    proofDensity: scoreToHundred(profile.currentProof.length, Math.max(rubric.minimumProofArtifacts, 4)),
    claimSupportRatio: scoreToHundred(supportedSignals, rubric.signals.length),
    portfolioClarity: scoreToHundred(
      Number(Boolean(profile.links.portfolio)) + Number(profile.currentProof.length >= 2) + Number(profile.currentPositioning.length >= 50),
      3,
    ),
    recruiterScanReadiness: scoreToHundred(
      Number(Boolean(profile.links.github)) +
        Number(Boolean(profile.links.linkedin)) +
        Number(Boolean(profile.links.portfolio)) +
        Number(profile.targetOccupation && profile.currentPositioning.toLowerCase().includes(profile.targetOccupation.toLowerCase().split(' ')[0])) +
        Number(profile.currentProof.length >= 3),
      5,
    ),
  };

  const validators = [
    {
      id: 'github-readme-quality',
      label: 'GitHub profile README quality',
      status: profile.links.github ? 'warn' : 'fail',
      detail: profile.links.github
        ? 'GitHub link exists, but the README headline and proof-first framing still need manual review.'
        : 'No GitHub link found. Recruiter scan readiness is constrained until a public profile is linked.',
    },
    {
      id: 'proof-project-completeness',
      label: 'Proof project completeness',
      status: profile.currentProof.length >= rubric.minimumProofArtifacts ? 'pass' : 'warn',
      detail:
        profile.currentProof.length >= rubric.minimumProofArtifacts
          ? `Profile lists ${profile.currentProof.length} proof artifacts.`
          : `Profile lists ${profile.currentProof.length} proof artifacts; flagship track expects at least ${rubric.minimumProofArtifacts}.`,
    },
    {
      id: 'screenshot-demo-presence',
      label: 'Screenshot/demo presence',
      status: /(screenshot|demo|gif|video)/.test(proofTexts) ? 'pass' : 'warn',
      detail: /(screenshot|demo|gif|video)/.test(proofTexts)
        ? 'Profile evidence already references a screenshot or demo asset.'
        : 'No screenshot or demo asset is named in the current proof list yet.',
    },
    {
      id: 'project-description-clarity',
      label: 'Recruiter-readable project descriptions',
      status: profile.currentProof.every((item) => item.split(' ').length >= 3) ? 'pass' : 'warn',
      detail: 'Project names should state what they prove, not only a repository title.',
    },
    {
      id: 'truthfulness-claim-risk',
      label: 'Truthfulness claim risk',
      status: /(production|scaled|millions|enterprise-wide)/i.test(`${profile.currentPositioning} ${profile.currentProof.join(' ')}`) ? 'warn' : 'pass',
      detail: /(production|scaled|millions|enterprise-wide)/i.test(`${profile.currentPositioning} ${profile.currentProof.join(' ')}`)
        ? 'The current profile language may imply unsupported scale or production claims.'
        : 'Current profile language stays within proof-oriented claims.',
    },
  ];

  return { validators, metrics };
}

function buildBacklog(signalResults) {
  return signalResults
    .filter((signal) => !signal.passed)
    .sort((left, right) => right.weight - left.weight)
    .map((signal, index) => ({
      priority: index + 1,
      title: signal.label,
      gap: signal.gap,
      nextAction: signal.nextAction,
    }));
}

function buildWeeklyPlan(rubric, backlog, weeklyHours) {
  const fallbackTasks = [
    {
      title: 'Proof inventory refresh',
      nextAction: 'Rewrite one project summary so it states what the project proves.',
    },
    {
      title: 'Visual proof',
      nextAction: 'Capture one screenshot, GIF, or annotated walkthrough for the flagship project.',
    },
    {
      title: 'Interview narrative',
      nextAction: 'Draft one STAR story from a real project decision.',
    },
    {
      title: 'README clarity',
      nextAction: 'Add a mocked-vs-real section and recruiter takeaway to the flagship README.',
    },
    {
      title: 'Proof publishing',
      nextAction: 'Publish a short update explaining one AI/frontend pattern you built.',
    },
  ];
  const focus = [...backlog, ...fallbackTasks].slice(0, 5);
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return {
    weeklyTheme: rubric.weeklyTheme,
    weeklyHours,
    outcomes: [
      'Tighten one public profile surface.',
      'Ship one stronger proof artifact.',
      'Write one interview-safe explanation of a real decision.',
    ],
    dailyPlan: weekdays.map((day, index) => {
      const item = focus[index] || focus.at(-1) || {
        title: 'Proof maintenance',
        nextAction: 'Review current proof surfaces and tighten claims.',
      };

      return {
        day,
        task: item.nextAction,
        proofArtifact: item.title,
      };
    }),
  };
}

function buildHeadline(profile, rubric) {
  return `${rubric.headlinePrefix} building ${rubric.headlineFocus.join(', ')}.`;
}

function buildReadmeChecklist(rubric) {
  return rubric.readmeChecklist.map((item) => ({ item, done: false }));
}

function buildInterviewMap(rubric) {
  return rubric.interviewTopics.map((topic) => ({
    topic,
    proofPrompt: `Prepare one real example that proves ${topic.toLowerCase()}.`,
  }));
}

export function buildProofDossier(profileArg) {
  const { profile, source } = loadProfile(profileArg);
  const { rubric, slug } = loadRubric(profile.targetOccupation);

  const signalResults = rubric.signals.map((signal) => evaluateSignal(signal, profile));
  const totalWeight = rubric.signals.reduce((sum, signal) => sum + signal.weight, 0);
  const earnedWeight = signalResults.reduce((sum, signal) => sum + signal.score, 0);

  const { validators, metrics } = buildValidators(profile, rubric, signalResults);
  const backlog = buildBacklog(signalResults);
  const weeklyPlan = buildWeeklyPlan(rubric, backlog, profile.weeklyHours);

  const projectBlueprints = rubric.projectBlueprints.map((project) => ({
    ...project,
    recruiterTakeaway: project.recruiterTakeaway,
    interviewTalkingPoints: project.interviewTalkingPoints,
  }));

  const strengths = signalResults.filter((signal) => signal.passed).map((signal) => signal.label);
  const missingSignals = signalResults.filter((signal) => !signal.passed).map((signal) => signal.gap);

  return {
    generatedAt: new Date().toISOString(),
    source,
    rubricSlug: slug,
    rubricName: rubric.name,
    profile,
    summary: {
      title: rubric.dossierTitle,
      audience: rubric.audience,
      positioning: profile.currentPositioning,
      scoreTen: scoreToTen(earnedWeight, totalWeight),
      scorePercent: scoreToHundred(earnedWeight, totalWeight),
      strengths,
      missingSignals,
      headlineRewrite: buildHeadline(profile, rubric),
    },
    scorecard: signalResults,
    validators,
    metrics,
    backlog,
    projects: projectBlueprints,
    githubPlan: {
      headlineRewrite: buildHeadline(profile, rubric),
      repoTopics: rubric.githubTopics,
      readmeChecklist: buildReadmeChecklist(rubric),
    },
    interviewMap: buildInterviewMap(rubric),
    weeklyPlan,
    truthfulnessGuardrails: rubric.truthfulnessGuardrails,
    comparison: rubric.positioningComparison,
  };
}
