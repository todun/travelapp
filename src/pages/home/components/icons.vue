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
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="list border-top">
      <li class="item">
        <span class="iconfont item-icon">&#xe617;</span>定位失败
      </li>
      <li class="item">
        <span class="iconfont item-icon">&#xe689;</span>必游榜单
      </li>
    </ul>
    <ul class="activity-list">
      <li class="activity-item bg-1">
        <a href></a>
      </li>
      <li class="activity-item bg-2">
        <a href></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: ['list'],
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
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
  },
  beforeCreate() {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color:#f5f5f5;')
  },

  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.icons /deep/ .swiper-pagination-bullet-active {
  background: rgba(0, 175, 190, 0.8);
}
.icons /deep/ .swiper-container {
  background: #fff;
  height: 0;
  padding-bottom: 60%;
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
      padding: 0.15rem;
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
.icons {
  .list {
    background: #fff;
    display: flex;
    justify-content: space-around;
    .item {
      text-align: center;
      font-size: 0.28rem;
      height: 0.98rem;
      line-height: 0.98rem;
      color: #212121;
      flex: 1;
      .item-icon {
        margin-right: 0.05rem;
        color: #616161;
        font-size: 0.32rem;
      }
    }
  }
  .activity-list {
    background: #fff;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    display: flex;
    justify-content: space-around;
    .bg-1 {
      background: url(http://img1.qunarzz.com/piao/fusion/1811/12/999862443f79a902.png)
        center center no-repeat;
      background-size: auto 100%;
    }
    .bg-2 {
      background: url(http://img1.qunarzz.com/piao/fusion/1811/80/f76d565689d9a202.png)
        center center no-repeat;
      background-size: auto 100%;
    }
    .activity-item {
      flex: 1;

      height: 1.4rem;
      line-height: 1.4rem;
      color: #212121;
      font-size: 0.28rem;
    }
  }
}
</style>
