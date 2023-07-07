import Vue from 'vue';
window.V = Vue;
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import Drawer from '@/components/Drawer';
import Switch from '@/components/Switch';
Vue.use(Switch);
Vue.component('Icon', Icon);
Vue.use(Drawer);

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    console.log(this.$store);
  },
});
console.log(app);
