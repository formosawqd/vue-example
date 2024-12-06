<template>
  <div>
    <!-- 查看按钮：只有有 "view" 权限的用户才能看到 -->
    <a-button v-if="hasPermission.includes('view')" type="primary" @click="view"
      >view</a-button
    >

    <!-- 编辑按钮：只有有 "edit" 权限的用户才能看到 -->
    <a-button v-if="hasPermission.includes('edit')" type="primary" @click="edit"
      >Edit</a-button
    >

    <!-- 删除按钮：只有有 "delete" 权限的用户才能看到 -->
    <a-button
      v-if="hasPermission.includes('delete')"
      type="danger"
      @click="deletes"
      >Delete</a-button
    >

    <!-- 禁用按钮：只有有 "edit" 权限的用户才能启用 -->
    <a-button
      :disabled="!hasPermission.includes('delete')"
      type="primary"
      @click="edit"
      >Edit (Disabled if no permission)</a-button
    >

    <!-- 禁用按钮：只有有 "delete" 权限的用户才能启用 -->
    <a-button
      :disabled="!hasPermission.includes('delete')"
      type="danger"
      @click="deletes"
      >Delete (Disabled if no permission)</a-button
    >
  </div>
</template>

<script>
export default {
  computed: {
    // 获取权限信息
    hasPermission() {
      console.log(this.$store.getters.hasPermission);

      return this.$store.getters.hasPermission;
    },
  },
  created() {
    // 模拟获取权限数据
  },
  methods: {
    view() {},
    edit() {
      this.$message.success("Editing...");
    },
    deletes() {
      this.$message.success("Deleting...");
    },
  },
};
</script>

<style scoped>
/* 这里可以添加一些自定义样式 */
</style>
