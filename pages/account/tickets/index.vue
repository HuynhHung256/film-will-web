<template>
  <div class="flex mt-10">
    <div class="w-[30%] flex flex-col">
      <a
        href="#"
        class="
          py-3
          border-b-2
          ml-[100px]
          font-semibold
          text-[18px]
          hover:text-blue-500
          flex
          items-center
        "
      >
        <img src="~/assets/images/ticket.svg" />
        ACTIVE TICKET
      </a>
      <a
        href="#"
        class="
          py-3
          border-b-2
          ml-[100px]
          font-semibold
          text-[18px]
          hover:text-blue-500
          flex
          items-center
        "
      >
        <img src="~/assets/images/transaction.svg" />
        TRANSACTION LIST
      </a>
    </div>
    <div class="bg-white w-[100%] pl-[100px]">
      <h1 class="font-semibold text-[30px]">My Ticket</h1>
      <p>List of tickets and transactions you've done</p>
      <div class="mt-5">
        <span
          class="
            border
            rounded-lg
            px-5
            py-2
            shadow
            hover:border-blue-500 hover:text-blue-500
            cursor-pointer
          "
          >Film</span
        >
        <span
          class="
            border
            rounded-lg
            px-5
            py-2
            shadow
            hover:border-blue-500 hover:text-blue-500
            cursor-pointer
          "
          >Event</span
        >
        <span
          class="
            border
            rounded-lg
            px-5
            py-2
            shadow
            hover:border-blue-500 hover:text-blue-500
            cursor-pointer
          "
          >Voucher</span
        >
      </div>

      <div class="w-[80%]">
        <NuxtLink
          to="/account/tickets/14"
          v-for="f in 4"
          :key="f"
          class="flex items-center py-10 border-b-2 justify-between"
        >
          <div class="flex items-center">
            <img :src="films[f].img" class="w-[200px] h-[250px]" />
            <div class="ml-5">
              <h1 class="font-semibold text-[25px]">{{ films[f].name }}</h1>
              <p>{{ films[f].datetime }}</p>
              <div class="flex items-center">
                <div class="text-slate-500 flex items-center">
                  <img src="~/assets/images/location.png" />
                  {{ films[f].place }}
                </div>
                <p class="font-semibold ml-2">{{ films[f].type }}</p>
              </div>
            </div>
          </div>

          <button
            v-if="films[f].status"
            class="bg-blue-500 px-5 py-2 text-white rounded"
          >
            Succeed
          </button>
          <button v-else class="bg-red-500 px-5 py-2 text-white rounded">
            Failed
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      films: [
        {
          id: 1,
          name: "The Shawshank Redemption",
          img: "https://ae01.alicdn.com/kf/HTB1mWWMXuGSBuNjSspbq6AiipXaH/The-Shawshank-Redemption-Retro-Vintage-Classic-Movie-Poster-Canvas-Painting-Wall-Sticker-Home-Art-Home-Decoration.jpg",
          datetime: "Thursday, 16 Desember 2021, 14:40",
          place: "Hung Vuong Plaza CGV",
          type: "( Regular 2D)",
          status: 1,
        },
        {
          id: 2,
          name: "The Godfather",
          img: "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
          datetime: "Thursday, 16 Desember 2021, 14:40",
          place: "Hung Vuong Plaza CGV",
          type: "( Regular 2D)",
          status: 1,
        },
        {
          id: 3,
          name: "The Godfather: Part II",
          img: "https://images-na.ssl-images-amazon.com/images/I/71Tn5ZErDiL._RI_.jpg",
          datetime: "Thursday, 16 Desember 2021, 14:40",
          place: "Hung Vuong Plaza CGV",
          type: "( Regular 2D)",
          status: 0,
        },
        {
          id: 4,
          name: "The Dark Knight",
          img: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
          datetime: "Thursday, 16 Desember 2021, 14:40",
          place: "Hung Vuong Plaza CGV",
          type: "( Regular 2D)",
          status: 0,
        },
        {
          id: 5,
          name: "Em va Trinh",
          img: "https://image.thanhnien.vn/w1024/Uploaded/2022/tnabtw/2022_06_17/284550373-370852648356152-3746905122681766979-n-3012.jpg",
          datetime: "Thursday, 16 Desember 2021, 14:40",
          place: "Hung Vuong Plaza CGV",
          type: "( Regular 2D)",
          status: 1,
        },
      ],
    };
  },
};
</script>