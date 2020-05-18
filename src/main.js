import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import './registerServiceWorker';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import AlertModal from './components/modal/AlertModal.vue';

export const EventBus = new Vue();

Vue.use(VueAxios, axios);

Vue.component("mktplace-header", Header);
Vue.component("mktplace-footer", Footer);
Vue.component("mktplace-alert-modal", AlertModal);

/* Third Party components */

//https://www.npmjs.com/package/v-mask
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

//https://vuelidate.js.org/#sub-installation
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
