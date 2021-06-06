<template>
  <div id="nav" class="container">
    <div class="router-wrap">
      <router-link class="router-item" to="/">Home</router-link>
      <router-link class="router-item" to="/carousel">无缝轮播图</router-link>
      <router-link class="router-item" to="/magnifier">放大镜</router-link>
      <router-link class="router-item" to="/treemenu">多级菜单</router-link>
      <router-link class="router-item" to="/selector">下拉菜单</router-link>
      <router-link class="router-item" to="/stars">五星好评</router-link>
      <router-link class="router-item" to="/modal">模态框</router-link>
    </div>
    <router-view class="router-view" />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;

  .router-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
    padding-top: 20px; 
    border-right: 1px solid #ccc;

    .router-item {
      margin: 5px auto;
    }
  }

  .router-view {
    flex: 1;
  }
}
</style>
