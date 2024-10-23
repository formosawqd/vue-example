<template>
  <div>
    <p>表格数据</p>
    <el-table
      :data="tableData"
      border
      height="400px"
      max-height="400px"
      size="small"
      row-class-name="row"
      cell-class-name="column"
      :header-cell-style="headerStyle"
      :highlight-current-row="true"
      fit
    >
      <el-table-column
        v-for="(item, index) in tableLabel"
        :key="index"
        :prop="item.prop"
        :min-width="item.width"
        :label="item.label"
        show-overflow-tooltip
        align="center"
      >
        <el-table-column
          v-for="(itemchildren, indexchildren) in item.list"
          :key="indexchildren"
          :prop="itemchildren.prop"
          :min-width="itemchildren.width"
          :label="itemchildren.label"
          show-overflow-tooltip
          align="center"
        >
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableLabel: [
        {
          label: '大标题',
          list: [
            { label: '业务1', prop: 'sale' },
            { label: '业务2', prop: 'const' },
            { label: '业务3', prop: 'profit' },
          ],
        },
        {
          label: '销售量1',
          list: [
            { label: '内容1', list: [{ label: '内容1', prop: 'sale' }] },
            { label: '内容2', list: [{ label: '内容2', prop: 'sale' }] },
            { label: '内容3', list: [{ label: '内容3', prop: 'sale' }] },
          ],
        },
        {
          label: '销售量2',
          list: [
            { label: '内容1', list: [{ label: '内容1', prop: 'sale' }] },
            { label: '内容2', list: [{ label: '内容2', prop: 'sale' }] },
          ],
        },
      ],
      tableData: [
        // { id: 1, date: "2018-07-24", profit: 35394.05 },
        // { id: 2, const: 102203.71, profit: 35394.05 },
      ],
    };
  },
  methods: {
    headerStyle({ row, column, rowIndex, columnIndex }) {
      // let colArr = [];
      // if (colArr.includes(columnIndex)) {
      //   if (rowIndex == 1) {
      //     // 把第1列第0行和第2列第0行的单元格隐去
      //     return { display: 'none' };
      //   }
      // }

      if ((columnIndex == 0) & (rowIndex == 0)) {
        this.$nextTick(() => {
          document.querySelector(`.${column.id}`).setAttribute('rowspan', '3');
        });
        return { background: 'pink' };
      }
      if ((columnIndex == 0) & (rowIndex == 1)) {
        //   // 把第0列第0行的单元格横向延伸，补上刚刚隐去的单元格位置，并上个色
        //   this.$nextTick(() => {
        //     document.querySelector(`.${column.id}`).setAttribute('colspan', '3');
        //     // document.querySelector(`.${column.id}`).setAttribute('rowspan', '2');
        //   });
        return { display: 'none' };
      }
      if ((columnIndex == 1) & (rowIndex == 1)) {
        return { display: 'none' };
      }
      if ((columnIndex == 2) & (rowIndex == 1)) {
        return { display: 'none' };
      }
    },
  },
};
</script>

<style></style>
