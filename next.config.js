const slug = require("rehype-slug");
const toc = require("@jsdevtools/rehype-toc");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug, toc],
  },
});

const isProd = process.env.NODE_ENV === "production";

module.exports = withMDX({
  // because we're serving this using GH pages
  assetPrefix: isProd ? "/finn/fabric-design/" : undefined,
  basePath: isProd ? "/finn/fabric-design" : undefined,
  pageExtensions: ["js", "jsx", "mdx"],
});
