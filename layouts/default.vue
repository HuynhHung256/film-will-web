<template>
  <div id="app" class="container mx-auto">
    <div id="nav-bar">
      <NavBar />
    </div>
    <div id="main">
      <Nuxt />
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/Layouts/NavBar.vue";
import Footer from "@/components/Layouts/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  },
};
</script>
