<template>
  <div>
    <a-table
      :columns="columns"
      :components="components"
      :data-source="tableList"
      :rowKey="(record) => record.dataIndex"
      bordered
      :pagination="ispagination"
      size="middle"
      :scroll="{ x: scrollX }"
    >
      <template
        v-for="column in columns"
        :slot="column.scopedSlots ? column.scopedSlots.customRender : ''"
        slot-scope="text, record"
      >
        <slot
          :name="column.scopedSlots ? column.scopedSlots.customRender : ''"
          v-bind="record"
          >{{ record }}
        </slot>
      </template>
    </a-table>
  </div>
</template>
<script>
import Vue from 'vue';
// import VueDraggableResizable from "vue-draggable-resizable";

// Vue.component("vue-draggable-resizable", VueDraggableResizable);

export default {
  name: 'cTable',
  props: {
    // 表格标题配置数据
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 表格列表数据
    tableList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    //横向滚动条
    scrollX: {
      type: Number,
      required: false,
      default: 0,
    },
    //是否使用antd自带分页器
    ispagination: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    components() {
      return {
        header: {
          cell: (h, props, children) => {
            const { key, ...restProps } = props;
            const col = this.columns.find((col) => {
              const k = col.dataIndex || col.key;
              return k === key;
            });

            if (!col || !col.width) {
              return h('th', { ...restProps }, [...children]);
            }

            const dragProps = {
              key: col.dataIndex || col.key,
              class: 'table-draggable-handle',
              attrs: {
                w: 10,
                x: col.width,
                z: 1,
                axis: 'x',
                draggable: true,
                transform: 'none',
                resizable: false,
              },
              on: {
                dragging: (x, y) => {
                  col.width = Math.max(x, 90);
                },
              },
            };
            const drag = h('vue-draggable-resizable', { ...dragProps });
            return h('th', { ...restProps, class: 'resize-table-th' }, [
              ...children,
              drag,
            ]);
          },
        },
      };
    },
  },
};
</script>
<style>
.resize-table-th {
  position: relative;
}

.table-draggable-handle {
  height: 100% !important;
  bottom: 0;
  position: absolute;
  left: auto !important;
  transform: none !important;
  right: -5px;
  z-index: 100 !important;
  cursor: col-resize;
  touch-action: none;
}
</style>
