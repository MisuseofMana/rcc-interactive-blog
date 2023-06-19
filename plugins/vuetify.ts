// plugins/vuetify.ts
import 'vuetify/styles'
import { ThemeDefinition, createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

const crickTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#000',
      'on-surface': '#89f200',
      surface: '#000000',
      primary: '#89f200',
      'primary-darken-1': '#217d00',
      'primary-darken-2': '#1f7300',
      'primary-darken-3': '#154d00',
      'primary-lighten-2': '#caff85',
      'hidden-primary-darken-1': '#299602',
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
          },
        },
        icons: {
          defaultSet: 'mdi',
        }
    })

    nuxtApp.vueApp.use(vuetify)
})