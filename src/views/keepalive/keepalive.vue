<template>
  <div>
    <a-tabs v-model="activeTab" type="card">
      <a-tab-pane
        v-for="(tab, index) in tabs"
        :key="tab.key"
        :tab="tab.label"
        :name="tab.name"
      >
      </a-tab-pane>
    </a-tabs>
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>
    <!-- component动态组件每次都会mounted 。 如果加了keep-alive，只有切换tab的第一次会触发mounted,其余的时候都不会-->
    <!-- activated 是在被包裹了keep-alive之后的每次切换tab会触发 -->
    <!-- deactivated 和 activated 是被包裹了keep-alive之后才会有的生命周期，切换tab就会触发当前的tab 的deactivated，触发另一个tab 的 activated -->
  </div>
</template>

<script>
import Tab1 from "./Tab1.vue"; // Tab1 组件
import Tab2 from "./Tab2.vue"; // Tab2 组件
import Tab3 from "./Tab3.vue"; // Tab3 组件

export default {
  name: "Tabs",
  components: {
    Tab1,
    Tab2,
    Tab3,
  },
  data() {
    return {
      activeTab: "tab1", // 默认选中的 Tab
      tabs: [
        { name: "tab1", label: "Tab 1", key: "tab1" },
        { name: "tab2", label: "Tab 2", key: "tab2" },
        { name: "tab3", label: "Tab 3", key: "tab3" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
/* 这里可以添加一些自定义样式 */
</style>
