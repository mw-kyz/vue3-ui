<template>
  <div class="selecotr-box" v-focus>
    <selector-input
      :placeholder="placeholder"
      :value="inputValue"
      @searchOptions="searchOptions"
    ></selector-input>
    <selector-menu
      :data="selectorData"
      :searchValue="searchValue"
      @setItemValue="setItemValue"
    ></selector-menu>
  </div>
</template>

<script>
import SelectorInput from './Input'
import SelectorMenu from './Menu'

import { focus } from '../../directives'

import { reactive, toRefs } from 'vue'

export default {
  name: 'Selector',
  directives: {
    focus
  },
  components: {
    SelectorInput,
    SelectorMenu
  },
  props: {
    placeholder: String,
    selectorData: Array
  },
  setup (props, ctx) {
    const state = reactive({
      inputValue: '',
      searchValue: ''
    })

    const setItemValue = item => {
      state.inputValue = item.text
      // ctx.emit('setItemValue', item.value)
    }

    const searchOptions = value => {
      state.searchValue = value
    }

    return {
      ...toRefs(state),
      setItemValue,
      searchOptions
    }
  }
}
</script>

<style lang="scss" scoped>
.selecotr-box {
  position: relative;
  width: 300px;
}
</style>
