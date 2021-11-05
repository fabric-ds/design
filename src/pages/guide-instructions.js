import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import path from 'path';
import React, { useEffect, useState } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import slug from 'rehype-slug';
import { getGuideContentBySlug, guidePath } from '../utils/api';
import { components } from '../utils/markdown';

export async function getStaticProps() {
  const guideSlugs = await fs.readdirSync(path.resolve(guidePath));
  const allGuides = {};

  for (const guideSlug of guideSlugs) {
    allGuides[guideSlug] = await serialize(getGuideContentBySlug(guideSlug.replace('.mdx', '')), {
      mdxOptions: {
        remarkPlugins: [require('mdx-prism'), require('remark-code-titles')],
        rehypePlugins: [slug, rehypeAutolinkHeadings],
      },
    });
  }

  return { props: { allGuides } };
}

export default function Instructions({ allGuides }) {
  const router = useRouter();
  const [guides, setGuides] = useState({});

  useEffect(() => {
    if (!router.query) return;
    const { csframework, platform, abstraction } = router.query;

    const isCSFramework = csframework === 'react' || csframework === 'vue' || csframework === 'elements';
    const nodeClient = platform === 'node';
    const htmlTemplate = abstraction === 'html-template';
    const expressLayout = abstraction === 'express-layout';
    const expressPodlet = abstraction === 'express-podlet';

    const guides = {
      'eik.mdx': allGuides['eik.mdx'],
      'eik-javascript.mdx': isCSFramework ? allGuides['eik-javascript.mdx'] : undefined,
      'eik-javascript-react.mdx': csframework === 'react' ? allGuides['eik-javascript-react.mdx'] : undefined,
      'eik-javascript-vue.mdx': csframework === 'vue' ? allGuides['eik-javascript-vue.mdx'] : undefined,
      'eik-javascript-elements.mdx': csframework === 'elements' ? allGuides['eik-javascript-elements.mdx'] : undefined,
      'react.mdx': csframework === 'react' ? allGuides['react.mdx'] : undefined,
      'vue.mdx': csframework === 'vue' ? allGuides['vue.mdx'] : undefined,
      'custom-elements.mdx': csframework === 'elements' ? allGuides['custom-elements.mdx'] : undefined,
      'eik-node-client.mdx': nodeClient ? allGuides['eik-node-client.mdx'] : undefined,
      'eik-node-client-javascript.mdx':
        nodeClient && isCSFramework ? allGuides['eik-node-client-javascript.mdx'] : undefined,
      'express-layout.mdx': expressLayout ? allGuides['express-layout.mdx'] : undefined,
      'express-podlet.mdx': expressPodlet ? allGuides['express-podlet.mdx'] : undefined,
      'html-template.mdx': htmlTemplate ? allGuides['html-template.mdx'] : undefined,
    };

    const enabledGuides = Object.keys(guides).filter((guide) => guides[guide]);

    for (const key in guides) {
      if (!enabledGuides.includes(key)) {
        delete guides[key];
      }
    }

    setGuides(guides);
  }, [router]);

  useEffect(() => {
    const blocks = document.querySelectorAll('pre');

    for (const block of [...blocks].filter((block) => !block.dataset.updated)) {
      block.style.height = `${block.clientHeight - 22}px`;
      block.style.overflowY = 'hidden';
      block.dataset.updated = true;
    }
  });

  return (
    <>
      <Head>
        <title>Guide - Instructions | FINN Fabric</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              main > h3 {
                margin-top: 45px;
              }
              main pre code {
                background-color: transparent;
                padding: 0;
              }
              main pre code span {
                white-space: pre-wrap;
              }
              main pre {
                border-radius: 5px;
                margin: 20px 0 20px 0 !important;
              }
              .remark-code-title {
                margin-top: 20px;
                margin-bottom: -23px;
                padding: 9px 10px;
                background: #292d36;
                border: 1px solid #2e3440;
                border-top-right-radius: 5px;
                color: white;
                border-top-left-radius: 5px;
                font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                width: 100%;
                font-size: 12px;
              }
              .toc {
                border-radius: 5px;
                background: #f7f6f6;
                border: 1px solid #006bfb0a;
                padding: 20px;
                padding-bottom: 10px;
                margin-bottom: 20px;
              }
              .toc-item {
                font-family: Finntype, Arial, Helvetica, sans-serif;
              }
            `,
          }}
        ></style>
      </Head>
      <h1>Setup Guide</h1>

      {Object.keys(guides).map((guide) => (
        <MDXRemote key={guide} {...guides[guide]} components={components} />
      ))}
    </>
  );
}
