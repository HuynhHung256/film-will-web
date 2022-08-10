<template>
  <div class="container">
    <div class="relative ml-14">
      <div>
        <h1 class="text-3xl font-bold font-sans text-black pb-4">
          CHOOSE SEATS
        </h1>
        <p class="text-slate-600 drop-shadow-xl">
          Choose the seat you will occupy during the screening
        </p>
      </div>
      <div class="max-w-custom w-full">
        <div class="flex justify-around ml-20 mt-20">
          <div class="w-1/5 justify-start">
            <div
              class="flex items-center justify-between font-sans text-2xl font-bold"
            >
              <img style="height: 20px" src="@/page html/html khoa/clock.svg" />
              14:00
            </div>
          </div>
          <div class="w-3/5">
            <ul class="flex justify-end">
              <li class="relative">
                <span id="chosen" class="px-5">Chosen</span>
              </li>
              <li class="relative">
                <span id="empty" class="px-5">Empty</span>
              </li>
              <li class="relative">
                <span id="choosing" class="px-5">Choosing</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex ml-10 mt-20 space-x-14">
          <!-- Seat Map -->

          <div id="onleft" class="grid grid-rows-10 gap-2">
            <div
              v-for="(char, i) in alphabet"
              :key="i"
              class="grid grid-cols-10 gap-2"
            >
              <div v-for="(num, j) in leftSeat" :key="j">
                <button
                  class="rounded-lg text-black border border-gray-600 bg-white hover:bg-sky-900 hover:text-white py-2 px-4"
                >
                  {{ char }}{{ num }}
                </button>
              </div>
            </div>
          </div>
          <div id="onright" class="grid grid-rows-10 gap-2">
            <div
              v-for="(char, i) in alphabet"
              :key="i"
              class="grid grid-cols-10 gap-2"
            >
              <div v-for="(num, j) in rightSeat" :key="j">
                <button
                  class="rounded-lg text-black border border-gray-600 bg-white hover:bg-sky-900 hover:text-white py-2 px-4"
                >
                  {{ char }}{{ num }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex w-full mt-14 bg-[#118EEA] h-14 text-white text-center justify-center items-center font-sans text-2xl font-bold cursor-default"
        >
          <h1>Cinema Screen Here</h1>
        </div>
        <div class="flex width-full mx-20 mt-14">
          <div class="flex w-1/2">
            <div class="w-1/2">Total</div>
            <div class="w-1/2">Choosing</div>
          </div>
          <div class="flex w-1/2 justify-end">
            <div class="w-1/2">
              <NuxtLink to="/films/14">
                <button
                  class="return 2xl:w-[200px] xl:w-[180px] lg:w-[160px] ml-12 border-2 rounded-md px-3 font-sans xl:text-xl 2xl:text-xl lg:text-lg py-3"
                >
                  RETURN
                </button>
              </NuxtLink>
            </div>
            <div class="w-1/2">
              <NuxtLink to="/films/14/payment">
                <button
                  class="confirmation 2xl:w-[240px] xl:w-[220px] lg:w-[200px] bg-[#1A2C50] text-[#FFBE00] border-2 rounded-md lg:ml-6 px-3 font-sans xl:text-xl 2xl:text-xl lg:text-lg py-3"
                >
                  CONFIRM
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#chosen::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #1a2c50;
  left: -2px;
  bottom: 5px;
}

#empty::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #fff;
  border: 1px solid #4b5563;
  left: -2px;
  bottom: 5px;
}

#choosing::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #118eea;
  left: -2px;
  bottom: 5px;
}

.seats:hover {
  background-color: #544a7c;
  color: #fff;
}

input[type="checkbox"]:checked + span {
  background-color: #118eea;
  color: #fff;
}

.return:hover {
  background-color: #544a7c;
  color: #fff;
}

.confirmation:hover {
  background-color: #544a7c;
}
</style>

<script>
export default {
  data() {
    return {
      alphabet: "ABCDEFGH",
      leftSeat: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      rightSeat: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    };
  },
};
</script>
