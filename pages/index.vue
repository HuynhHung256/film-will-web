<template>
  <div id="content" class="mt-10">
    <div id="film-slider" class="2xl:px-60 xl:px-52 lg:px-44">
      <carousel
        :per-page="2"
        :mouse-drag="false"
        :autoplay="true"
        :loop="true"
        :autoplayTimeout="5000"
        :navigationEnabled="true"
        :paginationEnabled="false"
        navigationNextLabel='
          <button class="rounded-full bg-gray-50 p-2 font-bold text-gray-800 shadow-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          </button>
        '
        navigationPrevLabel='
          <button class="rounded-full bg-gray-50 p-2 font-bold text-gray-800 shadow-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        '
      >
        <slide>
          <FilmCard :film="this.FilmDetail" :img="this.Img" />
        </slide>
        <slide>
          <FilmCard :film="this.FilmDetail" :img="this.Img" />
        </slide>
        <slide>
          <FilmCard :film="this.FilmDetail" :img="this.Img" />
        </slide>
      </carousel>
    </div>
    <!-- <div id="news-slider">
      <carousel>
        :per-page="1"
        :navigate-to="someLocalProperty"
        :mouse-drag="false"
        :autoplay="true"
        :loop="true"
        :autoplayTimeout="5000"
        navigationEnabled="true"
        navigationNextLabel='
          <button class="rounded-full bg-gray-50 p-2 font-bold text-gray-800 shadow-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          </button>
        '
        navigationPrevLabel='
          <button class="rounded-full bg-gray-50 p-2 font-bold text-gray-800 shadow-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        '
      >
        <slide>
          <FilmCard :film="this.FilmDetail" :img="this.Img" />
        </slide>
        <slide>
          <FilmCard :film="this.FilmDetail" :img="this.Img" />
        </slide>
      </carousel>
    </div> -->
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard"

export default {
  components: {
    FilmCard,
  },
  data() {
    return {
      FilmDetail: {
        title: "Thor: Love and Thunder",
        rating: "4.9",
        year: "2022",
        duration: "",
        genre: "Action, Adventure, Fantasy",
        description: "",
        comments: "999",
      },
      // Img: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/5/5/photo-1-1651728174969720784744.jpg',
      
      Img: 'https://movies.demo.phanxuanchanh.com/FileUpload/Images/2022/3/spiderman-no-way-home.jpg',
    }
  }
}
</script> 


 
