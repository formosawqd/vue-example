<template>
  <div>
    <MyTable :columns="columns" :dataSource="dataSource">
      <!-- 这里是外面具名插槽，然后用slot-scope来接收里面传出来的数据，老版本是用slot-scope。新版的vue是用的v-slot={} -->
      <span slot="status" slot-scope="{ text }"
        ><a-tag>
          {{ text }}
        </a-tag></span
      >
      <div slot="action" class="btn">
        <a-button size="small" type="primary">新增</a-button>
        <a-button size="small">删除</a-button>
      </div>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './table2.vue';
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Home phone',
          colSpan: 2,
          dataIndex: 'tel',
        },
        {
          title: 'Phone',
          colSpan: 0,
          dataIndex: 'phone',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
        {
          title: 'status',
          dataIndex: 'status',
          scopedSlots: { customRender: 'status' },
        },
        {
          title: 'action',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      dataSource: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          tel: '0571-22098909',
          phone: 18889898989,
          address: 'New York No. 1 Lake Park',
          status: 1,
        },
        {
          key: '2',
          name: 'Jim Green',
          tel: '0571-22098333',
          phone: 18889898888,
          age: 42,
          address: 'London No. 1 Lake Park',
          status: 2,
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          tel: '0575-22098909',
          phone: 18900010002,
          address: 'Sidney No. 1 Lake Park',
          status: 3,
        },
        {
          key: '4',
          name: 'Jim Red',
          age: 18,
          tel: '0575-22098909',
          phone: 18900010002,
          address: 'London No. 2 Lake Park',
          status: 4,
        },
        {
          key: '5',
          name: 'Jake White',
          age: 18,
          tel: '0575-22098909',
          phone: 18900010002,
          address: 'Dublin No. 2 Lake Park',
          status: 5,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
