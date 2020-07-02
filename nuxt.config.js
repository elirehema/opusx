import colors from 'vuetify/es5/util/colors';
require('dotenv').config();
export default {
  mode: 'spa',
  router: {
    base: process.env.NODE_ENV === "production" ? "/rss/" : "/",
    routerNameSplitter: '/',
  },
  env: {
    baseUrl: process.env.BASE_URL || "https://opusx.herokuapp.com/api/v1/",
    localUrl: process.env.LOCAL_URL
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
 loading: {
  color: '#333333',
  throttle: 0
},
  /*
  ** Global CSS
  */
  css: [
    'bulma'
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
    "~/plugins/i18n.js",
    '@plugins/vuetify.js',
    '~/plugins/axios',
    '~/plugins/route',
    '~/plugins/pwa.client.js',
    { src: '~/plugins/localStorage.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
   '@nuxtjs/bulma',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  /*
  ** Build configuration
  */
 build: {
  /*
   ** You can extend webpack config here
   */
  publicPath: process.env.NODE_ENV === 'production' ? '/assets/' : '',
      extend: function (config, {isDev, isClient}) {

            config.node = {

                fs: "empty"
            };
        
    },
  postcss: {
    preset: {
      features: {
        customProperties: false
      }
    }
  }
},
axios: {
  //proxyHeaders: false
},
server: {
  port: process.env.NODE_ENV === 'production' ? 8000 : 4000, // default: 3000
  host: '0.0.0.0', // default: localhost
},
};
