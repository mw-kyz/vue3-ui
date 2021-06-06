<template>
  <transition>
    <div class="car-item-box" v-if="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { 
  getCurrentInstance,
  reactive,
  toRefs,
  watch
} from 'vue'

export default {
  name: 'CarItem',
  setup () {
    const instance = getCurrentInstance()

    const state = reactive({
      selfIndex: instance.attrs.index,
      currentIndex: instance.parent.ctx.currentIndex
    })
    // 监听某个值的变化
    watch(() => {
      // 返回需要监听的变量
      return instance.parent.ctx.currentIndex 
    }, (value) => {
    // 当监听的变量改变时，将新的值赋给它
      state.currentIndex = value
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.car-item-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // 在进入显示框和离开显示框时设置动画
  &.v-enter-active,
  &.v-leave-active {
    transition: all 1s linear;
  }

  &.v-enter-active {
    // 下一张图标即将进入显示框时，图片的位置
    transform: translateX(100%);
    opacity: 0;
  }

  &.v-enter-to {
    // 图片进入显示框后的最终位置
    transform: translateX(0);
    opacity: 1;
  }

  &.v-leave-active {
    // 在当前图片即将离开显示框时，图片的位置
    transform: translateX(0);
    opacity: 1;
  }

  &.v-leave-to {
    // 当前图片离开显示框后的最终位置
    transform: translateX(-100%);
    opacity: 0;
  }

  img {
    width: 100%;
  }
}
</style>
