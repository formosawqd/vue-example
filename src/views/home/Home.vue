<template>
  <a-layout>
    <a-layout-sider width="256" class="site-layout-background">
      <a-menu
        mode="inline"
        :default-selected-keys="[selectedKey]"
        style="height: 100%; border-right: 0"
        @click="clickMenu"
        :openKeys="openKeys"
        @openChange="handleOpenChange"
        :selectedKey="selectedKey"
      >
        <!-- 动态渲染菜单项 -->
        <template v-for="menuItem in menuData">
          <a-menu-item v-if="!menuItem.children" :key="menuItem.path">
            <a-icon :type="menuItem.icon" />
            <span>{{ menuItem.label }}</span>
          </a-menu-item>

          <!-- 渲染子菜单 -->
          <a-sub-menu v-else :key="menuItem.path" :title="menuItem.label">
            <template v-for="child in menuItem.children">
              <a-menu-item :key="child.path">
                <a-icon :type="child.icon" />
                <span>{{ child.label }}</span>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <span>home</span>
        <a-button @click="logout"> exit</a-button></a-layout-header
      >
      <a-layout-content> <router-view /> </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "AppMenu",
  data() {
    return {
      menuData: [], // 存储从后端获取的菜单数据
      openKeys: [], // Tracks which sub-menus are expanded
    };
  },
  async created() {
    try {
      this.menuData = JSON.parse(sessionStorage.getItem("menuList"));
    } catch (error) {
      console.error("获取菜单数据失败:", error);
    }
  },
  watch: {},
  computed: {
    selectedKey() {
      return this.$route.path || "/home";
    },
  },
  mounted() {
    // 这里根据路由需要配置其他信息，就直接存sessionStorage 里，也是一样的
    this.openKeys = sessionStorage.getItem("openKeys")
      ? [sessionStorage.getItem("openKeys")]
      : [];
    console.log(this.openKeys);
  },
  methods: {
    handleOpenChange(keys) {
      console.log(...keys);
      this.openKeys = keys;
      sessionStorage.setItem("openKeys", keys);
    },
    logout() {
      sessionStorage.clear();
      this.$router.push("/login"); // 跳转到登录页
    },
    clickMenu({ item, key, keyPath }) {
      this.$router.push({
        path: key,
      });
    },
  },
};
</script>

<style scoped lang="less">
.site-layout-background {
  background: #fff;
}
.right {
  height: 100vh;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
</style>
