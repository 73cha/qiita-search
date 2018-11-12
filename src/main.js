import Vue from 'vue';
import App from './App.vue';
import router from './router';
import localStorage from './localstorage';
import VueMoment from 'vue-moment';

Vue.config.productionTip = false;

Vue.use(VueMoment);

export default new Vue({
  router,
  localStorage,
  render: h => h(App)
}).$mount('#app');
