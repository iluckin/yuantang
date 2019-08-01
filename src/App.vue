<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Application',
  beforeCreate () {
    this.$toast.loading({
      mask: true,
      message: '正在加载'
    })
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.$axios.get('sys/init').then(r => {
        this.$store.commit('notifications', r.data.data.notifications)
        this.$store.commit('carouselImages', r.data.data.carouselImages)
        this.$store.commit('navBars', r.data.data.navBars)
        this.$store.commit('bootstrap', true)
        this.$toast.clear()
      })
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Microsoft YaHei', Arial, Helvetica, 'STHeiti STXihei', Tohoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 8px 8px 0px 8px;
}
.mx-5 {
  margin-top: 5px;
  margin-bottom: 5px;
}
.mx-4 {
  margin-top: 4px;
  margin-bottom: 4px;
}
.mx-3 {
  margin-top: 3px;
  margin-bottom: 3px;
}
.mx-2 {
  margin-top: 2px;
  margin-bottom: 2px;
}
.mx-1 {
  margin-top: 1px;
  margin-bottom: 1px;
}
</style>
