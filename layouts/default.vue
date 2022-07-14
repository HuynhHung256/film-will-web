<template>
  <div id="app">
    <div id="nav-bar">
      <NavBar />
    </div>
    <div id="main" class="container mx-auto">
      <Nuxt />
    </div>
    <div id="footer">
      <Footer/>
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
