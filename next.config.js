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
    pageExtensions: ['js', 'jsx', 'mdx'],
  }),
);
