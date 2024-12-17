<template>
  <div class="login">
    <a-card class="login-container" :hoverable="false">
      <h2 class="title">Welcome Back!</h2>
      <p class="sub-title">Please log in to your account</p>

      <a-form
        @submit.prevent="login"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 20 }"
      >
        <a-form-item label="Username">
          <a-input
            v-model="loginForm.username"
            placeholder="Enter your username"
            required
          />
        </a-form-item>

        <a-form-item label="Password">
          <a-input-password
            v-model="loginForm.password"
            placeholder="Enter your password"
            required
          />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-btn">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
    };
  },
  methods: {
    async login() {
      const encryptedPassword = CryptoJS.AES.encrypt(
        this.loginForm.password,
        "your-secret-key"
      ).toString();
      try {
        this.$store.dispatch("login", {
          username: this.loginForm.username,
          password: encryptedPassword,
        });
      } catch (error) {}
    },
  },
};
</script>

<style scoped>
.login {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Arial", sans-serif;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
}

.title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.sub-title {
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 30px;
}

.login-btn {
  width: 100%;
  /* padding: 12px 0; */
  font-size: 1.1rem;
}

a-form-item {
  margin-bottom: 20px;
}

a-input {
  border-radius: 5px;
}

a-input-password {
  border-radius: 5px;
}
</style>
