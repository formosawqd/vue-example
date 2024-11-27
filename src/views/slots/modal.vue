<template>
  <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
    <!-- 动态渲染传递的默认插槽 -->
    <!-- 这里的#[name]="scopeData" 实际上就是 slot-scope='scopeData' 把组件库的插槽的数据传出来， -->
    <template v-for="(_, name) in $slots" #[name]="scopeData">
      <!-- v-bind="scopeData"这里的意思是又把scopeData传给外层的组件了 -->
      <slot :name="name" v-bind="scopeData"></slot>
    </template>
    <template> </template>
    <template #footer>
      <a-button @click="handleCancel">Cancel</a-button>
      <a-button type="primary" @click="handleOk">Confirm</a-button>
    </template>
  </a-modal>
</template>
<!-- 这里 v for 循环的是一个对象，对象上有一个default属性，,前提是父组件传的是默认插槽,如果传了具名插槽,就会多一个key,key就是传下来
 的那个名字,name是对象的key，所以把父组件传下来的默认插槽都循环了一遍， -->
<!-- 如果父组件有具名插槽,那么得看当前这个组件有没有具名的那个slot 有才会生效 -->
<script>
export default {
  name: "ModalComponent",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  mounted() {
    console.log(this.$slots);
  },
  methods: {
    handleOk() {
      this.$emit("update:visible", false);
    },
    handleCancel() {
      this.$emit("update:visible", false);
    },
  },
};
</script>
