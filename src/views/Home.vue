<template>
<v-container>
  <home-search-bar />
  <hospedaje-seacrh-bar />
</v-container>
</template>

<script>
import HomeSearchBar from '../components/HomeSearchBar.vue';
import HospedajeSeacrhBar from '../components/HospedajeSearchBar.vue'
export default {
  name: "Home",

  components: {
    HomeSearchBar,
    HospedajeSeacrhBar
  },
};
</script>
