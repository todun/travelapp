<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-center">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: ['city']
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.header {
  display: flex;
  line-height: $headerHeight;
  background-color: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;
    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-center {
    flex: 1;
    background-color: #fff;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    line-height: 0.62rem;
    height: 0.62rem;
    color: #ccc;
  }

  .header-right {
    text-align: center;
    width: 1.24rem;
    float: right;
    color: #fff;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
