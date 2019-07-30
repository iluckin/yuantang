<template>
  <van-row class="banner-box">
    <div class="header">
      <van-col span="24">
        <van-swipe :autoplay="2500">
          <van-swipe-item v-for="(image, index) in banners" :key="index">
            <van-image height="160" :src="image" @click="bannerClickEvent(index)" />
          </van-swipe-item>
        </van-swipe>
      </van-col>
      <van-col class="mx-3 notice-box" span="24">
        <van-notice-bar
                @click="noticeClickEvent"
                text=" 👏 圆堂产权办理查询系统正式上线啦~"
                left-icon="volume-o"
        />
      </van-col>
    </div>
    <div class="main">
      <van-col span="24" class="mx-3 service-box">
        <van-cell value="圆堂服务" style="font-weight: bold" />
        <van-grid :column-num="4" clickable="true" center="true" square="true">
          <van-grid-item
                  @click="maintain"
                  icon="http://deed.static.wowphp.cn/icons/house.png"
                  text="住宅产权"
          />
          <van-grid-item
                  @click="maintain"
                  icon="http://deed.static.wowphp.cn/icons/work-1.png"
                  text="商业产权"
          />
          <van-grid-item
                  @click="maintain"
                  icon="http://deed.static.wowphp.cn/icons/car.png"
                  text="车位产权"
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
        <van-grid :column-num="4" clickable="true" center="true" square="true">
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
          />
        </van-grid>
      </van-col>
    </div>
  </van-row>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        banners: [
          'http://deed.static.wowphp.cn/640.jpeg',
          'http://deed.static.wowphp.cn/images/banners/20190725/B5d390ff8daac9.jpg',
          'http://deed.static.wowphp.cn/images/banners/20190725/B5d390ecba94e1.jpg/SrL5SZNqUthxNIg3zJMbSyu4DJ2afvD6WNu23FyV.jpeg',
        ]
      }
    },
    methods: {
      maintain() {
        this.$dialog.alert({
          message: '此服务近期上线，敬请期待！'
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
.main {
  height: calc(100vh - 300px) !important;
}
</style>
