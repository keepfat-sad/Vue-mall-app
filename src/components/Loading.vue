<template>
  <div class="loading">
    <img :src="loading" alt="" />
    <van-circle
      v-model="currentRate"
      :rate="rate"
      layer-color="#ebedf0"
      :text="text"
      :speed="30"
      size="100px"
    />
    <div class="bottomText">
        @ 生 鲜 选 购
    </div>
  </div>
</template>

<script>
import loading from '../assets/loading.jpg';

export default {
  data() {
    return {
      loading,
      rate: 100,
      currentRate: 0,
      text: '载入中',
    };
  },
  watch: {
    currentRate(val) {
      if (val >= 100) {
        this.text = '进入';
      }
    },
  },
  created() {
    setTimeout(() => {
      this.$router.push({ name: 'homePage' });
    }, 5000);
  },
};
</script>
<style scoped lang="less">
img {
  height: 100vh;
}
.view {
  .van-circle {
    position: absolute;
    left: 83%;
    top: 20px;
    .van-circle__text {
      color: aliceblue;
    }
  }
}
.bottomText {
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
}
</style>
