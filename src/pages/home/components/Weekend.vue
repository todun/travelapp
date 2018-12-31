<template>
  <div class="weekend-trip">
    <div class="title">周末去哪儿</div>
    <ul class="weekend-trip-list">
      <li :key="list.id" class="item border-bottom" v-for="list in wList">
        <div class="item-img-wrapper">
          <img :src="list.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{list.title}}</p>
          <p class="item-desc">{{list.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: ['wList']
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 0.32rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
.weekend-trip-list {
  .item {
    .item-img-wrapper {
      overflow: hidden;
      height: 0;
      padding-bottom: 37%;
      .item-img {
        width: 100%;
      }
    }
    .item-info {
      padding: 0.1rem;
      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
      }
      .item-desc {
        line-height: 0.4rem;
        color: #616161;
      }
    }
  }
}
</style>
