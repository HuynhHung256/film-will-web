<template>
  <div>
    <img :src="img" class="w-[600px] h-[600px]" />
    <h1 class="text-[24px] font-bold text-center">{{ filmInfo.title }}</h1>
    <div class="flex px-[70px]">
      <p class="flex-1">Genre:</p>
      <p>{{ filmInfo.genre }}</p>
    </div>
    <div class="flex px-[70px]">
      <p class="flex-1">Duration:</p>
      <p>{{ filmInfo.duration }}</p>
    </div>
    <div class="flex px-[70px]">
      <p class="flex-1">Director:</p>
      <p>{{ filmInfo.director }}</p>
    </div>
    <div class="flex px-[70px]">
      <p class="flex-1">Age Rating:</p>
      <p>{{ filmInfo.ageRating }}</p>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    filmInfo: {
      type: Object,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  //
}
</script>
