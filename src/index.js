import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import Drawer from '@/components/Drawer';
import Switch from '@/components/Switch';
Vue.use(Switch);
Vue.component('Icon', Icon);
Vue.use(Drawer);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

/*
class V {
  static component(name, comp) {
    console.log(`注册${name}组件`);
  }
  static use(plugin) {
    console.log(this); // this -> V
    if (!plugin) return;
    if (typeof plugin.install === 'function') {
      plugin.install(this);
    }
    if (typeof plugin === 'function') {
      plugin(this);
    }
  }
}
V.use(function (A) {
  A.component('abc', {});
});
V.use({
  install(A) {
    A.component('abc', {});
  },
});
*/
