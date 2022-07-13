<template>
  <a-card>
    <img :src="img" class="w-[400px] h-[500px]" />
    <h1 class="text-[24px] font-bold text-center">{{ filmInfo.title }}</h1>
    <div class="flex">
      <p class="flex-1">Genre</p>
      <p>{{ filmInfo.genre }}</p>
    </div>
    <div class="flex">
      <p class="flex-1">Duration</p>
      <p>{{ filmInfo.duration }}</p>
    </div>
    <div class="flex">
      <p class="flex-1">Director</p>
      <p>{{ filmInfo.director }}</p>
    </div>
    <div class="flex">
      <p class="flex-1">Age Rating</p>
      <p>{{ filmInfo.ageRating }}</p>
    </div>
  </a-card>
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
};
</script>
