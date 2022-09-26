import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fabric Design</title>
      </Head>
      <f-docs-template>
        <script
          data-for="sidebar"
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              category: 'Design',
              items: [
                {
                  title: 'Foundations',
                  open: true,
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
                    {
                      title: 'Page titles',
                      href: '/titles',
                    },
                  ],
                },
                {
                  title: 'Components',
                  open: true,
                  items: [
                        {
                          title: 'Badge',
                          href: '/badge',
                        },
                        {
                          title: 'Button',
                          href: '/button',
                        },
                        {
                          title: 'Button utlity',
                          href: '/utility-button',
                        },
                          {
                          title: 'Breadcrumbs',
                          href: '/breadcrumbs',
                        },
                         {
                          title: 'Box',
                          href: '/box',
                        },
                         {
                          title: 'Card',
                          href: '/card',
                        },
                         {
                          title: 'Checkbox',
                          href: '/checkbox',
                        },
                          {
                          title: 'Data table',
                          href: '/data-table',
                        },
                          {
                          title: 'Expandable',
                          href: '/expandable',
                        },
                        {
                          title: 'Icon',
                          href: '/icons',
                        },
                         {
                          title: 'Input',
                          href: '/input',
                        },
                        {
                          title: 'List',
                          href: '/list',
                        },
                             {
                          title: 'Modal',
                          href: '/modal',
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
                          title: 'Slider',
                          href: '/slider',
                        },
                        {
                          title: 'Steps',
                          href: '/steps',
                        },
                        {
                          title: 'Switch',
                          href: '/switch',
                        },
                        {
                          title: 'Tabs',
                          href: '/tabs',
                        },
                        {
                          title: 'Text area',
                          href: '/text-area',
                        },
                        {
                          title: 'Toast',
                          href: '/toast',
                        },
                  ],
                },
                {
                  title: 'Guides',
                  open: true,
                  items: [
                    {
                      title: 'Getting Setup',
                      href: '/guide-setup',
                    },
                    {
                      title: 'Getting Started',
                      href: '/getting-started',
                    },
                  ],
                },
              ],
            }),
          }}
        ></script>

        <div slot="banner" className="mx-auto p-32" style={{ maxWidth: 1024 }}>
          <div className="md:grid md:grid-cols-3">
            <div className="md:col-span-2">
              <h1 style={{ fontSize: '48px', lineHeight: '56px' }} className="text-white mb-16">
                Welcome to Fabric, FINN’s Design System
              </h1>
              <p style={{ fontSize: '22px', lineHeight: '28px' }} className="text-white">
                Fabric provides components and tools to our product teams, to help them work more efficiently in
                creating simple, intuitive, and beautiful experiences for FINN users.
              </p>
            </div>
            <div className="relative -mb-12 hidden lg:block">
              <svg
                className="absolute bottom-0 -mb-80 right-0"
                width="304"
                height="190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#a)">
                  <path d="m301.4 193.6-16.8-18V83.8h16.8v109.9Z" fill="#38BDF8" />
                  <path opacity=".5" d="m301.4 193.6-16.8-18V83.8h16.8v109.9Z" fill="#38BDF8" />
                  <path d="m186.8 193.6 16.7-18V83.8h-16.7v109.9ZM284.6 83.7h-81v92h81v-92Z" fill="#38BDF8" />
                  <path d="M284.6 83.7h-81v92h81v-92Z" fill="#38BDF8" />
                  <path
                    d="M284.6 175.7h-81l-16.8 17.9h114.6l-16.8-18ZM190.2 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM198 83.5c.3 0 .6-.3.6-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM205.6 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM213.3 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM221 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM228.7 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM236.4 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM244 83.5c.5 0 .8-.3.8-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .3.4.6.8.6ZM251.8 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM259.5 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM267.2 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM274.9 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM282.6 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .3.4.6.8.6ZM290.3 83.5c.3 0 .7-.3.7-.6 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .3.4.6.8.6ZM298 83.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM190.2 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM198 91c.3 0 .6-.4.6-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM205.6 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM213.3 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM221 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM228.7 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM236.4 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM244 91c.5 0 .8-.4.8-.8 0-.3-.3-.6-.7-.6-.4 0-.8.3-.8.6 0 .4.4.7.8.7ZM251.8 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM259.5 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM267.2 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM274.9 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM282.6 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.8.3-.8.6 0 .4.4.7.8.7ZM290.3 91c.3 0 .7-.4.7-.8 0-.3-.4-.6-.8-.6-.3 0-.7.3-.7.6 0 .4.4.7.8.7ZM298 91c.4 0 .7-.4.7-.8 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM190.2 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM198 98.3c.3 0 .6-.3.6-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM205.6 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM213.3 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM221 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM228.7 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM236.4 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM244 98.3c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM251.8 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM259.5 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM267.2 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM274.9 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM282.6 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM290.3 98.3c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM298 98.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM190.2 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM198 105.7c.3 0 .6-.3.6-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM205.6 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM213.3 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM221 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM228.7 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM236.4 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM244 105.7c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM251.8 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM259.5 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM267.2 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM274.9 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM282.6 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM290.3 105.7c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM298 105.7c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM190.2 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM198 113c.3 0 .6-.2.6-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM205.6 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM213.3 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM221 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM228.7 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM236.4 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM244 113c.5 0 .8-.2.8-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM251.8 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM259.5 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM267.2 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM274.9 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM282.6 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM290.3 113c.3 0 .7-.2.7-.6 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM298 113c.4 0 .7-.2.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM190.2 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM198 120.5c.3 0 .6-.3.6-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM205.6 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM213.3 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM221 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM228.7 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM236.4 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM244 120.5c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM251.8 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM259.5 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM267.2 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM274.9 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM282.6 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM290.3 120.5c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM298 120.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM190.2 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM198 127.9c.3 0 .6-.3.6-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM205.6 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM213.3 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM221 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM228.7 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM236.4 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM244 127.9c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM251.8 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM259.5 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM267.2 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM274.9 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM282.6 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM290.3 127.9c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM298 127.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM190.2 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM198 135.2c.3 0 .6-.3.6-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM205.6 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM213.3 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM221 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM228.7 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM236.4 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM244 135.2c.5 0 .8-.3.8-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .3.4.6.8.6ZM251.8 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM259.5 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM267.2 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM274.9 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM282.6 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .3.4.6.8.6ZM290.3 135.2c.3 0 .7-.3.7-.6 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .3.4.6.8.6ZM298 135.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM190.2 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM198 142.6c.3 0 .6-.3.6-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM205.6 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM213.3 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM221 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM228.7 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM236.4 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM244 142.6c.5 0 .8-.3.8-.7 0-.3-.3-.6-.7-.6-.4 0-.8.3-.8.6 0 .4.4.7.8.7ZM251.8 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM259.5 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM267.2 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM274.9 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM282.6 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.8.3-.8.6 0 .4.4.7.8.7ZM290.3 142.6c.3 0 .7-.3.7-.7 0-.3-.4-.6-.8-.6-.3 0-.7.3-.7.6 0 .4.4.7.8.7ZM298 142.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM190.2 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM198 150c.3 0 .6-.3.6-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM205.6 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM213.3 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM221 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM228.7 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM236.4 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM244 150c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM251.8 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM259.5 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM267.2 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM274.9 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM282.6 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM290.3 150c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM298 150c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM190.2 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM198 157.4c.3 0 .6-.3.6-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM205.6 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM213.3 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM221 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM228.7 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM236.4 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM244 157.4c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM251.8 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM259.5 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM267.2 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM274.9 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM282.6 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM290.3 157.4c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM298 157.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM190.2 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM198 164.8c.3 0 .6-.3.6-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM205.6 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM213.3 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM221 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM228.7 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM236.4 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM244 164.8c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM251.8 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM259.5 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM267.2 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM274.9 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM282.6 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM290.3 164.8c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM298 164.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM190.2 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM198 172.2c.3 0 .6-.3.6-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM205.6 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM213.3 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM221 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM228.7 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM236.4 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM244 172.2c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM251.8 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM259.5 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM267.2 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM274.9 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM282.6 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM290.3 172.2c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM298 172.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM190.2 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM198 179.6c.3 0 .6-.3.6-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7Z"
                    fill="#38BDF8"
                  />
                  <path
                    d="M205.6 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM213.3 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM221 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM228.7 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM236.4 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM244 179.6c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM251.8 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM259.5 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM267.2 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM274.9 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM282.6 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM290.3 179.6c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM298 179.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM194 87.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM201.7 87.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM209.4 87.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM217 87.2c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM224.8 87.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM232.4 87.2c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM240.2 87.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM247.9 87.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM255.6 87.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM263.3 87.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM271 87.2c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.7.7ZM278.6 87.2c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7s-.7.3-.7.7c0 .4.3.7.7.7ZM286.3 87.2c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM294 87.2c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM194 94.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM201.7 94.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM209.4 94.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM217 94.5c.5 0 .8-.3.8-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM224.8 94.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .3.4.6.8.6ZM232.4 94.5c.4 0 .8-.3.8-.6 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .3.4.6.8.6ZM240.2 94.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM247.9 94.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM255.6 94.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM263.3 94.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .3.4.6.8.6ZM271 94.5c.3 0 .7-.3.7-.6 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .3.4.6.7.6ZM278.6 94.5c.4 0 .8-.3.8-.6 0-.4-.4-.7-.8-.7s-.7.3-.7.7c0 .3.3.6.7.6ZM286.3 94.5c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM294 94.5c.5 0 .8-.3.8-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM194 102c.4 0 .7-.4.7-.8 0-.3-.3-.7-.7-.7-.4 0-.7.4-.7.7 0 .4.3.7.7.7ZM201.7 102c.4 0 .7-.4.7-.8 0-.3-.3-.7-.7-.7-.4 0-.7.4-.7.7 0 .4.3.7.7.7ZM209.4 102c.4 0 .7-.4.7-.8 0-.3-.3-.7-.7-.7-.4 0-.7.4-.7.7 0 .4.3.7.7.7ZM217 102c.5 0 .8-.4.8-.8 0-.3-.3-.7-.7-.7-.4 0-.7.4-.7.7 0 .4.3.7.7.7ZM224.8 102c.4 0 .7-.4.7-.8 0-.3-.3-.7-.7-.7-.4 0-.8.4-.8.7 0 .4.4.7.8.7ZM232.4 102c.4 0 .8-.4.8-.8 0-.3-.4-.7-.8-.7-.3 0-.7.4-.7.7 0 .4.4.7.8.7ZM240.2 102c.4 0 .7-.4.7-.8 0-.3-.3-.7-.7-.7-.4 0-.7.4-.7.7 0 .4.3.7.7.7ZM247.9 102c.4 0 .7-.4.7-.8 0-.3-.3-.7-.7-.7-.4 0-.7.4-.7.7 0 .4.3.7.7.7ZM255.6 102c.4 0 .7-.4.7-.8 0-.3-.3-.7-.7-.7-.4 0-.7.4-.7.7 0 .4.3.7.7.7ZM263.3 102c.4 0 .7-.4.7-.8 0-.3-.3-.7-.7-.7-.4 0-.8.4-.8.7 0 .4.4.7.8.7ZM271 102c.3 0 .7-.4.7-.8 0-.3-.4-.7-.8-.7-.3 0-.7.4-.7.7 0 .4.4.7.7.7ZM278.6 102c.4 0 .8-.4.8-.8 0-.3-.4-.7-.8-.7s-.7.4-.7.7c0 .4.3.7.7.7ZM286.3 102c.4 0 .7-.4.7-.8 0-.3-.3-.7-.7-.7-.4 0-.7.4-.7.7 0 .4.3.7.7.7ZM294 102c.5 0 .8-.4.8-.8 0-.3-.3-.7-.7-.7-.4 0-.7.4-.7.7 0 .4.3.7.7.7ZM194 109.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM201.7 109.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM209.4 109.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM217 109.3c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM224.8 109.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM232.4 109.3c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM240.2 109.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM247.9 109.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM255.6 109.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM263.3 109.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM271 109.3c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.7.7ZM278.6 109.3c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7s-.7.3-.7.7c0 .4.3.7.7.7ZM286.3 109.3c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM294 109.3c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM194 116.7c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM201.7 116.7c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM209.4 116.7c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM217 116.7c.5 0 .8-.3.8-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM224.8 116.7c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.8.3-.8.6 0 .4.4.7.8.7ZM232.4 116.7c.4 0 .8-.3.8-.7 0-.3-.4-.6-.8-.6-.3 0-.7.3-.7.6 0 .4.4.7.8.7ZM240.2 116.7c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM247.9 116.7c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM255.6 116.7c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM263.3 116.7c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.8.3-.8.6 0 .4.4.7.8.7ZM271 116.7c.3 0 .7-.3.7-.7 0-.3-.4-.6-.8-.6-.3 0-.7.3-.7.6 0 .4.4.7.7.7ZM278.6 116.7c.4 0 .8-.3.8-.7 0-.3-.4-.6-.8-.6s-.7.3-.7.6c0 .4.3.7.7.7ZM286.3 116.7c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM294 116.7c.5 0 .8-.3.8-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM194 124.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM201.7 124.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM209.4 124.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM217 124.1c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM224.8 124.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM232.4 124.1c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM240.2 124.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM247.9 124.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM255.6 124.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM263.3 124.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM271 124.1c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.7.7ZM278.6 124.1c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7s-.7.3-.7.7c0 .4.3.7.7.7ZM286.3 124.1c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM294 124.1c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM194 131.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM201.7 131.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM209.4 131.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM217 131.5c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM224.8 131.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM232.4 131.5c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM240.2 131.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM247.9 131.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM255.6 131.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM263.3 131.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM271 131.5c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.7.7ZM278.6 131.5c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7s-.7.3-.7.7c0 .4.3.7.7.7ZM286.3 131.5c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM294 131.5c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM194 138.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM201.7 138.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM209.4 138.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM217 138.9c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM224.8 138.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM232.4 138.9c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM240.2 138.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM247.9 138.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM255.6 138.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM263.3 138.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM271 138.9c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.7.7ZM278.6 138.9c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7s-.7.3-.7.7c0 .4.3.7.7.7ZM286.3 138.9c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM294 138.9c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM194 146.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM201.7 146.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM209.4 146.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM217 146.2c.5 0 .8-.3.8-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM224.8 146.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .3.4.6.8.6ZM232.4 146.2c.4 0 .8-.3.8-.6 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .3.4.6.8.6ZM240.2 146.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM247.9 146.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM255.6 146.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM263.3 146.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .3.4.6.8.6ZM271 146.2c.3 0 .7-.3.7-.6 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .3.4.6.7.6ZM278.6 146.2c.4 0 .8-.3.8-.6 0-.4-.4-.7-.8-.7s-.7.3-.7.7c0 .3.3.6.7.6ZM286.3 146.2c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM294 146.2c.5 0 .8-.3.8-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM194 153.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM201.7 153.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM209.4 153.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM217 153.6c.5 0 .8-.3.8-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM224.8 153.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.8.3-.8.6 0 .4.4.7.8.7ZM232.4 153.6c.4 0 .8-.3.8-.7 0-.3-.4-.6-.8-.6-.3 0-.7.3-.7.6 0 .4.4.7.8.7ZM240.2 153.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM247.9 153.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM255.6 153.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM263.3 153.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.8.3-.8.6 0 .4.4.7.8.7ZM271 153.6c.3 0 .7-.3.7-.7 0-.3-.4-.6-.8-.6-.3 0-.7.3-.7.6 0 .4.4.7.7.7ZM278.6 153.6c.4 0 .8-.3.8-.7 0-.3-.4-.6-.8-.6s-.7.3-.7.6c0 .4.3.7.7.7ZM286.3 153.6c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM294 153.6c.5 0 .8-.3.8-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM194 161c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM201.7 161c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM209.4 161c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM217 161c.5 0 .8-.3.8-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM224.8 161c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .3.4.6.8.6ZM232.4 161c.4 0 .8-.3.8-.6 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .3.4.6.8.6ZM240.2 161c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM247.9 161c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM255.6 161c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM263.3 161c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .3.4.6.8.6ZM271 161c.3 0 .7-.3.7-.6 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .3.4.6.7.6ZM278.6 161c.4 0 .8-.3.8-.6 0-.4-.4-.7-.8-.7s-.7.3-.7.7c0 .3.3.6.7.6ZM286.3 161c.4 0 .7-.3.7-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM294 161c.5 0 .8-.3.8-.6 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .3.3.6.7.6ZM194 168.4c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM201.7 168.4c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM209.4 168.4c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM217 168.4c.5 0 .8-.3.8-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM224.8 168.4c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.8.3-.8.6 0 .4.4.7.8.7ZM232.4 168.4c.4 0 .8-.3.8-.7 0-.3-.4-.6-.8-.6-.3 0-.7.3-.7.6 0 .4.4.7.8.7ZM240.2 168.4c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM247.9 168.4c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM255.6 168.4c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM263.3 168.4c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.8.3-.8.6 0 .4.4.7.8.7ZM271 168.4c.3 0 .7-.3.7-.7 0-.3-.4-.6-.8-.6-.3 0-.7.3-.7.6 0 .4.4.7.7.7ZM278.6 168.4c.4 0 .8-.3.8-.7 0-.3-.4-.6-.8-.6s-.7.3-.7.6c0 .4.3.7.7.7ZM286.3 168.4c.4 0 .7-.3.7-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM294 168.4c.5 0 .8-.3.8-.7 0-.3-.3-.6-.7-.6-.4 0-.7.3-.7.6 0 .4.3.7.7.7ZM194 175.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM201.7 175.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM209.4 175.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM217 175.8c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM224.8 175.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM232.4 175.8c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.8.7ZM240.2 175.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM247.9 175.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM255.6 175.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM263.3 175.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.8.3-.8.7 0 .4.4.7.8.7ZM271 175.8c.3 0 .7-.3.7-.7 0-.4-.4-.7-.8-.7-.3 0-.7.3-.7.7 0 .4.4.7.7.7ZM278.6 175.8c.4 0 .8-.3.8-.7 0-.4-.4-.7-.8-.7s-.7.3-.7.7c0 .4.3.7.7.7ZM286.3 175.8c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7ZM294 175.8c.5 0 .8-.3.8-.7 0-.4-.3-.7-.7-.7-.4 0-.7.3-.7.7 0 .4.3.7.7.7Z"
                    fill="#38BDF8"
                  />
                  <path fill="#38BDF8" d="M203.1 80.8H285v117.9h-81.9z" />
                  <path d="M296.2 88.7v100H192v-100h104.2Zm5.2-5H186.8v109.9h114.5V83.7Z" fill="#38BDF8" />
                  <path d="M304 198.6H184.1V78.5H304v120Zm-112-7.9H296V86.4H192v104.3Z" fill="#fff" />
                  <path
                    d="M248.4 30.2A47.8 47.8 0 0 1 296.1 78v.5H248V30.2h.5Zm0-7.9h-8.3v64h63.8V78a55.6 55.6 0 0 0-55.5-55.6ZM136 145.7l44.9 45h-45v-45Zm0-11.1H128v64H192v-7.9l-56-56.1Z"
                    fill="#fff"
                  />
                  <path
                    d="M184.1 142.4v48.3H136v-48.3h48.2Zm7.9-7.8H128v64H192v-64ZM79.4 120.1l-34 34.1-34-34 34-34.1 34 34Zm11 0L45.5 75 .2 120.1l45.2 45.2 45-45.2Z"
                    fill="#fff"
                  />
                  <path d="M171.4 59.2h-54V3.5h54v55.7Z" fill="#BAE6FD" />
                  <path d="M119.8 7.5h48.1v48.2h-48.1V7.5Zm-7.9-7.9v64h63.8v-64H112Z" fill="#fff" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h304v190H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <section slot="content">
          <main>
            <Component {...pageProps} />
          </main>
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
    </>
  );
}
