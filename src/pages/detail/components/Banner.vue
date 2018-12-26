<template>
  <div>
    <div @click="handleBannerClick" class="banner">
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_600x330_0f80adad.jpg"
      >
      <div class="banner-info">
        <div class="banner-title">成都熊猫基地(AAAA景区)</div>
        <div class="banner-pics">
          <span class="iconfont">&#xe63e;</span>
          <em class="num">14</em>
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" @hide="handler" v-show="showGallery"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery.vue'
export default {
  name: 'DetailBanner',
  data() {
    return {
      imgs: [
        'http://img1.qunarzz.com/wugc/p194/201306/06/f10aa1faffece8a993835fbb.jpg_350x240_9c830d84.jpg',
        'http://img1.qunarzz.com/sight/201405/15/41555f4df8eff469c8d65eac.jpg_350x240_341ceff9.jpg',
        'http://img1.qunarzz.com/wugc/p242/201306/06/65a37f89c29ebb5b93835fbb.jpg_350x240_3ee01dec.jpg'
      ],
      showGallery: false
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true
    },
    handler() {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style lang="scss"  scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0.2rem;
    right: 0.2rem;
    bottom: 0.36rem;
    min-height: 0.4rem;
    color: #fff;
    .banner-title {
      font-size: 0.36rem;
      flex: 1;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    }
    .banner-pics {
      padding: 0 0.2rem;
      line-height: 0.4rem;
      height: 0.4rem;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 0.2rem;
      font-size: 0.24rem;
      color: #fff;
      .num {
        margin-left: 0.1rem;
      }
    }
  }
}
</style>
