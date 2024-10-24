<template>
  <div>
    <a-tree
      v-if="treeData.length"
      :checkable="true"
      v-model="checkedSiteId"
      :checkStrictly="true"
      :tree-data="treeData"
      defaultExpandAll
      ref="treeForm"
      :replaceFields="{ children: 'children', title: 'title', key: 'id' }"
      @check="handleNodeClick"
      @expand="expand"
    >
      <a-icon
        style="font-size: 16px"
        slot="switcherIcon"
        :type="expands ? 'minus-square' : 'plus-square'"
      />
    </a-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkedSiteId: [],
      expands: true,
      treeData: [
        {
          children: [
            {
              id: "1198908685567560144",
              statu: undefined,
              title: "A站",
              scopedSlots: { switcherIcon: "plus-square" },
            },
            {
              id: "11984789756097817201",
              statu: undefined,
              title: "123",
            },
          ],
          // disabled: true,
          id: -1,
          title: "所有站点",
          scopedSlots: { switcherIcon: "minus-square" },
        },
      ],
    };
  },
  mounted() {
    console.log(111);
  },
  methods: {
    expand(keys, e) {
      console.log(e.expanded);
      this.expands = e.expanded;
    },
    handleNodeClick(checkedKeys, { node }) {
      console.log(checkedKeys);
      console.log(node.dataRef);
      this.checkedSiteId = [].concat(
        checkedKeys.checked[checkedKeys.checked.length - 1]
      );
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.ant-tree-checkbox-inner {
  border-radius: 50%;
}
/deep/.ant-tree-checkbox-checked .ant-tree-checkbox-inner {
  background: #ffffff;
}
/deep/.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after {
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #1890ff;
  border: 0;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  content: " ";
}
/deep/.ant-tree-checkbox-checked .ant-tree-checkbox-inner:hover {
  border: 0px;
}
</style>

<!-- <style></style> -->
