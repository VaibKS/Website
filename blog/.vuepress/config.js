module.exports = {
  title: 'Vaibhav Shinde',
  description: 'A blog where I write what I work on and what fascinates me.',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}],
  ],
  postcss: {
    plugins: [
      require('tailwindcss'), require('autoprefixer')
    ],
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true })
      md.use(require('markdown-it-image-defer'))
    }
  }
}