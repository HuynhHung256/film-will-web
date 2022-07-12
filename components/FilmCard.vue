<template>
  <div class="film-card">
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