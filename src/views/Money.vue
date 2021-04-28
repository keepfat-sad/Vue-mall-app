<template>
  <div class="money">
    <van-nav-bar
      title="我的钱包"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/home/user')"
    />
  </div>
</template>
<style scoped>
.van-nav-bar {
  color: #fff;
}
</style>
