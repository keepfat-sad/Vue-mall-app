<template>
  <div class="order">
    <van-nav-bar
      title="我的订单"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/home/user')"
    />
    <van-tabs v-model="active" animated >
      <van-tab title="全部">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <template v-for="item in list">
            <van-swipe-cell :key="item">
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                class="goods-card"
                thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
                @click="$router.push('/step')"
              />
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                />
              </template>
            </van-swipe-cell>
          </template>
        </van-list>
      </van-tab>
      <van-tab title="待发货" class="delivered">
        <img :src="noOrder" alt="" />
        <div class="deliveredText">暂无订单哦</div>
      </van-tab>
      <van-tab title="待收货">
        <van-swipe-cell>
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            :thumb="xihongshi"
            @click="$router.push('/step')"
          />
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </van-tab>
      <van-tab title="已完成">
        <van-swipe-cell>
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            class="goods-card"
            :thumb="xihongshi"
            @click="$router.push('/step')"
          />
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import xihongshi from '../assets/xihongshi.png';
import noOrder from '../assets/noOrder.png';

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      active: 0,
      xihongshi,
      noOrder,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i += 1) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
};
</script>
<style scoped lang="less">
.view {
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.1);
}
.goods-card {
  margin: 6px;
}
.van-swipe-cell {
  margin-top: 3px;
}
.delete-button {
  height: 100%;
}
.delivered {
  width: 100%;
  height: 86vh;
  img {
    width: 100%;
    height: 100%;
  }
}
.deliveredText {
  text-align: center;
  font-size: 20px;
}
</style>
