import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
import router from '@/router';
// 1.引入路由插件
// import VueRouter from 'vue-router';
// 2.注册路由所提供的全局组件 router-view(渲染) router-link（跳转）
// Vue.use(VueRouter);
// 3.实例化
// import IndexView from '@/views/IndexView.vue';
// import HomeView from '@/views/HomeView/HomeView.vue';
// import MineView from '@/views/MineView.vue';
// const router = new VueRouter({
//   // 相当于刚刚自己定义的viewMap
//   routes: [
//     // 路径重定向
//     {
//       path: '/',
//       redirect: '/HomeView',
//     },
//     {
//       path: '/IndexView/:id',
//       component: IndexView,
//     },
//     {
//       path: '/HomeView',
//       component: HomeView,
//     },
//     {
//       path: '/MineView',
//       component: MineView,
//     },
//   ],
// });
// import MineView from '@/views/MineView.vue';
import Drawer from '@/components/Drawer.vue';
import Switch from '@/components/Switch.vue';
Vue.component('v-switch', Switch);
// Vue.component('MineView', MineView);
Vue.component('Icon', Icon);
Vue.component('Drawer', Drawer);
new Vue({
  el: '#app',
  // 4.将router注入到root中
  // 提供了两个vue实例（全局的）属性 $router === router、$route
  // vm.$router
  router,
  components: { App },
  template: '<App/>',
  created() {
    console.log(this.$parent); // undefined
    console.log(this.$children); // [App]
  },
  mounted() {
    console.log(this.$children[0].$children);
  },
});
// 组件：可复用性、可维护性
