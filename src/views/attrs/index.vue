<template>
  <div>
    <a-button @click="open">打开</a-button>
    <Modal :visible.sync="visible" v-if="visible" :msg="666"></Modal>
  </div>
</template>

<script>
import Modal from './modal.vue';
export default {
  name: 'modal',
  components: {
    Modal,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
