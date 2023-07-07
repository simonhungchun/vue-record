import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import MineView from '@/views/MineView.vue';
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/Foo',
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
];
