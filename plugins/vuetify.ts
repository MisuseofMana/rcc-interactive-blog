// plugins/vuetify.ts

import { createVuetify } from 'vuetify'

const crickTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#212121',
      surface: '#000000',
      primary: '#89f200',
      'primary-darken-1': '#48cf00',
      secondary: '#c900cc',
      'secondary-darken-1': '#9200b3',
      error: '#eb0942',
      info: '#ebe309',
      success: '#09b3eb',
      warning: '#fa05e6',
    }
  }

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        theme: {
          defaultTheme: 'crickTheme',
          themes: {
            crickTheme
          }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})