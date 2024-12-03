<template>
  <div class="welcome">
    <div class="container">
      <h1 class="greeting">Welcome to the Application!</h1>
      <p class="description">
        We're so glad to have you here. Enjoy exploring!
      </p>
      <div class="button-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {},
};
</script>

<style scoped>
.welcome {
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Arial", sans-serif;
}

.container {
  text-align: center;
  padding: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.greeting {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
}

.description {
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.button-container {
  text-align: center;
}

.logout-button {
  padding: 15px 30px;
  font-size: 1.1rem;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #ff4500;
}
</style>
