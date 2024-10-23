<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      Function.prototype.myCall = function (context, ...args) {
        // 如果 context 为空或 null，默认上下文为全局对象（在浏览器中是 window，在 Node.js 中是 globalThis）
        context = context || globalThis;

        // 创建一个唯一的属性名，以防止覆盖 context 上的已有属性
        const uniqueSymbol = Symbol();

        // 将当前函数（即 this）作为 context 对象的一个属性
        context[uniqueSymbol] = this;

        // 使用 context 对象调用这个函数，并传入 args 列表
        const result = context[uniqueSymbol](...args);

        // 删除临时属性
        delete context[uniqueSymbol];

        // 返回函数调用的结果
        return result;
      };
      function greet(greeting, punctuation) {
        return `${greeting}, ${this.name}${punctuation}`;
      }

      const person = { name: 'formosa' };

      // 使用原生 call
      //   const result1 = greet.call(person, 'Hello', '!');
      //   console.log(result1); // 输出：Hello, John!

      // 使用手写的 myCall
      const result2 = greet.myCall(person, 'Hello', '!');
      console.log(result2); // 输出：Hello, John!
    },
  },
};
</script>

<style lang="scss" scoped></style>
