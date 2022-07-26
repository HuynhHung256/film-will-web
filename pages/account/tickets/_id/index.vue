<template>
  <div class="container m-auto">
    <div class="w-full max-w-[638px] m-auto">
      <div
        class="text-4xl font-bold text-center font-sans text-slate-800 mt-10"
      >
        Transaction Details
      </div>
      <div class="w-full mt-12">
        <div
          class="rounded-t-2xl bg-[#1A2C50] h-auto max-h-[280px] p-10 relative"
        >
          <div class="text-2xl font-sans text-[#F2C46F] mb-6">
            Spiderman: No Way Home
          </div>
          <div class="flex">
            <div class="w-full pr-10 border-r-2 border-[#9DA8BE]">
              <p class="text-md font-sans text-[#9DA8BE] mb-2">Located</p>
              <p class="text-xl font-sans text-[#fff] mb-3">
                Hung Vuong Plaza CGV
              </p>
              <div class="flex justify-between mt-5">
                <div>
                  <p class="text-md font-sans text-[#9DA8BE] mb-2">Date</p>
                  <p class="text-xl font-sans text-[#fff]">16 December 2021</p>
                </div>
                <div>
                  <p class="text-md font-sans text-[#9DA8BE] mb-2">Time</p>
                  <p class="text-xl font-sans text-[#fff]">14:40</p>
                </div>
              </div>
            </div>
            <div class="w-full pl-10">
              <div>
                <p class="text-md font-sans text-[#9DA8BE] mb-2">Class</p>
                <p class="text-xl font-sans text-[#fff] mb-3">Regular 2D</p>
              </div>
              <div class="mt-5">
                <p class="text-md font-sans text-[#9DA8BE] mb-2">Studio</p>
                <p class="text-xl font-sans text-[#fff]">Studio 1</p>
              </div>
            </div>
          </div>
        </div>
        <div class="circle h-[248px] relative bg-[#F2C46F] p-10 m-auto">
          <div class="flex w-7/12 justify-between">
            <div>
              <p class="text-md font-sans text-slate-800 mb-3">Booking Code</p>
              <p class="text-md font-sans text-slate-800 mb-3">Password Key</p>
              <p class="text-md font-sans text-slate-800 mb-3">Chair</p>
            </div>
            <div>
              <p class="text-xl font-sans text-slate-800 mb-3">
                037491740184392
              </p>
              <p class="text-xl font-sans text-slate-800 mb-3">147294</p>
              <p class="text-xl font-sans text-slate-800 mb-3">C8, C9, 10</p>
            </div>
          </div>
          <div class="circle w-full">
            <ul class="flex justify-between w-full list-none absolute">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full mt-12">
        <div class="text-2xl font-bold font-sans text-slate-800 mb-6">
          Purchase Details
        </div>
        <div class="flex justify-between text-xl text-[#333333] font-sans mb-6">
          <p>REGULAR SEAT</p>
          <p>
            Pr: 50.000 VND<span
              class="text-[#414A63] font-bold font-sans text-lg pl-2"
              >X3</span
            >
          </p>
        </div>
        <div class="flex justify-between text-xl text-[#333333] font-sans mb-6">
          <p>SERVICE COST</p>
          <p>
            Pr: 3.000 VND<span
              class="text-[#414A63] font-bold font-sans text-lg pl-2"
              >X3</span
            >
          </p>
        </div>
        <div class="flex justify-between text-xl text-[#333333] font-sans mb-6">
          <p>PROMO FILM WILL</p>
          <p>- Pr: 70.000 VND</p>
        </div>
        <div
          class="
            flex
            justify-between
            text-xl text-[#333333]
            pt-3
            border-[#DADFE8] border-t-[1px]
            font-sans
            mb-6
          "
        >
          <p>TOTAL PAYMENT</p>
          <p class="font-bold">Pr: 89.000 VND</p>
        </div>
      </div>
      <div class="w-full max-w-[129px] cursor-pointer mt-12">
        <NuxtLink
          class="
            text-[#1A2C50]
            arrow
            font-sans
            text-2xl
            font-bold
            relative
            pl-12
          "
          to="/account/tickets"
          >Return
          </NuxtLink>
      </div>
    </div>
  </div>
</template>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
}

.circle ul {
  bottom: calc(50% - 135px);
  padding: 0 15px;
  left: 0;
}

.circle ul li {
  background: #fff;
  border-radius: 50%;
  width: 24px;
  height: 23.5px;
}

.arrow:before {
  content: "";
  position: absolute;
  background: url("@/page html/html khoa/arrow.svg");
  width: 22px;
  height: 19px;
  top: 25%;
  left: 0;
}
</style>

<script>
export default {
  
}
</script>