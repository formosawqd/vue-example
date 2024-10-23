<template>
  <div>esm</div>
</template>

<script>
import { name, say, age } from './index';
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(name);
      console.log(age);
      say();
    },
  },
};
</script>

<style lang="scss" scoped></style>
