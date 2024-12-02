<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      @submit.native.prevent="login"
      class="login-form"
    >
      <el-form-item>
        <el-input
          v-model="loginForm.username"
          placeholder="Username"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="Password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
      <p v-if="error" class="error-message">{{ error }}</p>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      error: null,
    };
  },
  mounted() {},
  methods: {
    async login() {
      try {
        this.$store.dispatch("login", {
          username: this.loginForm.username,
          password: this.loginForm.password,
        });
      } catch (error) {}
      // try {
      //   const res = await login({
      //     username: this.loginForm.username,
      //     password: this.loginForm.password,
      //   });
      //   console.log(res);
      //   localStorage.setItem("token", res.token);
      //   this.$singMessage({
      //     message: res.message,
      //     type: "success",
      //   });
      // } catch (err) {
      //   this.$message.error(err);
      // }
    },
  },
};
</script>

<style>
.login-container {
  max-width: 300px;
  margin: 100px auto;
}

.login-form {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.error-message {
  color: red;
}
</style>
