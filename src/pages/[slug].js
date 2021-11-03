import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { getDocBySlug, getDocSlugs } from '../utils/api';
import { components } from '../utils/components';

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
  return <MDXRemote {...source} components={components} />;
}
