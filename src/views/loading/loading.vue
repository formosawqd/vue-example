<template>
  <div>
    <a-button @click="loading">开始loading</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: null,
    };
  },
  mounted() {
    // 使用全局指令
  },
  methods: {
    loading() {
      this.loader = this.$loading.show({
        canCancel: true,
        color: "#000000",
        loader: "spinner",
        width: 64,
        height: 64,
        backgroundColor: "#409eff",
        opacity: 0.5,
      });
      setTimeout(() => {
        console.log("关闭");
        this.loader.hide();
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped></style>
