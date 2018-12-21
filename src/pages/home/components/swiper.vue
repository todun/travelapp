<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide :key="item.id" v-for="item in swiperList">
        <img :src="item.imgUrl" class="swiper-img">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1812/47/a51fe403715df102.jpg_750x200_085792b6.jpg'
        },
        {
          id: '002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1812/98/144a903270f64102.jpg_750x200_5f29ca30.jpg'
        },
        {
          id: '003',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1812/53/6ae6f5a9bcdf2b02.jpg_750x200_b3619ab6.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 26.7%;
  .swiper-img {
    width: 100%;
  }
}
</style>
