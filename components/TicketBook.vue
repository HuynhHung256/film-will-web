<template>
  <div class="mt-5">
    <div class="flex items-center justify-between">
      <h1 class="text-[20px] font-medium text-primary">
        {{ ticket.type }}
      </h1>
      <p class="text-[18px] text-red-500 mr-4">Price: {{ formatCurrency(ticket.price) }} VND</p>
    </div>
    <div class="flex flex-wrap">
      <span
        v-for="item in ticket.time"
        :key="item"
        class="py-3 mr-3 mb-3 rounded border border-primary font-medium w-[100px] text-center"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
   methods: {
    formatCurrency(value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
  }
  //
};
</script>
