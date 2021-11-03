import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { getDocBySlug, getDocSlugs } from '../utils/api';
import { shortcodes } from '../utils/shortcodes';

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBlock {...props} />,
  ...shortcodes,
};

const CodeBlock = (props) => {
  return (
    <SyntaxHighlighter language={props.className?.replace(/language-/, '')}>
      {props.children}
    </SyntaxHighlighter>
  );
};

export async function getStaticPaths() {
  const docs = getDocSlugs();

  console.log(docs);

  return {
    paths: docs.map((doc) => ({
      params: { slug: doc },
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
  return (
    <div>
      <MDXRemote {...source} components={components} />
    </div>
  );
}
