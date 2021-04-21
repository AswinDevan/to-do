import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './route/index'
import store from './store'
import Dialog from './components/Dialog.vue'

Vue.config.productionTip = false

Vue.component('app-dialog',Dialog);
new Vue({
  vuetify,
  render: h => h(App),
  router,
  store
}).$mount('#app')
