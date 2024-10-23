<template>
  <div>
    <el-tree
      :data="treeData"
      :props="defaultProps"
      lazy
      :load="loadNode"
      node-key="id"
      show-checkbox
      :default-checked-keys="checkedKeys"
      :selectable="true"
      @node-click="handleNodeClick"
    >
      <!-- <a-icon slot="switcherIcon" type="form"></a-icon> -->
      <a-icon slot="switcherIcon" type="down" />
    </el-tree>
    <el-button @click="view">查看</el-button>
  </div>
</template>

<script>
import { getTree } from '../../api/index';

export default {
  data() {
    return {
      checkedKeys: [1111], // 选中的节点 key 列表
      treeData: [], // 初始树数据
      defaultProps: {
        children: 'children',
        label: 'label',
        isLeaf: 'isLeaf', // 用于指示节点是否为叶子节点
      },
    };
  },
  mounted() {},
  methods: {
    handleCheck(checkedKeys) {
      this.checkedKeys = checkedKeys;
    },
    view() {
      console.log(this.treeData);
    },
    getTreeByNode(id, resolve) {
      let params = {
        parentId: id,
      };
      getTree(params).then((res) => {
        resolve(res.data);
      });
    },
    // 懒加载方法，node 是当前节点，resolve 是用于加载完成后设置子节点的回调函数
    loadNode(node, resolve) {
      const parentId = node.data ? node.data.id : null; // 获取父节点 ID
      this.getTreeByNode(parentId, resolve);
    },
    // 节点点击事件处理
    handleNodeClick(data) {
      console.log(this.treeData);
      console.log('节点点击:', data);
    },
  },
};
</script>
