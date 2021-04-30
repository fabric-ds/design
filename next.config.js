const toc = require('remark-toc');
const slug = require('remark-slug');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [slug, toc],
  }
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withMDX({
  // because we're serving this using GH pages
  assetPrefix: isProd ? '/finn/fabric-design/' : undefined,
  basePath: isProd ? '/finn/fabric-design' : undefined,
  pageExtensions: ['js', 'jsx', 'mdx'],
});
