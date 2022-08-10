<template>
  <div class="mt-5">
    <div class="flex items-center">
      <h1 class="text-[20px] font-medium text-primary">
        {{ ticket.type }}
      </h1>
      <p class="text-[18px] text-red-500 ml-3">
        Price: {{ this.formatVnd(ticket.price) }} VND
      </p>
    </div>
    <div class="flex flex-wrap">
      <span
        v-for="item in ticket.time"
        :key="item"
        class="py-3 mr-3 mb-3 rounded border border-primary font-medium w-[100px] 
        text-center cursor-pointer shadow"
        :class="timeSelected === item && 'card-active'"
        @click="activeCard"
        >{{ item }}
      </span>
    </div>
  </div>
</template>

<script>
import numeral from "numeral"

export default {
  props: {
    ticket: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeSelected: "",
    }
  },
  methods: {
    // formatCurrency(value) {
    //   return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    // },
    formatVnd: function(value) {
      return numeral(value).format("0,0")
    },
    activeCard(e) {
      // console.log("ticket", this.ticket)
      // console.log("TIME SELECTED: ", e.target.innerText)
      // console.log(e.target.parentElement.previousElementSibling.firstChild.innerText)
      const type = e.target.parentElement.previousElementSibling.firstChild.innerText
      console.log('CARD: ', e)
      console.log("time: ",this.timeSelected)
      this.timeSelected = e.target.innerText
      console.log('TIME SELECTED: ', this.timeSelected)
      this.$emit("set-ticket", {time: e.target.innerText, type})
    },
  },
  //
}
</script>
