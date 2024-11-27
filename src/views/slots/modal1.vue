<template>
  <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel">
    <!-- 这里可以写:slot='name'  也可以写成#[name]  都是一样的意思
     这里循环渲染$slots,有的是匿名的，有的是具名的，:slot='name'这样就可以把匿名和具名的
     都写完，这里的是传到modal里面的，
     -->
    <template v-for="(item, name) in $slots" :slot="name">
      <!-- 这里的则是接收外面实际写的插槽的内容 -->
      <slot :name="name" :msg="msg"></slot>
    </template>
  </a-modal>

  <!-- <a-modal v-model="visible" title="Title" on-ok="handleOk">
    <template slot="footer">
        比如这里的footer 直接就写的是slot='footer' 则是modal自带的，modal需要的插槽格式
        然后里面的内容就相当于是外面传进来的插槽
      <a-button key="back" @click="handleCancel"> Return </a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="loading"
        @click="handleOk"
      >
        Submit
      </a-button>
    </template>
  </a-modal> -->
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      msg: "msg",
    };
  },
  mounted() {
    console.log(this.$slots);
  },
  methods: {
    handleOk() {},
    handleCancel() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style scoped>
.ant-modal div[aria-hidden="true"] {
  display: none !important;
}
</style>
