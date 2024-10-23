<template>
  <div><el-button @click="debounceGetVal">点击</el-button></div>
</template>

<script>
import { debounce, throttle } from '../../utils';
export default {
  data() {
    return {};
  },
  created() {
    this.debounceGetVal = debounce(this.getVal, 1000);
    console.log(this.debounceGetVal);
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      let timer = setTimeout(() => {
        console.log('1秒之后的打印');
      }, 1000);
    },
    getVal() {
      console.log(1);
    },
  },
};
</script>

<style></style>
