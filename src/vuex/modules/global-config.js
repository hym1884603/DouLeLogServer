import Vue from 'vue'
import { read, save } from '../../storage'
import ElementUI from 'element-ui'
import { STORE_KEY_CONFIG_LOCALE, STORE_KEY_CONFIG_GAME } from '../../constants'
const state = {
  locale: 'zh-CN',
  game: 'Bunspop'
}

const mutations = {
  UPDATE (state, config) {
    state.locale = config.locale || state.locale
    state.game = config.game || state.game
  }
}

const actions = {
  updateLocale ({ commit }, lang) {
    require([`../../language/${lang}.js`], (langConfig) => {
      Vue.locale(lang, langConfig.default)
      Vue.config.lang = lang
      save(STORE_KEY_CONFIG_LOCALE, lang)
    })
    require([`element-ui/lib/locale/lang/${lang}.js`], (langConfig) => {
      console.log(langConfig)
      Vue.use(ElementUI, { langConfig })
    })
  },
  initGlobalConfig ({ commit, dispatch, state }) {
    commit('UPDATE', {
      locale: read(STORE_KEY_CONFIG_LOCALE),
      game: +read(STORE_KEY_CONFIG_GAME)
    })
    if (state.locale !== 'zh_CN') {
      dispatch('updateLocale', state.locale)
    }
  },
  updateGlobalConfig ({ commit, state, dispatch }, config) {
    if (config.locale !== state.locale) {
      dispatch('updateLocale', config.locale)
    }
    commit('UPDATE', config)
    save(STORE_KEY_CONFIG_LOCALE, state.locale)
    save(STORE_KEY_CONFIG_GAME, state.game)
  }
}

const getters = {
  globalConfig (state) {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
