import theme from './plugins/theme'

export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=VT323&display=swap'
      }
    ]
  },
  server: {
    port: 8000, // default: 3000     
    host: 'localhost' //network: '0.0.0.0' 
  },
  css: [
    '~/assets/css/transitions.css',
    '~/assets/css/globalReset.css', 
    '~/assets/css/scrollBar.css',
    '~/assets/css/global.css',
  ],
  ssr: false,
  generate: {
    dir: 'docs',
    fallback: '404.html'
  },
  router: {
    base: '/'
 },
  target: 'static',
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'VT323',
      },
      icons: 'mdi', 
    },
    theme,
  },
}