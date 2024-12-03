// store/index.js
import Vue from "vue";
import Vuex from "vuex";
import { Message } from "element-ui";
import { login } from "@/api/index";
import router, { loadDynamicRoutes, addDynamicRoutes } from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: "", // 当前用户角色
    routes: [], // 动态加载的路由
    collectInfo: {
      name: 1,
    },
  },
  mutations: {
    setRole(state, role) {
      state.role = role;
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
      const { role, routes, token, message } = await login({
        username,
        password,
      });
      if (message == "登录成功") {
        Message({
          message: message,
          type: "success",
        });

        sessionStorage.setItem("token", token);
        commit("setRole", role);
        sessionStorage.setItem("menuList", JSON.stringify(routes));

        // loadDynamicRoutes(routes);
        addDynamicRoutes(routes);

        router.push({ name: "Home" });
      }
    },
  },
});
