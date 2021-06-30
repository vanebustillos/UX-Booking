<template>
  <v-app>
    <v-main>
      <nav-bar />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar, Footer },
  name: "App",
};
</script>
