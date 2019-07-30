<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link> |-->
<!--      <router-link to="/index">Index</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'Application',
    created () {
      this.$toast.loading({
        mask: true,
        message: '正在启动',
        duration: 1000
      });
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
