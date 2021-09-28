import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { shortcodes } from '../utils/shortcodes';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <f-docs-template>
      <script
        data-for="sidebar"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            category: 'Design',
            items: [
              {
                title: 'Fabric',
                open: false,
                items: [
                  {
                    title: 'Principles',
                    href: '/principles',
                  },
                  {
                    title: "What's new",
                    href: '/whats-new',
                  },
                  {
                    title: 'Getting started',
                    href: '/getting-started',
                  },
                ],
              },
              {
                title: 'Foundations',
                open: false,
                items: [
                  {
                    title: 'Typography',
                    href: '/typography',
                  },
                  {
                    title: 'Color',
                    href: '/color',
                  },
                  {
                    title: 'Iconography',
                    href: '/iconography',
                  },
                  {
                    title: 'Accessibility',
                    href: '/screenreaders',
                  },
                ],
              },
              {
                title: 'Components',
                open: false,
                items: [
                  {
                    title: 'Actions',
                    open: false,
                    items: [
                      {
                        title: 'Button',
                        href: '/button',
                      },
                      {
                        title: 'Button utlity',
                        href: '/utility-button',
                      },
                    ],
                  },
                  {
                    title: 'Forms',
                    open: false,
                    items: [
                      {
                        title: 'Checkbox',
                        href: '?page=checkbox',
                      },
                      {
                        title: 'Input',
                        href: '/input',
                      },
                      {
                        title: 'Radio',
                        href: '/radio',
                      },
                      {
                        title: 'Search',
                        href: '/search',
                      },
                      {
                        title: 'Select',
                        href: '/select',
                      },
                      {
                        title: 'Switch',
                        href: '/switch',
                      },
                      {
                        title: 'Slider',
                        href: '/slider',
                      },
                      {
                        title: 'Text area',
                        href: '/text-area',
                      },
                    ],
                  },
                  {
                    title: 'Images and icons',
                    open: false,
                    items: [
                      {
                        title: 'Icon',
                        href: '/icons',
                      },
                    ],
                  },
                  {
                    title: 'Feedback indicators',
                    open: false,
                    items: [
                      {
                        title: 'Status ribbon',
                        href: '/status-ribbon',
                      },
                      {
                        title: 'Steps',
                        href: '/steps',
                      },
                      {
                        title: 'Toast',
                        href: '/toast',
                      },
                    ],
                  },
                  {
                    title: 'Layout',
                    open: false,
                    items: [
                      {
                        title: 'Box',
                        href: '/box',
                      },
                      {
                        title: 'Card',
                        href: '/card',
                      },
                      {
                        title: 'Expandable',
                        href: '/expandable',
                      },
                      {
                        title: 'Tabs',
                        href: '/tabs',
                      },
                    ],
                  },
                  {
                    title: 'Lists and tables',
                    open: false,
                    items: [
                      {
                        title: 'Data table',
                        href: '/data-table',
                      },
                      {
                        title: 'Description list',
                        href: '/description-list',
                      },
                      {
                        title: 'List',
                        href: '/list',
                      },
                    ],
                  },
                  {
                    title: 'Navigation',
                    open: false,
                    items: [
                      {
                        title: 'Breadcrumbs',
                        href: '/breadcrumbs',
                      },
                    ],
                  },
                  {
                    title: 'Overlays',
                    open: false,
                    items: [
                      {
                        title: 'Modal',
                        href: '/modal',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'Resources',
                open: false,
              },
            ],
          }),
        }}
      ></script>

      {router.asPath === '/' && (
        <div slot="banner" className="mx-auto p-32" style={{ maxWidth: 1024 }}>
          <h1 className="text-white">
            <span className="h3">Welcome to</span> <br />
            Fabric Design system
          </h1>
        </div>
      )}
      <section slot="content">
        <MDXProvider components={shortcodes}>
          <main>
            <Component {...pageProps} />
          </main>
        </MDXProvider>
      </section>

      <script
        data-for="footer"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            github: {
              name: 'Github',
              href: 'https://github.com/fabric-ds/design',
            },
            slack: {
              name: '#finn-fabric',
              href: 'https://sch-chat.slack.com/archives/C01GYKPJVFT',
            },
          }),
        }}
      ></script>
    </f-docs-template>
  );
}

export default App;
