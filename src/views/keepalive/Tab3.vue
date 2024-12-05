<template>
  <div>tab3</div>
</template>

<script>
export default {
  mounted() {
    console.log("mounted tab3");
  },
  activated() {
    console.log("tab3  Profile Activated");
  },
  deactivated() {
    console.log("tab3 Profile deactivated"); // 组件被移除时触发
  },
};
</script>

<style lang="less" scoped></style>
