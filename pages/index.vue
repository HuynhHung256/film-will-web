<template>
  <FilmCard :film="this.FilmDetail" :img="this.Img" />
</template>

<script>
import FilmCard from '@/components/FilmCard'
export default {
  components: {
    FilmCard
  },
  data (){
    return {
      FilmDetail: {
        title: 'Thor: Love and Thunder',
        rating: '4.9',
        year: '2022',
        duration: '',
        genre: 'Action, Adventure, Fantasy',
        description: '',
        comments: '999'
      },
      Img: 'https://cdn.galaxycine.vn/media/2022/6/13/1350x900---copy_1655112805440.jpg'
    }
  }
}
</script>
