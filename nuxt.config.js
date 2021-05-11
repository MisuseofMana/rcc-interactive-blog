import theme from './plugins/theme'

export default {
  server: {
    port: 8000 // default: 3000
  },
  css: [
    '~/assets/css/transitions.css',
    '~/assets/css/globalReset.css',  
  ],
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Verdana',
      },
      icons: 'mdi', 
    },
    theme,
  },
}