<template>
  <div class="border rounded-lg p-4 mx-3 text-center cursor-pointer	w-[85px] shadow" @click="this.activeCard">
    <p class="text-[16px]">{{ date.daymonth }}</p>
    <p class="text-[20px] font-bold">{{ date.kind }}</p>
    <span class="hidden">{{date.value}}</span>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: Object,
      required: true,
    },
    activeCard: ['click']
  },
  data() {
    return {
      dateSelected: {},
    };
  },
  //
};
</script>
