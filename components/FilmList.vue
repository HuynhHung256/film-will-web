<template>
      <div>
      <div id="film-list">
        <div class="grid grid-cols-5 gap-4">
          <div v-for="film in films" :key="film.id">
            <FilmCard :film="film" />
          </div>
        </div>
      </div>
      <div id="pagination">
        <div
          class="bg-white px-4 py-3 flex items-center justify-between sm:px-6"
        >
          <div class="flex-1 flex justify-between sm:hidden">
            <a
              href="#"
              class="
                relative
                inline-flex
                items-center
                px-4
                py-2
                border border-gray-300
                text-sm
                font-medium
                rounded-md
                text-gray-700
                bg-white
                hover:bg-gray-50
              "
            >
              Previous
            </a>
            <a
              href="#"
              class="
                ml-3
                relative
                inline-flex
                items-center
                px-4
                py-2
                border border-gray-300
                text-sm
                font-medium
                rounded-md
                text-gray-700
                bg-white
                hover:bg-gray-50
              "
            >
              Next
            </a>
          </div>
          <div
            class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
          >
            <div>
              <p class="text-sm text-gray-700">
                Showing
                {{ " " }}
                <span class="font-medium">1</span>
                {{ " " }}
                to
                {{ " " }}
                <span class="font-medium">10</span>
                {{ " " }}
                of
                {{ " " }}
                <span class="font-medium">97</span>
                {{ " " }}
                results
              </p>
            </div>
            <div>
              <nav
                class="
                  relative
                  z-0
                  inline-flex
                  rounded-md
                  shadow-sm
                  -space-x-px
                "
                aria-label="Pagination"
              >
                <a
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-2
                    py-2
                    rounded-l-md
                    border border-gray-300
                    bg-white
                    text-sm
                    font-medium
                    text-gray-500
                    hover:bg-gray-50
                  "
                >
                  <span class="sr-only">Previous</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                <a
                  href="#"
                  aria-current="page"
                  class="
                    z-10
                    bg-indigo-50
                    border-indigo-500
                    text-indigo-600
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border
                    text-sm
                    font-medium
                  "
                >
                  1
                </a>
                <a
                  href="#"
                  class="
                    bg-white
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border
                    text-sm
                    font-medium
                  "
                >
                  2
                </a>
                <a
                  href="#"
                  class="
                    bg-white
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    hidden
                    md:inline-flex
                    relative
                    items-center
                    px-4
                    py-2
                    border
                    text-sm
                    font-medium
                  "
                >
                  3
                </a>
                <span
                  class="
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    bg-white
                    text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  ...
                </span>
                <a
                  href="#"
                  class="
                    bg-white
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    hidden
                    md:inline-flex
                    relative
                    items-center
                    px-4
                    py-2
                    border
                    text-sm
                    font-medium
                  "
                >
                  8
                </a>
                <a
                  href="#"
                  class="
                    bg-white
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border
                    text-sm
                    font-medium
                  "
                >
                  9
                </a>
                <a
                  href="#"
                  class="
                    bg-white
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border
                    text-sm
                    font-medium
                  "
                >
                  10
                </a>
                <a
                  href="#"
                  class="
                    relative
                    inline-flex
                    items-center
                    px-2
                    py-2
                    rounded-r-md
                    border border-gray-300
                    bg-white
                    text-sm
                    font-medium
                    text-gray-500
                    hover:bg-gray-50
                  "
                >
                  <span class="sr-only">Next</span>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import FilmCard from "@/components/FilmCard"
export default {
  props: {
    type: {
      type: String,
      default: "playing",
    },
  },
  components: {
    FilmCard,
  },
  data() {
    return {
      films: []
    }
  },
  fetch(){
    // if (this.type === 'playing')
      this.films = [
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
      ]
  }
}

</script>