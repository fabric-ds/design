import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import toc from '@jsdevtools/rehype-toc';

import 'rehype-autolink-headings';
import slug from 'rehype-slug';
import { getGuideContentBySlug } from '../utils/api';
import { components } from '../utils/markdown';
import { useEffect } from 'react';

export async function getServerSideProps(context) {
  const { csframework, platform, abstraction } = context.query;

  const isCSFramework = csframework === 'react' || csframework === 'vue' || csframework === 'elements';
  const nodeClient = platform === 'node';
  const htmlTemplate = abstraction === 'html-template';
  const expressLayout = abstraction === 'express-layout';
  const expressPodlet = abstraction === 'express-podlet';

  let content = getGuideContentBySlug('eik.mdx');

  if (isCSFramework) content += getGuideContentBySlug('eik-javascript.mdx');
  if (csframework === 'react') content += getGuideContentBySlug('eik-javascript-react.mdx');
  if (csframework === 'vue') content += getGuideContentBySlug('eik-javascript-vue.mdx');
  if (csframework === 'elements') content += getGuideContentBySlug('eik-javascript-elements.mdx');

  if (csframework === 'react') content += getGuideContentBySlug('react.mdx');
  if (csframework === 'vue') content += getGuideContentBySlug('vue.mdx');
  if (csframework === 'elements') content += getGuideContentBySlug('custom-elements.mdx');

  if (nodeClient) content += getGuideContentBySlug('eik-node-client.mdx');
  if (nodeClient && isCSFramework) content += getGuideContentBySlug('eik-node-client-javascript.mdx');

  if (expressLayout) content += getGuideContentBySlug('express-layout.mdx');
  if (expressPodlet) content += getGuideContentBySlug('express-podlet.mdx');
  if (htmlTemplate) content += getGuideContentBySlug('html-template.mdx');

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require('mdx-prism'), require('remark-code-titles')],
      rehypePlugins: [slug, rehypeAutolinkHeadings, toc],
    },
  });

  return { props: { source: mdxSource } };
}

export default function Instructions({ source }) {
  useEffect(() => {
    const blocks = document.querySelectorAll('pre');
    for (const block of blocks) {
      block.style.height = `${block.clientHeight - 22}px`;
    }
  }, []);

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
              main pre {
                border-radius: 5px;
                margin: 20px 0 20px 0 !important;
                white-space: nowrap !important;
              }
              main code {
                white-space: pre !important;
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
      <MDXRemote {...source} components={components} />
    </>
  );
}
