import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.css'},

      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css'},

    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#008080' },

  router: {
    
  },

  /*
  ** Global CSS
  */
  css: [
    '@/static/css/style.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'api/login', method: 'post', propertyName: 'token'
          },
          user: {
            url: 'api/profile', method: 'get', propertyName: false
          },
          logout: {
            url: 'api/logout', method: 'get'
          },
        }
      }
    },

    redirect: {
      login: '/login'
    },

    plugins: [
      '~/plugins/auth'
    ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    
  ],

  axios: {
    baseURL: '',
    proxyHeaders: false,
    credentials: false,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
