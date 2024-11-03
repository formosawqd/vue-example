<template>
  <a-tree
    v-if="treeData.length"
    show-line
    :checkable="true"
    v-model="checkedSiteId"
    :checkStrictly="true"
    :tree-data="treeData"
    defaultExpandAll
    ref="treeForm"
    :replaceFields="{ children: 'children', title: 'title', key: 'id' }"
    @check="handleNodeClick"
  >
    <template slot="leaf">
      <a-icon type="not"></a-icon>
    </template>
  </a-tree>
</template>
<script>
export default {
  data() {
    return {
      treeData: [
        {
          children: [
            {
              id: "1198908685567560144",
              title: "A站",
              scopedSlots: { switcherIcon: "leaf" },
            },
            {
              id: "11984789756097817201",
              title: "123",
              scopedSlots: { switcherIcon: "leaf" },
            },
          ],
          id: -1,
          title: "所有站点",
        },
      ],
      checkedSiteId: ["1198908685567560144"],
    };
  },
  watch: {},
  methods: {
    //a-tree 单选模式
    handleNodeClick(checkedKeys) {
      this.checkedSiteId = [].concat(
        checkedKeys.checked[checkedKeys.checked.length - 1]
      );
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .ant-tree-checkbox-inner {
  border-radius: 50%;
}

/deep/ .ant-tree-checkbox-checked .ant-tree-checkbox-inner::after {
  opacity: 0;
}

/deep/ .ant-tree-switcher-line-icon {
  color: #409eff;
}
</style>
