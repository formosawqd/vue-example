import Vue from "vue";
import { Message } from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// 挂载全局使用的方法
// import VueDraggableResizable from 'vue-draggable-resizable'
// Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.use(Antd);
Vue.prototype.$message = Message;
// test();

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
