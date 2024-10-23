<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>child computed age : {{ age }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {
    age() {
      return this.info.age;
    },
  },
  watch: {
    age(newValue) {
      console.log(newValue);
    },
  },
  methods: {
    confirm() {
      this.$emit('changeInfo', 20);
      //   子组件修改父组件传下来的数据，然后父组件里面的数据，更改了之后，子组件的数据也是最新的
      //   this.handleClose();
    },
    handleClose() {
      this.$emit('update:dialogVisible', false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
