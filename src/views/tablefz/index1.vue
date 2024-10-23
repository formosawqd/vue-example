<template>
  <MyTable :columns="columns" :dataSource="dataSource">
    <span slot="status" slot-scope="{ record }">
      <a-tag>
        {{ record.status }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="{ record }">
      <a-button size="small" @click="add(record)">添加</a-button>
      <a-button style="margin-left: 10px" size="small" @click="add(key)"
        >删除</a-button
      >
    </span>
  </MyTable>
</template>
<script>
import MyTable from './table1.vue';

export default {
  components: {
    MyTable,
  },

  data() {
    return {
      columns: [
        {
          title: 'name',
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
        {
          title: 'status',
          dataIndex: 'status',
          key: 'status',
          scopedSlots: { customRender: 'status' },
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          //   scopedSlots: { customRender: 'tags' },
        },
        {
          title: 'Action',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      dataSource: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
          status: 1,
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
          status: 2,
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
          status: 3,
        },
      ],
    };
  },
  methods: {
    add(record) {
      console.log(record);
    },
  },
};
</script>
