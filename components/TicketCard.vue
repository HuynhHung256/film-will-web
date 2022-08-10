<template>
  <div class="px-5 py-5 border-[3px] rounded-lg">
    <h1 class="text-[24px] font-semibold text-primary mb-3">
      {{ ticket.theater_name }}
    </h1>
    <p class="text-[18px] text-primary mb-2">
      {{ ticket.value }}
    </p>
    <div class="flex text-[20px] font-medium justify-between mb-3">
      <h1>{{ ticket.type }}</h1>
      <p>{{ ticket.time }}</p>
    </div>
    <p>*Seat selection can be made after this</p>
    
      <button
        class="text-white btn-color rounded-lg text-[20px] w-full py-4 font-bold mt-2"
        @click ="goNext"
      >
        BUY NOW
      </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ticket: {
        ...this.$store.getters["ticket/ticket"]
      },
    }
  },
  methods: {
    clearTicket(){
      delete this.ticket.time,
      delete this.ticket.type,
      delete this.ticket.theater_name,
      delete this.ticket.date,
      delete this.ticket.price,
      delete this.ticket.seat,
      delete this.ticket.movie
    },
    loadingStore(){
      const val = {...this.$store.getters["ticket/ticket"]}
      this.ticket = val
      console.log("ticket", val)
    },
    goNext() {
      console.log("TICKET: ", this.ticket)
      const val = {...this.$store.getters["ticket/ticket"]}
      this.ticket = val
      console.log("VAL: ", this.ticket)

      // this.$router.push({
      //   name: "choose-seat",
      //   params: {
      //     id: this.$route.params.id,
      //   },
      // })
    },
  },
}
</script>
