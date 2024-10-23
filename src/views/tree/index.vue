<template>
  <div>
    <a-tree :tree-data="treeData" :checkable="true" :defaultExpandAll="true">
      <a-icon style="font-size: 16px" slot="switcherIcon" type="plus-circle" />
      <!-- <a-icon type="plus-circle" /> -->
      <a-icon slot="child" type="" />
    </a-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treeData: [
        {
          title: '下管街道',
          key: '0',
          children: [
            {
              title: '环球中心设备',
              key: '0-0-0',
              scopedSlots: { switcherIcon: 'child' },
            },
            {
              title: '环球中心设备1',
              key: '0-0-1',
              scopedSlots: { switcherIcon: 'child' },
            },
            {
              title: '春山路监控',
              key: '0-1-0',
              scopedSlots: { switcherIcon: 'child' },
            },
            // {
            //   title: '和平社区',
            //   disableCheckbox: true,
            //   key: '0-1',
            //   children: [
            //     {
            //       title: '春山路监控',
            //       key: '0-1-0',
            //       scopedSlots: { switcherIcon: 'child' },
            //     },
            //   ],
            // },
          ],
        },
      ],
    };
  },
  mounted() {
    console.log(111);
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
  content: ' ';
}
/deep/.ant-tree-checkbox-checked .ant-tree-checkbox-inner:hover {
  border: 0px;
}
</style>
