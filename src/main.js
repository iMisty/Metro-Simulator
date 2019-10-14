import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import store from './store/store'
import './assets/less/line.less'
import './assets/less/global.less'
import './assets/less/medium.less'
import './assets/less/right.less'
import './assets/less/options.less'

Vue.config.productionTip = false

new Vue({
  //router,
  store,
  render: h => h(App)
}).$mount('#app')
