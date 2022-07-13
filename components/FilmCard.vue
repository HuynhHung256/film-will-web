<template>
  <!-- <div class="film-card">
    <div class="film-card__image">
      <img :src="img" alt="">
    </div>
    <h3 class="film-card__title">{{ film.title }}</h3>
    <p class="film-card__rating">{{ film.rating }}</p>
    <p class="film-card__info">
      <span class="film-card__year">{{ film.year }}</span>
      <span class="film-card__duration">{{ film.duration }}</span>
      <span class="film-card__genre">{{ film.genre }}</span>
    </p>
    <p class="film-card__description">{{ film.description }}</p>
    <a class="film-card__comments">{{ film.comments }} comments</a>
    
  </div> -->
  <div>
    <div class="group relative w-96">
      <img class="rounded-md w-full object-cover" :src="img" />
      <div class="rounded-md absolute top-0 left-0 w-full h-0 flex flex-col justify-start 
      items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-70 duration-500">
        <h1 class="mt-3 text-2xl font-sans text-orange-500">C13</h1>
        <a class="mt-5 px-8 py-3 rounded-md bg-red-600 font-sans duration-300">CGV</a>
        <a class="mt-5 px-8 py-3 rounded-md bg-amber-300 font-sans duration-300">Galaxy</a>
        <a class="mt-5 px-8 py-3 rounded-md bg-green-600 font-sans duration-300">BHD</a>
      </div>
    </div>
    <h3 class="text-xl font-sans text-black">{{ film.title }}</h3>
  </div>
  
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