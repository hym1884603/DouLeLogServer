import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import vueI18n from 'vue-i18n' //引进全局语言
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Main from './components/Main.vue'
import Total from './components/Total.vue'
import Table from './components/nav1/Table.vue'
import Conversion from './components/nav1/Conversion.vue'
import LevelControl from './components/nav1/LevelControl.vue'
import Page3 from './components/nav1/Page3.vue'
import Tournament from './components/nav2/tournament.vue'
import UserLevel from './components/nav2/UserLevel.vue'
import LevelRate from './components/nav2/LevelRate.vue'
import Page6 from './components/nav3/Page6.vue'
import echarts from './components/charts/echarts.vue'
import locales from './language/lang.js'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(vueI18n)
Vue.prototype.$http = axios

//设置全局语言
Vue.config.lang = 'cn'
var titelLang = locales[Vue.config.lang];
// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

const routes = [
  {
    path: '/login',
    component: Login,
    hidden: true//不显示在导航中
  },
  {
    path: '/',
    component: Home,
    name: '主页',
    children: [
      { path: '/home', component: Total, name:'统计'}
    ],
    hidden: true//不显示在导航中
  },
  //{ path: '/main', component: Main },
  {
    path: '/',
    component: Home,
    name: '游戏',
    iconCls: 'fa fa-gamepad',//图标样式class
    children: [
      // { path: '/main', component: Main },
      { path: '/home?game=Bunspop', component: Table, name: 'Bunspop' },
      { path: '/home?game=Monster', component: Page3, name: 'Monster' },
    ]
  },
  {
    path: '/',
    component: Home,
    name: '导航一',
    iconCls: 'fa fa-wrench',//图标样式class
    children: [
      // { path: '/main', component: Main },
      { path: '/table', component: Table, name: 'Table' },
      { path: '/conversion', component: Conversion, name: titelLang.conversion.title },
      { path: '/levelControl', component: LevelControl, name: titelLang.levelControl.title },
      { path: '/page3', component: Page3, name: '页面3' },
    ]
  },
  {
    path: '/',
    component: Home,
    name: '导航二',
    iconCls: 'fa fa-pencil-square-o',
    children: [
      {path:'/userLevel',component: UserLevel, name: titelLang.userLevel.title},
      {path:'/levelRate',component: LevelRate, name: titelLang.levelRate.title},
      {path:'/tournamentCount',component: Tournament, name: titelLang.tournament.title},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-address-card',
    leaf: true,//只有一个节点
    children: [
      { path: '/page6', component: Page6, name: '导航三' }
    ]
  },
  {
    path: '/',
    component: Home,
    name: 'Charts',
    iconCls: 'fa fa-bar-chart',
    children: [
      { path: '/echarts', component: echarts, name: 'echarts' }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
})

router.afterEach(transition => {
  NProgress.done();
});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
  //render: h => h(Login)
}).$mount('#app')

//不要每次都进入登录页
// router.replace('/login')
