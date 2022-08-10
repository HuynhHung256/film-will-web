<template>
  <div class="flex mx-36 my-10">
      <div>
        <div class="border-b-2 w-[90%]">
          <h1 class="text-4xl font-bold">TIMETABLE</h1>
          <p>Choose the cinema schedule that you will watch</p>
          <div class="flex my-5 flex-wrap">
            <!-- <DateCard
            v-for="item in DateDetail"
            :date="item"
            :key="item.daymonth"
            v-bind:class="dateSelected === item && 'card-active'"
          /> -->
            <tr v-for="item in DateDetail" :key="item.daymonth" >
              <button
                class="border rounded-lg p-4 mx-3 my-3 text-center 
                cursor-pointer w-[85px] shadow hover:-translate-y-1 hover:scale-125 duration-500 "
                :class="dateSelected.value === item.value && 'card-active'"
                @click="ticketSet(item)"
              >
                <p class="text-[16px]">{{ item.daymonth }}</p>
                <p class="text-[20px] font-bold">{{ item.kind }}</p>
                <span class="hidden">{{ item.value }}</span>
              </button>
            </tr>
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
                class="flex border-2 border-slate-700 rounded-md px-4 py-1 w-[30%] space-x-12"
              >
                <input
                  class="text-base w-5/6 focus:outline-none"
                  type="text"
                  placeholder="Search Post"
                />
                <img
                  src="@/page html/html nguyen/component/search.png"
                  alt="#"
                />
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
            <!-- <TicketBook
              v-for="item in Class"
              :ticket="item"
              :key="item.type"
              @set-ticket="setTicket"
            /> -->
             <div class="mt-5">
                <tr 
                  v-for="item in Class" 
                  :key="item.type">
                  <div class="flex items-center">
                    <h1 class="text-[20px] font-medium text-primary">
                      {{ item.type }}
                    </h1>
                    <p class="text-[18px] text-red-500 ml-3">
                      Price: {{ item.price }} VND
                    </p>
                  </div>
                  <div class="flex flex-wrap">
                    <span
                      v-for="item1 in item.time"
                      :key="item1"
                      class="py-3 mr-3 mb-3 rounded border border-primary font-medium w-[100px] 
                      text-center cursor-pointer shadow"
                      :class="TypeSelected.time === item1 && 'card-active'"
                      @click="setTicket"
                      >{{ item1 }}
                    </span>
                  </div>
                </tr>
              </div>
          </div>
          
        </div>
        <div class="mt-5">
        <nuxt-link to="/films/14/choose-seat">
          <!-- <button class="border rounded-lg p-4 mx-3 my-3 text-center 
          cursor-pointer w-[85px] shadow hover:-translate-y-1 hover:scale-125 duration-500 ">
            <p class="text-[16px]">BACK</p>
          </button> -->
          <button type="button" class="bg-sky-900 rounded-lg py-4 px-16 ">
          <h1 class="text-white font-semibold uppercase">choose seat</h1>
        </button>
        </nuxt-link>
      </div>
      </div>
      
    <div class="w-[50%]">
      <FilmInfoCard :filmInfo="this.FilmInfo" :img="this.Img" class="mb-5" />
      <!-- <TicketCard :ticket="this.TicketCard" :infoSelected="TypeSelected" /> -->
      <div class="px-5 py-5 border-[3px] rounded-lg">
          <h1 class="text-[24px] font-semibold text-primary mb-3">
            {{ this.theater_name }}
          </h1>
          <p class="text-[18px] text-primary mb-2">
            {{ this.dateSelected.value }}
          </p>
          <div class="flex text-[20px] font-medium justify-between mb-3">
          <h1>Type:</h1>
            <h1>{{ this.TypeSelected.type }}</h1>
            <p>{{ this.TypeSelected.time }}</p>
          </div>
          <div class="flex text-[20px] font-medium justify-between mb-3">
            <h1>Seat:</h1>
            <!-- <p v-for="seat in this.Ticket.seat" :key="seat" class="">{{ seat}}</p> -->
            <p>{{this.Ticket.seat}}</p>
          </div>
          <p>*Seat selection can be made after this</p>
          <nuxt-link to="/films/14/payment">
            <button
              class="text-white btn-color rounded-lg text-[20px] w-full py-4 font-bold mt-2"
              :disabled="!TypeSelected.time || !dateSelected.value || Ticket.seat.length === 0 "
            >
              BUY NOW
            </button>
          </nuxt-link>
        </div>
    </div>

  </div>
</template>

<script>
import FilmInfoCard from "@/components/FilmInfoCard"
import TicketBook from "@/components/TicketBook"
import TicketCard from "@/components/TicketCard"

export default {
  components: {
    FilmInfoCard,
    TicketBook,
    TicketCard,
  },

  data() {
    
    return {
      time:'',
      TypeSelected: {},
      dateSelected: {},
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
        {
          daymonth: "21 July",
          kind: "THU",
          value: "Thursday, 21 July, 2022",
        },
        {
          daymonth: "22 July",
          kind: "FRI",
          value: "Friday, 22 July, 2022",
        },
        {
          daymonth: "23 July",
          kind: "SAT",
          value: "Saturday, 23 July, 2022",
        },
        {
          daymonth: "24 July",
          kind: "SUN",
          value: "Sunday, 24 July, 2022",
        },
        {
          daymonth: "25 July",
          kind: "MON",
          value: "Monday, 25 July, 2022",
        },
        {
          daymonth: "26 July",
          kind: "TUE",
          value: "Tuesday, 26 July, 2022",
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
      Class: [
        {
          type: "REGULAR 2D",
          price: 50000,
          time: [
            "11:00",
            "14:40",
            "15:45",
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
      theater_name: "HUNG VUONG PLAZA CGV",
      Ticket:{
        ...this.$store.getters["ticket/ticket"]
      },
    }
  },
  fetch() {
    this.loadStore()
    console.log(this.Ticket.seat.length === 0)
  },
  methods: {
    loadStore(){
      this.Ticket = this.$store.getters["ticket/ticket"]
      console.log(this.Ticket)
      this.dateSelected = {
        ...this.Ticket
      }
      this.TypeSelected = {...this.Ticket}
      console.log("dateSelected: ", this.dateSelected)
      console.log("TypeSelected: ", this.TypeSelected)
    },
    setTicket(value) {
      // const type = value.target.parentElement.previousElementSibling.firstChild.innerText
      // const time = value.target.innerText
      const price = value.target.parentElement.previousElementSibling.lastChild

      console.log("price", price)
      this.time = value.target.innerText
      this.TypeSelected = {
        type: value.target.parentElement.previousElementSibling.firstChild.innerText,
        time: value.target.innerText,
        price: value.target.parentElement.previousElementSibling.lastChild.innerText,
      }
      console.log("Type: ",this.TypeSelected)
      const data = {
        movie: this.FilmInfo.title,
        theater_name: this.theater_name,
        ...this.dateSelected,
        ...this.TypeSelected,
        
      }
      this.$store.dispatch("ticket/setTicket", data)
      const val = {
        ...this.$store.getters["ticket/ticket"]
      }
      console.log("val type: ", val)
    },
    activeCard(value) {
      console.log(value)
      
    },
    ticketSet(item){
      // console.log("date: ",this.dateSelected)
      this.dateSelected = item
      console.log("date: ",this.dateSelected)
      const data = {
        movie: this.FilmInfo.title,
        theater_name: this.theater_name,
        ...this.dateSelected,
        ...this.TypeSelected,
        
      }
      this.$store.dispatch("ticket/setTicket", data)
      const val = {
        ...this.$store.getters["ticket/ticket"]
      }
      console.log("val: ", val)
    },


  },
}
</script>
