<template>
  <div @click="handleGalleryClick" class="container">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide :key="index" v-for="(item,index) in imgs">
          <img :src="item" class="gallery-img">
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleGalleryClick() {
      this.$emit('hide')
    }
  }
}
</script>

<style lang="scss" scoped>
.container /deep/ .swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wrapper {
    // overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 68.6%;
    background: #fff;
    .gallery-img {
      width: 100%;
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
