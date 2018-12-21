<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li :key="list.id" class="item border-bottom" v-for="list in recommendList">
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
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title: '成都必打卡',
          desc: '成都的标志，也是现代人对老成都的记忆'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title: '成都必打卡',
          desc: '成都的标志，也是现代人对老成都的记忆'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title: '成都必打卡',
          desc: '成都的标志，也是现代人对老成都的记忆'
        },
        {
          id: '0004',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title: '成都必打卡',
          desc: '成都的标志，也是现代人对老成都的记忆'
        },
        {
          id: '0005',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title: '成都必打卡',
          desc: '成都的标志，也是现代人对老成都的记忆'
        },
        {
          id: '0006',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title: '成都必打卡',
          desc: '成都的标志，也是现代人对老成都的记忆'
        },
        {
          id: '0007',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title: '成都必打卡',
          desc: '成都的标志，也是现代人对老成都的记忆'
        },
        {
          id: '0008',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title: '成都必打卡',
          desc: '成都的标志，也是现代人对老成都的记忆'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}
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
</style>
