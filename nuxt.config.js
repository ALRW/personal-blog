import path from 'path'
import glob from 'glob'
import markdownIt from 'markdown-it'
import hljs from 'highlight.js'

const md = markdownIt({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch (__) {}
    }
    return ''
  }
})

const files = glob.sync(`**/*.md`, { cwd: `articles` })

function getSlugs(post, _) {
  const slug = post.substr(0, post.lastIndexOf(`.`))
  return `/blog/${slug}`
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Andrew Werner | Software Engineer and Leader',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css', 'highlight.js/styles/darcula.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
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
    '@nuxtjs/pwa'
  ],
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
        return files.map(getSlugs)
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, _) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, `articles`),
        loader: `frontmatter-markdown-loader`,
        options: {
          markdown: (body) => md.render(body)
        }
      })
    }
  }
}
