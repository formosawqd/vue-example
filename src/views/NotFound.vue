<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">Oops! Page Not Found</h2>
      <p class="error-message">
        The page you're looking for doesn't exist or an error occurred.
      </p>
      <router-link to="/" class="btn">Back to Home</router-link>
    </div>
    <div class="background-animation">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
/* 全屏背景 */
.not-found {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e3a8a, #9333ea);
  overflow: hidden;
  color: #fff;
  font-family: "Arial", sans-serif;
}

/* 主要内容 */
.not-found-content {
  z-index: 2;
  text-align: center;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  margin: 0;
  animation: float 3s ease-in-out infinite;
}

.error-title {
  font-size: 2rem;
  margin: 20px 0;
}

.error-message {
  font-size: 1rem;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.8);
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #2563eb;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #3b82f6;
  transform: scale(1.1);
}

/* 背景动画 */
.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.circle {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: move 6s ease-in-out infinite;
}

.circle:nth-child(1) {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.circle:nth-child(2) {
  top: 60%;
  left: 70%;
  animation-delay: 2s;
}

.circle:nth-child(3) {
  top: 40%;
  left: 40%;
  animation-delay: 4s;
}

/* 动画效果 */
@keyframes move {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-50px) scale(1.2);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
