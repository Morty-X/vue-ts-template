<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div
      class="container underline text-[10px] px-2 text-[#666] w-[30px] h-[30px] bg-rose-400"
    ></div>
    <icon-fa-beer style="color: orange" />
  </div>
</template>
<script setup lang="ts">
import { useNumberFormatter } from './utils';
let num1 = 12362342;
const { format } = useNumberFormatter();
const res1 = format(num1);
console.log('🚀 ~ res1:', res1);
</script>
