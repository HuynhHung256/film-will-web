<template>
  <div>
    <div class="border-t-2 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 lg:pt-6">
      <h1 class="text-2xl font-bold font-sans uppercase">
        Payment Confirmation
      </h1>
      <h3 class="mt-5 text-gray-500">
        Confirmation of payment from the seat you reserved
      </h3>
    </div>

    <div
      class="flex mt-20 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grip grid-cols-2 gap-2"
    >
      <div class="mb-40 w-[300px]">
        <h2 class="text-xl font-semibold">Ticket Details</h2>
        <div class="py-5 border-b-2">
          <h3 class="text-gray-500">Movie Title</h3>
          <h2 class="text-2xl">{{ this.Ticket.movie }}</h2>
        </div>

        <div class="py-5 border-b-2">
          <h3 class="text-gray-500">Date</h3>
          <h2 class="text-2xl">{{ this.Ticket.value }}</h2>
        </div>

        <div class="py-5 border-b-2 grid grid-cols-2 gap-2">
          <div>
            <h3 class="text-gray-500">Class</h3>
            <h2 class="text-2xl text-rose-600">{{ this.Ticket.type }}</h2>
          </div>
          <div>
            <h3 class="text-gray-500">Time</h3>
            <h2 class="text-2xl text-rose-600">{{ this.Ticket.time }}</h2>
          </div>
        </div>

        <div class="py-5 border-b-2">
          <h3 class="text-gray-500">Seats</h3>

          <h2 class="text-2xl text-rose-600">
            <span v-for="(seat, index) in this.Ticket.seat" :key="index"
              >{{ seatWithComma(index) }}
            </span>
          </h2>
        </div>

        <div class="flex w-auto py-9">
          <NuxtLink to="/films/14">
            <button
              class="flex space-x-2 items-center px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md drop-shadow-md xl:text-xl 2xl:text-xl lg:text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-dark">Return</span>
            </button>
          </NuxtLink>
        </div>
      </div>

      <!--Bill Payment-->
      <div
        class="shadow-xl py-6 ml-20 mb-32 border-2 rounded-xl px-6 w-1/3 h-auto"
      >
        <h2 class="text-xl font-semibold">Order Summary</h2>
        <div class="pt-8 pb-3 border-b-2">
          <h2 class="font-semibold">Transaction Details</h2>
          <div class="">
            <div class="flex grid-cols-2">
              <div>
                <h3 class="uppercase">{{ this.Ticket.type }}</h3>
              </div>

              <div>
                <div class="flex space-x-4 justify-end">
                  <h1></h1>
                  <h3 class="">{{ this.Ticket.price }}</h3>
                  <h3 class="">x {{ this.Ticket.seat.length }}</h3>
                </div>
              </div>
            </div>

            <div class="flex grid-cols-2">
              <div>
                <h3 class="uppercase">Service Cost</h3>
              </div>
              <div>
                <div class="flex space-x-4 justify-end">
                  <h2></h2>
                  <h3 class="">{{ this.Ticket.price }}</h3>
                  <h3 class="">x 5%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-8 pb-8 border-b-2">
          <h2 class="font-semibold">Coupon & Voucher</h2>
          <div class="">
            <div class="flex grid-cols-2">
              <div>
                <h3 class="uppercase">happy tuesday</h3>
              </div>

              <div>
                <div class="flex space-x-4 justify-end">
                  <h1></h1>
                  <h3 class="">Discount 15%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-4 pb-4 border-b-2">
          <div class="">
            <div class="flex grid-cols-2">
              <div>
                <h3 class="font-bold">Total</h3>
              </div>

              <div>
                <div class="flex space-x-4 justify-end font-bold">
                  <h3 class="">: 70000 VND</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-10">
          <div class="">
            <div class="flex grid-cols-2">
              <div>
                <h3 class="font-bold">Payment Method</h3>
              </div>

              <div>
                <div class="flex space-x-4 justify-end font-bold">
                  <h3 class="text-sky-500">View All</h3>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <div class="flex grid-cols-2">
              <div class="flex flex-row space-x-4">
                <img
                  class="object-none"
                  src="@/assets/component/visa.png"
                  alt=""
                />
                <h3 class="font-semibold text-lg">Techcombank</h3>
              </div>
            </div>

            <div class="pt-6 pb-4">
              <h3 class="text-xs text-red-500">
                * Ticket purchase cannot be cancelled
              </h3>
            </div>

            <div>
              <NuxtLink to="/films/14/paymentsuccessful">
                <button
                  class="bg-slate-900 hover:bg-slate-600 text-xl text-yellow-500 rounded-md w-full py-4 font-bold mt-2"
                >
                  BUY TICKET
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mb-30 px-4 w-[450px] h-[300px] "
      >
        <img
        class="rounded-xl"
          src="https://ecdn.game4v.com/g4v-content/uploads/2021/11/26091930/NWH-poster-1-game4v-1637893169-6.jpg"
        />
        <h1 class="text-[24px] font-bold text-center">{{ this.Ticket.movie  }}</h1>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Ticket: {
        ...this.$store.getters["ticket/ticket"],
      },
    };
  },
  methods: {
    seatWithComma(index) {
      if (index !== this.Ticket.seat.length - 1) {
        return `${this.Ticket.seat[index]},`;
      } else {
        return this.Ticket.seat[index];
      }
    },
  },
};
</script>
