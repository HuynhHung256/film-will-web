<template>
  <div class="flex mx-20 my-10">
    <div>
      <div class="border-b-2">
        <h1 class="text-[36px] font-bold">TIMETABLE</h1>
        <p>Choose the cinema schedule that you will watch</p>
        <div class="flex my-5">
          <DateCard
            v-for="item in DateDetail"
            :date="item"
            :key="item.daymonth"
          />
        </div>
      </div>
      <div>
        <div class="flex items-center mt-2">
          <img src="../assets/images/location.png" />
          <h1 class="mx-5">HO CHI MINH</h1>
          <img src="../assets/images/vector-down.png" class="h-[10px]"/>
        </div>
      </div>
    </div>
    <div class="ml-[100px]">
      <FilmInfoCard :filmInfo="this.FilmInfo" :img="this.Img" />
    </div>
  </div>
</template>

<script>
import DateCard from "@/components/DateCard";
import FilmInfoCard from "@/components/FilmInfoCard";
export default {
  components: {
    DateCard,
    FilmInfoCard,
  },
  data() {
    return {
      DateDetail: [
        {
          daymonth: "13 July",
          kind: "WED",
        },
        {
          daymonth: "14 July",
          kind: "THU",
        },
        {
          daymonth: "15 July",
          kind: "FRI",
        },
        {
          daymonth: "16 July",
          kind: "SAT",
        },
        {
          daymonth: "17 July",
          kind: "SUN",
        },
        {
          daymonth: "18 July",
          kind: "MON",
        },
        {
          daymonth: "19 July",
          kind: "TUE",
        },
        {
          daymonth: "20 July",
          kind: "WED",
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
    };
  },
};
</script>
