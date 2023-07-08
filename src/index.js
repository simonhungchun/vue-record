import Vue from 'vue';
import { Button, Popup, Area } from 'vant';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { Switch, Drawer } from '@/components';
Vue.use(Switch).use(Drawer).use(Button).use(Popup).use(Area);
Vue.component('Icon', Icon);

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
