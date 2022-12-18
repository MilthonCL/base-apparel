const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('cssnano')({ preset: 'default' }),
    purgecss({
      content: ['./**/*.html'],
    }),
  ],
};
