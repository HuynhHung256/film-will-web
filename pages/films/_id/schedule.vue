<template>
  <div class="flex mx-36 my-10">
    <div>
      <div class="border-b-2">
        <h1 class="text-4xl font-bold">TIMETABLE</h1>
        <p>Choose the cinema schedule that you will watch</p>
        <div class="flex my-5 flex-wrap">
          <DateCard v-for="item in DateDetail" :date="item" :key="item.daymonth"
            v-bind:class="dateSelected === item && 'card-active'" :onClick="activeCard" />
        </div>
      </div>
      <div>
        <!-- <div class="flex items-center mt-2">
          <img src="../assets/images/location.png" />
          <h1 class="mx-5">HO CHI MINH</h1>
          <img src="../assets/images/vector-down.png" class="h-[10px]" />
        </div> -->
        <div class="w-[60%]">
          <h1 class="flex text-[24px] font-semibold items-center">
            <img src="@/assets/images/Star.png" class="w-[32px] h-[32px] mr-3" />
            HUNG VUONG PLAZA CGV
          </h1>
          <p>Floor 7, 126 Hung Vuong Street, 5 District, HCM City</p>
          <TicketBook v-for="item in Ticket" :ticket="item" :key="item.type" @set-ticket="setTicket" />
        </div>
      </div>
      {{ this.timeSelected }}
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
    TicketCard
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
          value: "Wednesday, 13 July, 2022"
        },
        {
          daymonth: "14 July",
          kind: "THU",
          value: "Thursday, 14 July, 2022"
        },
        {
          daymonth: "15 July",
          kind: "FRI",
          value: "Friday, 15 July, 2022"
        },
        {
          daymonth: "16 July",
          kind: "SAT",
          value: "Saturday, 16 July, 2022"
        },
        {
          daymonth: "17 July",
          kind: "SUN",
          value: "Sunday, 17 July, 2022"
        },
        {
          daymonth: "18 July",
          kind: "MON",
          value: "Monday, 18 July, 2022"
        },
        {
          daymonth: "19 July",
          kind: "TUE",
          value: "Tuesday, 19 July, 2022"
        },
        {
          daymonth: "20 July",
          kind: "WED",
          value: "Wednesday, 20 July, 2022"
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
        time: "14:40"
      }
    };
  },
  methods: {
    setTicket(value) {
      this.InfoSelected = { ...this.InfoSelected, time: value.time, type: value.type };
    },
    activeCard: function(value) {
      console.log(value);
    },
  }
};
</script>
