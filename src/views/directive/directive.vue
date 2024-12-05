<template>
  <div>
    <!-- 使用 Ant Design Vue 的 Button 和 Input 组件 -->
    <a-row justify="center" style="margin-top: 50px">
      <a-col :span="8">
        <a-input
          v-focus
          v-model="username"
          placeholder="请输入用户名"
          style="margin-bottom: 20px"
        />
      </a-col>
    </a-row>

    <a-row justify="center">
      <a-col :span="8">
        <a-button type="primary" @click="handleLogin" block> 登录 </a-button>
      </a-col>
    </a-row>

    <!-- 显示用户登录信息 -->
    <a-row justify="center" style="margin-top: 30px">
      <a-col :span="8">
        <a-card title="用户信息">
          <p>用户名: {{ username }}</p>
        </a-card>
      </a-col>
    </a-row>

    <!-- 设置背景色 -->
    <div v-bg-color="'lightblue'">
      This div has a lightblue background color!
    </div>

    <!-- 点击外部触发事件 -->
    <div v-click-outside="handleClickOutside">
      Click outside this box to trigger the action
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "", // 存储输入的用户名
    };
  },
  methods: {
    handleLogin() {
      this.$message.success(`登录成功，欢迎 ${this.username}！`);
    },
    handleClickOutside() {
      this.$message.success(`You clicked outside the box!`);
    },
  },
};
</script>

<style scoped>
/* 可以根据需要自定义样式 */
</style>
