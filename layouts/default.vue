<template>
  <div id="app" class="container mx-auto px-10">
    <div id="nav-bar">
      <NavBar />
    </div>
    <div id="main">
      <Nuxt />

    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Layouts/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
