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
import axios from '../../api/axios';
import { login } from '../../api/index';

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await login({
          username: this.loginForm.username,
          password: this.loginForm.password,
        });
        localStorage.setItem('token', response.data.token);
        this.$router.push('/protected');
      } catch (err) {
        this.$message.error('Invalid credentials');
      }
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
