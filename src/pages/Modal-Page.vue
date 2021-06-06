<template>
  <div class="modal-wrap">
    <modal
      :show="true"
      :width="350"
      :borderRadius="10"
      headerColor="rgb(78, 184, 255)"
      headerText="KYZ"
      headerTextColor="#fff"
      contentText="Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!"
      contentTextColor="#333"
      position="center"
      :btnGroupShow="true"
      confirmText="是"
      cancelText="否"
      @confirm="modalConfirm"
      @cancel="modalCancel"
      @close="modalClose"
    ></modal>
  </div>
</template>

<script>
export default {
  name: "Modal-Page",
  setup () {
    const modalConfirm = () => {
      console.log('Modal Confirm')
    }

    const modalCancel = () => {
      console.log('Modal Cancel')
    }

    const modalClose = () => {
      console.log('Modal Clolse')
    }

    return {
      modalConfirm,
      modalCancel,
      modalClose
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>