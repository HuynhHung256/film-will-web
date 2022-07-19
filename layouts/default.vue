<template>
  <div id="app" class="bg-slate-50">
    <div id="nav-bar" 
    class="fixed z-50 w-screen top-0"
    >
      <NavBar />
    </div>
    <div id="main" class="container mx-auto mt-32">
      <Nuxt />
    </div>
    <div id="footer" class="mt-40">
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
