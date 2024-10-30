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
        @select-all="handleSelectAll"
      >
        <el-table-column type="selection" width="55" :reserve-selection="true">
        </el-table-column>
        <el-table-column prop="id" label="编号" width="180"> </el-table-column>
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
import { getList } from "../../api/index";
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
      pageInfo: {
        currentPage: 1,
        pageSize: 5,
        total: 25,
      },
      echoList: [],
    };
  },
  mounted() {
    this.echoList = this.selData;
    this.getList();
  },
  methods: {
    handleSelectAll(data) {
      if (data.length) {
        let temp = [...this.echoList, ...data];
        const maps = new Map();
        let res = temp.filter(
          (item) => !maps.has(item.id) && maps.set(item.id, true)
        );
        this.echoList = res;
      } else {
        this.tableData.forEach((el) => {
          this.echoList = this.echoList.filter((item) => item.id != el.id);
        });
      }
    },
    handleSelect(sels, row) {
      // console.log(sels);
      // console.log(row);
      let selected = sels.length && sels.indexOf(row) !== -1;
      if (!selected) {
        this.echoList = this.echoList.filter((el) => el.id != row.id);
      } else {
        if (this.echoList.length >= 10) {
          this.$message.warning("最多选择10个");
          return;
        }
        this.echoList.push(row);
      }
    },
    confirm() {
      this.$emit("selectData", this.echoList);
      this.handleClose();
    },
    handleClose() {
      this.$emit("update:visiableDialog", false);
    },
    setRowSelected() {
      this.tableData.forEach((el) => {
        if (this.echoList.find((item) => item.id == el.id)) {
          this.$refs.multipleTable.toggleRowSelection(el, true);
        }
      });
    },
    async getList() {
      let param = {
        currentPage: this.pageInfo.currentPage,
        pageSize: this.pageInfo.pageSize,
      };
      let res = await getList(param);
      // console.log(res.data.data);
      this.tableData = res.data.data;
      this.setRowSelected();
    },
    getRowKey(row) {
      return row.id;
    },
    handleSizeChange() {},
    handleCurrentChange(val) {
      this.pageInfo.currentPage = val;
      this.tableData.forEach((el) => {
        this.$refs.multipleTable.toggleRowSelection(el, false);
      });
      this.getList();
    },
  },
};
</script>

<style scoped>
.table {
  margin: 30px;
}
</style>
