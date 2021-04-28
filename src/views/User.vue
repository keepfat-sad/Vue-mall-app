<template>
    <div class="user">
        <div class="top">
            <div class="left">
             <van-icon name="user-circle-o" size="110px"/>
            </div>
            <div class="right">
                <div class="name">{{ userName }}</div>
                <div class="role">
                    {{ userRole }}
                </div>
            </div>
            <van-icon name="qr" size="30px"/>
            <van-icon name="arrow" class="rightArrow" size="30px"/>
        </div>
        <div class="cell">
            <van-cell
                title="钱包"
                icon="balance-pay"
                is-link
                style="marginBottom:15px"
                />
            <van-cell title="地址管理" icon="location-o" is-link to="/location"/>
            <van-cell title="优惠劵" icon="discount" is-link to="/coupon"/>
            <van-cell title="订单管理" icon="logistics" is-link to="/order"/>
            <van-cell
                title="设置"
                icon="setting-o"
                is-link
                style="marginTop:15px"
                />
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'keepFat',
      userRole: 'customer',
    };
  },
};
</script>
<style scoped lang="less">
    .user{
        overflow: hidden;
        background-color: #F5F5F5;
        height: 620px;
        .top{
            margin: 0 auto;
            width: 100%;
            height: 120px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left{
                margin-left: 15px;
            }
            .right{
                margin-right: 140px;
                .name{
                    margin-bottom: 3px;
                    font-size: 20px;
                }
            }
            .rightArrow{
                margin-right: 16px;
            }
        }
        .cell{
            margin-top: 10px;
        }
    }
</style>
