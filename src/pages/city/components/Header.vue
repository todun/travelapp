<template>
  <div class="header">城市选择
    <router-link to="/">
      <div class="iconfont icon-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.header {
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
  .icon-back {
    color: #fff;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
