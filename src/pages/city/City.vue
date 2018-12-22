<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'Header',
  data() {
    return {
      cities: {},
      hotCities: []
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(res => {
        res = res.data
        if (res.ret && res.data) {
          this.cities = res.data.cities
          this.hotCities = res.data.hotCities
        }
      })
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="scss" scoped>
</style>
