<template>
  <div>
    <div :key="index" class="item border-bottom" v-for="(item,index) in categoryList">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  data() {
    return {}
  },
  props: {
    categoryList: Array
  }
}
</script>

<style lang="scss" scoped>
.item {
  .item-title {
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    .item-title-icon {
      position: relative;
      left: 0.06rem;
      top: 0.1rem;
      display: inline-block;
      width: 0.36rem;
      height: 0.36rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
        no-repeat;
      margin-right: 0.1rem;
      background-size: 0.4rem 3rem;
    }
  }
  .item-children {
    padding: 0 0.2rem;
  }
}
</style>
