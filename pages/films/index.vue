//a list of films
<template>
  <div class="px-32">
    <h1 class="pl-8 mt-14 mb-5 text-5xl font-bold">Now Playing Films</h1>
    <FilmList/>
  </div>
</template>

<script>
import FilmList from "@/components/FilmList";
export default {
  components: {
    FilmList,
  },
}
</script>
