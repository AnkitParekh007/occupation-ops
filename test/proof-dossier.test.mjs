import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, cpSync, existsSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { buildProofDossier } from '../scripts/lib/proof-engine.mjs';
import { renderFlagshipMarkdown, renderHtmlViewer } from '../scripts/lib/renderers.mjs';
import { normalizeDossierForSnapshot, validateDossierSchema } from '../scripts/lib/dossier-schema.mjs';

const repoRoot = process.cwd();

function createTempWorkspace() {
  const workspace = mkdtempSync(join(tmpdir(), 'occupation-ops-'));
  const pathsToCopy = [
    'scripts',
    'rubrics',
    'templates',
    'examples',
    'tracks',
    'modes',
    'output',
    'README.md',
    'AGENTS.md',
    'OCCUPATION_CONTRACT.md',
  ];

  for (const relativePath of pathsToCopy) {
    cpSync(join(repoRoot, relativePath), join(workspace, relativePath), { recursive: true });
  }

  return workspace;
}

test('flagship dossier returns proof metrics and backlog', () => {
  const dossier = buildProofDossier(join('examples', 'ai-frontend-architect', 'sample-profile.yml'));

  validateDossierSchema(dossier);
  assert.equal(dossier.summary.title, 'AI Frontend Architect Proof Roadmap');
  assert.ok(dossier.metrics.proofDensity >= 50);
  assert.ok(dossier.backlog.length >= 1);
  assert.ok(dossier.validators.some((item) => item.id === 'github-readme-quality'));
});

test('markdown and html renderers expose the same flagship title', () => {
  const dossier = buildProofDossier(join('examples', 'ai-frontend-architect', 'sample-profile.yml'));
  const markdown = renderFlagshipMarkdown(dossier);
  const html = renderHtmlViewer(dossier);

  assert.match(markdown, /AI Frontend Architect Proof Roadmap/);
  assert.match(markdown, /Current score:/);
  assert.match(html, /Occupation-Ops flagship proof dossier/);
  assert.match(html, /AI Frontend Architect Proof Roadmap/);
});

test('golden snapshots stay stable for flagship dossier outputs', () => {
  const dossier = buildProofDossier(join('examples', 'ai-frontend-architect', 'sample-profile.yml'));
  const normalized = normalizeDossierForSnapshot(dossier);
  const expectedJson = readFileSync(join(repoRoot, 'test', 'golden', 'flagship-dossier.sample.json'), 'utf8');
  const expectedMarkdown = readFileSync(join(repoRoot, 'test', 'golden', 'flagship-dossier.sample.md'), 'utf8');
  const expectedHtml = readFileSync(join(repoRoot, 'test', 'golden', 'flagship-dossier.sample.html'), 'utf8');

  assert.equal(`${JSON.stringify(normalized, null, 2)}\n`, expectedJson);
  assert.equal(`${renderFlagshipMarkdown(dossier)}\n`, expectedMarkdown);
  assert.equal(renderHtmlViewer(normalized), expectedHtml);
});

test('CLI entrypoints generate the expected output bundle', () => {
  const workspace = createTempWorkspace();
  const scripts = [
    'scripts/doctor.mjs',
    'scripts/init-profile.mjs',
    'scripts/demo-ai-frontend-architect.mjs',
    'scripts/run-profile-audit.mjs',
    'scripts/generate-role-gap-analysis.mjs',
    'scripts/generate-portfolio-plan.mjs',
    'scripts/generate-github-growth-plan.mjs',
    'scripts/generate-interview-story-bank.mjs',
    'scripts/generate-weekly-plan.mjs',
  ];

  for (const script of scripts) {
    const args = script.includes('demo') || script.includes('doctor') || script.includes('init')
      ? [script]
      : [script, join('examples', 'ai-frontend-architect', 'sample-profile.yml')];
    execFileSync(process.execPath, args, { cwd: workspace, stdio: 'pipe' });
  }

  const expectedFiles = [
    'output/ai-frontend-proof-roadmap-demo.md',
    'output/ai-frontend-proof-roadmap-demo.json',
    'output/ai-frontend-proof-roadmap-demo.html',
    'output/profile-audit.md',
    'output/role-gap-analysis.md',
    'output/portfolio-project-plan.md',
    'output/github-growth-plan.md',
    'output/interview-story-bank.md',
    'output/weekly-proof-plan.md',
    'profile.yml',
  ];

  for (const relativePath of expectedFiles) {
    assert.equal(existsSync(join(workspace, relativePath)), true, `${relativePath} should exist`);
  }

  const json = JSON.parse(readFileSync(join(workspace, 'output/role-gap-analysis.json'), 'utf8'));
  const markdown = readFileSync(join(workspace, 'output/role-gap-analysis.md'), 'utf8');

  assert.equal(json.summary.title, 'AI Frontend Architect Proof Roadmap');
  assert.match(markdown, new RegExp(json.summary.title));
  assert.match(markdown, /README Improvement Checklist/);
});

test('weak-proof fixture is flagged instead of inflated', () => {
  const dossier = buildProofDossier(join('test', 'fixtures', 'weak-profile.yml'));

  validateDossierSchema(dossier);
  assert.ok(dossier.summary.scorePercent < 60);
  assert.ok(dossier.backlog.length >= 3);
  assert.ok(dossier.validators.some((item) => item.status === 'fail' || item.status === 'warn'));
  assert.ok(dossier.summary.missingSignals.length >= 3);
});

test('strong-proof fixture clears major flagship expectations', () => {
  const dossier = buildProofDossier(join('test', 'fixtures', 'strong-profile.yml'));

  validateDossierSchema(dossier);
  assert.ok(dossier.summary.scorePercent >= 80);
  assert.ok(dossier.metrics.recruiterScanReadiness >= 80);
  assert.ok(dossier.validators.filter((item) => item.status === 'pass').length >= 3);
});
