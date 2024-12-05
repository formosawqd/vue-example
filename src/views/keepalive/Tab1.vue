<template>
  <div>tab1</div>
</template>

<script>
export default {
  mounted() {
    console.log("mounted tab1");
  },
  activated() {
    console.log("tab1  Profile Activated");
  },
  deactivated() {
    console.log("tab1 Profile deactivated"); // 组件被移除时触发
  },
};
</script>

<style lang="less" scoped></style>
