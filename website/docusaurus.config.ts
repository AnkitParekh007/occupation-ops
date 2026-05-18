import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Occupation-Ops',
  tagline: 'Proof before applying for AI/frontend pivots.',
  favicon: 'img/favicon.svg',
  url: 'https://ankitparekh007.github.io',
  baseUrl: '/occupation-ops/',
  organizationName: 'AnkitParekh007',
  projectName: 'occupation-ops',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/AnkitParekh007/occupation-ops/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/og-card.svg',
    metadata: [
      {
        name: 'keywords',
        content:
          'occupation-ops, portfolio, github profile, proof before applying, ai frontend, career proof',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    navbar: {
      title: 'Occupation-Ops',
      logo: {
        alt: 'Occupation-Ops',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/quick-start',
          label: 'Quick Start',
          position: 'left',
        },
        {
          to: '/docs/cli-commands',
          label: 'CLI',
          position: 'left',
        },
        {
          href: 'https://github.com/AnkitParekh007/occupation-ops',
          label: 'GitHub',
          position: 'right',
          className: 'navbar-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/introduction' },
            { label: 'Quick Start', to: '/docs/quick-start' },
            { label: 'CLI Commands', to: '/docs/cli-commands' },
            { label: 'Architecture', to: '/docs/architecture' },
          ],
        },
        {
          title: 'Workflow',
          items: [
            { label: 'Tracks and Rubrics', to: '/docs/tracks-and-rubrics' },
            { label: 'Output Bundles', to: '/docs/output-bundles' },
            { label: 'Scoring and Validators', to: '/docs/scoring-and-validators' },
            { label: 'Positioning', to: '/docs/positioning' },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Repository',
              href: 'https://github.com/AnkitParekh007/occupation-ops',
            },
            {
              label: 'Issues',
              href: 'https://github.com/AnkitParekh007/occupation-ops/issues',
            },
            {
              label: 'License',
              href: 'https://github.com/AnkitParekh007/occupation-ops/blob/main/LICENSE',
            },
            {
              label: 'Roadmap',
              to: '/docs/roadmap',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Occupation-Ops Contributors. MIT License.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'json', 'yaml', 'markdown'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
