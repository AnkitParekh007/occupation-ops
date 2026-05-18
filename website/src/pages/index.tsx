import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
  {
    title: 'Sample Dossier',
    desc: 'See the flagship output bundle before cloning the repo.',
    href: '/docs/sample-dossier',
  },
];

const outputFiles = [
  'role-gap-analysis.md',
  'role-gap-analysis.json',
  'role-gap-analysis.html',
  'weekly-proof-plan.md',
  'profile-audit.json',
];

const trustItems = [
  'Local-first CLI',
  'No API key required',
  'Truthfulness guardrails',
  'Markdown + JSON + HTML',
  'GitHub Pages docs',
];

const audienceCards = [
  {
    title: 'Who it is for',
    bullets: [
      'AI/frontend candidates with weak public proof',
      'Angular and TypeScript engineers repositioning toward AI product work',
      'People who need stronger GitHub, portfolio, and interview evidence',
    ],
  },
  {
    title: 'Who it is not for',
    bullets: [
      'Mass-apply operators',
      'Portal scraping workflows',
      'Recruiter CRM users',
      'Anyone looking for fake resume inflation',
    ],
  },
  {
    title: 'What you should expect',
    bullets: [
      'A visible scorecard of current proof',
      'A backlog of missing recruiter signals',
      'A tighter GitHub and README positioning plan',
      'A concrete weekly proof-shipping plan',
    ],
  },
];

const howItWorks = [
  {
    step: '1',
    title: 'Describe the current proof state',
    text: 'Fill in profile.yml with your current positioning, links, skills, and proof artifacts.',
  },
  {
    step: '2',
    title: 'Run the flagship command',
    text: 'Occupation-Ops scores the profile against a rubric, not just generic prose templates.',
  },
  {
    step: '3',
    title: 'Review the dossier',
    text: 'Open the HTML output to see score, gaps, validators, and backlog in one place.',
  },
  {
    step: '4',
    title: 'Ship stronger public evidence',
    text: 'Use the GitHub rewrite, project briefs, and weekly plan to improve what recruiters actually see.',
  },
];

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroGrid} />
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <div className={styles.heroBadge}>v0.2.0 - local-first - proof-first - MIT</div>
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
            <Link to="/docs/sample-dossier" className={styles.ctaSecondary}>
              See a sample dossier
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
            <div className={styles.consoleHint}>track: ai-frontend-architect - rubric-driven</div>
            <div className={styles.divider} />
            <div className={styles.consoleLabel}>OUTPUT BUNDLE</div>
            {outputFiles.map((file) => (
              <div key={file} className={styles.consoleLine}>
                <span className={styles.ok}>OK</span>
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

function TrustSection() {
  return (
    <section className={styles.trustStrip}>
      <div className={styles.trustInner}>
        {trustItems.map((item) => (
          <span key={item} className={styles.trustItem}>{item}</span>
        ))}
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
          <div className={styles.consoleLine}><span className={styles.ok}>OK</span><span>output/role-gap-analysis.md</span></div>
          <div className={styles.consoleLine}><span className={styles.ok}>OK</span><span>output/role-gap-analysis.json</span></div>
          <div className={styles.consoleLine}><span className={styles.ok}>OK</span><span>output/role-gap-analysis.html</span></div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className={styles.audienceSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Ideal User</span>
        <h2>LinkedIn visitors should understand in 20 seconds whether this is for them.</h2>
        <p>
          Occupation-Ops is most valuable when the candidate problem is weak public proof,
          not weak application volume.
        </p>
      </div>
      <div className={styles.cardGrid}>
        {audienceCards.map((card) => (
          <article key={card.title} className={styles.card}>
            <div className={styles.cardTitle}>{card.title}</div>
            <ul className={styles.list}>
              {card.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
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
            <span className={styles.cardAction}>Open docs -&gt;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className={styles.howSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>How It Works</span>
        <h2>The workflow is simple enough to try and opinionated enough to be useful.</h2>
        <p>
          This is not a chat prompt wrapper. The output is a rubric-scored dossier with explicit proof signals.
        </p>
      </div>
      <div className={styles.howGrid}>
        {howItWorks.map((item) => (
          <article key={item.step} className={styles.howCard}>
            <span className={styles.stepBadge}>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SampleSection() {
  const dossierOverviewImage = useBaseUrl('/img/launch/flagship-dossier-overview.png');
  const scorecardImage = useBaseUrl('/img/launch/flagship-scorecard.png');

  return (
    <section className={styles.sampleSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Real Output</span>
        <h2>Show the product, not just the category story.</h2>
        <p>
          The launch surface now includes actual dossier visuals so cold visitors can judge the output quality quickly.
        </p>
      </div>
      <div className={styles.sampleGrid}>
        <article className={styles.visualCard}>
          <img
            src={dossierOverviewImage}
            alt="Occupation-Ops flagship dossier overview"
            className={styles.visual}
          />
          <div className={styles.visualCopy}>
            <h3>Flagship dossier overview</h3>
            <p>One HTML report that shows score, proof backlog, GitHub rewrite, validators, and weekly plan.</p>
          </div>
        </article>
        <article className={styles.visualCard}>
          <img
            src={scorecardImage}
            alt="Occupation-Ops role-gap scorecard"
            className={styles.visual}
          />
          <div className={styles.visualCopy}>
            <h3>Role-gap scorecard</h3>
            <p>The core evaluation is explicit about what is supported, what is missing, and what to improve next.</p>
          </div>
        </article>
      </div>
      <div className={styles.heroActions}>
        <Link to="/docs/sample-dossier" className={styles.ctaPrimary}>
          Open the sample dossier
        </Link>
        <Link to="/docs/examples-and-assets" className={styles.ctaSecondary}>
          Launch assets and examples
        </Link>
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
        <h2>Launch with a concrete sample, not an abstract promise.</h2>
        <p>
          The AI Frontend Architect dossier is the wedge. The homepage, docs, sample outputs,
          and launch assets should all make that visible within one screen.
        </p>
        <div className={styles.heroActions}>
          <Link to="/docs/quick-start" className={styles.ctaPrimary}>
            Open Quick Start
          </Link>
          <Link to="/docs/launch-checklist" className={styles.ctaSecondary}>
            Launch checklist
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
      <TrustSection />
      <QuickstartSection />
      <AudienceSection />
      <CardsSection />
      <HowItWorksSection />
      <SampleSection />
      <ComparisonSection />
      <FinalSection />
    </Layout>
  );
}
