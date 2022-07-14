<template>
  <div class="px-5 py-5 border-[3px] rounded-lg">
    <h1 class="text-[24px] font-semibold text-primary mb-3">
      {{ ticket.theater_name }}
    </h1>
    <p class="text-[18px] text-primary mb-2">
      {{ ticket.date }}
    </p>
    <div class="flex text-[20px] font-medium justify-between mb-3">
      <h1>{{ infoSelected.type }}</h1>
      <p>{{ infoSelected.time }}</p>
    </div>
    <p>*Seat selection can be made after this</p>
    <button
      class="text-white btn-color rounded-lg text-[20px] w-full py-4 font-bold mt-2"
    >
      BUY NOW
    </button>
  </div>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: true,
    },
    infoSelected: {
      type: Object,
      required: true,
    },
  },
  methods: {
 
  },
  //
};
</script>
