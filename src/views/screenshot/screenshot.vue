<template>
  <div id="app">
    <div ref="content" class="capture-area">
      <div style="width: 256px">
        <a-button
          type="primary"
          style="margin-bottom: 16px"
          @click="toggleCollapsed"
        >
          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <a-menu
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          mode="inline"
          theme="dark"
          :inline-collapsed="collapsed"
        >
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="inbox" />
            <span>Option 3</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"
              ><a-icon type="mail" /><span>Navigation One</span></span
            >
            <a-menu-item key="5"> Option 5 </a-menu-item>
            <a-menu-item key="6"> Option 6 </a-menu-item>
            <a-menu-item key="7"> Option 7 </a-menu-item>
            <a-menu-item key="8"> Option 8 </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"
              ><a-icon type="appstore" /><span>Navigation Two</span></span
            >
            <a-menu-item key="9"> Option 9 </a-menu-item>
            <a-menu-item key="10"> Option 10 </a-menu-item>
            <a-sub-menu key="sub3" title="Submenu">
              <a-menu-item key="11"> Option 11 </a-menu-item>
              <a-menu-item key="12"> Option 12 </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>
    <button @click="capture">截屏并保存</button>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  name: "App",
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    capture() {
      const content = this.$refs.content; // 获取需要截图的元素
      html2canvas(content).then((canvas) => {
        // 创建一个链接来下载图片
        const link = document.createElement("a");
        link.download = "screenshot.png";
        link.href = canvas.toDataURL(); // 将 canvas 转为图片的 base64 格式
        link.click(); // 模拟点击下载链接
      });
    },
  },
};
</script>

<style scoped>
.capture-area {
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
  width: 300px;
  text-align: center;
}
</style>
