import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'

import SuiVue from 'semantic-ui-vue';

import "semantic-ui-css/semantic.min.css"
import './styles/main.css'
import './index.css'

Vue.use(SuiVue);


Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
