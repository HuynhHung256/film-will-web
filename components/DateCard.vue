<template>
  <div class="border rounded-lg p-4 mx-3 text-center cursor-pointer	w-[85px] shadow">
    <p class="text-[16px]">{{ date.daymonth }}</p>
    <p class="text-[20px] font-bold">{{ date.kind }}</p>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: Object,
      required: true,
    },
  },
  //
};
</script>
