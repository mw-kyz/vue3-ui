<template>
  <div class="dot-box" v-if="hasDot">
    <div
      class="dot-item"
      v-for="item in itemLen"
      :key="item"
    >
      <a 
        href="javascript:;"
        class="dot-lk"
        :style="{ backgroundColor: (item - 1) === currentIndex ? dotBgColor : '#fff' }"
        @click="dotClick(item - 1)"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarDot',
  props: {
    itemLen: Number,
    currentIndex: Number,
    hasDot: {
      type: Boolean,
      default: true
    },
    dotBgColor: {
      type: String,
      default: '#ff5000'
    }
  },
  setup (props, ctx) {
    const dotClick = (index) => {
      ctx.emit('dotClick', index)
    }

    return {
      dotClick
    }
  }
}
</script>

<style lang="scss" scoped>
.dot-box {
  position: absolute;
  left: 50%;
  bottom: 30px;
  height: 13px;
  margin-left: -39px;
  text-align: center;
  font-size: 0;
  border-radius: 10px;
  z-index: 1;
  background-color: rgba(255, 255, 255, .3);

  .dot-item {
    display: inline-block;
    margin: 3px;

    .dot-lk {
      display: block;
      width: 8px;
      height: 0;
      padding-top: 8px;
      border-radius: 50%;
      background-color: #fff;
    }
  }
}
</style>
