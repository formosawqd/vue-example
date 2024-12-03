<template>
  <div>
    <a-button @click="show">点击</a-button>
    <div v-for="item in selectedData" :key="item.id">
      <span>{{ item.name }}</span>
      <!-- <span>{{ item.age }}</span>
            <span>{{ item.address }}</span> -->
    </div>
    <modal
      v-if="showModal"
      @confirmSelect="confirmSelect"
      :selectedData="selectedData"
      v-model="showModal"
    >
    </modal>
  </div>
</template>

<script>
import modal from './modal.vue';
export default {
  components: {
    modal,
  },
  data() {
    return {
      showModal: false,
      selectedData: [],
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    confirmSelect(data) {
      console.log(data);
      this.selectedData = data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
