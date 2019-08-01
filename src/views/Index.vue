<template>
  <van-row class="section">
    <van-skeleton v-if="! carouselImages" title :row="15" style="background-color: white" />
    <van-col v-if="carouselImages" span="24" class="header">
      <van-swipe :autoplay="2500" indicator-color="#fe1111">
        <van-swipe-item v-for="(item, index) in carouselImages" :key="index">
          <van-image class="carousel-item"  height="160" :src="item.image" @click="bannerHandler(item.link)" />
        </van-swipe-item>
      </van-swipe>
    </van-col>
    <van-col class="mx-3 notice-box" span="24">
      <van-notice-bar
              @click="noticeHandler"
              :text="notifications"
              left-icon="volume-o"
      />
    </van-col>
    <van-col span="24" class="services">
      <van-row class="services-content">
        <van-col class="mx-3 services" span="24" v-for="(cate, index) in navBars" :key="index">
          <van-cell :value="cate.name" style="font-weight: bold" />
          <van-grid :column-num="4" :clickable="true" :center="true" :square="true">
            <van-grid-item v-for="(item, index) in cate.items" :key="index"
                           :icon="item.icon"
                           :text="item.name"
                           :to="item.link"
            />
          </van-grid>
        </van-col>
      </van-row>
    </van-col>
  </van-row>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      navBars: this.$store.getters.navBars,
      bootstrap: this.$store.getters.bootstrap,
      // notifications: this.$store.getters.notifications,
      carouselImages: this.$store.getters.carouselImages
    }
  },
  methods: {
    /** 提示信息 */
    maintain (e) {
      this.$dialog.alert({
        message: e.target.innerText ? '您点击了' + e.target.innerText : '近期开放，敬请期待!'
      })
    },

    /** 轮播图点击事件 */
    bannerHandler (link) {
      if (link.indexOf('http') > -1) {
        window.location.href = link
        return
      }
      this.$router.push({ path: link })
    },

    /** 轮播图点击事件 */
    noticeHandler () {
      this.$toast('点击了通知栏')
    }
  },

  computed: {
    notifications () {
      return this.$store.getters.notifications
    }
  }
}
</script>
<style>

</style>
