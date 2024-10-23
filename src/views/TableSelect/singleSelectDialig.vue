<template>
  <el-dialog
    title="提示"
    :visible.sync="visiableDialog"
    width="70%"
    :before-close="handleClose"
  >
    <div class="table">
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-key="getRowKey"
        ref="multipleTable"
        @select="handleSelect"
      >
        <el-table-column type="selection" width="55" :reserve-selection="true">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageInfo.currentPage"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.total"
      >
      </el-pagination>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="confirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visiableDialog: {
      type: Boolean,
      default: false,
    },
    selData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      tableData: [],
      dataList1: [
        {
          id: 1,
          date: '1',
        },
        {
          id: 2,
          date: '2',
        },
        {
          id: 3,
          date: '3',
        },
        {
          id: 4,
          date: '4',
        },
        {
          id: 5,
          date: '5',
        },
      ],
      dataList2: [
        {
          id: 6,
          date: '6',
        },
        {
          id: 7,
          date: '7',
        },
        {
          id: 8,
          date: '8',
        },
        {
          id: 9,
          date: '9',
        },
        {
          id: 10,
          date: '10',
        },
      ],
      pageInfo: {
        currentPage: 1,
        pageSize: 4,
        total: 8,
      },
      echoList: [],
    };
  },
  mounted() {
    this.echoList = this.selData; //先把父级传下来的已勾选的存在已选择的数组里面
    this.getList();
  },
  methods: {
    handleSelect(sels, row) {
      console.log('sels', sels);
      console.log(row);
      // 3种情况
      if (sels.length > 1) {
        // 判断是否被选中
        let selected = sels.length && sels.indexOf(row) !== -1;
        if (selected) {
          console.log('选中了');
          let selectData = sels.pop();
          this.echoList = [selectData];
          this.$refs.multipleTable.clearSelection();
          this.$refs.multipleTable.toggleRowSelection(selectData, true);
        } else {
          console.log('取消选中');
          this.echoList = [];
        }
      } else if (sels.length == 1) {
        this.echoList = [...sels];
      } else if (!sels.length) {
        this.echoList = [];
      }
    },
    confirm() {
      this.$emit('selectData', this.echoList);
      this.handleClose();
    },
    handleClose() {
      this.$emit('update:visiableDialog', false);
    },
    setRowSelected() {
      this.tableData.forEach((el) => {
        if (this.echoList.find((item) => item.id == el.id)) {
          this.$refs.multipleTable.toggleRowSelection(el, true);
        }
      });
    },
    getList(val = 1) {
      Promise.resolve().then(() => {
        if (val == 1) {
          this.tableData = this.dataList1;
        } else {
          this.tableData = this.dataList2;
        }
        // 获取数据的时候，把当前页，已经选择了的勾上
        this.setRowSelected();
      });
    },
    getRowKey(row) {
      return row.id;
    },
    handleSizeChange() {},
    handleCurrentChange(val) {
      this.getList(val);
    },
  },
};
</script>

<style scoped>
.table {
  margin: 30px;
}
</style>
