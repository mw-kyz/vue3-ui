<template>
  <div class="tree-menu-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TreeMenu",
  setup() {
    
  }
}
</script>

<style lang="scss" scoped>
.tree-menu-box {
  width: 300px;
  background-color: rgb(39, 37, 37);
  color: #fff;
}
</style>