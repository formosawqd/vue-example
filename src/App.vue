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
import { getRoute } from "@/api/index";
import { storageHandler } from "@/utils/index";
import router, { addDynamicRoutes } from "@/router";

export default {
  data() {
    return {
      zh_CN,
    };
  },
  created() {},
  mounted() {
    console.log("加载了app");
    this.init();
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      let routes = JSON.parse(sessionStorage.getItem("routes"));
      routes && addDynamicRoutes(routes);
    },
  },
};
</script>

<style></style>
