<template>
  <div class="stars-wrap">
    <stars
      :num="num"
      :size="size"
      @getStarNum="getStarNum"
    ></stars>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: "Stars-Page",
  setup () {
    const state = reactive({
      num: 2,
      size: 36
    })

    const getStarNum = (num) => {
      console.log(num, '---')
    }


    return {
      ...toRefs(state),
      getStarNum
    }
  }
}
</script>

<style lang="scss" scoped>
.stars-wrap {
  display: flex;
  justify-content: center;
  margin-top: 66px;
}
</style>