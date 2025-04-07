<template>
  <div>
    <vxe-button @click="exportEvent">直接导出 TXT 文件</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const gridRef = ref();
console.log(111);
console.log(222);

const gridOptions = reactive({
  showFooter: true,
  exportConfig: {},
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
  ],
});

const exportEvent = () => {
  const $grid = gridRef.value;
  console.log($grid);

  if ($grid) {
    $grid.exportData({
      type: 'txt',
    });
  }
};
</script>
