<template>
  <div>
    <Debounce>
      <div
        class="w-[40px] h-[20px] bg-orange-300 border text-center leading-[20px]"
        @click="debounceTestHandler"
      >
        防抖测试
      </div>
    </Debounce>
    <Button>
      <span>我是按钮</span>
      <span slot="abc">[我是按钮]</span>
      <span slot="def">{我是按钮}</span>
    </Button>
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
import Debounce from '@/components/Debounce';
import Button from '@/components/Button/Button.vue';
import { areaList } from '@vant/area-data';
export default {
  components: { Button, Debounce },
  data() {
    return {
      areaList: Object.freeze(areaList),
      popupVisible: true,
    };
  },
  methods: {
    debounceTestHandler() {
      console.log('debounce...');
    },
    confirm(e) {
      this.popupVisible = false;
      console.log(e);
    },
  },
};
</script>
