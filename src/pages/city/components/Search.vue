<template>
  <div>
    <div class="search">
      <input class="search-input" placeholder="输入城市名或拼音" type="text" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li :key="item.id" class="search-item border-bottom" v-for="item in list">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  props: ['cities'],
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (!this.keyword) {
        this.list = []
        return
      }

      this.timer = setTimeout(() => {
        const res = []
        for (const key in this.cities) {
          this.cities[key].forEach(val => {
            if (
              val.spell.indexOf(this.keyword) > -1 ||
              val.name.indexOf(this.keyword) > -1
            ) {
              res.push(val)
            }
          })
        }
        this.list = res
      }, 100)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
  .search-input {
    box-sizing: border-box;
    padding: 0 0.1rem;
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>
