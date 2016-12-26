import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import store from '../store'
Vue.use(VueI18n)

import zh from './zh-CN'
Vue.config.lang = 'zh-CN'
Vue.locale('zh-CN', zh)
// store.dispatch('setupLocale')
export default zh
