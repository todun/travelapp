<template>
  <div class="hot-wrapper">
    <div class="title">
      <span class="iconfont title-icon">&#xe610;</span>本周热门榜单
    </div>
    <ul class="slide-list">
      <li :key="item.id" class="slide-item" v-for="item of hotSaleList">
        <div class="img-wrapper">
          <div class="img-cont">
            <img :src="item.imgSrc" class="swiper-img">
          </div>
        </div>
        <p class="img-title text-ellipsis">{{item.title}}</p>
        <div class="hot-price">
          <span class="price-iden">
            ¥<em class="price-num">{{item.price}}</em>起
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHotSale',
  data() {
    return {}
  },
  props: {
    hotSaleList: Array
  }
}
</script>

<style lang="scss" scoped>
.hot-wrapper {
  background: #fff;
  .title {
    height: 0.8rem;
    color: #212121;
    font-size: 0.32rem;
    line-height: 0.8rem;
    text-indent: 0.2rem;
    .title-icon {
      margin-right: 0.1rem;
      color: #ff8300;
    }
  }
  .slide-list {
    padding: 0 0.24rem;
    overflow-x: scroll;
    white-space: nowrap;
    .slide-item {
      &:not(:first-child) {
        margin-left: 0.12rem;
      }
      display: inline-block;
      padding: 0.06rem 0 0.2rem;
      width: 2rem;
      .img-wrapper {
        overflow: hidden;
        height: 0;
        padding-bottom: 100%;
        .img-cont {
          box-sizing: border-box;
          .swiper-img {
            width: 100%;
          }
        }
      }
      .img-title,
      .hot-price {
        margin-top: 0.12rem;
        color: #212121;
        font-size: 0.24rem;
        line-height: 0.32rem;
        text-align: center;
      }
      .price-iden {
        color: #ff8300;
      }
    }
  }
}

.text-ellipsis {
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
