<template>
  <div id="hompage" class="">
    <div id="banner" class="w-screen">
      <carousel
        :per-page="1"
        :mouse-drag="false"
        :autoplay="true"
        :loop="true"
        :autoplayTimeout="5000"
        :navigationEnabled="false"
        :paginationEnabled="true"
        :navigationClickTargetSize="40"
        paginationPosition="bottom-overlay"
        paginationActiveColor="#999999"
        paginationColor="#ffffff"
        :paginationSize="12"
      >
        <slide v-for="b in banner" :key="b">
          <img
            :src="b"
            class="
              w-full
              aspect-[6/1]
              object-center object-cover
            "
          />
        </slide>
      </carousel>
    </div>
    <div class="xl:px-32 lg:px-16 md:px-6">
      <div id="film-slider" class="mt-20 mx-32">
        <carousel
          :per-page="4"
          :mouse-drag="false"
          :autoplay="true"
          :loop="true"
          :autoplayTimeout="5000"
          :navigationEnabled="true"
          :paginationEnabled="false"
          navigationNextLabel='
          <button class="rounded-full bg-gray-50 p-2 font-bold text-gray-800 shadow-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          </button>
        '
          navigationPrevLabel='
          <button class="rounded-full bg-gray-50 p-2 font-bold text-gray-800 shadow-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        '
        >
          <slide v-for="(film, id) in films" :key="id">
            <FilmCard :film="film" />
          </slide>
        </carousel>
        <!-- View All -->
        <!-- <div class="flex justify-center">
          <button class="bg-gray-50 py-2 px-3 text-lg font-semibold text-gray-600 shadow-md hover:bg-gray-100 rounded-full ">
            Show All
          </button>
        </div> -->
      </div>

      <div id="film-news" class="mt-20 mx-32">
        <div class="grid grid-cols-2 place-items-center">
          <div class="place-self-start">
            <h2 class="text-3xl">FilmWill news</h2>
            <p class="text-slate-700">
              The latest news about the world of cinema for you!
            </p>
          </div>
          <div class="place-self-end">
            <NuxtLink
              to="/news"
              class="
                text-xl text-blue-400
                hover:underline hover:underline-offset-4
              "
            >
              View All
            </NuxtLink>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 mt-10">
          <div v-for="(news, id) in this.news" :key="id">
            <NewsCard :news="news" />
          </div>
        </div>
      </div>
      <div id="film-news" class="mt-20 mx-32">
        <div class="grid grid-cols-2 place-items-center">
          <div class="place-self-start">
            <h2 class="text-3xl">In Future</h2>
            <p class="text-slate-700">
              Wait for his presence in your favorite cinema!
            </p>
          </div>
          <div class="place-self-end">
            <NuxtLink
              to="/films"
              class="
                text-xl text-blue-400
                hover:underline hover:underline-offset-4
              "
            >
              View All
            </NuxtLink>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-4 mt-10">
          <div v-for="film_id in 4" :key="film_id">
            <FilmCard :film="films[film_id]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import FilmCard from "@/components/FilmCard"
import NewsCard from "@/components/NewsCard"

export default {
  components: {
    FilmCard,
    NewsCard,
  },
  data() {
    return {
      films: [
        {
          id: 1,
          name: "The Shawshank Redemption",
          img: "https://ae01.alicdn.com/kf/HTB1mWWMXuGSBuNjSspbq6AiipXaH/The-Shawshank-Redemption-Retro-Vintage-Classic-Movie-Poster-Canvas-Painting-Wall-Sticker-Home-Art-Home-Decoration.jpg",
        },
        {
          id: 2,
          name: "The Godfather",
          img: "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
        },
        {
          id: 3,
          name: "The Godfather: Part II",
          img: "https://images-na.ssl-images-amazon.com/images/I/71Tn5ZErDiL._RI_.jpg",
        },
        {
          id: 4,
          name: "The Dark Knight",
          img: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        },
        {
          id: 5,
          name: "Em va Trinh",
          img: "https://image.thanhnien.vn/w1024/Uploaded/2022/tnabtw/2022_06_17/284550373-370852648356152-3746905122681766979-n-3012.jpg",
        },
      ],
      news: [
        {
          title: "The Shawshank Redemption",
          release: "11/05/2022",
          type: "Spotlight",
          img: "https://ae01.alicdn.com/kf/HTB1mWWMXuGSBuNjSspbq6AiipXaH/The-Shawshank-Redemption-Retro-Vintage-Classic-Movie-Poster-Canvas-Painting-Wall-Sticker-Home-Art-Home-Decoration.jpg",
        },
        {
          title: "The Godfather",
          release: "11/05/2022",
          type: "Spotlight",
          img: "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
        },
        {
          title: "The Dark Knight",
          release: "25/05/2022",
          type: "News",
          img: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        },
      ],
      banner: [
        "https://collider.com/wp-content/uploads/inception_movie_poster_banner_04.jpg",
        "https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg",
        "https://miro.medium.com/max/1400/1*i0NbyT3x5k8nVMb8ShzgLw.png",
      ],
    }
  },
}
</script> 


 
