import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import MineView from '@/views/MineView.vue';
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/0708',
  },
  {
    path: '/IndexView/:id',
    component: IndexView,
  },
  {
    path: '/HomeView',
    component: HomeView,
  },
  {
    path: '/MineView',
    component: MineView,
  },
  {
    path: '/Foo',
    // 懒加载组件文件
    component: () => import('@/views/Foo.vue'),
  },
  {
    path: '/Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/Rest',
    component: () => import(/* webpackChunkName: 'rest' */ '@/views/Rest.vue'),
  },
  {
    path: '/JSX',
    component: () => import(/* webpackChunkName: 'jsx' */ '@/views/JSX'),
  },
  {
    path: '/0708',
    component: () => import('@/views/Feat-0708.vue'),
  },
];
