<!-- <template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.name">
        {{ user.name }}, {{ user.age }}, {{ user.address }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getUsers } from '../../api/index';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    console.log('created');
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        getUsers().then((res) => {
          console.log(res);
          this.users = res.data;
        });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
};
</script>

<style scoped>
/* 在这里添加你的样式 */
</style> -->
<template>
  <div>example</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
