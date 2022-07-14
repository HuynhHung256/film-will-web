<template>
  <div id="hompage" class="mt-10 px-20">
    <div id="banner" class="mt-16">
      <carousel
        :per-page="1"
        :navigate-to="someLocalProperty"
        :mouse-drag="false"
        :autoplay="true"
        :loop="true"
        :autoplayTimeout="5000"
        navigationEnabled="true"
        :paginationEnabled="false"
        :navigationClickTargetSize="40"
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
          <!-- <FilmCard :film="this.FilmDetail" :img="this.Img" /> -->
          <img
            :src="Img"
            class="
              w-full
              aspect-[5/1]
              object-center object-cover
              group-hover:opacity-75
              rounded-md
            "
          />
        </slide>
        <slide>
          <img
            :src="Img"
            class="
              w-full
              aspect-[5/1]
              object-center object-cover
              group-hover:opacity-75
              rounded-md
            "
          />

          <!-- <FilmCard :film="this.FilmDetail" :img="this.Img" /> -->
        </slide>
      </carousel>
    </div>
    <div id="film-slider" class="mt-20">
      <carousel
        :per-page="3"
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
        <slide>
          <FilmCard :film="this.FilmDetail" :img="this.Img" />
        </slide>
      </carousel>
    </div>

    <div id="film-news" class="mt-20">
      <div class="grid grid-cols-2 place-items-center">
        <div class="place-self-start">
          <h2 class="text-3xl">FilmWill news</h2>
          <p class="text-slate-500">
            The latest news about the world of cinema for you!
          </p>
        </div>
        <div class="place-self-end">
          <a
            href="#"
            class="
              text-xl text-blue-400
              hover:underline hover:underline-offset-4
            "
          >
            View All
          </a>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-10">
        <div>
          <NewsCard :news="this.FilmDetail" :img="this.Img" />
        </div>
        <div>
          <NewsCard :news="this.FilmDetail" :img="this.Img" />
        </div>
        <div>
          <NewsCard :news="this.FilmDetail" :img="this.Img" />
        </div>
      </div>
    </div>
    <div id="film-news" class="mt-20">
      <div class="grid grid-cols-2 place-items-center">
        <div class="place-self-start">
          <h2 class="text-3xl">In Future</h2>
          <p class="text-slate-500">
            Wait for his presence in your favorite cinema!
          </p>
        </div>
        <div class="place-self-end">
          <a
            href="#"
            class="
              text-xl text-blue-400
              hover:underline hover:underline-offset-4
            "
          >
            View All
          </a>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-10">
        <div>
          <FilmCard :film="this.FilmDetail" :img="this.Img" />
        </div>
        <div>
          <FilmCard :film="this.FilmDetail" :img="this.Img" />
        </div>
        <div>
          <FilmCard :film="this.FilmDetail" :img="this.Img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard";
import NewsCard from "@/components/NewsCard";

export default {
  components: {
    FilmCard,
    NewsCard,
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
        release: "14/07/2022 | FILM WILL",
        type: "News",
      },
      // Img: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/5/5/photo-1-1651728174969720784744.jpg',

      Img: "https://movies.demo.phanxuanchanh.com/FileUpload/Images/2022/3/spiderman-no-way-home.jpg",
    };
  },
};
</script> 


 
