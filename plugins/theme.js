const theme = {
    options: { customProperties: true },
    light: true, // Change to dark: true for dark theme
    themes: {
      light: {
        // Vuetify Defaults
        primary: '#5c9e29',
        secondary: '#838383',
        accent: '#BF281A',
        error: {
          base: '#E93C3C',
          lighten1: '#FB4E4E',
          lighten2: '#FF6262',
        },
        warning: {
          base: '#FBA500',
          lighten1: '#FFB72D',
          lighten2: '#FEC94D',
        },
        success: {
          base: '#4EB6A5',
          lighten1: '#5DC5B4',
          lighten2: '#58E0CA',
          darken1: '#3D9486',
          darken4: '#255950',
        },
        info: '#407596', // Links and such

        background: '#121212',
        backgroundAccent: '#222'
      },
    },
  }
  
  export default theme