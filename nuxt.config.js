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
        content:
        'https://versus-bucket.s3.ap-northeast-1.amazonaws.com/ogp/ogp.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDtH93Qmeeg%2FXVwDgUkwHxmTNTcDzq%2B%2BkOkjRCJqwE8QwIhAJrg2G4hZM9deWwLnN7%2FVPx63Un18bQ5jpaG%2BdtUScspKo8CCFkQABoMNDc3MjMzMDI4NTIyIgyNYN30OE%2Fxxuz9k54q7AG3uNbgdBpaIbuNGOVBG1No06MUsKgkN67UfQnB249EYEXbeeCHZI%2B4ympWpWEIzzv9azHr9Oe9%2B22invNZzgeOT6B2PCQveoPbGhpWA%2FI6mvcMeV4YmZCCiwekhsPc26hSC6cFiSGbpC6NDYb7sQBYXQ0wNocHMMocypzObKzNKC6YUebXxmbCgCdThJHR4mJas%2BVAs6dxlX0Qj9agg9y5sFYJpPDhcMntwPe4DSeFLfMs3RDP62UjHomuZduQsOTAUsnna0F5JboFSennic4w3TKXDA84r%2B%2BdBbeXcc03qPZZgg9CMbZECjwCZDDC1ar4BTr1An9Rb9%2FdsrACmVeKcPkQrMI%2BGLjIEv2F13ayX9JqRxADBub6luCY1j0mYynPhbbnSH3NPcGd50Ye26rj4pjMMY4wb2v5n0Gcw3B3g4VAy0NYVnfgbrPmAcajcvTsKm3wjxqqchkgDOtmAW%2FQ2pp2GSLYSMnqQLOvoUVhPnlCGzg9XOQobVRZ%2FqpRxNAvLPoYUmVQfp1WlTEXYlHD%2B1UFsB5wR63zpMcaAi3oDcgT8vBXGvq4eTvhNHuxSDk2nd0vUDyHM0NXf0vrRZggICJrBBSdwwnHLg8mpyj%2B9zxjq66Ls5NGgTBpk%2FSaZ4HTlU5Aqw6Vlo4L%2Fdict5bAPpmPRzriac7QqCZxty5sSTZ4Q5dGD908lY%2Fp0hB2uFyAMlFlMSiLGZ3CTRtLm3RFoeEyAMCeURoS8vdiEZoKdC5LFKBxRZoRhzVrbXL5JCB7fxHxAUMKwSbwWaq677TEwdeOBaxT8ecfQa8doxrr6P0XaJU35AQ16OY%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200712T073709Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW6HKODWVO26OD57B%2F20200712%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Signature=7910ab111f39d7401f60ec9ecd34ccaae836e5e9868a470c5588651c66d55e2c'
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
