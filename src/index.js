import Vue from 'vue';
import { Button, Popup, Area } from 'vant';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
// import store from '@/store';
import { Switch, Drawer } from '@/components';
import formateTime from '@/utils/formateTime';
Vue.use(formateTime);
Vue.use(Switch).use(Drawer).use(Button).use(Popup).use(Area);
import Vuex from '@/vuex/__index';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 123,
    list: [123],
    a: 45,
  },
  mutations: {
    decrease(state) {
      // console.log(state);
      state.count--;
    },
  },
});
// Vue.mixin({
//   beforeCreate() {
//     if (!this.$parent) console.log('this.$options.a', this.$options.a);
//   },
// });
window.vm = new Vue({
  // mixins: [
  //   {
  //     beforeCreate() {
  //       console.log('this.$options.a', this.$options.a);
  //     },
  //   },
  // ],
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  // beforeCreate() {
  //   console.log('this.$options.a', this.$options.a);
  // },
});
// 只要传递给组件的配置项 都会被保存在$options
