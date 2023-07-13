import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import MineView from '@/views/MineView.vue';
export default [
  // 路径重定向
  {
    path: '/',
    component: () => import(/*webpackChunkName: 'root' */ '@/views/Root.vue'),
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
  // 子路由组件渲染在父路由组件的router-view中
  {
    name: '0713',
    path: '/0713',
    // component: () =>
    //   import(/* webpackChunkName: '0713' */ '@/views/Feat-0713.vue'),
    components: {
      default: () =>
        import(/* webpackChunkName: '0713' */ '@/views/Feat-0713.vue'),
      nav: () => import('@/components/Nav.vue'),
    },
    children: [
      {
        path: 'a',
        name: '0713_a',
        meta: { visibleNav: true, icon: 'ic:baseline-30fps-select' },
        component: {
          template: `<div>0713的子路由A</div>`,
        },
      },
      {
        path: 'b',
        name: '0713_b',
        meta: { icon: 'ic:baseline-4g-plus-mobiledata' },
        component: {
          template: `<div>0713的子路由B</div>`,
        },
      },
    ],
  },
];

// 动态路由匹配的参数是params
// 当前路由是动态路径 router.push({path: '/path/params'}) router.push({name: 'route_name', params: {params_key: value}})
