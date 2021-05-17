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
    port: 8000 // default: 3000
  },
  css: [
    '~/assets/css/transitions.css',
    '~/assets/css/globalReset.css', 
    '~/assets/css/scrollBar.css' 
  ],
  buildModules: [
    '@nuxtjs/vuetify'
  ],
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