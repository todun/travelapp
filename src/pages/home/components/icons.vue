<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide :key="index" v-for="(page,index) in pages">
        <div :key="item.id" class="icon" v-for="item in page">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: ['list'],
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.icons /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
  .icon {
    position: relative;
    overflow: hidden;
    width: 25%;
    height: 0;
    float: left;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .icon-img-content {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
    .icon-desc {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      line-height: 0.44rem;
      height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
    }
  }
}
</style>
