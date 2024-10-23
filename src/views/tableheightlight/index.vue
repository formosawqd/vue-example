<template>
  <div>
    <a-button @click="confirm">确认</a-button>
    <a-table
      ref="table"
      bordered
      size="middle"
      rowKey="id"
      :columns="columns"
      :dataSource="dataSource"
      :customRow="customRow"
    >
    </a-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ],
      dataSource: [],
      leftAlignId: '',
    };
  },
  mounted() {
    this.generateData();
  },
  methods: {
    confirm() {
      console.log(this.leftAlignId);
      let data = this.dataSource.find((el) => el.id == this.leftAlignId);
      console.log(data);
    },
    generateData() {
      console.log(11);

      for (let i = 1; i <= 20; i++) {
        this.dataSource.push({
          id: i,
          name: `User ${i}`,
          age: Math.floor(Math.random() * 60) + 20,
          address: `Street ${i}`,
        });
      }
      console.log(this.dataSource);
    },
    // 自定义行
    customRow(record, index) {
      return {
        // 自定义属性，也就是官方文档中的props，可通过条件来控制样式
        style: {
          // 设置字体颜色
          // 'color': record.id === this.leftAlignId ? '#fff' : '',
          //  设置行背景色
          'background-color': record.id === this.leftAlignId ? '#E6F7FF' : '',
          // 设置字体类型
          // 'font-family': 'Microsoft YaHei',
          // // 下划线
          // 'text-decoration': 'underline',
          // // 字体样式-斜体
          // 'font-style': 'italic',
          // // 字体加粗
          // 'font-weight': 'bold'
        },
        on: {
          // 鼠标单击行
          click: (event) => {
            // 记录当前点击的行标识
            this.leftAlignId = record.id;
          },
        },
      };
    },
  },
};
</script>

<style lang="less" scoped></style>
