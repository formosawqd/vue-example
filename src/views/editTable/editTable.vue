<template>
  <div>
    编辑新增数据
    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >

    <Dialog :dialogVisible.sync="dialogVisible" v-if="dialogVisible"></Dialog>
  </div>
</template>

<script>
import Dialog from './Dialog.vue';

export default {
  components: {
    Dialog,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
