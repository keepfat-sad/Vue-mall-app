<template>
    <div class="homePage">
        <div class="top"  @click="showPopup">
            <van-nav-bar title="首页" :left-text="areas" fixed>
                <van-icon name="search" slot="right" />
            </van-nav-bar>
        </div>
        <van-swipe
            class="swipe"
            :autoplay="3000"
            indicator-color="white"
        >
            <van-swipe-item v-for="(image,index) in images" :key="index">
                <img
                    :src="image"
                    alt="图片未显示"
                    width="100%"
                >
            </van-swipe-item>
        </van-swipe>
        <van-grid :border="false" :column-num="4" square>
            <van-grid-item :icon="caomei"  text="新鲜水果" to="/home/classify">
            </van-grid-item>
            <van-grid-item :icon="lajiao"  text="新鲜蔬菜" to="/home/classify">
            </van-grid-item>
            <van-grid-item :icon="mihoutao"  text="安心乳品" to="/home/classify">
            </van-grid-item>
            <van-grid-item :icon="xihongshi"  text="肉蛋食材" to="/home/classify">
            </van-grid-item>
        </van-grid>
        <van-notice-bar text="特价商品来袭:苹果、芒果、西瓜、青菜、番茄、牛奶、猪肉、羊肉，走过路过不要错过！！！！" left-icon="volume-o" />
        <van-divider dashed style="color:#DC143C">特价区</van-divider>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <van-card
                num="2"
                price="5.12"
                desc="特价特价"
                title="水果家族"
                :thumb="shuiguo"
                v-for="item in list"
                :key="item"
            />
        </van-list>
        <van-popup
            v-model="show"
            position="top"
            :style="{ height: '30%' }"
        >
            <van-area
            :area-list="areaList"
            @cancel="canclePopup"
            @confirm="confirmPopup"
            columns-num="2"
            />
        </van-popup>
    </div>
</template>
<script>
import shuiguo from '../assets/shuiguo.png';
import caomei from '../assets/caomei.png';
import lajiao from '../assets/lajiao.png';
import mihoutao from '../assets/mihoutao.png';
import xihongshi from '../assets/xihongshi.png';
import swipe1 from '../assets/swipe1.jpg';
import swipe2 from '../assets/swipe2.jpg';
import swipe3 from '../assets/swipe3.jpg';
import swipe4 from '../assets/swipe4.jpg';
import swipe5 from '../assets/swipe5.jpg';
import areaList from '../util/areas';

export default {
  data() {
    return {
      images: [
        swipe1,
        swipe2,
        swipe3,
        swipe4,
        swipe5,
      ],
      caomei,
      lajiao,
      mihoutao,
      shuiguo,
      xihongshi,
      list: [],
      loading: false,
      finished: false,
      show: false,
      areas: '郑州市',
      areaList: {
        province_list: areaList.province_list,
        city_list: areaList.city_list || {},
      },
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
    showPopup() {
      this.show = true;
    },
    canclePopup() {
      this.show = false;
    },
    confirmPopup(e) {
      this.areas = e[1].name === '市辖区' ? e[0].name : e[1].name;
      this.show = false;
    },
  },
};
</script>
<style scoped lang="less">
    .homePage{
        overflow: hidden;
        .top{
            height: 45px;
            width: 100%;
        }
        .swipe{
            height: 200px;
        }
    }
</style>
