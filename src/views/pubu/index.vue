<template>
  <div class="main" @scroll="scroll">
    <waterfall
      :col="col"
      :autoResize="autoResize"
      :moveTransitionDuration="0.4"
      :fillBox="fillBox"
      :col-width="colWidth"
      :list="list"
      ref="waterfall"
      imgKey="src"
    >
      <!-- 两种图片绑定模式
        1.指定图片的Key（ imgKey="src"）
        2.在img标签上加class（ class="waterfall-img"） -->
      <!-- img标签如果设置宽高会渲染的更快 -->
      <div
        class="waterfall-item"
        :class="{ bounceIn: item.state == 'show' }"
        slot-scope="item"
      >
        <img
          v-if="item.data.src"
          style="width: 100%"
          class="waterfall-img"
          :src="item.data.src"
        />
        {{ item.index }}-{{ item.data.text }}
      </div>
    </waterfall>
  </div>
</template>

<script>
import waterfall from 'vue-waterfall-rapid';
export default {
  name: 'vue-waterfall-rapid',
  components: {
    waterfall,
  },
  data() {
    return {
      //是否根据容器尺寸自动计算重绘
      autoResize: true,
      //是否始终填满容器
      fillBox: false,
      //列宽-有指定列数则此属性失效
      colWidth: window.innerWidth / 5,
      //列数
      col: 0,
      //图片数据
      list: [],
    };
  },
  mounted() {
    this.$refs.waterfall.onRender = (res) => {
      console.log('渲染完毕', res);
    };
  },
  methods: {
    scroll(e) {
      // console.log(e)
    },
  },
};
</script>

<style lang="scss" scoped></style>
