<template>
  <van-row class="banner-box">
    <div class="header">
      <van-col span="24">
        <van-skeleton v-if="!banners" title :row="5" style="background-color: white" />
        <van-swipe v-if="banners" :autoplay="2500" indicator-color="#fe1111">
          <van-swipe-item v-for="(image, index) in banners" :key="index">
            <van-image height="160" :src="image.image" @click="bannerClickEvent(image.title)" />
          </van-swipe-item>
        </van-swipe>
      </van-col>
      <van-col class="mx-3 notice-box" span="24">
        <van-notice-bar
                @click="noticeClickEvent"
                :text="notice"
                left-icon="volume-o"
        />
      </van-col>
    </div>
    <div class="main">
      <van-col span="24" class="mx-3 service-box">
        <van-cell value="圆堂服务" style="font-weight: bold" />
        <van-grid :column-num="4" :clickable="true" :center="true" :square="true">
          <van-grid-item
                  icon="http://deed.static.wowphp.cn/icons/house.png"
                  text="住宅产权"
                  to="/credentials/house"
          />
          <van-grid-item
                  icon="http://deed.static.wowphp.cn/icons/work-1.png"
                  text="商业产权"
                  to="/credentials/store"
          />
          <van-grid-item
                  icon="http://deed.static.wowphp.cn/icons/car.png"
                  text="车位产权"
                  to="/credentials/park"
          />
          <van-grid-item
                  @click="maintain"
                  icon="http://deed.static.wowphp.cn/icons/room.png"
                  text="二手房租售"
          />
          <van-grid-item
                  @click="maintain"
                  icon="http://deed.static.wowphp.cn/icons/loan.png"
                  text="金融贷款"
          />
          <van-grid-item
                  @click="maintain"
                  icon="http://deed.static.wowphp.cn/icons/net.png"
                  text="家庭宽带"
          />
        </van-grid>
      </van-col>

      <van-col span="24" class="mx-3 service-box">
        <van-cell value="品质生活" style="font-weight: bold" />
        <van-grid :column-num="4" :clickable="true" :center="true" :square="true">
          <van-grid-item
                  @click="maintain"
                  icon="http://deed.static.wowphp.cn/icons/youhua_home@2x.png"
                  text="有花有树"
          />
          <van-grid-item
                  @click="maintain"
                  icon="http://deed.static.wowphp.cn/icons/youwei_home@2x.png"
                  text="有滋有味"
          />
          <van-grid-item
                  @click="maintain"
                  icon="http://deed.static.wowphp.cn/icons/youshi_home@2x.png"
                  text="有人有事"
          />
          <van-grid-item
                  @click="maintain"
                  icon="http://deed.static.wowphp.cn/icons/youjiu_home@2x.png"
                  text="有食有酒"
                  to="/nice"
          />
        </van-grid>
      </van-col>
    </div>
  </van-row>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        notice: '',
        banners: null
      }
    },
    mounted () {
      this.getData();
    },
    methods: {
      getData() {
        ['banner', 'notice'].forEach((url,index) => {
          this.$axios.get(url)
            .then(r => {
              if (index) {
                this.notice = r.data.data.notice
              }
              else {
                this.banners = r.data.data
              }
            })
            .catch(e => {
              this.$toast.alert({
                message: '网络错误，请重试!'
              })
            })
        })
      },
      maintain(e) {
        this.$dialog.alert({
          message: e.target.innerText ? '您点击了' + e.target.innerText : '近期开放，敬请期待!'
        });
      },
      bannerClickEvent(index) {
        this.$toast('点击了第' + (index + 1) + '个图片');
      },
      noticeClickEvent() {
        this.$toast('点击了通知栏');
      }
    }
  }
</script>
<style scoped>

</style>
