<template>
  <a-tree
    :treeData="treeData"
    :replaceFields="{ children: 'children', title: 'title', key: 'key' }"
    :loadData="loadData"
    show-line
    @expand="expand"
  >
    <template slot="plus-square">
      <a-icon type="plus-square" theme="filled"></a-icon>
    </template>
    <template slot="minus-square">
      <a-icon type="minus-square" theme="filled"></a-icon>
    </template>
    <template slot="loading">
      <a-icon type="loading"></a-icon>
    </template>
    <template slot="not">
      <a-icon type="no"></a-icon>
    </template>
  </a-tree>
</template>

<script>
import { getLazyTree } from "@/api/index";

export default {
  data() {
    return {
      treeData: [],
      loading: false,
    };
  },
  mounted() {
    this.initTreeData();
  },
  methods: {
    expand(expandedKeys, { expanded, node }) {
      if (node.isLeaf) {
        return;
      }
      console.log(node);

      const scopedSlots = {};
      //   if (node.dataRef.children?.length) {
      scopedSlots.switcherIcon = expanded ? "minus-square" : "plus-square";
      //   } else {
      //     scopedSlots.switcherIcon = "loading";
      //   }
      node.dataRef.scopedSlots = scopedSlots;
    },
    // 懒加载数据
    async loadData(node) {
      node.dataRef.scopedSlots.switcherIcon = "loading";
      const nodeKey = node.dataRef.key || null; // 根节点传 null
      try {
        const { data } = await getLazyTree({
          params: { id: nodeKey },
        });
        console.log("data", data);

        if (data.length) {
          const nodeChildren = data.map((item) => ({
            title: item.label,
            key: item.id,
            isLeaf: item.isLeaf,
            scopedSlots: {
              switcherIcon: item.isLeaf ? "not" : "plus-square",
            },
          }));
          node.dataRef.scopedSlots.switcherIcon = "minus-square";
          this.$set(node.dataRef, "children", nodeChildren);
        } else {
          node.dataRef.scopedSlots.switcherIcon = "not";
        }
        console.log(this.treeData);
      } catch (error) {
        console.error("加载数据失败", error);
      } finally {
      }
    },
    // 初始化根节点
    async initTreeData() {
      try {
        const { data } = await getLazyTree();
        console.log(data);

        if (data.length) {
          this.treeData = data.map((item) => ({
            title: item.label,
            key: item.id,
            isLeaf: item.isLeaf,
            scopedSlots: {
              switcherIcon: "plus-square",
            },
          }));
          console.log(this.treeData);
        }
      } catch (error) {
        console.error("初始化树数据失败", error);
      } finally {
      }
    },
  },
};
</script>

<style lang="less" scoped>
::v-deep .anticon-plus-square,
.anticon-minus-square {
  color: #409eff;
  background-color: #fff;
}
</style>
