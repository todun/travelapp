<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <hot-sale :hotSaleList="hotSaleList"></hot-sale>
    <home-recommend :rList="recommendList"></home-recommend>
    <home-weekend :wList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Herder'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HotSale from './components/HotSale'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      hotSaleList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HotSale,
    HomeWeekend
  },
  methods: {
    getHomeInfo() {
      axios
        .get(process.env.API_HOST + '/api/index?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.hotSaleList = res.data.hotSaleList
        this.weekendList = res.data.weekendList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>
</style>
