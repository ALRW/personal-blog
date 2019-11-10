import path from 'path'
import glob from 'glob'
import markdownIt from 'markdown-it'
import hljs from 'highlight.js'

const md = markdownIt({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) return hljs.highlight(lang, str).value
    return ''
  }
})

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: "Andrew Werner's blog",
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/apple-touch-icon.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@assets/css/main.css',
    'highlight.js/styles/darcula.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@plugins/disqus', '@plugins/fontawesome'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    'nuxt-responsive-loader'
  ],
  /*
   ** Webfontloader Config
   */
  webfontloader: {
    google: {
      families: ['Cookie']
    }
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    generate: {
      routes() {
        const files = glob.sync(`**/*.md`, { cwd: `markdown/articles` })
        return files.map(
          (post) => `/articles/${post.substr(0, post.lastIndexOf(`.`))}`
        )
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, _) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, `markdown`),
        loader: `frontmatter-markdown-loader`,
        options: {
          markdown: (body) => md.render(body)
        }
      })
    }
  }
}
