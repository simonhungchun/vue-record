<template>
  <div>
    <h1>扫码登录</h1>
    <img :src="qrcode" alt="" />
  </div>
</template>
<script>
import { getQrKey, getQrInfo, checkQrStatus } from '@/request';
import store from 'storejs';
export default {
  name: 'Login',
  data() {
    return {
      qrcode: '',
    };
  },
  methods: {
    pollingCheck(key, interval = 1000) {
      const timer = setInterval(async () => {
        const res = await checkQrStatus(key);
        if (res.data.code === 800) {
          alert('此二维码已过期，请刷新后重试!');
          clearInterval(timer);
        } else if (res.data.code === 803) {
          clearInterval(timer);
          store.set('__m__cookie', res.data.cookie);
        }
      }, interval);
      this.$on('hook:beforeDestroy', () => clearInterval(timer));
    },
  },
  async created() {
    const res = await getQrKey().catch((err) => {
      console.log(err);
    });
    const qrInfo = await getQrInfo(res.data.data.unikey).catch((err) =>
      console.log(err)
    );
    this.qrcode = qrInfo.data.data.qrimg;
    this.pollingCheck(res.data.data.unikey);
  },
};
</script>
