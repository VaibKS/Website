const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    typography: {
      default: {
        css: {
          color: '#333',
          a: {
            color: '#3182ce',
            '&:hover': {
              color: '#2c5282',
            },
          },
        },
      },
    },
  },
  purge: [
    './blog/*.md',
    './blog/**/*.md',
    './blog/.vuepress/theme/layouts/*.vue',
    './blog/.vuepress/components/*.vue',
    './blog/.vuepress/theme/styles/*.styl',
  ],
  theme: {
    extend: {
      colors: {
        salmon: '#F55347'
      },
      fontFamily: {
        'inter': 'Inter',
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'mono': ['Fira Code', ...defaultTheme.fontFamily.mono],
        'merienda': 'Merienda One',
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
  ],
}
