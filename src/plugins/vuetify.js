import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import fr from 'vuetify/es5/locale/fr'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#f5bc02',
        secondary: '#e62107',
        accent: '#d17008',
        error: '#f5e769',
        info: '#90c40c',
        success: '#98ed0e',
        warning: '#0aa3f0'
      }
    }
  },
  lang: {
    locales: { fr },
    current: 'fr'
  },
  icons: {
    iconfont: 'fa'
  }
})
