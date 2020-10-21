import Vue from 'vue'
import App from './App.vue'

import "semantic-ui-css/semantic.min.css"
import './index.css'
import './style/main.css'
import router from './router'
import SuiVue from 'semantic-ui-vue';
import { Auth0Plugin } from "./auth";
import { createProvider } from './vue-apollo'


Vue.use(SuiVue);

Vue.use(Auth0Plugin, {
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});


Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
