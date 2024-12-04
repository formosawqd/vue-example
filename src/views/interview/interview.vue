<template>
  <div class="app-container">
    <a-card
      style="height: 100%"
      title="美化列表"
      :bordered="false"
      class="list-card"
    >
      <a-list
        :data-source="list"
        bordered
        item-layout="horizontal"
        class="list"
      >
        <a-list-item v-for="(item, i) in list" :key="i">
          <a-list-item-meta
            :title="item.title"
            :description="item.description"
            avatar="<a-avatar src='https://joeschmoe.io/api/v1/random'></a-avatar>"
          />
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import { getInterview } from "../../api/index";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      try {
        const { list } = await getInterview();
        this.list = list;
      } catch (error) {}
    },
  },
};
</script>

<style lang="less" scoped>
.app-container {
  padding: 20px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.list-card {
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;
}

.list {
  margin-top: 20px;
}

.a-list-item-meta {
  display: flex;
  align-items: center;
}

.a-list-item-meta .ant-avatar {
  margin-right: 12px;
}

a-list-item-meta a {
  color: #1890ff;
  font-weight: bold;
  text-decoration: none;
}

a-list-item-meta a:hover {
  text-decoration: underline;
}
</style>
