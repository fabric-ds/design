// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.mdx'],
  darkMode: false,
  corePlugins: {
    // We use the reset styles from Troika
    preflight: false,
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
