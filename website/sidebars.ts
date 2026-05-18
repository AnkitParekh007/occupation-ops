import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['introduction', 'quick-start', 'installation', 'configuration'],
    },
    {
      type: 'category',
      label: 'Flagship Workflow',
      collapsed: false,
      items: ['cli-commands', 'tracks-and-rubrics', 'output-bundles', 'scoring-and-validators'],
    },
    {
      type: 'category',
      label: 'Project',
      items: ['architecture', 'positioning', 'contributing', 'roadmap'],
    },
  ],
};

export default sidebars;
