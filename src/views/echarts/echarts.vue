<template>
  <div ref="box" style="height: 100%">
    <!-- 图表容器，确保图表占满整个页面 -->
    <div ref="chartContainer" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      // 图表的初始数据
      categories: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      data: [5, 20, 36, 10, 10, 5, 25, 15, 30, 50],
    };
  },
  methods: {
    // 函数：动态调整图表的 xAxis 数据和 grid 配置
    adjustChartData() {
      console.log(1111);
      // 获取当前 box 容器的宽度
      const containerWidth = this.$refs.box.offsetWidth;
      console.log(containerWidth);

      // 基于容器宽度调整显示的条数
      let numVisibleData = Math.max(5, Math.floor(containerWidth / 100)); // 宽度每增加100px，显示更多的数据，最小显示5条数据，最多显示20条数据
      if (numVisibleData > 20) numVisibleData = 20; // 限制最多显示20条数据

      // 根据容器宽度更新 x 轴的数据
      const visibleCategories = this.categories.slice(0, numVisibleData);
      const visibleData = this.data.slice(0, numVisibleData);

      // 调整 grid 边距
      const gridPadding = Math.max(10, containerWidth * 0.05); // 边距最小为 10

      // 更新图表的配置
      this.chart.setOption({
        xAxis: {
          data: visibleCategories, // 更新 X 轴数据
        },
        series: [
          {
            data: visibleData, // 更新数据
          },
        ],
        grid: {
          left: gridPadding + "px",
          right: gridPadding + "px",
          top: "10%",
          bottom: "15%",
        },
      });

      // 重新调整图表的大小
      this.chart.resize();
    },
  },
  mounted() {
    // 初始化图表实例
    this.chart = this.$echarts.init(this.$refs.chartContainer);

    // 初始图表配置
    const option = {
      xAxis: {
        type: "category",
        data: this.categories, // 初始显示所有数据
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: this.data,
          type: "bar",
        },
      ],
      grid: {
        left: "10%",
        right: "10%",
        top: "10%",
        bottom: "15%",
      },
    };

    // 设置图表的初始配置
    this.chart.setOption(option);

    // 初始调整一次
    this.adjustChartData();

    // 使用 ResizeObserver 来监听父容器 (box) 的大小变化
    const resizeObserver = new ResizeObserver(() => {
      this.adjustChartData(); // 容器大小变化时重新调整图表
    });

    // 开始观察父容器的大小变化
    resizeObserver.observe(this.$refs.box);

    // 窗口resize时，自动调整图表的数据和显示区域
    window.addEventListener("resize", this.adjustChartData);
  },
  beforeDestroy() {
    // 在组件销毁时清理图表实例
    if (this.chart) {
      this.chart.dispose();
    }

    // 移除 resize 事件监听
    window.removeEventListener("resize", this.adjustChartData);
  },
};
</script>

<style scoped></style>
