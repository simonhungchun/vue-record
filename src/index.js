import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
import Drawer from '@/components/Drawer';
import Switch from '@/components/Switch';
// import Dialog from './components/Dialog';
Vue.use(Switch);
// Vue.use(Dialog);
Vue.component('Icon', Icon);
Vue.use(Drawer);
// Vue.extend给Vue构造函数配置项设置默认值
// const ChildVue = Vue.extend({
//   template: '<h1>{{msg}}</h1>',
//   data() {
//     return {
//       msg: '123',
//     };
//   },
// });

// new Vue({});
// new ChildVue({
//   el: '#app',
//   data() {
//     return {
//       msg: 'abc',
//     };
//   },
// });
// Vue.extend()
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
// app.$mount(); // 把模板编译为浏览器能够识别的html片段并赋值给app的$el属性
// setTimeout(() => {
//   document.querySelector('body').appendChild(app.$el);
// }, 5000);
// window.app = app;
// console.log(app);
