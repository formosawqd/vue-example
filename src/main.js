import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import moment from "moment";
import "moment/locale/zh-cn";
import MessagePlugin from "@/utils/message"; // 引入封装的插件
import "brainy-style";
import "@/assets/css/global.less";

Vue.use(MessagePlugin); // 挂载自定义的 $message 方法

moment.locale("zh-cn");
Vue.prototype.$moment = moment;
// 挂载全局使用的方法
// import VueDraggableResizable from 'vue-draggable-resizable'
// Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.use(Antd);

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
