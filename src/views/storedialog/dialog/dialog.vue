<template>
  <a-modal
    title="Title"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <p>modal</p>
  </a-modal>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleOk() {
      this.handleCancel();
    },
    handleCancel() {
      this.$store.commit("SetcollectInfo", {
        visibleDialog: false,
      });
      console.log(this.$store);
    },
  },
};
</script>

<style lang="scss" scoped></style>
