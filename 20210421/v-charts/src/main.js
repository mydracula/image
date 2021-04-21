import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCharts from 'v-charts'

Vue.config.productionTip = false
Vue.use(VCharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
