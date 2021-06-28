<template>
  <v-container>
    <nav-bar />
    <home-search-bar />
    <hospedaje-seacrh-bar />
  </v-container>
</template>

<script>
import HomeSearchBar from "../components/HomeSearchBar.vue";
import HospedajeSeacrhBar from "../components/HospedajeSearchBar.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Home",

  components: {
    NavBar,
    HomeSearchBar,
    HospedajeSeacrhBar,
  },
};
</script>
