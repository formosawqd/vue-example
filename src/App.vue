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
import { getRoute } from "@/api/index";
import { storageHandler } from "@/utils/index";
export default {
  data() {
    return {
      zh_CN,
    };
  },
  created() {
    // let routes = JSON.parse(sessionStorage.getItem("menuList"));
    // // routes && loadDynamicRoutes(routes);
    // routes && addDynamicRoutes(routes);
  },
  mounted() {
    console.log("加载了app");
    // 设置监听器
    storageHandler.onChange((key, value) => {
      this.getRoutes(value);
    });
  },
  computed: {},
  watch: {},
  methods: {
    async getRoutes(role) {
      try {
        const { routes } = await getRoute({ role });
        console.log("routes", routes);
        sessionStorage.setItem("menuList", JSON.stringify(routes));
        addDynamicRoutes(routes);
        this.$router.push({ path: "/home" });
      } catch (error) {}
    },
  },
};
</script>

<style></style>
