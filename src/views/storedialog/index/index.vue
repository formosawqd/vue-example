<template>
  <div>
    <h2>通过监听stroe来打开dialog</h2>
    <a-button @click="open">打开dialog </a-button>
    <Dialog v-if="visible" :visible.sync="visible"></Dialog>
  </div>
</template>

<script>
import Dialog from "../dialog/dialog.vue";
export default {
  components: {
    Dialog,
  },
  computed: {
    // 不直接打开modal。通过修改vuex里面的数据，监听里面的数据，来打开modal,应用于跨多页面的情况，需要在a页面的按钮点击打开 d页面的modal，
    // 就是用一个计算属性，另外需要注意以下对象的覆盖问题
    visible() {
      console.log("collectInfo", this.$store.state.collectInfo);
      return this.$store.state.collectInfo?.visibleDialog;
    },
  },
  methods: {
    open() {
      this.$store.commit("SetcollectInfo", {
        visibleDialog: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
