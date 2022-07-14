<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <h2 class="sr-only">Film</h2>

      <!-- <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> -->
        <a href="#" class="group">

          <div class="w-full aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 shadow-lg">
            <img :src=img class="w-full h-full object-center object-cover group-hover:opacity-75" />
          </div>
        </a>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    film: {
      type: Object,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },
  //
}
</script>