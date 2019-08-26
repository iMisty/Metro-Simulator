import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import './assets/less/line.less'
import './assets/less/global.less'
import './assets/less/medium.less'
import './assets/less/right.less'

Vue.config.productionTip = false

new Vue({
  //router,
  render: h => h(App)
}).$mount('#app')
