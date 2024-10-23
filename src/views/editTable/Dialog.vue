<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose"
    >
      <el-button type="text" @click="add">新增</el-button>
      <a-table
        :columns="columns"
        :data-source="data"
        bordered
        rowKey="logInfPK"
      >
        <template
          v-for="col in ['logInfPK', 'address']"
          :slot="col"
          slot-scope="text, record, index"
        >
          <template>
            <a-input
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              @change="
                (e) => handleChange(e.target.value, record.logInfPK, col)
              "
            />
            <template v-else>
              {{ text }}
            </template>
          </template>
        </template>
        <template slot="operation" slot-scope="text, record, index">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a @click="() => save(record.logInfPK)">保存</a>
            </span>
            <span v-else>
              <a
                :disabled="editingKey !== ''"
                @click="() => edit(record.logInfPK)"
                >编辑</a
              >
              <a style="margin-left: 20px" @click="() => del(record.logInfPK)"
                >删除</a
              >
            </span>
          </div>
        </template>
      </a-table>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="handleClose">取 消</el-button>
        <el-button size="small" type="primary" @click="confirm"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editingKey: '',
      columns: [
        {
          title: '编号',
          dataIndex: 'logInfPK',
          width: '25%',
          scopedSlots: { customRender: 'logInfPK' },
        },

        {
          title: '描述',
          dataIndex: 'address',
          width: '40%',
          scopedSlots: { customRender: 'address' },
        },
        {
          title: '操作',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
      data: [
        {
          logInfPK: 1,
          address: 'wadas',
        },
      ],
    };
  },

  methods: {
    add() {
      let obj = {
        logInfPK: this.data.length + 1,
        address: 'wadas',
      };
      this.data.push(obj);
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.find((item) => key === item.logInfPK);
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.find((item) => key === item.logInfPK);
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    del(key) {
      this.data = this.data.filter((el) => el.logInfPK !== key);
    },
    save(key) {
      const newData = [...this.data];
      const target = newData.find((item) => key === item.logInfPK);
      if (target) {
        delete target.editable;
        this.data = newData;
      }
      this.editingKey = '';
      console.log(this.data);
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.find((item) => key === item.logInfPK);
      this.editingKey = '';
    },
    confirm() {},
    handleClose() {
      this.$emit('update:dialogVisible', false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
