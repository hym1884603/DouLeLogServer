import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import config from './modules/global-config'


const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    config,
  }
})

export default store
