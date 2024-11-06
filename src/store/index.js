import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collectInfo: {
      name: 1,
    },
  },
  mutations: {
    SetcollectInfo(state, playload) {
      console.log(playload);
      //state是第一个参数必须有，playload是自定义的参数
      state.collectInfo = { ...state.collectInfo, ...playload };
    },
  },
  actions: {},
  modules: {},
});
