<template>
  <a-layout>
    <a-layout-sider
      width="160"
      style="height: 100vh"
      class="site-layout-background"
      :collapsed="collapsed"
    >
      <div class="collapse-btn" @click="toggleCollapsed">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </div>
      <a-menu
        mode="inline"
        :default-selected-keys="[selectedKey]"
        style="height: 100%; border-right: 0"
        @click="clickMenu"
        :openKeys="openKeys"
        @openChange="handleOpenChange"
        :selectedKey="selectedKey"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <!-- 动态渲染菜单项 -->
        <template v-for="menuItem in menuData">
          <a-sub-menu :key="menuItem.path">
            <span slot="title"
              ><a-icon :type="menuItem.icon" /><span>{{
                menuItem.menuName
              }}</span></span
            >

            <template v-for="child in menuItem.children">
              <a-menu-item :key="child.path">
                <a-icon :type="child.icon" />
                <span>{{ child.menuName }}</span>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout style="height: 100%">
      <a-layout-header class="header" style="height: 80px">
        <div class="logo">
          <!-- <img src="../../assets/img/1 (1).png" alt="" /> -->
        </div>
        <a-button class="btn" @click="logout"> exit</a-button></a-layout-header
      >
      <a-layout-content style="height: calc(100vh - 80px); padding: 15px">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { storageHandler } from "@/utils/index";
export default {
  name: "home",
  data() {
    return {
      menuData: [], // 存储从后端获取的菜单数据
      openKeys: [], // Tracks which sub-menus are expanded
      collapsed: false,
    };
  },
  async created() {},
  watch: {},
  computed: {
    selectedKey() {
      return this.$route.path || "/home";
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    init() {
      try {
        this.menuData = JSON.parse(sessionStorage.getItem("menuList"));
      } catch (error) {
        console.error("获取菜单数据失败:", error);
      }

      storageHandler.onChange((key, value) => {
        console.log("key", key);
      });

      // 这里根据路由需要配置其他信息，就直接存sessionStorage 里，也是一样的
      this.openKeys = sessionStorage.getItem("openKeys")
        ? [sessionStorage.getItem("openKeys")]
        : [];
    },
    handleOpenChange(keys) {
      if (keys && keys.length) {
        let key = [keys[keys.length - 1]];
        this.openKeys = key;
        sessionStorage.setItem("openKeys", key);
      } else {
        this.openKeys = [];
      }
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
/* 折叠按钮样式 */
.collapse-btn {
  position: absolute;
  top: 20px;
  right: -20px;
  cursor: pointer;
  z-index: 10;
  color: #fff;
  font-size: 18px;
}
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: 80px;
    width: 80px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>
