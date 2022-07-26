<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Film</h2>

      <!-- <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> -->
      <a href="#" class="">
        <div
          class="
            aspect-[3/4]
            bg-gray-200
            rounded-lg
            overflow-hidden
            xl:aspect-w-7 xl:aspect-h-8
            shadow-lg hover:shadow-current
            group
            relative
          "
        >
          <img
            :src="film.img"
            class="
              w-full
              h-full
              object-center object-cover
            "
          />

          <div
            class="
              absolute
              top-0
              left-0
              w-full
              h-0
              flex flex-col-reverse
              items-center
              bg-black
              opacity-0
              group-hover:h-full group-hover:opacity-80
              duration-500
              xl:px-5
              md:px-2
              xl:pb-14
              md:pb-8
            "
          >
            <div>
              <h3
                class="
                  mt-5
                  text-white text-center
                  xl:text-2xl
                  lg:text-lg
                  font-semibold
                "
              >
                {{ film.name }}
              </h3>
            </div>
            <div class="flex lg:flex-row sm:flex-col  flex-wrap space-x-2 xl:scale-100 md:scale-75">
              <div
                class="
                  w-fit
                  rounded-md
                  bg-red-500
                  text-white
                  px-2
                  py-1
                  font-semibold
                "
              >
                CGV
              </div>
              <div
                class="
                  w-fit
                  rounded-md
                  bg-yellow-600
                  text-white
                  px-2
                  py-1
                  font-semibold
                "
              >
                Galaxy
              </div>
              <div
                class="
                  w-fit
                  rounded-md
                  bg-green-500
                  text-white
                  px-2
                  py-1
                  font-semibold
                "
              >
                BHD
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
  //
};
</script>