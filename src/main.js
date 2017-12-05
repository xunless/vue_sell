// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueydui from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'
import vueTap from 'v-tap'
import fastclick from 'fastclick'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(vueTap)
Vue.use(vueydui)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
const store = new Vuex.Store({
  state: {
    count: 0
  },
  // 添加的商品元素
  addCartEl: {},
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
const router = new VueRouter({
  routes:[{
    path: '/goods',
    component: goods
  }, {
      path: '/ratings',
      component: ratings
  }, {
      path: '/seller',
      component: seller
  }],
  linkActiveClass: 'active'
});
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#App')

router.push('goods')