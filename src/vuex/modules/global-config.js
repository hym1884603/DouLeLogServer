import Vue from 'vue'
import { read, save } from '../../storage'
import { STORE_KEY_CONFIG_LOCALE, STORE_KEY_CONFIG_GAME } from '../../constants'
const state = {
  locale: 'zh_CN',
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
      Vue.prototype.titelLang = langConfig.default
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
