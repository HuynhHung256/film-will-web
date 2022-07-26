<template>
  <div id="app" class="scroll-smooth">
    <header class="sticky z-50 top-0">
      <NavBar />
    </header>
    <main class="">
      <Nuxt />
    </main>
    <footer class="mt-40">
      <Footer />
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/Layouts/NavBar.vue";
import Footer from "@/components/Layouts/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
