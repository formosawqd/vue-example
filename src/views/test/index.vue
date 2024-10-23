<template>
  <div>
    <div
      id="dragElement"
      class="drag-box"
      draggable="true"
      @dragstart="onDragStart"
    >
      Drag me
    </div>

    <div id="dropZone" class="drop-zone" @dragover.prevent @drop="onDrop">
      Drop here
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onDragStart(event) {
      console.log(event.target);

      console.log('onDragStart');

      // 保存拖动数据
      event.dataTransfer.setData('text/plain', event.target.id);
    },
    onDrop(event) {
      console.log('onDrop');

      // 获取拖动数据
      const data = event.dataTransfer.getData('text');
      const draggableElement = document.getElementById(data);
      const dropZone = event.target;

      // 将拖动元素添加到放置区域
      dropZone.appendChild(draggableElement);
      dropZone.style.backgroundColor = 'lightgreen';
    },
  },
};
</script>

<style scoped>
.drag-box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  text-align: center;
  line-height: 100px;
  margin: 20px;
  cursor: grab;
}

.drop-zone {
  width: 200px;
  height: 200px;
  border: 2px dashed #aaa;
  text-align: center;
  line-height: 200px;
  margin: 20px;
}
</style>
