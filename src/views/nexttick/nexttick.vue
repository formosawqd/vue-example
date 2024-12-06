<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="incrementCount">Increment Count</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    // 就是利用了事件循环机制，

    // 同步代码 执行完后，微任务队列（如 Promise.then()）中的回调会被执行，DOM 更新通常会在微任务队列执行完成之后进行。
    // 微任务（如 Promise）的回调比宏任务（如 setTimeout）优先执行。
    // DOM 更新 会在微任务队列完成后执行，因此你可以通过 Promise 或 nextTick 来确保某些操作发生在 DOM 更新之后。
    // 自定义实现的 nextTick
    // customNextTick(callback) {
    //   // 将回调推入队列，使用 setTimeout 使回调异步执行
    //   setTimeout(() => {
    //     callback();
    //   }, 0);
    // },
    customNextTick(callback) {
      // 将回调推入队列，使用 setTimeout 使回调异步执行
      // 使用 Promise 的微任务队列来确保回调在 DOM 更新后执行
      Promise.resolve().then(() => {
        callback();
      });
    },
    incrementCount() {
      // 更新数据
      this.count++;

      // 在 DOM 更新后执行回调
      this.customNextTick(() => {
        console.log("DOM updated, current count:", this.count);
      });
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
