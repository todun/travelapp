<template>
  <div>
    <div @click="handleBannerClick" class="banner">
      <img :src="bannerImg" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-pics">
          <span class="iconfont">&#xe63e;</span>
          <em class="num">14</em>
        </div>
      </div>
    </div>
    <common-gallery :imgs="galleryImgs" @hide="handler" v-show="showGallery"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery.vue'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  data() {
    return {
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
