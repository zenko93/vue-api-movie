import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store/index'
import vuetify from './plugins/vuetify';
import {i18n} from "./plugins/VueI18n";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
