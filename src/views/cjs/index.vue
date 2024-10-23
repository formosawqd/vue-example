<template>
  <div>cjs</div>
</template>

<script>
const mo = require('./index');
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(mo);
      console.log(mo.name);
      mo.say();
    },
  },
};
</script>

<style lang="scss" scoped></style>
