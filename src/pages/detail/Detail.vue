<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :galleryImgs="galleryImgs" :sightName="sightName"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data() {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailInfo() {
      axios.get('/api/detail?id=' + this.$route.params.id).then(res => {
        res = res.data
        if (res.ret && res.data) {
          this.sightName = res.data.sightName
          this.bannerImg = res.data.bannerImg
          this.galleryImgs = res.data.galleryImgs
          this.categoryList = res.data.categoryList
        }
      })
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted() {
    this.getDetailInfo()
  }
}
</script>

<style scoped>
.content {
  height: 50rem;
}
</style>
