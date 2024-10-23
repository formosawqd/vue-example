<template>
  <a-table :columns="$attrs.columns" :data-source="$attrs.dataSource" bordered>
    <!-- 这里需要传slot=xxx 并且要用作用域来接收a-table里面对应的数据-->
    <template
      v-for="(item, index) in slotsList"
      :slot="item"
      slot-scope="text, record"
    >
      <!-- 这里看是把当前的这个字段的内容传出去还是整行一起传出去，看需求 -->
      <!-- 这里是要展示外面传进来的具名插槽，并且把record传出去 -->
      <slot :name="item" :text="text"></slot>
    </template>
  </a-table>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    slotsList() {
      // 这里也可以通过props来取columns
      //   console.log(
      //     this.$attrs.columns
      //       .filter((el) => el.scopedSlots)
      //       .map((el) => el.scopedSlots.customRender),  ['status']
      //   );
      return this.$attrs.columns
        .filter((el) => el.scopedSlots)
        .map((el) => el.scopedSlots.customRender);
    },
  },
};
</script>

<style lang="scss" scoped></style>
