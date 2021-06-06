<template>
  <div 
    class="carousel-box"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div class="inner">
      <CarDot 
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      />
      <CarDirector
        dir="prev"
        @dirClick="dirClick"
      />
       <CarDirector
        dir="next"
        @dirClick="dirClick"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { 
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance
} from 'vue'

import CarDot from './Dot'
import CarDirector from './Director'

export default {
  name: 'Carousel',
  components: {
    CarDot,
    CarDirector
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    initial: {
      type: Number,
      default: 0
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    },
    dotBgColor: String
  },
  setup (props) {
    // 获取当前组件的父组件的实例
    const instance = getCurrentInstance()
    let t = null

    const state = reactive({
      currentIndex: props.initial, // 定义当前显示的图片下标，初始为用户设置的起始值
      itemLen: 0 // 当前slot下的图片数量，默认为0
    })
    // 定义播放轮播图的方法
    const autoPlay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex('next')
        }, props.duration)
      }
    }
    // 通过下标设置当前显示的图片
    const setIndex = (dir) => {
      // dir是轮播方向
      switch (dir) {
        case 'next':
          state.currentIndex += 1
          // 如果轮播到最后一张图
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0
          }
          break
        case 'prev':
          state.currentIndex -= 1
          // 如果轮播到最后一张图
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1
          }
          break
        default:
          break
      }
    }

    const dotClick = (index) => {
      // 清除之前的计时器
      _clearIntervalFn()
      state.currentIndex = index
    }

    const dirClick = (dir) => {
      // 清除之前的计时器
      _clearIntervalFn()
      setIndex(dir)
    }

    const mouseEnter = () => {
      _clearIntervalFn()
    }

    const mouseLeave = () => {
      autoPlay()
    }

    function _clearIntervalFn () {
      clearInterval(t)
      t = null
    }

    // 在组件挂载的时候执行轮播的方法
    onMounted(() => {
      // 获取slot下car-item的数量
      state.itemLen = instance.slots.default()[0].children.length
      autoPlay()
    })
    // 组件销毁前清楚定时器
    onBeforeUnmount(() => {
      _clearIntervalFn()
    })

    return {
      ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick
    }
  }
}
</script>

<style lang="scss">
.carousel-box {
  width: 100%;
  height: 100%;

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
