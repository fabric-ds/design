import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect } from 'react';

import { getDocBySlug, getDocSlugs } from '../utils/api';
import { components } from '../utils/markdown';

export async function getStaticPaths() {
  const slugs = getDocSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const doc = getDocBySlug(context.params.slug);
  const mdxSource = await serialize(doc);
  return { props: { source: mdxSource } };
}

export default function Doc({ source }) {
  useEffect(() => {
    const blocks = document.querySelectorAll('pre');

    for (const block of [...blocks].filter((block) => !block.dataset.updated)) {
      block.style.height = `${block.clientHeight - 22}px`;
      block.style.overflowY = 'hidden';
      block.dataset.updated = true;
    }
  });

  return <MDXRemote {...source} components={components} />;
}
