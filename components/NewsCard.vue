<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 class="sr-only">News</h2>
        <a href="#" class="group">
          <div class="w-full aspect-[2/1] bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 shadow-lg">
            <img :src=img class="w-full h-full object-center object-cover group-hover:opacity-75" />
          </div>
          <div class="mt-3 border-2 border-slate-500 text-slate-500 text-sm rounded-md w-fit px-2 py-1">
            {{news.type}}
          </div>
          <p class="font-sans text-xl text-gray-700 mt-3 font-bold">
            {{ news.title }}
          </p>
          <p class="mt-3 text-xs font-medium text-gray-900">
            {{ news.release }}
          </p>
        </a>
      </div>
    </div>

  <!-- <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
    <div class="group relative">
      <div
        class="
          relative
          w-full
          h-80
          bg-white
          rounded-lg
          overflow-hidden
          group-hover:opacity-75
          sm:aspect-w-2 sm:aspect-h-1 sm:h-64
          lg:aspect-w-1 lg:aspect-h-1
        "
      >
        <img
          :src="img"
          class="w-full h-full object-center object-cover"
        />
      </div>
      <h3 class="mt-6 text-sm text-gray-500">
        <a href="#">
          <span class="absolute inset-0" />
          {{ film.title }}
        </a>
      </h3>
      <p class="text-base font-semibold text-gray-900">
        {{ callout.description }}
      </p>
    </div>
  </div> -->
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  //
};
</script>