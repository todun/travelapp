<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li :key="list.id" class="item border-bottom" v-for="list in recommendList">
        <img :src="list.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{list.title}}</p>
          <p class="item-desc">{{list.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
          title: '成都欢乐谷',
          desc: '超级旋转过山车刺激到让你怀疑人生'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
          title: '成都欢乐谷',
          desc: '超级旋转过山车刺激到让你怀疑人生'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
          title: '成都欢乐谷',
          desc: '超级旋转过山车刺激到让你怀疑人生'
        },
        {
          id: '0004',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
          title: '成都欢乐谷',
          desc: '超级旋转过山车刺激到让你怀疑人生'
        },
        {
          id: '0005',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
          title: '成都欢乐谷',
          desc: '超级旋转过山车刺激到让你怀疑人生'
        },
        {
          id: '0006',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
          title: '成都欢乐谷',
          desc: '超级旋转过山车刺激到让你怀疑人生'
        },
        {
          id: '0007',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
          title: '成都欢乐谷',
          desc: '超级旋转过山车刺激到让你怀疑人生'
        },
        {
          id: '0008',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_200x200_ea7a0734.png',
          title: '成都欢乐谷',
          desc: '超级旋转过山车刺激到让你怀疑人生'
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
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    padding: 0.1rem;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
    }
    .item-button {
      margin-top: 0.2rem;
      background: #ff9300;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
    }
  }
}
</style>
