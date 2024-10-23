<template>
  <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel">
    <template #footer>
      <a-button @click="handleCancel">Cancel</a-button>
      <!-- <a-button type="primary" @click="handleOk">Confirm</a-button> -->
    </template>
  </a-modal>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  mounted() {
    // console.log(this.$attrs);
    // console.log(this.$parent.$data);
    // console.log(this.$props);
  },
  methods: {
    handleOk() {
      this.$emit('update:visible', false);
    },
    handleCancel() {
      this.$emit('update:visible', false);
    },
  },
};
</script>
