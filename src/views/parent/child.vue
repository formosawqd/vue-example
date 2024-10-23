<template>
  <div>child页面</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.query);
    setTimeout(() => {
      window.parent.postMessage('close', '*');
    }, 5000);
  },
  methods: {},
};
</script>

<style></style>
