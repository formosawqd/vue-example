<template>
  <div>
    <a-tree show-icon show-line :tree-data="treeData">
      <template slot="leaf">
        <a-icon type="not"></a-icon>
      </template>
    </a-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expandedKeys: ["0-1"],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      treeData: [
        {
          title: "0-0",
          key: "0-0",
          children: [
            {
              title: "0-0-0",
              key: "0-0-0",

              children: [
                {
                  title: "0-0-0-0",
                  key: "0-0-01",
                  // 这里有点疑惑   scopedSlots效果一样
                  slots: {
                    switcherIcon: "leaf",
                  },
                },
              ],
            },
          ],
        },
      ],
    };
  },
  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    },
  },
  methods: {
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log("onCheck", checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
    },
  },
};
</script>
<style lang="less" scoped></style>
