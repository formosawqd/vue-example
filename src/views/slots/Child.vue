<template>
  <div>
    <h3>子组件</h3>
    <p>子组件的内容</p>
    <!-- 向插槽传递一个动态数据 -->
    <slot :dynamicMessage="dynamicMessage"></slot>
    <slot name="title" :msg="msg"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicMessage: "这是动态传递的数据", // 动态数据
      msg: "这是子组件msg", // 动态数据
    };
  },
};
</script>
