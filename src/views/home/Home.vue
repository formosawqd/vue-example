<template>
  <a-layout>
    <a-layout-sider width="256" class="site-layout-background">
      <a-menu
        mode="inline"
        :default-selected-keys="[selectedKey]"
        style="height: 100%; border-right: 0"
        @click="clickMenu"
      >
        <!-- 动态渲染菜单项 -->
        <template v-for="menuItem in menuData">
          <a-menu-item v-if="!menuItem.children" :key="menuItem.name">
            <a-icon :type="menuItem.icon" />
            <span>{{ menuItem.label }}</span>
          </a-menu-item>

          <!-- 渲染子菜单 -->
          <a-sub-menu v-else :key="menuItem.name" :title="menuItem.label">
            <template v-for="child in menuItem.children">
              <a-menu-item :key="child.name">
                <a-icon :type="child.icon" />
                <span>{{ child.label }}</span>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <div class="right">
      <span>home</span>
      <a-button @click="logout"> exit</a-button>
    </div>
  </a-layout>
</template>

<script>
export default {
  name: "AppMenu",
  data() {
    return {
      menuData: [], // 存储从后端获取的菜单数据
      selectedKey: "Home", // 当前选中的菜单项的 key
    };
  },
  async created() {
    try {
      this.menuData = JSON.parse(sessionStorage.getItem("menuList"));
    } catch (error) {
      console.error("获取菜单数据失败:", error);
    }
  },
  mounted() {},
  methods: {
    logout() {
      sessionStorage.clear();
      this.$router.push("/login"); // 跳转到登录页
    },
    clickMenu({ item, key, keyPath }) {
      this.$router.push({
        name: key,
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
  width: 80%;
  display: flex;
  justify-content: space-between;
}
</style>
