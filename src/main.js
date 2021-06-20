import Vue from 'vue'
import App from './App.vue'
import vuetify from "./plugins/vuetify";
import router from "./routers/router";
import vueYoutube from 'vue-youtube';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuetify,
  vueYoutube
}).$mount('#app')
