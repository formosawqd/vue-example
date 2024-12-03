<template>
  <a-layout>
    <a-layout-sider
      width="200"
      style="height: 100vh"
      class="site-layout-background"
    >
      <a-menu
        mode="inline"
        :default-selected-keys="[selectedKey]"
        style="height: 100%; border-right: 0"
        @click="clickMenu"
        :openKeys="openKeys"
        @openChange="handleOpenChange"
        :selectedKey="selectedKey"
        theme="dark"
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
    <a-layout style="height: 100%">
      <a-layout-header style="height: 80px">
        <span>home</span>
        <a-button @click="logout"> exit</a-button></a-layout-header
      >
      <a-layout-content style="height: calc(100vh - 80px); padding: 20px">
        <router-view />
      </a-layout-content>
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

/* 主菜单容器 */
.a-menu {
  background-color: #001529; /* 修改菜单背景色 */
  color: #ffffff; /* 修改文字颜色 */
  font-size: 14px; /* 调整文字大小 */
}

/* 菜单项样式 */
.a-menu-item {
  border-radius: 4px; /* 圆角效果 */
  margin: 4px 0; /* 调整间距 */
  padding-left: 16px !important; /* 调整文字的左边距 */
}

/* 高亮菜单项 */
.a-menu-item-selected {
  background-color: #1890ff !important; /* 高亮背景色 */
  color: #ffffff !important; /* 高亮文字颜色 */
  font-weight: bold; /* 高亮加粗 */
  box-shadow: 0 0 6px rgba(24, 144, 255, 0.6); /* 添加阴影效果 */
}

/* 子菜单样式 */
.a-sub-menu {
  margin: 4px 0; /* 子菜单间距 */
}

/* 子菜单标题样式 */
.a-sub-menu-title {
  color: #8c8c8c; /* 子菜单标题文字颜色 */
  font-weight: 500; /* 字体加粗 */
}

/* 子菜单展开箭头 */
.a-menu-submenu-arrow {
  color: #ffffff; /* 修改箭头颜色 */
}

/* Hover 效果 */
.a-menu-item:hover,
.a-sub-menu-title:hover {
  background-color: rgba(24, 144, 255, 0.2); /* 鼠标悬浮背景色 */
  color: #1890ff; /* 鼠标悬浮文字颜色 */
}
</style>
