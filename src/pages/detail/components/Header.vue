<template>
  <div>
    <router-link class="header-abs" tag="div" to="/" v-show="showAbs">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
    <div :style="opacityStyle" class="header-fixed" v-show="!showAbs">景点详情
      <router-link to="/">
        <div class="iconfont icon-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 1) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.header-abs {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 0.36rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  .header-back {
    color: #fff;
    font-size: 0.36rem;
    line-height: 0.72rem;
  }
}
.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
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
