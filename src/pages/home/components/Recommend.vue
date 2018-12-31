<template>
  <div class="recmd-wrapper">
    <div class="title">
      <span class="iconfont title-icon">&#xe63f;</span>热销推荐
    </div>
    <ul class="recmd-list">
      <router-link
        :key="list.id"
        :to="'/detail/'+list.id"
        class="item border-bottom"
        tag="li"
        v-for="list in rList"
      >
        <img :src="list.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{list.title}}</p>
          <p class="item-desc">{{list.desc}}</p>
          <div class="btn-box">
            <a class="btn-link" href>
              <em class="item-button">查看详情</em>
            </a>
          </div>
        </div>
      </router-link>
    </ul>
    <a class="list-more border-top">查看所有产品</a>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: ['rList'],
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.recmd-wrapper {
  background: #fff;
  .title {
    font-size: 0.32rem;
    margin-top: 0.2rem;
    line-height: 0.8rem;
    text-indent: 0.2rem;
    .title-icon {
      margin-right: 0.1rem;
      color: #ff8300;
    }
  }
  .recmd-list {
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
          line-height: 0.48rem;
          font-size: 0.32rem;
          color: #212121;
        }
        .item-desc {
          padding-right: 1.4rem;
          line-height: 0.42rem;
          color: #616161;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 0.24rem;
        }
        .btn-box {
          .btn-link {
            margin-top: 0.1rem;
            box-sizing: border-box;
            display: block;
            width: 100%;
            .item-button {
              padding: 0.1rem;
              text-align: center;
              height: 0.6rem;
              color: #fff;
              font-size: 0.28rem;
              line-height: 0.6rem;
              border-radius: 0.08rem;
              background-image: linear-gradient(
                130deg,
                #ffab1e 37%,
                #ff8c12 100%
              );
            }
          }
        }
      }
    }
  }
  .list-more {
    display: block;
    padding: 0.2rem 0;
    font-size: 0.28rem;
    line-height: 0.4rem;
    text-align: center;
  }
}
</style>
