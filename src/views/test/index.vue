<template>
  <div class="container">
    <div class="left">画像取值：</div>
    <div class="right" ref="rightContainer">
      <a-space id="wapper" wrap>
        <a-tag v-for="(tag, index) in visibleTags" :key="index">
          {{ tag }}
        </a-tag>
        <a-button size="small" v-if="hasMoreTags" @click="showMoreTags"
          >更多</a-button
        >
      </a-space>
      <a-modal v-model="isModalVisible" title="更多标签">
        <a-space direction="vertical">
          <a-tag v-for="(tag, index) in allTags" :key="index">
            {{ tag }}
          </a-tag>
        </a-space>
      </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allTags: [
        "标签洒洒水1",
        "标签ssssas2",
        "标签as4水sssssssssss水水水",
        "标签5",
        "标签sssssssssss6水水水",
        "标assssssssssssss签7s",
        "标签8",
      ],
      visibleTags: [], // 动态显示的标签
      isModalVisible: false,
      containerWidth: 0,
      resizeTimeout: null,
    };
  },
  computed: {
    hasMoreTags() {
      return this.allTags.length > this.visibleTags.length;
    },
  },
  methods: {
    showMoreTags() {
      this.isModalVisible = true;
    },
    calculateVisibleTags() {
      const container = this.$refs.rightContainer;

      if (container) {
        const containerWidth = container.offsetWidth;
        console.log("containerWidth", containerWidth);

        const tagWidth = 100; // 估算每个标签的宽度，可以根据实际情况调整
        const maxTags = Math.floor(containerWidth / tagWidth); // 根据容器宽度计算最大可显示的标签数量
        console.log("maxTags", maxTags);

        this.visibleTags = [...this.allTags.slice(0, maxTags - 1), "。。。"];
        let wapperW = document.getElementById("wapper").offsetWidth;
        console.log("wapperW", wapperW);
        // this.visibleTags = this.allTags.slice(0, maxTags);
      }
    },
  },
  mounted() {
    this.calculateVisibleTags(); // 初次计算可显示的标签数量
    // const resizeObserver = new ResizeObserver(() => {
    //   if (this.resizeTimeout) {
    //     clearTimeout(this.resizeTimeout); // 清除上一个超时
    //   }
    //   this.resizeTimeout = setTimeout(() => {
    //     this.calculateVisibleTags(); // 延迟执行计算，避免多次触发更新
    //   }, 50); // 延迟 50ms 以防止多次触发
    // });
    // resizeObserver.observe(this.$refs.rightContainer); // 监听容器宽度变化
  },
  beforeDestroy() {
    // 清除 ResizeObserver
    // if (this.resizeTimeout) {
    //   clearTimeout(this.resizeTimeout);
    // }
  },
};
</script>

<style scoped>
.container {
  display: flex;
}

.left {
  width: 80px;
  /* white-space: nowrap; */
  /* font-weight: bold; */
}

.right {
  display: flex;
  flex: auto; /* 使右边部分占满剩余空间 */
}

a-button {
  margin-left: 8px;
}
</style>
