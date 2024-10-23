<template>
  <div>
    单选 radio形式
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="open">打开</el-button>
      </el-form-item>
    </el-form>
    <SingleSelectDialig1
      :visiableDialog.sync="visiableDialog"
      v-if="visiableDialog"
      @selectData="selectData"
      :selData="selData"
    >
    </SingleSelectDialig1>
  </div>
</template>

<script>
import SingleSelectDialig1 from './singleSelectDialig1.vue';
export default {
  components: {
    SingleSelectDialig1,
  },
  data() {
    return {
      visiableDialog: false,
      form: {
        name: '',
      },
      selData: [],
    };
  },
  methods: {
    selectData(data) {
      console.log('父页面收到的选中的数据', data);
      this.selData = data;
      this.form.name = data.map((el) => el.id).toString();
    },
    open() {
      this.visiableDialog = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
