<template>
  <div>
    <h1>Vue 2 - Add Property with Vue.set</h1>
    <pre>{{ obj }}</pre>
    <button @click="addProperty">Add Property</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {}, // 初始是一个空对象
    };
  },
  methods: {
    addProperty() {
      const state = {
        message: "Hello, Vue 3!",
      };

      const stateProxy = new Proxy(state, {
        get(target, prop) {
          console.log(`Accessing ${prop}`);
          return prop in target ? target[prop] : undefined;
        },
        set(target, prop, value) {
          console.log(`Setting ${prop} to ${value}`);
          target[prop] = value;
          return true;
        },
      });

      console.log(stateProxy.message); // 访问时会触发 get
      stateProxy.message = "Hello, Proxy!"; // 设置时会触发 set
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
