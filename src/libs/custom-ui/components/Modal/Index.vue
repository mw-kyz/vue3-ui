<template>
  <div class="modal-mask" v-show="modalShow">
    <div
      class="modal-box"
      ref="modal"
      :style="{
        width: width + 'px',
        borderRadius: borderRadius + 'px',
        marginLeft: - width / 2 + 'px',
        top: position === 'center' ? '50%' : '50px',
        marginTop: position === 'center' ? (- modalHeight / 2 + 'px') : ''
      }"
    >
      <header
        class="header"
        :style="{
          color: headerTextColor,
          backgroundColor: headerColor
        }"
      >
        <h1>{{ headerText }}</h1>
        <a
          href="javascript:;"
          :style="{
            color: headerTextColor
          }"
          @click="close"
        >&times;</a>
      </header>
      <article class="content">
        <p
          :style="{
            color: contentTextColor
          }"
        >{{ contentText }}</p>
      </article>
      <div class="btn-group" v-if="btnGroupShow">
        <button
          class="btn btn-confirm"
          :style="{
            backgroundColor: headerColor
          }"
          @click="confirm"
        >{{ confirmText }}</button>
        <button class="btn btn-cancel" @click="cancel">{{ cancelText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs } from 'vue'

export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 300
    },
    borderRadius: {
      type: Number,
      default: 0
    },
    headerColor: {
      type: String,
      default: '#000'
    },
    headerText: {
      type: String,
      default: ''
    },
    headerTextColor: {
      type: String,
      default: '#fff'
    },
    contentText: {
      type: String,
      default: ''
    },
    contentTextColor: {
      type: String,
      default: '#000'
    },
    position: {
      type: String,
      default: 'top'
    },
    btnGroupShow: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  setup (props, ctx) {
    const modal = ref(null)

    const state = reactive({
      modalHeight: 0,
      modalShow: props.show
    })

    onMounted(() => {
      state.modalHeight = modal.value.offsetHeight
    })

    const confirm = () => {
      state.modalShow = false
      ctx.emit('confirm')
    }

    const cancel = () => {
      state.modalShow = false
      ctx.emit('cancel')
    }

    const close = () => {
      state.modalShow = false
      ctx.emit('close')
    }


    return {
      ...toRefs(state),
      modal,
      confirm,
      cancel,
      close
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: relative;
  top: 0;
  left: 0px;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);

  .modal-box {
    position: absolute;
    width: 100%;
    left: 50%;
    z-index: inherit;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 1px 2px 3px #333;

    .header {
      height: 43px;
      padding: 0 15px;
      box-sizing: border-box;

      h1 {
        display: inline-block;
        font-size: 18px;
        line-height: 43px;
      }

      a {
        float: right;
        font-size: 20px;
        line-height: 43px;
      }
    }

    .content {
      padding: 15px;
      box-sizing: border-box;
    }

    .btn-group {
      height: 30px;
      padding: 10px 15px;
      border-top: 1px solid #ddd;

      .btn {
        float: right;
        min-width: 66px;
        height: 30px;
        font-size: 14px;
        border-radius: 6px;
        cursor: pointer;

        &.btn-confirm {
          color: #fff;
          margin-left: 15px;
        }

         &.btn-cancel {
          color: #666;
          background-color: #ddd;
        }
      }
    }
  }
}
</style>