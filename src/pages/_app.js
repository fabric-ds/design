import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { shortcodes } from '../utils/shortcodes';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();

  const generateUrl = (url) => {
    return process.env.NODE_ENV === 'production' ? `/design${url}` : url;
  };

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
                    href: generateUrl('/principles'),
                  },
                  {
                    title: "What's new",
                    href: generateUrl('/whats-new'),
                  },
                  {
                    title: 'Getting started',
                    href: generateUrl('/getting-started'),
                  },
                ],
              },
              {
                title: 'Foundations',
                open: false,
                items: [
                  {
                    title: 'Typography',
                    href: generateUrl('/typography'),
                  },
                  {
                    title: 'Color',
                    href: generateUrl('/color'),
                  },
                  {
                    title: 'Iconography',
                    href: generateUrl('/iconography'),
                  },
                  {
                    title: 'Accessibility',
                    href: generateUrl('/screenreaders'),
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
                        href: generateUrl('/button'),
                      },
                      {
                        title: 'Button utlity',
                        href: generateUrl('/utility-button'),
                      },
                    ],
                  },
                  {
                    title: 'Forms',
                    open: false,
                    items: [
                      {
                        title: 'Checkbox',
                        href: generateUrl('/checkbox'),
                      },
                      {
                        title: 'Input',
                        href: generateUrl('/input'),
                      },
                      {
                        title: 'Radio',
                        href: generateUrl('/radio'),
                      },
                      {
                        title: 'Search',
                        href: generateUrl('/search'),
                      },
                      {
                        title: 'Select',
                        href: generateUrl('/select'),
                      },
                      {
                        title: 'Switch',
                        href: generateUrl('/switch'),
                      },
                      {
                        title: 'Slider',
                        href: generateUrl('/slider'),
                      },
                      {
                        title: 'Text area',
                        href: generateUrl('/text-area'),
                      },
                    ],
                  },
                  {
                    title: 'Images and icons',
                    open: false,
                    items: [
                      {
                        title: 'Icon',
                        href: generateUrl('/icons'),
                      },
                    ],
                  },
                  {
                    title: 'Feedback indicators',
                    open: false,
                    items: [
                      {
                        title: 'Status ribbon',
                        href: generateUrl('/status-ribbon'),
                      },
                      {
                        title: 'Steps',
                        href: generateUrl('/steps'),
                      },
                      {
                        title: 'Toast',
                        href: generateUrl('/toast'),
                      },
                    ],
                  },
                  {
                    title: 'Layout',
                    open: false,
                    items: [
                      {
                        title: 'Box',
                        href: generateUrl('/box'),
                      },
                      {
                        title: 'Card',
                        href: generateUrl('/card'),
                      },
                      {
                        title: 'Expandable',
                        href: generateUrl('/expandable'),
                      },
                      {
                        title: 'Tabs',
                        href: generateUrl('/tabs'),
                      },
                    ],
                  },
                  {
                    title: 'Lists and tables',
                    open: false,
                    items: [
                      {
                        title: 'Data table',
                        href: generateUrl('/data-table'),
                      },
                      {
                        title: 'Description list',
                        href: generateUrl('/description-list'),
                      },
                      {
                        title: 'List',
                        href: generateUrl('/list'),
                      },
                    ],
                  },
                  {
                    title: 'Navigation',
                    open: false,
                    items: [
                      {
                        title: 'Breadcrumbs',
                        href: generateUrl('/breadcrumbs'),
                      },
                    ],
                  },
                  {
                    title: 'Overlays',
                    open: false,
                    items: [
                      {
                        title: 'Modal',
                        href: generateUrl('/modal'),
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
