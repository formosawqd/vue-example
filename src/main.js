import Vue from "vue";
import App from "./App.vue";
import router, { addDynamicRoutes } from "@/router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import moment from "moment";
import "moment/locale/zh-cn";
import "@/directive/index"; //引入指令
import MessagePlugin from "@/utils/message"; // 引入封装的插件
import "brainy-style";
import "@/assets/css/global.less";
import { getRoutes } from "@/utils/index";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(Loading);

Vue.use(MessagePlugin); // 挂载自定义的 $message 方法

moment.locale("zh-cn");
Vue.prototype.$moment = moment;
// 挂载全局使用的方法
import VueDraggableResizable from "vue-draggable-resizable";
Vue.component("vue-draggable-resizable", VueDraggableResizable);

Vue.use(Antd);

Vue.config.productionTip = false;

Vue.use(ElementUI); //  element的loading 和 vue-loading-overlay插件loading 冲突了
getRoutes();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
