import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import App from '@/App.vue';
// import router from '@/router';
import store from '@/store';
import Drawer from '@/components/Drawer';
import Switch from '@/components/Switch';
Vue.use(Switch);
Vue.component('Icon', Icon);
Vue.use(Drawer);
// 自定义vue-router
import VueRouter from '@/vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', component: { render: (h) => h('h1', {}, ['Page root']) } },
    {
      path: '/a',
      component: {
        render(h) {
          return h('h1', { on: { click: this.navigate } }, ['Page A']);
        },
        methods: {
          navigate() {
            // this.$router.push('/b');
            // this.$router.push({ path: '/b' });
            this.$router.push({ path: '/b', params: { a: 1, b: 2 } });
          },
        },
        created() {
          console.log(this.$route.params);
        },
      },
    },
    {
      path: '/b',
      component: {
        render: (h) => h('h1', {}, ['Page B']),
        created() {
          console.log(this.$route);
        },
      },
    },
    { path: '*', component: { render: (h) => h('h1', {}, ['Not Found']) } },
  ],
});
// 自定义vue-router

const app = new Vue({
  el: '#app',
  router, // root.$options.router
  store,
  components: { App },
  template: '<App/>',
  created() {
    console.log(this.$router);
  },
});
