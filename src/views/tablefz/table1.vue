<template>
  <a-table v-bind="$props" v-on="$listeners" :rowKey="(record, index) => index">
    <template
      v-for="col in slos"
      :slot="col.scopedSlots.customRender"
      slot-scope="text, record"
    >
      <slot :name="col.scopedSlots.customRender" :record="record"></slot>
    </template>
  </a-table>
</template>

<script>
import { Table } from 'ant-design-vue';
export default {
  name: 'GxTable',
  props: {
    ...Table.props,
    bordered: {
      type: Boolean,
      default: true,
    },
    pagination: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    slos() {
      console.log(this.$props.columns.filter((el) => el.scopedSlots));

      return this.$props.columns.filter((el) => el.scopedSlots);
    },
  },
};
</script>
