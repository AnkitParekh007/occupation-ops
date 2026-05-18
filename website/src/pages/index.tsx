import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

const proofSignals = [
  'Proof inventory',
  'Role-gap scorecard',
  'GitHub rewrite',
  'README checklist',
  'Portfolio brief',
  'Interview story map',
  'Weekly shipping plan',
];

const workflowCards = [
  {
    title: 'Quick Start',
    desc: 'Clone, install, run one command, and open the flagship proof dossier in your browser.',
    href: '/docs/quick-start',
  },
  {
    title: 'CLI Reference',
    desc: 'The product surface is the terminal. Every core command has a concrete output bundle.',
    href: '/docs/cli-commands',
  },
  {
    title: 'Developer Docs',
    desc: 'Architecture, rubric structure, validators, and extension points for contributors.',
    href: '/docs/architecture',
  },
];

const outputFiles = [
  'role-gap-analysis.md',
  'role-gap-analysis.json',
  'role-gap-analysis.html',
  'weekly-proof-plan.md',
  'profile-audit.json',
];

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroGrid} />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <div className={styles.heroBadge}>v0.2.0 · local-first · proof-first · MIT</div>
          <h1 className={styles.heroTitle}>
            The proof-before-applying engine for <span>AI/frontend pivots.</span>
          </h1>
          <p className={styles.heroLead}>
            Occupation-Ops turns vague experience into recruiter-readable public proof.
            It is not a mass-apply tool, not a scanner, and not a tracker.
          </p>
          <div className={styles.heroActions}>
            <Link to="/docs/quick-start" className={styles.ctaPrimary}>
              Start the flagship workflow
            </Link>
            <Link to="/docs/cli-commands" className={styles.ctaSecondary}>
              Browse the CLI
            </Link>
          </div>
          <div className={styles.heroNote}>
            <p className={styles.heroNoteTitle}>Built for candidates who need stronger proof before more outreach.</p>
            <div className={styles.pillRow}>
              {['No SaaS', 'No API key required', 'JSON + Markdown + HTML', 'Theme toggle included'].map((pill) => (
                <span key={pill} className={styles.pill}>{pill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.heroTerminal}>
          <div className={styles.windowBar}>
            <span className={clsx(styles.dot, styles.red)} />
            <span className={clsx(styles.dot, styles.yellow)} />
            <span className={clsx(styles.dot, styles.green)} />
            <span className={styles.windowTitle}>npm run gap:role</span>
          </div>
          <div className={styles.windowBody}>
            <div className={styles.consoleLabel}>INPUT</div>
            <div className={styles.consoleLine}><span className={styles.prompt}>$</span><span>profile.yml</span></div>
            <div className={styles.consoleHint}>track: ai-frontend-architect · rubric-driven</div>
            <div className={styles.divider} />
            <div className={styles.consoleLabel}>OUTPUT BUNDLE</div>
            {outputFiles.map((file) => (
              <div key={file} className={styles.consoleLine}>
                <span className={styles.ok}>✓</span>
                <span>{file}</span>
              </div>
            ))}
            <div className={styles.divider} />
            <div className={styles.consoleLabel}>DOSSIER SECTIONS</div>
            <div className={styles.signalGrid}>
              {proofSignals.map((signal) => (
                <span key={signal} className={styles.signalItem}>{signal}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickstartSection() {
  return (
    <section className={styles.quickstart}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Quick Start</span>
        <h2>Up and running in 60 seconds.</h2>
        <p>
          The website explains the system. The terminal does the work. The flagship command
          generates a full proof dossier with Markdown, JSON, and HTML outputs.
        </p>
      </div>

      <div className={styles.terminalLarge}>
        <div className={styles.windowBar}>
          <span className={clsx(styles.dot, styles.red)} />
          <span className={clsx(styles.dot, styles.yellow)} />
          <span className={clsx(styles.dot, styles.green)} />
          <span className={styles.windowTitle}>quick-start.sh</span>
        </div>
        <div className={styles.windowBody}>
          <div className={styles.consoleLine}><span className={styles.prompt}>$</span><span>git clone https://github.com/AnkitParekh007/occupation-ops.git</span></div>
          <div className={styles.consoleLine}><span className={styles.prompt}>$</span><span>cd occupation-ops && npm install</span></div>
          <div className={styles.consoleLine}><span className={styles.prompt}>$</span><span>npm run init</span></div>
          <div className={styles.consoleLine}><span className={styles.prompt}>$</span><span>npm run gap:role</span></div>
          <div className={styles.spacer} />
          <div className={styles.consoleLine}><span className={styles.ok}>✓</span><span>output/role-gap-analysis.md</span></div>
          <div className={styles.consoleLine}><span className={styles.ok}>✓</span><span>output/role-gap-analysis.json</span></div>
          <div className={styles.consoleLine}><span className={styles.ok}>✓</span><span>output/role-gap-analysis.html</span></div>
        </div>
      </div>
    </section>
  );
}

function CardsSection() {
  return (
    <section className={styles.cardsSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Documentation</span>
        <h2>GitBook-style docs, but aligned to the actual repo workflow.</h2>
        <p>
          The docs are structured around how developers use and extend the repo: onboarding,
          CLI usage, rubrics, output bundles, and architecture.
        </p>
      </div>
      <div className={styles.cardGrid}>
        {workflowCards.map((card) => (
          <Link key={card.title} to={card.href} className={styles.card}>
            <div className={styles.cardTitle}>{card.title}</div>
            <p>{card.desc}</p>
            <span className={styles.cardAction}>Open docs →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className={styles.comparison}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Positioning</span>
        <h2>Occupation-Ops is not trying to be a job-search pipeline.</h2>
        <p>
          The competitive advantage is narrower and stronger: help AI/frontend candidates build
          proof before they apply, so their GitHub, portfolio, and interview narratives hold up.
        </p>
      </div>
      <div className={styles.compareGrid}>
        <div className={styles.compareBad}>
          <h3>What it is not</h3>
          <ul>
            <li>Mass apply automation</li>
            <li>Portal scanning or scraping</li>
            <li>ATS gaming or fake metrics</li>
            <li>Recruiter CRM workflows</li>
          </ul>
        </div>
        <div className={styles.compareGood}>
          <h3>What it is</h3>
          <ul>
            <li>Proof inventory and evidence scoring</li>
            <li>GitHub and README positioning guidance</li>
            <li>Portfolio project planning</li>
            <li>Interview-safe story construction</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FinalSection() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.finalInner}>
        <h2>Start with the AI Frontend Architect dossier.</h2>
        <p>
          That track is the product wedge. Everything else in the repo should make that
          experience sharper, more defensible, and easier to extend.
        </p>
        <div className={styles.heroActions}>
          <Link to="/docs/quick-start" className={styles.ctaPrimary}>
            Open Quick Start
          </Link>
          <Link
            to="https://github.com/AnkitParekh007/occupation-ops"
            className={styles.ctaSecondary}
          >
            View repository
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="Proof-before-applying engine for AI/frontend pivots.">
      <HeroSection />
      <QuickstartSection />
      <CardsSection />
      <ComparisonSection />
      <FinalSection />
    </Layout>
  );
}
