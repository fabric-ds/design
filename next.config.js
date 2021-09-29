const slug = require('rehype-slug');
const withTM = require('next-transpile-modules')(['@fabric-ds/react']);

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug],
  },
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withTM(
  withMDX({
    // because we're serving this using GH pages
    assetPrefix: isProd ? '/design' : undefined,
    basePath: isProd ? '/design' : undefined,
    pageExtensions: ['js', 'jsx', 'mdx'],
  }),
);
