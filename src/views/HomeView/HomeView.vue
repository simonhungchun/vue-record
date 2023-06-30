<template>
  <div :class="{ dark: switchCheckStatus }">
    <div
      class="w-[100vw] overflow-hidden bg-white text-[#000] dark:bg-gray-900 dark:text-[#fff]"
    >
      <!-- <v-switch :value.sync="switchCheckStatus" /> -->
      <h1>{{ switchCheckStatus }}</h1>
      <v-switch v-model="switchCheckStatus" />
      <v-switch
        :value="switchCheckStatus"
        @input="(e) => (switchCheckStatus = e)"
      />
      <!-- 搜索框 -->
      <div class="w-[100vw] flex items-center justify-around mt-3 relative">
        <Icon icon="mingcute:menu-fill" width="8vw" hight="8vw" />
        <input
          type="text"
          :placeholder="defaultSearch.showKeyword"
          v-model="userSearchKeywords"
          class="w-[72vw] h-[10vw] border-solid border-[0.5vw] rounded-[12vw] border-fuchsia-200 bg-gradient-to-r from-purple-100 to-pink-200 indent-[12vw]"
        />
        <Icon
          icon="circum:search"
          class="absolute top-[2vw] left-[19vw]"
          width="6vw"
          height="6vw"
          color="gray"
        />
        <Icon
          icon="fluent:scan-qr-code-24-filled"
          class="absolute top-[1vw] left-[75vw]"
          width="8vw"
          height="8vw"
          color="gray"
          @click.native="searchHandler(userSearchKeywords)"
        />
        <Icon
          icon="material-symbols:auto-detect-voice-outline"
          width="8vw"
          hight="8vw"
        />
      </div>
      <ul v-if="searchSuggestList.length">
        <li
          v-for="item in searchSuggestList"
          :key="item.id"
          @click="searchHandler(item.name)"
        >
          {{ item.name }}
        </li>
      </ul>
      <Panel label="推荐歌单">
        <RecommondPlaylistItem
          class="abc"
          v-for="playlist in recommondPlaylist"
          :key="playlist.id"
          :source="playlist"
          :count="4"
        />
      </Panel>
      <!-- 
      无->有（enter进场动画）
      .[name]-enter{  }
      .[name]-enter-to{  }
      
      
    有->无（leave离场动画） 
    .[name]-leave{  }
    .[name]-leave-to{  }
  -->
      <button @click="visible = !visible">toggle</button>
      <div class="w-[200px] h-[200px] border-[1px] overflow-hidden relative">
        <transition name="abc">
          <div
            v-if="visible"
            class="w-[200px] h-[200px] bg-orange-600 absolute top-0 left-0"
          ></div>
        </transition>
        <transition name="abc">
          <div
            v-if="!visible"
            class="w-[200px] h-[200px] bg-teal-400 absolute top-0 left-0"
          ></div>
        </transition>
      </div>
      <button @click="drawerVisible = !drawerVisible">
        drawerVisibleToggle
      </button>
      <!-- <Drawer :visible="drawerVisible" @自定义事件="(e) => (drawerVisible = e)"> -->
      <Drawer :visible.sync="drawerVisible" direction="rtl">
        <!-- <template #header>
        <div class="flex justify-between items-center">
          <p>推荐歌单</p>
          <Icon icon="clarity:times-line" />
        </div>
      </template> -->
        <h1>1234</h1>
        <h1>1234</h1>
        <h1>1234</h1>
        <h1>1234</h1>
      </Drawer>
    </div>
  </div>
</template>
<script>
import _ from 'lodash';
import {
  fetchSearchDefault,
  fetchSearchResult,
  fetchSearchSuggest,
  fetchHomeData,
} from '@/request';
import RecommondPlaylistItem from './components/RecommondPlaylistItem.vue';
import Panel from './components/Panel.vue';
export default {
  components: { RecommondPlaylistItem, Panel },
  async created() {
    // 获取首页数据
    const homeData = await fetchHomeData();
    // console.log(homeData.data.data.blocks[1].creatives);
    this.recommondPlaylist = homeData.data.data.blocks[1].creatives;
    // 获取搜索默认值
    const res = await fetchSearchDefault();
    this.defaultSearch = res.data.data;
  },
  data() {
    return {
      switchCheckStatus: false,
      drawerVisible: false,
      visible: true,
      userSearchKeywords: '',
      searchSuggestList: [],
      defaultSearch: {},
      recommondPlaylist: [],
    };
  },
  methods: {
    // fn(e) {
    //   this.drawerVisible = e;
    // },
    async searchHandler(keywords) {
      const res = await fetchSearchResult({
        keywords: keywords || this.defaultSearch.realkeyword,
      });
      console.log(res);
    },
  },
  watch: {
    // async userSearchKeywords(keywords) {
    //   const res = await fetchSearchSuggest(keywords);
    //   this.searchSuggestList = res.data.result.songs;
    // },
    userSearchKeywords: _.debounce(async function (keywords) {
      const res = await fetchSearchSuggest(keywords);
      this.searchSuggestList = res.data.result.songs;
    }, 300),
  },
};
</script>
<style scoped>
.abc-enter {
  transform: translateY(100%) scale(0.7);
}
.abc-enter-active {
  transition: all ease-in-out 1.2s;
}
.abc-enter-to {
  transform: translateY(0) scale(1);
}
.abc-leave {
  transform: translateY(0) scale(1);
}
.abc-leave-active {
  transition: all ease-in-out 1.2s;
}
.abc-leave-to {
  transform: translateY(-100%) scale(0.7);
}
</style>
