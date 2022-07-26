<template>
  <div class="flex mx-36 my-10">
    <div>
      <div class="border-b-2">
        <h1 class="text-4xl font-bold">TIMETABLE</h1>
        <p>Choose the cinema schedule that you will watch</p>
        <div class="flex my-5 flex-wrap">
          <DateCard
            v-for="item in DateDetail"
            :date="item"
            :key="item.daymonth"
            v-bind:class="dateSelected === item && 'card-active'"
          />
        </div>
      </div>
      <div>
        <!-- <div class="flex items-center mt-2">
          <img src="../assets/images/location.png" />
          <h1 class="mx-5">HO CHI MINH</h1>
          <img src="../assets/images/vector-down.png" class="h-[10px]" />
        </div> -->
        <div class="mt-5">
          <div class="flex space-x-2 text-[24px] font-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h1>HO CHI MINH CITY</h1>
            <img
              class="h-3 mt-3"
              src="@/page html/html nguyen/component/32/Vector 7.png"
              alt=""
            />
          </div>
          <div class="flex my-4 space-x-6">
            <div
              class="
                flex
                border-2 border-slate-700
                rounded-md
                px-4
                py-1
                w-[30%]
                space-x-12
              "
            >
              <input
                class="text-base w-5/6"
                type="text"
                placeholder="Search Post"
              />
              <img src="@/page html/html nguyen/component/search.png" alt="#" />
            </div>

            <div class="flex-none pt-2 font-normal">Filter</div>

            <div class="flex-none pt-5">
              <img
                src="@/page html/html nguyen/component/Vector 8.png"
                alt="#"
              />
            </div>

            <div class="flex-none pt-2 font-normal">Studio</div>

            <div class="flex-none pt-5">
              <img
                src="@/page html/html nguyen/component/Vector 8.png"
                alt="#"
              />
            </div>

            <div class="flex-none pt-2 font-normal">Cinema</div>

            <div class="flex-none pt-5">
              <img
                src="@/page html/html nguyen/component/Vector 8.png"
                alt="#"
              />
            </div>
          </div>

          <h1 class="flex text-[24px] font-semibold items-center">
            <img
              src="@/assets/images/Star.png"
              class="w-[32px] h-[32px] mr-3"
            />
            HUNG VUONG PLAZA CGV
          </h1>
          <p>Floor 7, 126 Hung Vuong Street, 5 District, HCM City</p>
        </div>

        <div class="w-[60%] mt-5">
          <TicketBook
            v-for="item in Ticket"
            :ticket="item"
            :key="item.type"
            @set-ticket="setTicket"
          />
        </div>
      </div>
      <!-- <div class="mt-10">
        <button type="button" class="bg-sky-900 rounded-lg py-4 w-full" data-modal-toggle="ChooseSeatModal">
          <h1 class="text-white font-semibold uppercase">choose seat</h1>
        </button>
      </div> -->
    </div>
    <div class="ml-[100px] w-[40%]">
      <FilmInfoCard :filmInfo="this.FilmInfo" :img="this.Img" class="mb-5" />
      <TicketCard :ticket="this.TicketCard" :infoSelected="InfoSelected" />
    </div>
  </div>
</template>

<script>
import DateCard from "@/components/DateCard";
import FilmInfoCard from "@/components/FilmInfoCard";
import TicketBook from "@/components/TicketBook";
import TicketCard from "@/components/TicketCard";

export default {
  components: {
    DateCard,
    FilmInfoCard,
    TicketBook,
    TicketCard,
  },
  data() {
    return {
      InfoSelected: {},
      timeSelected: "",
      dateSelected: "",
      DateDetail: [
        {
          daymonth: "13 July",
          kind: "WED",
          value: "Wednesday, 13 July, 2022",
        },
        {
          daymonth: "14 July",
          kind: "THU",
          value: "Thursday, 14 July, 2022",
        },
        {
          daymonth: "15 July",
          kind: "FRI",
          value: "Friday, 15 July, 2022",
        },
        {
          daymonth: "16 July",
          kind: "SAT",
          value: "Saturday, 16 July, 2022",
        },
        {
          daymonth: "17 July",
          kind: "SUN",
          value: "Sunday, 17 July, 2022",
        },
        {
          daymonth: "18 July",
          kind: "MON",
          value: "Monday, 18 July, 2022",
        },
        {
          daymonth: "19 July",
          kind: "TUE",
          value: "Tuesday, 19 July, 2022",
        },
        {
          daymonth: "20 July",
          kind: "WED",
          value: "Wednesday, 20 July, 2022",
        },
      ],
      FilmInfo: {
        title: "SPIDERMAN : NO WAY HOME",
        genre: "Action",
        duration: "2 hours 28 minutes",
        director: "Jon Watts",
        ageRating: "SU",
      },
      Img: "https://ecdn.game4v.com/g4v-content/uploads/2021/11/26091930/NWH-poster-1-game4v-1637893169-6.jpg",
      Ticket: [
        {
          type: "REGULAR 2D",
          price: 50000,
          time: [
            "11:00",
            "13:45",
            "14:40",
            "15:40",
            "17:15",
            "18:15",
            "20:00",
            "21:00",
          ],
        },
        {
          type: "GOLD CLASS 2D",
          price: 100000,
          time: ["12:40", "15:40", "17:10", "18:35"],
        },
        {
          type: "VELVET 2D",
          price: 100000,
          time: ["12:15", "13:45", "14:50"],
        },
      ],
      TicketCard: {
        theater_name: "GRAND INDONESIA CGV",
        date: "Thursday, 16 December 2021",
        type: "REGULAR",
        time: "14:40",
      },
    };
  },
  methods: {
    setTicket(value) {
      this.InfoSelected = {
        ...this.InfoSelected,
        time: value.time,
        type: value.type,
      };
    },
    activeCard: function (value) {
      console.log(value);
    },
  },
};
</script>
