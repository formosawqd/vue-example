<template>
  <div>
    单选
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="open">打开</el-button>
      </el-form-item>
    </el-form>
    <SingleSelectDialig
      :visiableDialog.sync="visiableDialog"
      v-if="visiableDialog"
      @selectData="selectData"
      :selData="selData"
    >
    </SingleSelectDialig>
  </div>
</template>

<script>
import SingleSelectDialig from './singleSelectDialig.vue';
export default {
  components: {
    SingleSelectDialig,
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
