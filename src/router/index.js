// 动态返回组件的这些逻辑 全部单独封装为一个js文件
import IndexView from '@/views/IndexView.vue';
import HomeView from '@/views/HomeView/HomeView.vue';
import MineView from '@/views/MineView.vue';
const viewMap = {
  IndexView,
  HomeView,
  MineView,
};
export default {
  data() {
    return {
      visibleView: 'HomeView',
    };
  },
  // 动态返回一个数据的data
  // computed === methods + data
  computed: {
    currentComponent() {
      return viewMap[this.visibleView];
    },
  },
  beforeCreate() {
    window.onhashchange = () => {
      this.visibleView = location.hash.replace('#', '');
      console.log(this.visibleView);
    };
  },
};
