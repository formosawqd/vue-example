<template>
  <div>
    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >
    parent: info
    {{ info.age }}
    <Child
      v-if="dialogVisible"
      :dialogVisible.sync="dialogVisible"
      :info="info"
      @changeInfo="changeInfo"
    ></Child>
  </div>
</template>

<script>
import Child from './child.vue';
export default {
  components: {
    Child,
  },
  data() {
    return {
      dialogVisible: false,
      info: {
        name: 'formosa',
        age: 18,
      },
    };
  },
  methods: {
    changeInfo(data) {
      this.info.age = data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
