<template>
  <div class="step">
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-steps direction="vertical" :active="steps">
      <van-step>
        <h3>等待商家接单</h3>
        <p>{{curryTime[0]}}</p>
      </van-step>
      <van-step>
        <h3>商家已接单</h3>
        <p>{{curryTime[1]}}</p>
      </van-step>
      <van-step>
        <h3>骑手送货中</h3>
        <p>{{curryTime[2]}}</p>
      </van-step>
      <van-step>
        <h3>订单已完成</h3>
        <p>{{curryTime[3]}}</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      steps: 0,
      curryTime: [],
    };
  },
  mounted() {
    setInterval(() => {
      if (this.steps <= 3) {
        this.curryTime[this.steps] = moment().format('YYYY-MM-DD HH:mm:ss');
        this.steps += 1;
      }
    }, 2000);
  },
  methods: {
    onClickLeft() {
      this.$router.goBack();
    },
  },
};
</script>

<style scoped>
  .view {
    height: 100vh;
    background-color: #fff;
  }
</style>
