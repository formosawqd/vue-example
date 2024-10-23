<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>

    <ModalComponent :visible="isModalVisible" v-if="isModalVisible">
      <!-- 传递多个默认插槽内容 -->
      <!-- <div>
        Content of Slot sdadsa
        <p>1</p>
        1
      </div>
      <div>Content of Slot 2</div>-->
      <a-button>按钮</a-button>
      <div @click="go">Content of Slot 3</div>
      <template #title>标题 </template>
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from './modal.vue';

export default {
  components: {
    ModalComponent,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    go() {
      console.log('点击了go');
    },
    showModal() {
      this.isModalVisible = true;
    },
  },
};
</script>
