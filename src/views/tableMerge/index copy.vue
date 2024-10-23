<template>
  <el-table
    :data="tableData"
    border
    style="width: 600"
    :header-cell-style="headerCellStyle"
  >
    <el-table-column
      prop="name"
      label="基本信息（姓名、年龄、家乡）"
      align="center"
    >
    </el-table-column>
    <!-- <el-table-column prop="age" label="年龄" align="center"> </el-table-column> -->
    <el-table-column prop="home" label="家乡" align="center"> </el-table-column>
    <el-table-column prop="kind" label="所属种族" align="center">
    </el-table-column>
    <!-- <el-table-column label="重要信息" align="center"> -->
    <el-table-column label="公开重要信息" align="center">
      <el-table-column prop="nickname" label="法号" align="center">
      </el-table-column>
      <el-table-column prop="hobby" label="爱好&性格" align="center">
      </el-table-column>
      <el-table-column prop="personality" label="性格" align="center">
      </el-table-column>
    </el-table-column>
    <el-table-column label="保密重要信息" align="center">
      <el-table-column prop="bornBackground" label="出身背景" align="center">
      </el-table-column>
      <el-table-column prop="skill" label="技能" align="center">
      </el-table-column>
    </el-table-column>
    <!-- </el-table-column> -->
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '孙悟空',
          age: 500,
          home: '花果山水帘洞',
          kind: 'monkey',
          nickname: '斗战胜佛',
          hobby: '大闹天宫',
          personality: '勇敢坚韧、疾恶如仇',
          bornBackground: '仙石孕育而生',
          skill: '72变、筋斗云',
        },
        {
          name: '猪八戒',
          age: 88,
          home: '高老庄',
          kind: 'pig',
          nickname: '净坛使者',
          hobby: '吃包子',
          personality: '好吃懒做、贪图女色',
          bornBackground: '天蓬元帅错投猪胎',
          skill: '36变',
        },
        {
          name: '沙和尚',
          age: 1000,
          home: '通天河',
          kind: 'human',
          nickname: '金身罗汉',
          hobby: '游泳',
          personality: '憨厚老实、任劳任怨',
          bornBackground: '卷帘大将被贬下界',
          skill: '18变',
        },
        {
          name: '唐僧',
          age: 99999,
          home: '东土大唐',
          kind: 'human',
          nickname: '檀功德佛',
          hobby: '取西经',
          personality: '谦恭儒雅、愚善固执',
          bornBackground: '金蝉子转世',
          skill: '念紧箍咒',
        },
      ],
    };
  },
  methods: {
    headerCellStyle({ row, column, rowIndex, columnIndex }) {
      /**
       * 合并：基本信息（姓名、年龄、家乡）单元格【通过行与列的索引来合并】
       * */
      let colArr = [1, 2];
      if (colArr.includes(columnIndex)) {
        if (rowIndex == 0) {
          // 把第1列第0行和第2列第0行的单元格隐去
          return { display: 'none' };
        }
      }
      if ((columnIndex == 0) & (rowIndex == 0)) {
        // 把第0列第0行的单元格横向延伸，补上刚刚隐去的单元格位置，并上个色
        this.$nextTick(() => {
          document.querySelector(`.${column.id}`).setAttribute('colspan', '3');
        });
        return { background: 'pink' };
      }
      /**
       * 合并：重要信息--->公开重要信息--->爱好性格单元格 【通过单元格的文字内容来合并】
       * */
      if (column.label == '性格') {
        return { display: 'none' };
      }
      if (column.label == '爱好&性格') {
        this.$nextTick(() => {
          document.querySelector(`.${column.id}`).setAttribute('colspan', '2');
        });
        return { background: 'orange' }; // 不加这个也行，加了只是为了更好区分
      }

      /**
       * 重要！重要！重要！
       *    我们想要合并表头的单元格，需要先找到对应单元格
       *    可以通过列column对象的label或者行与列索引来找到，找到以后进行隐藏或合并
       *    也可以遍历行row数组找，不过会麻烦一些，个人建议通过column来找
       * */
      // 通过column找
      if (column.label == '技能') {
        return { background: '#baf' };
      }
      // 通过row找
      for (const item of row) {
        if (item.label == '重要信息') {
          this.$nextTick(() => {
            document.querySelector(`.${item.id}`).style.background = '#ea66a6';
          });
          break;
        }
      }
    },
  },
};
</script>

<style>
.el-table th {
  font-weight: bold;
  color: #333;
}
</style>
