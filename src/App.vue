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
export default {
  data() {
    return {
      zh_CN,
    };
  },
  created() {},
  mounted() {
    console.log("加载了app");
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style></style>
