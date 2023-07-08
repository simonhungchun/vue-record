<template>
  <div>
    <van-popup
      v-model="popupVisible"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-area
        columns-num="2"
        confirm-button-text="完成"
        :area-list="areaList"
        @confirm="confirm"
      />
    </van-popup>
  </div>
</template>
<script>
import { areaList } from '@vant/area-data';
export default {
  data() {
    return {
      areaList: Object.freeze(areaList),
      popupVisible: true,
    };
  },
  methods: {
    confirm(e) {
      this.popupVisible = false;
      console.log(e);
    },
  },
};
</script>
