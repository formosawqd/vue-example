<template>
  <div class="protected-container">
    <h2>Protected</h2>
    <p>{{ message }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { isProtected } from '../api/index';

export default {
  data() {
    return {
      message: '',
      error: null,
    };
  },
  async created() {
    try {
      const response = await isProtected();
      this.message = response.data.message;
    } catch (err) {
      this.$mes.error(err);
    }
  },
};
</script>

<style>
.protected-container {
  max-width: 600px;
  margin: 100px auto;
}
</style>
