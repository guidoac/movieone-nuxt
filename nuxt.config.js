export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Movie One - By Guido',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/http' },
    { src: '~/plugins/seed' },
    { src: '~/plugins/utils' },
    { src: '~/plugins/filters' },
    { src: '~/plugins/mixins' },
    { src: '~/plugins/components', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome'
  ],

  // font awesome configuration
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.MOVIEDB_BASEURL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Environment Variables
  env: {
    moviedb_api_key: process.env.MOVIEDB_API_KEY,
    moviedb_token_read: process.env.MOVIEDB_TOKEN_READ,
    moviedb_baseurl: process.env.MOVIEDB_BASEURL,
    moviedb_poster_baseurl: process.env.MOVIEDB_POSTER_BASEURL,
    moviedb_backdrop_baseurl: process.env.MOVIEDB_BACKDROP_BASEURL,
  },

  // Middlewares
  router: {
    middleware: []
  }
}
