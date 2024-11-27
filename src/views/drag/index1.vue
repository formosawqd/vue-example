<template>
  <div id="app" class="container">
    <!-- 左侧列表 -->
    <div class="list left-list">
      <h3>左侧列表</h3>
      <div
        v-for="(item, index) in leftList"
        :key="index"
        class="list-item"
        draggable="true"
        @dragstart="onDragStart(item)"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- 右侧列表 -->
    <div class="list right-list" @dragover.prevent="onDragOver" @drop="onDrop">
      <h3>右侧列表</h3>
      <div
        v-for="(item, index) in rightList"
        :key="index"
        class="list-item"
        draggable="true"
        @dragstart="onRightDragStart(index)"
        @dragover.prevent="onDragOverItem(index)"
        @drop="onDropOnItem(index)"
      >
        编号 {{ index + 1 }}: {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 左侧列表的初始数据
      leftList: [
        { id: 1, name: "左侧项 1" },
        { id: 2, name: "左侧项 2" },
        { id: 3, name: "左侧项 3" },
        { id: 4, name: "左侧项 4" },
        { id: 5, name: "左侧项 5" },
      ],
      // 右侧列表，初始为空
      rightList: [],
      // 存储当前被拖拽的项
      draggedItem: null,
      // 存储当前被拖拽的项的索引
      draggedIndex: null,
    };
  },
  methods: {
    /**
     * 处理左侧列表项的拖拽开始事件
     * @param {Object} item 被拖拽的项
     */
    onDragStart(item) {
      this.draggedItem = item; // 保存被拖拽的项
    },

    /**
     * 允许在右侧列表区域悬停
     * @param {Event} event 触发的事件
     */
    onDragOver(event) {
      event.preventDefault(); // 阻止默认行为，允许元素在该区域悬停
    },

    /**
     * 右侧列表区域放置拖拽的项
     */
    onDrop() {
      if (this.draggedItem) {
        // 将拖拽的项添加到右侧列表
        this.rightList.push({ ...this.draggedItem });
        this.draggedItem = null; // 清空当前被拖拽的项
      }
    },

    /**
     * 处理右侧列表项的拖拽开始事件
     * @param {Number} index 被拖拽项的索引
     */
    onRightDragStart(index) {
      this.draggedIndex = index; // 保存当前被拖拽项的索引
    },

    /**
     * 允许在右侧列表项区域悬停
     * @param {Number} index 当前悬停目标项的索引
     */
    onDragOverItem(index) {
      event.preventDefault(); // 阻止默认行为，允许元素在该目标位置悬停
    },

    /**
     * 放置项时触发，调整右侧列表中项的位置
     * @param {Number} index 目标位置的索引
     */
    onDropOnItem(index) {
      // 确保拖拽的索引和目标索引不相同
      if (this.draggedIndex !== null && this.draggedIndex !== index) {
        // 移除当前拖拽的项
        const item = this.rightList.splice(this.draggedIndex, 1)[0];
        // 将移除的项插入到目标位置
        this.rightList.splice(index, 0, item);
        this.draggedIndex = null; // 清空拖拽的索引
      }
    },
  },
};
</script>

<style>
/* 用于页面布局居中 */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.list {
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  padding: 10px;
  min-height: 400px; /* 增加列表高度 */
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto; /* 防止内容溢出 */
}

.list-item {
  padding: 10px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  cursor: grab;
  text-align: center;
}

.left-list {
  background-color: #e8f5e9;
}

.right-list {
  background-color: #e3f2fd;
}

h3 {
  text-align: center;
  margin-bottom: 15px;
}
</style>
