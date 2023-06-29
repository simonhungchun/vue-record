<template>
  <div class="w-[100vw] overflow-hidden">
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
      userSearchKeywords: '',
      searchSuggestList: [],
      defaultSearch: {},
      recommondPlaylist: [],
    };
  },
  methods: {
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
