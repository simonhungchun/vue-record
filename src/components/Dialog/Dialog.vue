<template>
  <div
    v-show="visible"
    class="w-[320px] fixed top-[50%] left-[50%] text-[16px] rounded-[12px] bg-gray-300 translate-x-[-50%] translate-y-[-40%]"
  >
    <div class="pt-[26px] font-medium leading-[24px] text-center">
      {{ title }}
    </div>
    <div>
      <div
        class="pt-[8px] pb-[26px] px-[24px] box-border text-[#646566] text-[14px]"
      >
        {{ message }}
      </div>
    </div>
    <div
      class="flex items-center text-center h-[48px] border-t border-[#ebedf0] cursor-pointer"
    >
      <div
        @click="cancel"
        class="flex-1 border-r border-[#ebedf0] box-border leading-[48px]"
      >
        <span>取消</span>
      </div>
      <div @click="confirm" class="flex-1 leading-[48px]">
        <span>确认</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    hide() {
      this.visible = false;
    },
    cancel() {
      this.hide();
      this.reject();
    },
    confirm() {
      this.hide();
      this.resolve();
    },
  },
  // props: {
  //   title: {
  //     type: String,
  //   },
  //   message: {
  //     type: String,
  //     required: true,
  //   },
  // },
};
</script>
