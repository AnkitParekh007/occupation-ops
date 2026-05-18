import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/occupation-ops/docs',
    component: ComponentCreator('/occupation-ops/docs', '0b2'),
    routes: [
      {
        path: '/occupation-ops/docs',
        component: ComponentCreator('/occupation-ops/docs', 'c3b'),
        routes: [
          {
            path: '/occupation-ops/docs',
            component: ComponentCreator('/occupation-ops/docs', 'e4f'),
            routes: [
              {
                path: '/occupation-ops/docs/architecture',
                component: ComponentCreator('/occupation-ops/docs/architecture', '7b0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/cli-commands',
                component: ComponentCreator('/occupation-ops/docs/cli-commands', '1c2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/configuration',
                component: ComponentCreator('/occupation-ops/docs/configuration', '382'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/contributing',
                component: ComponentCreator('/occupation-ops/docs/contributing', '305'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/installation',
                component: ComponentCreator('/occupation-ops/docs/installation', '4d0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/introduction',
                component: ComponentCreator('/occupation-ops/docs/introduction', '2d0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/output-bundles',
                component: ComponentCreator('/occupation-ops/docs/output-bundles', '229'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/positioning',
                component: ComponentCreator('/occupation-ops/docs/positioning', 'd51'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/quick-start',
                component: ComponentCreator('/occupation-ops/docs/quick-start', 'f30'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/roadmap',
                component: ComponentCreator('/occupation-ops/docs/roadmap', '845'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/scoring-and-validators',
                component: ComponentCreator('/occupation-ops/docs/scoring-and-validators', '37a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/occupation-ops/docs/tracks-and-rubrics',
                component: ComponentCreator('/occupation-ops/docs/tracks-and-rubrics', 'ab9'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/occupation-ops/',
    component: ComponentCreator('/occupation-ops/', '83d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
