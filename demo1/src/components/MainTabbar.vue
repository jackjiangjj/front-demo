<template>
  <tar-bar>
    <tar-bar-item path="/home"><img src="../assets/imges/pro.svg"><div >首页</div></tar-bar-item>
    <tar-bar-item path="/cart"><img src="../assets/imges/che.svg"><div >购物车</div></tar-bar-item>
    <tar-bar-item path="/cate"><img  src="../assets/imges/cate.svg"><div >分类</div></tar-bar-item>
    <tar-bar-item path="/my"><img  src="../assets/imges/me.svg"><div >我的</div></tar-bar-item>
  </tar-bar>
</template>

<script>
  import TarBar from "./tarbar/TarBar";
  import TarBarItem from "./tarbar/TarBarItem";
    export default {
        name: "MainTabbar",
      components: {TarBarItem, TarBar}
    }
</script>

<style scoped>

</style>
