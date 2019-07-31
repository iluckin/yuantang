<template>
  <van-row class="section">
    {{ boot }}
    <van-skeleton v-if="!boot" title :row="15" style="background-color: white" />
    <van-col v-if="boot" span="24" class="header">
      <van-swipe :autoplay="2500" indicator-color="#fe1111">
        <van-swipe-item v-for="(item, index) in system.banners" :key="index">
          <van-image height="160" :src="item.image" @click="bannerHandler(item.title)" />
        </van-swipe-item>
      </van-swipe>
    </van-col>
    <van-col v-if="boot" class="mx-3 notice-box" span="24">
      <van-notice-bar
              @click="noticeHandler"
              :text="system.notices"
              left-icon="volume-o"
      />
    </van-col>
    <van-col span="24" v-if="boot">
      <van-row>
        <van-col class="mx-3 services" span="24" v-for="(items, name) in system.menus" :key="name">
          <van-cell :value="name" style="font-weight: bold" />
          <van-grid :column-num="4" :clickable="true" :center="true" :square="true">
            <van-grid-item v-for="(item, index) in items" :key="index"
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
      system: null,
      boot: false
    }
  },
  beforeCreate () {
    if (! this.$store.state.bootstrap) {
      this.$axios.get('sys/init').then(r => {
        this.$store.dispatch('setSystem', r.data.data)
        this.$store.dispatch('bootstrap')
      })
    }
  },
  created () {
    this.system = this.$store.getters.system
    this.boot = true
  },
  methods: {
    /** 提示信息 */
    maintain (e) {
      this.$dialog.alert({
        message: e.target.innerText ? '您点击了' + e.target.innerText : '近期开放，敬请期待!'
      })
    },

    /** 轮播图点击事件 */
    bannerHandler (index) {
      this.$toast('点击了' + index)
    },

    /** 轮播图点击事件 */
    noticeHandler () {
      this.$toast('点击了通知栏')
    }
  }
}
</script>
