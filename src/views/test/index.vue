<template>
  <div>
    <h1>Vue 2 - Add Property with Vue.set</h1>
    <a-button @click="edit"></a-button>
    <pre>{{ obj }}</pre>
    <div v-for="item in arr" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {}, // 初始是一个空对象
      arr: [1, 2, 3],
    };
  },
  mounted() {
    this.addProperty();
  },
  methods: {
    addProperty() {},
    edit() {
      this.arr = [...this.arr, ...[4, 5, 6]];
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
pre {
  font-size: 16px;
  background: #f4f4f4;
  padding: 10px;
}
button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #355c3c;
}
</style>
