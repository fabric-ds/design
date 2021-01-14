// We don't actually use tailwind in our postcss setup, because we use the global fabric styles
// the only reason this file is here is because we want the tailwind intellisense plugin to work with our tailwind config
module.exports = {
  presets: [require('@finn-no/fabric-tailwind-config')],
  purge: false,
};
