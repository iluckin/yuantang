<template>
  <div class="container credential">
    <h4 class="credential-title">圆堂产权办理查询系统</h4>
    <div class="children">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Credential'
}
</script>

<style scoped>
.credential {
  margin: -23px -8px 0px -8px;
  background-image: url(../assets/images/bg2.png);
  background-position: top;
  background-position-y: -235px;
  /*background-position-x: 5px;*/
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 120%;
}
.children {
  margin-top: -18px;
  border-radius: 8px 8px 0px 0px;
  margin-left: 8px;
  margin-right: 8px;
  overflow: hidden;
}
.credential-title {
  color: white;
  font-size: 18px;
  line-height: 6;
}
</style>
