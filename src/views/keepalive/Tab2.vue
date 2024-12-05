<template>
  <div>tab2</div>
</template>

<script>
export default {
  mounted() {
    console.log("mounted tab2");
  },
  activated() {
    console.log("tab2  Profile Activated");
  },
  deactivated() {
    console.log("tab2 Profile deactivated"); // 组件被移除时触发
  },
};
</script>

<style lang="less" scoped></style>
