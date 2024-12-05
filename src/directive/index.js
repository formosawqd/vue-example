import Vue from "vue";

Vue.directive("bg-color", {
  bind(el, binding) {
    // 设置背景颜色
    el.style.backgroundColor = binding.value || "yellow"; // 默认背景色为黄色
  },
});

// 自动聚焦指令
Vue.directive("focus", {
  inserted(el) {
    // 插入时自动聚焦到元素
    el.focus();
  },
});

// 点击外部触发事件指令
Vue.directive("click-outside", {
  bind(el, binding) {
    // 外部点击时触发的回调
    const clickOutside = (event) => {
      if (!el.contains(event.target)) {
        binding.value(); // 执行传入的回调函数
      }
    };

    // 将事件处理函数存储到元素上
    el._clickOutside = clickOutside;

    // 监听点击事件
    document.addEventListener("click", clickOutside);
  },
  unbind(el) {
    // 解绑时移除事件监听
    document.removeEventListener("click", el._clickOutside);
  },
});
