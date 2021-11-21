<template>
  <div class="tab-bar-item" @click="itemclick()">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TarBarItem",
      props:{
          path: String
      },
      methods:{
          itemclick:function () {
                this.$router.replace(this.path)
          }
      }
    }
</script>

<style scoped>
 .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
  }
  .tab-bar-item:hover{
    background-color: coral;
  }
</style>
