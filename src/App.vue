<template>
  <a-config-provider :locale="zh_CN">
    <div id="app">
      <div id="nav"></div>
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import { loadDynamicRoutes, addDynamicRoutes } from "@/router/index";
export default {
  data() {
    return {
      zh_CN,
    };
  },
  created() {
    let routes = JSON.parse(sessionStorage.getItem("menuList"));
    // routes && loadDynamicRoutes(routes);
    routes && addDynamicRoutes(routes);
  },
};
</script>

<style></style>
