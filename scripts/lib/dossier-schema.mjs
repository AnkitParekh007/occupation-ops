function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertString(value, message) {
  assert(typeof value === 'string' && value.length > 0, message);
}

function assertNumber(value, message) {
  assert(typeof value === 'number' && Number.isFinite(value), message);
}

function assertArray(value, message) {
  assert(Array.isArray(value), message);
}

function assertMetricRange(value, message) {
  assertNumber(value, message);
  assert(value >= 0 && value <= 100, `${message} must be between 0 and 100`);
}

export const DOSSIER_SCHEMA_VERSION = '1.0.0';

export function normalizeDossierForSnapshot(dossier) {
  return {
    ...dossier,
    generatedAt: '<generated-at>',
    source: String(dossier.source).replaceAll('\\', '/'),
  };
}

export function validateDossierSchema(dossier) {
  assert(dossier && typeof dossier === 'object', 'Dossier must be an object');
  assertString(dossier.generatedAt, 'generatedAt is required');
  assertString(dossier.source, 'source is required');
  assertString(dossier.rubricSlug, 'rubricSlug is required');
  assertString(dossier.rubricName, 'rubricName is required');

  assert(dossier.profile && typeof dossier.profile === 'object', 'profile is required');
  assertString(dossier.profile.name, 'profile.name is required');
  assertString(dossier.profile.targetOccupation, 'profile.targetOccupation is required');
  assertArray(dossier.profile.targetRoles, 'profile.targetRoles must be an array');
  assertArray(dossier.profile.currentProof, 'profile.currentProof must be an array');
  assertArray(dossier.profile.strongSkills, 'profile.strongSkills must be an array');
  assertArray(dossier.profile.developingSkills, 'profile.developingSkills must be an array');
  assertArray(dossier.profile.constraints, 'profile.constraints must be an array');

  assert(dossier.summary && typeof dossier.summary === 'object', 'summary is required');
  assertString(dossier.summary.title, 'summary.title is required');
  assertString(dossier.summary.audience, 'summary.audience is required');
  assertString(dossier.summary.positioning, 'summary.positioning is required');
  assertNumber(dossier.summary.scoreTen, 'summary.scoreTen is required');
  assertMetricRange(dossier.summary.scorePercent, 'summary.scorePercent is required');
  assertArray(dossier.summary.strengths, 'summary.strengths must be an array');
  assertArray(dossier.summary.missingSignals, 'summary.missingSignals must be an array');
  assertString(dossier.summary.headlineRewrite, 'summary.headlineRewrite is required');

  assertArray(dossier.scorecard, 'scorecard must be an array');
  for (const signal of dossier.scorecard) {
    assertString(signal.id, 'scorecard.id is required');
    assertString(signal.label, 'scorecard.label is required');
    assertNumber(signal.weight, 'scorecard.weight is required');
    assert(typeof signal.passed === 'boolean', 'scorecard.passed must be boolean');
    assertArray(signal.evidence, 'scorecard.evidence must be an array');
  }

  assert(dossier.metrics && typeof dossier.metrics === 'object', 'metrics is required');
  assertMetricRange(dossier.metrics.proofDensity, 'metrics.proofDensity is required');
  assertMetricRange(dossier.metrics.claimSupportRatio, 'metrics.claimSupportRatio is required');
  assertMetricRange(dossier.metrics.portfolioClarity, 'metrics.portfolioClarity is required');
  assertMetricRange(dossier.metrics.recruiterScanReadiness, 'metrics.recruiterScanReadiness is required');

  assertArray(dossier.validators, 'validators must be an array');
  for (const validator of dossier.validators) {
    assertString(validator.id, 'validator.id is required');
    assertString(validator.label, 'validator.label is required');
    assert(['pass', 'warn', 'fail'].includes(validator.status), 'validator.status must be pass, warn, or fail');
    assertString(validator.detail, 'validator.detail is required');
  }

  assertArray(dossier.backlog, 'backlog must be an array');
  for (const item of dossier.backlog) {
    assertNumber(item.priority, 'backlog.priority is required');
    assertString(item.title, 'backlog.title is required');
    assertString(item.nextAction, 'backlog.nextAction is required');
  }

  assertArray(dossier.projects, 'projects must be an array');
  for (const project of dossier.projects) {
    assertString(project.title, 'project.title is required');
    assertString(project.problem, 'project.problem is required');
    assertString(project.solution, 'project.solution is required');
    assertString(project.recruiterTakeaway, 'project.recruiterTakeaway is required');
    assertArray(project.interviewTalkingPoints, 'project.interviewTalkingPoints must be an array');
  }

  assert(dossier.githubPlan && typeof dossier.githubPlan === 'object', 'githubPlan is required');
  assertString(dossier.githubPlan.headlineRewrite, 'githubPlan.headlineRewrite is required');
  assertArray(dossier.githubPlan.repoTopics, 'githubPlan.repoTopics must be an array');
  assertArray(dossier.githubPlan.readmeChecklist, 'githubPlan.readmeChecklist must be an array');

  assertArray(dossier.interviewMap, 'interviewMap must be an array');
  for (const item of dossier.interviewMap) {
    assertString(item.topic, 'interviewMap.topic is required');
    assertString(item.proofPrompt, 'interviewMap.proofPrompt is required');
  }

  assert(dossier.weeklyPlan && typeof dossier.weeklyPlan === 'object', 'weeklyPlan is required');
  assertString(dossier.weeklyPlan.weeklyTheme, 'weeklyPlan.weeklyTheme is required');
  assertNumber(dossier.weeklyPlan.weeklyHours, 'weeklyPlan.weeklyHours is required');
  assertArray(dossier.weeklyPlan.outcomes, 'weeklyPlan.outcomes must be an array');
  assertArray(dossier.weeklyPlan.dailyPlan, 'weeklyPlan.dailyPlan must be an array');

  assertArray(dossier.truthfulnessGuardrails, 'truthfulnessGuardrails must be an array');
  assertArray(dossier.comparison, 'comparison must be an array');

  return true;
}
