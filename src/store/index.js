// store/index.js
import Vue from "vue";
import Vuex from "vuex";
import { Message } from "element-ui";
import { login, getMenu, getRoute } from "@/api/index";
import { storageHandler } from "@/utils/index";
import router, { loadDynamicRoutes, addDynamicRoutes } from "@/router";
import CryptoJS from "crypto-js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: "", // 当前用户角色
    permissions: JSON.parse(sessionStorage.getItem("permissions")) || [], // 存储用户权限列表
    routes: [], // 动态加载的路由
    collectInfo: {
      name: 1,
    },
  },
  mutations: {
    setRole(state, role) {
      console.log("mutations setRole");

      state.role = role;
    },
    setPermissions(state, permissions) {
      state.permissions = permissions;
    },
    setRoutes(state, routes) {
      state.routes = routes;
    },
    SetcollectInfo(state, playload) {
      //state是第一个参数必须有，playload是自定义的参数
      state.collectInfo = { ...state.collectInfo, ...playload };
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      const encryptedPassword = CryptoJS.AES.encrypt(
        password,
        "your-secret-key"
      ).toString();

      const { role, permissions, token, message } = await login({
        username,
        password: encryptedPassword,
      });
      if (message == "登录成功") {
        Message({
          message: message,
          type: "success",
        });

        // 获取token 和角色
        sessionStorage.setItem("token", token);
        commit("setRole", role);
        storageHandler.setItem("role", role);
        // 获取权限
        console.log("permissions", permissions);

        storageHandler.setItem("permissions", JSON.stringify(permissions));
        commit("setPermissions", permissions);

        // 获取菜单
        const { menu } = await getMenu({ role });
        console.log("res", menu);
        // sessionStorage.setItem("role", role);

        // 获取路由
        const { routes } = await getRoute({ role });
        console.log("routes", routes);
        addDynamicRoutes(routes);
        storageHandler.setItem("routes", JSON.stringify(routes));

        // storageHandler.setItem("menuList", JSON.stringify(menu));

        sessionStorage.setItem("menuList", JSON.stringify(menu));
        router.push({ path: "/home" });
      }
    },
  },
  getters: {
    hasPermission: (state) => {
      return state.permissions;
    },
  },
});
