<template>
  <div class="magnifier-wrap">
    <magnifier
      :link="link"
      :blank="blank"
      :imgUrl="require(`@/assets/imgs/ybmq.jpg`)"
      :imgAlt="imgAlt"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    ></magnifier>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'Magnifier-Page',
  setup () {
    const state = reactive({
      imgAlt: '哦内撒嘛',
      link: 'https://baidu.com',
      blank: true,
      imgWidth: 375,
      imgHeight: 530,
      magWidth: 150,
      magHeight: 150
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss">
.magnifier-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
