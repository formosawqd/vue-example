<template>
  <div>
    <h2>父组件</h2>
    <child>
      <!-- 在插槽中传递不同的数据 -->
      <template #default="{ dynamicMessage }">
        <p>来自子组件的动态消息: {{ dynamicMessage }}</p>
      </template>

      <template #title="{ msg }"> {{ msg }}</template>

      <!-- 表格的slot-action  实际上就是用的作用域插槽，把表格那行的数据给传到了外层，record就是那行数据，text是那行里面的某一列的数据 -->
      <!-- 直接#action="text,record" 也是一样的 -->
      <!-- <template slot="action" slot-scoped="text,record">
        <a href="javascript:;">Delete</a>
      </template> -->
    </child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  components: {
    Child,
  },
};
</script>
