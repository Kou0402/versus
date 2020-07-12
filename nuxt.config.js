export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '比較コミュニケーションサイト『Versus（バーサス）』',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Versus（バーサス）は「比較」を楽しむ コミュニケーションサービスです。二つのテーマを持ち寄って意見をぶつけ合おう！'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '比較コミュニケーションサイト『Versus（バーサス）』'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://versus-web.net' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '比較コミュニケーションサイト『Versus（バーサス）』'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Versus（バーサス）は「比較」を楽しむ コミュニケーションサービスです。二つのテーマを持ち寄って意見をぶつけ合おう！'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://versus.s3-ap-northeast-1.amazonaws.com/ogp/ogp.png'
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
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/dayjs', '~/plugins/vuelidate'],
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['~assets/styles/style.scss']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
