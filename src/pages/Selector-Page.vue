<template>
  <div class="selector-wrap">
    <selector
      placeholder="请选择框架"
      :selector-data="selectorData"
    ></selector>
  </div>
</template>

<script>
import selectorData from '@/data/selector'

export default {
  name: 'Selector-Page',
  setup() {
    return {
      selectorData
    }
  }
}
</script>

<style lang="scss" scoped>
.selector-wrap {
  display: flex;
  justify-content: center;
  margin-top: 66px;
}
</style>