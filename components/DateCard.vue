<template>
  <div class="border
   rounded-lg p-4 mx-3 my-3 text-center cursor-pointer	
   w-[85px] shadow  hover:-translate-y-1 hover:scale-125 duration-500" >
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
    
  },
  data() {
    return {
      dateSelected: {},
    }
  },
  methods:{

  }
}
</script>
