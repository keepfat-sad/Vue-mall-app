<template>
  <div class="money">
    <van-nav-bar
      title="我的钱包"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/home/user')"
    />
    <van-icon name="gold-coin" size="180" color="#EEE685" />
    <div class="count">￥200.01</div>
    <button class="rich">充值</button>
    <button class="poor">提现</button>
  </div>
</template>
<style scoped>
.van-nav-bar {
  color: #fff;
}
.view {
  height: 100vh;
  background-color: #fff;
}
.van-icon-gold-coin {
  position: relative;
  left: 50%;
  top: 60px;
  transform: translateX(-50%);
}
.count {
  font-size: 40px;
  text-align: center;
  margin-top: 70px;
}
button {
  display: block;
  border-radius: 5px;
  padding: 5px 60px;
  margin-top: 10px;
  position: relative;
  top: 27%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
}
.rich {
  background-color: #00cd00;
  color: #fff;
  border: 1px solid #00cd00;
}
.poor {
  background-color: #e8e8e8;
  color: #00cd00;
  border: 1px solid #e8e8e8;
}
</style>
