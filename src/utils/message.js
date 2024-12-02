// message.js  只弹一次框
import { Message } from "element-ui"; // 引入 Element UI 的 Message 组件
import { debounce } from "lodash";

const showMessage = debounce((options) => {
  Message(options);
}, 300); // 设置防抖时间

const MessagePlugin = {
  install(Vue) {
    Vue.prototype.$singMessage = (options) => {
      showMessage(options);
    };
  },
};

export default MessagePlugin;
