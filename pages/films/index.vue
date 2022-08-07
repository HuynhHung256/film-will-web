//a list of films
<template>
  <div class="px-32">
    <h1 class="pl-8 mt-14 mb-5 text-4xl font-bold">Now Playing Films</h1>
    <div v-if="params.search" class="pl-8 font-medium text-slate-600 text-2xl mb-10">
      Result for "{{ params.search }}"
    </div>
    <FilmList />
  </div>
</template>

<script>
import FilmList from "@/components/FilmList"
export default {
  components: {
    FilmList,
  },
  data() {
    return {
      params: {
        page: 1,
        limit: 10,
        search: this.$route.query.search || "",
      },
    }
  },
}
</script>
