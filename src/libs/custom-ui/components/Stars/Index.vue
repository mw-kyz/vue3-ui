<template>
  <div class="stars-box">
    <span
      v-for="num in 5"
      :key="num"
      :class="[
        'iconfont icon-star',
        num <= starNum ? 'active' : ''
      ]"
      :style="{ fontSize: size + 'px' }"
      @click="setStarNum(num)"
    ></span>
  </div>
</template>

<script>
import { useStars } from '../../hooks'

export default {
  name: "Stars",
  props: {
    num: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 16
    }
  },
  setup (props, ctx) {
    const [ starNum, setStarNum] = useStars(props.num, () => {
      ctx.emit('getStarNum', starNum.value)
    })

    return {
      starNum,
      setStarNum
    }
  }
}
</script>

<style lang="scss" scoped>
.stars-box {
  .icon-star {
    color: #999;
    transition: color .3s;

    &.active {
      color: #fbab06;
    }
  }
}
</style>