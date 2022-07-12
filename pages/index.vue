<template>
<div>  
  <!-- <swiper :modules="modules" :pagination="{ clickable: true }">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
  </swiper> -->
    <!-- <swiper
      :slides-per-view="3"
      :space-between="30"
      :loop="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 5"
        :key="n"
        class="test"
        :class="{test_2: true}"
      >
        <div>{{ 29+n }}</div>
        <img
          :src="getImageUrl(29+n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        >
      </swiper-slide>
    </swiper> -->


    <swiper
    :slides-per-view="3"
    :space-between="50"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</div>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  // import 'swiper/swiper.scss';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
    },
  }
  </script>
