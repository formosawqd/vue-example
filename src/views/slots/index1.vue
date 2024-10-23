<template>
  <div>
    <a-button @click="visible = true"></a-button>
    <Modal1 :visible.sync="visible" v-if="visible">
      <div class="btn">
        <a-button @click="btn1">1</a-button>
        <a-button>2</a-button>
      </div>
      <template slot="title"> <div>标题</div> </template>
      <template slot="footer">
        <a-button type="primary">关了221</a-button></template
      >
    </Modal1>
  </div>
</template>

<script>
import Modal1 from './modal1.vue';
export default {
  components: {
    Modal1,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    btn1() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
