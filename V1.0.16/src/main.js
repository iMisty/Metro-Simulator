import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import vuex from './store/store.js';
import './assets/less/line.less'
import './assets/less/global.less'
import './assets/less/left.less'
import './assets/less/medium.less'
import './assets/less/right.less'
import './assets/less/options.less'

Vue.config.productionTip = false

new Vue({
  //router,
  vuex,
  render: h => h(App)
}).$mount('#app')
