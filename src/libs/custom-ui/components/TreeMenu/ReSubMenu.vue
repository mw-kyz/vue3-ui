<template>
   <sub-menu>
    <template #title>
      <a href="">{{ data.title }}</a>
    </template>
    <template v-for="c of data.children">
      <menu-item v-if="!c.children" :key="c.id">
        <a href="">{{ c.title }}</a>
      </menu-item>
      <re-sub-menu v-else :data="c" :key="c.id"></re-sub-menu>
    </template>
  </sub-menu>
</template>

<script>
export default {
  name: "ReSubMenu",
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>

</style>