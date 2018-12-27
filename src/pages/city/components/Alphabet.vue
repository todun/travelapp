<template>
  <ul class="list">
    <li
      :key="key"
      :ref="key"
      @click="positionLetter"
      @touchend="handleTouchEnd"
      @touchmove="handleTouchMove"
      @touchstart.prevent="handleTouchStart"
      class="item"
      v-for="(item,key) in cities"
    >{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CutyAlphabet',
  props: ['cities'],
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters() {
      const letters = []
      for (const key in this.cities) {
        if (this.cities.hasOwnProperty(key)) {
          letters.push(key)
        }
      }
      return letters
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    positionLetter(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>
