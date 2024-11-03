<template>
  <div class="article">
    <a-table
      rowKey="id"
      :columns="columns"
      :data-source="dataSource"
      :pagination="false"
    >
    </a-table>
    <Pager
      :pagination.sync="pagination"
      @onPageChange="onPageChange"
      @sizeChange="sizeChange"
    ></Pager>
  </div>
</template>

<script>
import Pager from "@/components/pager";
import {
  getArticles,
  getArticleDetail,
  addArticles,
  updateArticles,
} from "@/api/index";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      columns: [
        {
          title: "编号",
          dataIndex: "id",
        },
        {
          title: "标题",
          dataIndex: "title",
        },
        {
          title: "内容",
          dataIndex: "content",
        },
        {
          title: "创建时间",
          dataIndex: "createdAt",
        },
        {
          title: "更新时间",
          dataIndex: "updatedAt",
        },
      ],
      dataSource: [],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    onPageChange() {
      this.init();
    },
    sizeChange() {
      this.init();
    },

    async init() {
      try {
        let params = {
          ...this.pagination,
        };

        let res = await getArticles(params);
        this.dataSource = res.data.rows;
        this.dataSource.forEach((el) => {
          el.createdAt = this.$moment(el.createdAt).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          el.updatedAt = this.$moment(el.updatedAt).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        });
        this.pagination = res.data.pagination;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.article {
  padding: 30px;
}
</style>
