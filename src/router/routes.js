import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import MineView from '@/views/MineView.vue';
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/HomeView',
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
];
