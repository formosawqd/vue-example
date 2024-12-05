<template>
  <div class="intro-page">
    <div class="intro-header">
      <h1>欢迎来到我们的介绍页面</h1>
      <p>探索我们的项目，了解更多</p>
    </div>

    <div class="intro-content">
      <div class="card">
        <h2>项目背景</h2>
        <p>
          <!-- 我们致力于通过创新技术，为用户提供更智能、高效的解决方案。我们的目标是帮助用户解决实际问题，提高生活和工作效率。 -->
          少打听
        </p>
      </div>

      <!-- <div class="card">
        <h2>主要功能</h2>
        <ul>
          <li>
            <strong>功能一：</strong
            >提供智能化的实时数据分析，帮助用户快速做出决策。
          </li>
          <li>
            <strong>功能二：</strong
            >支持多种自定义选项，让用户能够量身定制个人体验。
          </li>
          <li>
            <strong>功能三：</strong
            >提供简洁直观的界面，降低使用门槛，让技术变得更易上手。
          </li>
        </ul>
      </div> -->

      <div class="card">
        <h2>未来发展</h2>
        <p>
          <!-- 我们的项目将持续迭代优化，未来将加入更多创新功能，致力于为用户提供更加完善的服务体验。 -->
          少打听
        </p>
      </div>
    </div>

    <div class="intro-footer">
      <p>感谢您的访问！如果您有任何问题或建议，欢迎联系我们。</p>
      <button class="login-btn" @click="handleLoginClick">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroPage",
  methods: {
    handleLoginClick() {
      // 在这里你可以进行登录逻辑的跳转
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>

<style scoped>
.intro-page {
  padding: 40px;
  font-family: "Roboto", sans-serif;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  color: #fff;
  min-height: 100vh;
}

.intro-header {
  text-align: center;
  margin-bottom: 50px;
}

.intro-header h1 {
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.intro-header p {
  font-size: 1.2rem;
  margin-top: 10px;
}

.intro-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

.card {
  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.card h2 {
  font-size: 1.9rem;
  margin-bottom: 15px;
  color: #6a11cb;
}

.card p {
  font-size: 1.15rem;
  line-height: 1.6;
}

.card ul {
  list-style: none;
  padding-left: 0;
}

.card li {
  font-size: 1.1rem;
  margin-bottom: 12px;
}

.intro-footer {
  text-align: center;
  margin-top: 50px;
}

.intro-footer p {
  color: #e0e0e0;
  font-size: 1rem;
  margin-bottom: 20px;
}

.login-btn {
  padding: 15px 30px;
  background-color: #2575fc;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.login-btn:hover {
  background-color: #6a11cb;
  transform: translateY(-3px);
}

.login-btn:focus {
  outline: none;
}
</style>
