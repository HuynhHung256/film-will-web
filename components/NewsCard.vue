<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 class="sr-only">News</h2>
        <a href="#" class="group">
          <div class="w-full aspect-[2/1] bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 shadow shadow-current">
            <img :src=news.img class="w-full h-full object-center object-cover group-hover:opacity-75" />
          </div>
          <div class="mt-3 border-2 border-slate-500 text-slate-500 text-sm rounded-md w-fit px-2 py-1">
            {{news.type}}
          </div>
          <p class="font-sans text-xl text-gray-700 mt-3 font-bold">
            {{ news.title }}
          </p>
          <p class="mt-3 text-xs font-medium text-gray-900">
            {{ news.release }} | FILM WILL
          </p>
        </a>
      </div>
    </div>

</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
  //
};
</script>