<template>
  <div class="menu-item-box">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "MenuItem",
  setup() {
    
  }
}
</script>

<style lang="scss" scoped>
.menu-item-box {
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>
