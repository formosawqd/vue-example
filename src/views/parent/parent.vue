<template>
  <div>
    parent页面
    <button @click="go">go</button>
    <button @click="add">add</button>
    <div>{{ num }}</div>
    <iframe :src="iframeSrc" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iframeSrc: '',
      num: 0,
    };
  },
  mounted() {
    // window.onmessage = function (e) {
    //   if (e.data == "close") {
    //     console.log(e.data);
    //   }
    // };
    window.addEventListener('message', (e) => {
      console.log(e);
    });
  },
  methods: {
    add() {
      this.num++;
      window.addEventListener('message', (e) => {
        console.log(e);
      });
    },
    go() {
      this.iframeSrc = 'http://localhost:8080/#/child?name=formosa';
      setTimeout(() => {}, 1000);
    },
  },
};
</script>

<style></style>
