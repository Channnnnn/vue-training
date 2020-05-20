import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
Vue.use(VueLodash, {name:'custom', lodash: lodash})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
