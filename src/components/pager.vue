<template>
  <a-pagination
    class="pagination"
    show-size-changer
    show-quick-jumper
    :default-current="pagination.currentPage"
    :total="pagination.total"
    :showTotal="(total) => `共${total}条`"
    :pageSizeOptions="['10', '20', '30', '40']"
    @change="onChange"
    @showSizeChange="showSizeChange"
  />
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onChange(current, pageSize) {
      let pagination = {
        currentPage: current,
        pageSize: pageSize,
        total: this.pagination.total,
      };
      this.$emit("update:pagination", pagination);
      // 这里要先把pagnition先传出去，不然分页的还没有改，就先请求了
      this.$emit("onPageChange");
    },
    showSizeChange(current, pageSize) {
      let pagination = {
        currentPage: current,
        pageSize: pageSize,
        total: this.pagination.total,
      };
      this.$emit("update:pagination", pagination);
      this.$emit("sizeChange");
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  margin-top: 20px;
  margin-left: 20px;
}
</style>
