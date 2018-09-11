<template>
  <div class="wrapper">
    <!--v-if保证刚开始获取到的不是空-->
    <!--在模板中尽量避免出现逻辑性的代码 这里使用computed-->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!--通过for来循环输出 并绑定一个key值-->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array //从父亲组件传递消息
  },
  data () {
    return {
      swiperOption: {
        //出现下面的点
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*穿透*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
