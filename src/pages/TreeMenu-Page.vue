<template>
  <div class="tree-menu-wrap">
    <tree-menu>
      <template v-for="item of menuData">
        <menu-item
          v-if="!item.children"
          :key="item.id"
        >
          <a href="">{{ item.title }}</a>
        </menu-item>
       <re-sub-menu 
        v-else
        :key="item.id"
        :data="item"
      ></re-sub-menu>
      </template>
    </tree-menu>
  </div>
</template>

<script>
import menuData from '@/data/menu'

export default {
  name: 'TreeMenu-Page',
  setup() {
    return {
      menuData
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-menu-wrap {
  width: 100%;
}
</style>