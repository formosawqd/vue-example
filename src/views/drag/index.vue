<template>
  <div id="app">
    <!-- 拖拽源 -->
    <div id="draggable" draggable="true" @dragstart="onDragStart">拖拽我</div>

    <!-- 目标区域 -->
    <div id="dropzone" @dragover.prevent="onDragOver" @drop="onDrop">
      <div
        v-for="(item, index) in droppedItems"
        :key="index"
        class="dropped-item"
        :style="{ left: item.x + 'px', top: item.y + 'px' }"
      >
        <!-- 坐标: ({{ item.x }}, {{ item.y }}) -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      droppedItems: [], // 用于存储放置点及其坐标
      dragOffset: { x: 0, y: 0 }, // 记录鼠标点击的位置相对于拖拽源的位置
    };
  },
  methods: {
    /**
     * 拖拽开始事件
     * @param {DragEvent} event
     */
    onDragStart(event) {
      const rect = event.target.getBoundingClientRect();
      // 计算鼠标点击点相对于拖拽源的偏移量
      this.dragOffset = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      event.dataTransfer.setData("text/plain", "拖拽内容");
    },
    /**
     * 拖拽悬停事件
     * @param {DragEvent} event
     */
    onDragOver(event) {
      event.preventDefault(); // 必须阻止默认行为
    },
    /**
     * 拖拽放置事件
     * @param {DragEvent} event
     */
    onDrop(event) {
      // 获取目标区域的位置信息
      const dropzoneRect = event.target.getBoundingClientRect();

      // 鼠标放置点减去偏移量，确保拖放后的位置不发生偏移
      const x = event.clientX - dropzoneRect.left - this.dragOffset.x;
      const y = event.clientY - dropzoneRect.top - this.dragOffset.y;

      // 添加新的拖放内容
      this.droppedItems.push({ x, y });
    },
  },
};
</script>

<style>
/* 拖拽源样式 */
#draggable {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  user-select: none;
  margin-bottom: 20px;
}

/* 目标区域样式 */
#dropzone {
  width: 500px;
  height: 500px;
  border: 2px dashed #2ecc71;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
}

/* 放置后的项目样式 */
.dropped-item {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 12px;
}
</style>
