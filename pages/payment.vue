<template>
<div>
  <div class="border-t-2 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 lg:pt-6">
    <h1 class="text-2xl font-bold font-sans uppercase">Payment Confirmation</h1>
    <h3 class="mt-5 text-gray-500">Confirmation of payment from the seat you reserved</h3>
  </div>
  <div class="flex mt-20 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grip grid-cols-2 gap-2">
    <div class="mb-40">
      <h2 class="text-xl font-semibold">Schedule Details</h2>
      <div class="py-6 border-b-2">
        <h3 class="text-gray-500 ">Movie Title</h3>
        <h2 class="text-2xl">SPIDERMAN NO WAY HOME</h2>
      </div>

      <div class="py-6 border-b-2">
        <h3 class="text-gray-500 ">Date</h3>
        <h2 class="text-2xl">THURSDAY, 17 DESEMBER 2021</h2>
      </div>

      <div class="py-6 border-b-2 grid grid-cols-2 gap-2">
        <div>
          <h3 class="text-gray-500 ">Class</h3>
          <h2 class="text-2xl">REGULAR 2D</h2>
        </div>
        <div>
          <h3 class="text-gray-500 ">Time</h3>
          <h2 class="text-2xl">14:40</h2>
        </div>
      </div>

      <div class="py-6 border-b-2">
        <h3 class="text-gray-500 ">Ticket ()</h3>
        <h2 class="text-2xl">C8,C9,C10</h2>
      </div>

      <div class="flex w-64 py-6">
        <img class="object-none h-auto w-auto pr-6" src="@/assets/component/Vector 7.png" alt="#">
        <img class="object-none h-auto w-auto pr-6" src="@/assets/component/Button.png" alt="#">
      </div>
    </div>


    <!--Bill Payment-->
    <div class="shadow-xl py-8 ml-20 mb-32 border-2 rounded-xl px-6 w-1/3 h-auto">
      <h2 class="text-xl font-semibold">Order Summary</h2>
      <div class="pt-8 pb-3 border-b-2">
        <h2 class="font-semibold">Transaction Details</h2>
        <div class="">
          <div class="flex grid-cols-2 ">
            <div>
              <h3 class="uppercase">Regular seat</h3>
            </div>

            <div>
              <div class="flex space-x-4 justify-end">
                <h3 class="">Pr:50000 VND</h3>
                <h3 class="">x3</h3>
              </div>
            </div>
          </div>

          <div class="flex grid-cols-2">
            <div>
              <h3 class="uppercase">Service Cost</h3>
            </div>
            <div>
              <div class="flex space-x-4 justify-end">
                <h3 class="">Pr:50000 VND</h3>
                <h3 class="">x3</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-8 pb-8 border-b-2">
        <h2 class="font-semibold">Promo & Voucher</h2>
        <div class="">
          <div class="flex grid-cols-2 ">
            <div>
              <h3 class="uppercase">Promo TIX ID</h3>
            </div>

            <div>
              <div class="flex space-x-4 justify-end">
                <h3 class="">- Pr:70000 VND</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-4 pb-4 border-b-2">
        <div class="">
          <div class="flex grid-cols-2 ">
            <div>
              <h3 class="font-bold">Total Bayar</h3>
            </div>

            <div>
              <div class="flex space-x-4 justify-end font-bold">
                <h3 class="">Pr:70000 VND</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-10">
        <div class="">
          <div class="flex grid-cols-2 ">
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
          <div class="flex grid-cols-2 ">
            <div class="flex flex-row space-x-4">
              <img class="object-none" src="@/assets/component/visa.png" alt="">
              <h3 class="font-semibold text-lg">Techcombank</h3>
            </div>
          </div>

          <div class="pt-6 pb-4">
            <h3 class="text-xs text-red-500">* Ticket purchase cannot be cancelled</h3>
          </div>

          <div>
            <NuxtLink to="/paymentsuccessful">
            <button
              class="bg-slate-900 hover:bg-slate-600 text-xl text-yellow-500 rounded-md w-full py-4 font-bold mt-2">
              BUY TICKET
            </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}

</script>